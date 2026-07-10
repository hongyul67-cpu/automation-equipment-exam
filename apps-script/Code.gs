/****************************************************************
 *  자동화설비기능사 필기 학습앱 - 학생 진도/결과 저장 백엔드
 *  Google Apps Script (스프레드시트에 연결하여 사용)
 *
 *  배포:  배포 > 새 배포 > 유형: 웹 앱
 *         실행: 나(교사) / 액세스: 모든 사용자
 *         → 생성된 /exec URL 을 config.js 의 syncUrl 에 붙여넣기
 *
 *  자동 생성 시트:
 *    · 학생현황 : 학생 1명당 1줄 (정답률/오답수/마지막접속/상태)
 *    · 응시기록 : CBT 제출마다 1줄 (시각/반/이름/회차/점수)
 ****************************************************************/

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    if (d.action === 'save')   return saveState(d);
    if (d.action === 'result') return saveResult(d);
    return out({ ok: false, err: 'unknown action' });
  } catch (err) {
    return out({ ok: false, err: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  var p = e.parameter || {};
  if (p.action === 'load') return out(loadState(p.cls, p.name), p.callback);
  return out({ ok: true, msg: 'autoexam sync alive' }, p.callback);
}

/* ---------- 유틸 ---------- */
function ss() { return SpreadsheetApp.getActiveSpreadsheet(); }
function keyOf(cls, name) { return (String(cls || '').trim()) + ' / ' + (String(name || '').trim()); }

function sheetOf(name, headers) {
  var s = ss(), sh = s.getSheetByName(name);
  if (!sh) { sh = s.insertSheet(name); sh.appendRow(headers); sh.setFrozenRows(1); }
  return sh;
}
function students() {
  return sheetOf('학생현황',
    ['학생키', '반', '이름', '정답률(%)', '푼문항', '맞힘', '오답수', 'CBT응시', '마지막접속', '상태(JSON)']);
}
function findRow(sh, k) {
  var last = sh.getLastRow();
  if (last < 2) return -1;
  var col = sh.getRange(2, 1, last - 1, 1).getValues();
  for (var i = 0; i < col.length; i++) if (col[i][0] === k) return i + 2;
  return -1;
}

/* ---------- 저장(진도/오답) ---------- */
function saveState(d) {
  var sh = students(), k = keyOf(d.cls, d.name);
  var stat = d.stat || { solved: 0, correct: 0, exams: 0 };
  var wrong = d.wrong || [];
  var acc = stat.solved ? Math.round(stat.correct / stat.solved * 100) : 0;
  var stateJson = JSON.stringify({ wrong: wrong, stat: stat });
  var r = findRow(sh, k);
  if (r < 0) {
    sh.appendRow([k, d.cls || '', d.name || '', acc, stat.solved || 0, stat.correct || 0,
      wrong.length, 0, new Date(), stateJson]);
  } else {
    var cbt = sh.getRange(r, 8).getValue() || 0; // CBT응시 횟수 보존
    sh.getRange(r, 1, 1, 10).setValues([[k, d.cls || '', d.name || '', acc,
      stat.solved || 0, stat.correct || 0, wrong.length, cbt, new Date(), stateJson]]);
  }
  return out({ ok: true });
}

/* ---------- CBT 결과 기록 ---------- */
function saveResult(d) {
  var log = sheetOf('응시기록', ['시각', '반', '이름', '회차', '점수', '맞힘', '총문항']);
  log.appendRow([new Date(), d.cls || '', d.name || '', d.exam || '', d.score, d.correct, d.total]);

  var sh = students(), k = keyOf(d.cls, d.name), r = findRow(sh, k);
  if (r < 0) {
    sh.appendRow([k, d.cls || '', d.name || '', 0, 0, 0, 0, 1, new Date(), '{}']);
  } else {
    var c = sh.getRange(r, 8).getValue() || 0;
    sh.getRange(r, 8).setValue(c + 1);
    sh.getRange(r, 9).setValue(new Date());
  }
  return out({ ok: true });
}

/* ---------- 불러오기(이어하기) ---------- */
function loadState(cls, name) {
  var sh = students(), k = keyOf(cls, name), r = findRow(sh, k);
  if (r < 0) return { ok: true, found: false };
  var st = {};
  try { st = JSON.parse(sh.getRange(r, 10).getValue() || '{}'); } catch (e) {}
  return { ok: true, found: true, wrong: st.wrong || [], stat: st.stat || null };
}

/* ---------- 응답(JSON / JSONP) ---------- */
function out(obj, callback) {
  var s = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + s + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(s).setMimeType(ContentService.MimeType.JSON);
}
