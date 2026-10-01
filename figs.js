/* ══════════════════════════════════════════════════════════════
   자동화설비기능사 필기 — 해설 그림 모음 (해설01 · 2026-10-01)
   공용 그리기 도우미 links/fig.js 를 쓴다.
   index.html 이 fig.js → figs-copied.js → figs.js 순서로 부른다.

   무엇에 쓰나
     ① 기출 문제를 푼 뒤 열리는 「해설」 아래에 그 문제에 맞는 그림을 붙인다
        (과목별 학습 · 항목별 시험 · 오답노트 · CBT 결과 다시 보기 · 이론 카드의 관련 기출)
     ② cards 에 적은 이론 카드에도 같은 그림을 붙인다(이론 학습 화면 · 수업 슬라이드의 이론 설명)
        — 한 번 그리고 여러 곳에.

   한 칸의 모양
     키: { cap, ex:/문항과 맞출 정규식/, not:/빼는 정규식/, cards:['과목|카드 제목'], draw }
       ex  — 「문제 + 정답 보기 + 해설」 글자에서 찾는다(오답 보기 글자는 보지 않는다).
       순서 = 우선순위. 해설 하나에 그림은 최대 2장, 위에 있는 것부터.
     만드는 법 세 가지
       cp('도구 폴더/키', ex)  — 다른 도구의 그림을 복사해 쓴다(figs-copied.js · node tools/copy-figs.js 로 다시 굽는다)
       th('과목|카드 제목', ex) — 이 도구 이론 카드에 이미 있던 그림(data/theory-figs*.js)에 흰 종이만 씌운다
       draw: function(){…}     — 여기서 새로 그린 그림

   정답 유출 — 해설 그림은 채점이 끝나 해설이 열린 뒤에만 그려진다. 문제 화면에는 넣지 않는다.
   보기 번호(①~④)는 그림에 쓰지 않는다 — CBT 보기 섞기 때 번호가 바뀌기 때문.
   새 그림의 이름표 · 수치는 해설 글과 이론 카드(data/theory-0*.js)에 있는 것만 썼다.
   ══════════════════════════════════════════════════════════════ */
/* 옛 이론 그림(흰 바탕이 없는 SVG)에 흰 종이를 깔아 fig.js 그림과 같은 모양으로 — 수업 슬라이드의 어두운 칸에서도 보이게 */
window.paperSvg = function (svg) {
  var vb = String(svg).match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/) || [];
  var w = +vb[1] || 520, h = +vb[2] || 200;
  return String(svg).replace(/^\s*<svg\b/, '<svg class="fig-svg" width="100%" role="img"')
    .replace(/(<svg\b[^>]*>)/, '$1<rect x="1" y="1" width="' + (w - 2) + '" height="' + (h - 2) +
      '" rx="12" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/>');
};
var FIGS = (function () {
  var F = window.FIG;
  if (!F) return {};
  var C = F.C;
  var t = F.t, box = F.box, line = F.line, arrow = F.arrow, callout = F.callout, circle = F.circle;

  /* ── 만드는 법 ── */
  function cp(src, ex, o) {
    o = o || {};
    var c = (window.FIGS_COPIED || {})[src];
    return { copied: src, ex: ex, not: o.not, cards: o.cards, cap: o.cap || (c && c.cap) || '',
      draw: c ? function () { return c.svg; } : null };
  }
  function theorySvg(key) {
    var L = (window.THEORY_FIGS || {})[key], f = L && L[0];
    return f ? window.paperSvg(f.svg) : '';
  }
  function th(key, ex, o) {
    o = o || {};
    var L = (window.THEORY_FIGS || {})[key];
    return { theory: key, ex: ex, not: o.not, cap: o.cap || (L && L[0] && L[0].cap) || '',
      draw: L ? function () { return theorySvg(key); } : null };
  }
  function dot(x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 3) + '" fill="' + (c || C.ink) + '"/>'; }

  return {

  /* ════════ 기계요소 · 조립 ════════ */
  toothparts: cp('기계요소설계 마스터/toothparts', /이끝 ?높이|이뿌리 ?높이|전체 ?이 ?높이|이끝 ?틈새/, { cards: ['기계요소·조립|기어의 종류와 모듈 ★★'] }),
  pcd: cp('기계요소설계 마스터/pcd', /모듈|피치원 ?(의 )?지름|P\.?C\.?D|지름 ?피치/, { not: /PLC|나사|볼트|이끝 ?높이/, cards: ['기계요소·조립|기어의 종류와 모듈 ★★'] }),
  rack: cp('기계요소설계 마스터/rack', /래크\(Rack\)|피치원 지름이 무한대|반경이 무한대/),
  gearpair: cp('기계요소설계 마스터/gearpair', /회전 방향이 같고/),
  gearaxes: cp('기계요소설계 마스터/gearaxes', /헬리컬 기어에 관한|하이포이드|웜 ?기어\b.*(축|감속)/, { not: /제도|도시|창성|호브|호빙/ }),
  friction: cp('기계요소설계 마스터/friction', /마찰차/),
  cam: cp('기계요소설계 마스터/cam', /캠 기구|종동절/),
  thread: cp('기계요소설계 마스터/thread', /나사산과 나사산 사이|나사의 그림에서/),
  pitch: cp('기계요소설계 마스터/pitch', /리드|\d ?줄 ?나사|나사를 \d회전|너트를 \d회전/, { not: /리드 ?스위치|리드·|블리드|스핀들 ?리드|하이브리드|센서|스텝/, cards: ['기계요소·조립|나사의 종류와 리드 계산 ★★'] }),
  profiles: cp('기계요소설계 마스터/profiles', /체결용 나사|사각 ?나사|삼각 ?나사|사다리꼴 ?나사|애크미|유니파이 ?나사의|나사산의? 각/, { cards: ['기계요소·조립|나사의 종류와 리드 계산 ★★'] }),
  threadCode: { ex: /M ?\d+ ?×|Tr ?\d+ ?×|\bTW\b|\bTM\b|왼 ?\d?줄|L ?2N|\bLH\b|미터 가는 나사|나사의 표시|나사 표시|나사 표기|나사 기호|나사를 표시하는 기호|관용|\bRc\b|\bRp\b|G ?1\/2|PF ?1|전구 ?나사|미니[추어]+ ?나사/,
    not: /기초 ?구멍/, cards: ['기계제도|나사의 호칭과 도시법 ★★★'], cap: '나사 표시는 앞에서부터 끊어 읽는다 — 감긴 방향 · 줄 수 · 종류 · 호칭지름 · 피치(리드) · 등급',
    draw: function () {
      var s = '';
      function row(y, toks) {
        var x = 18, out = '';
        toks.forEach(function (k) {
          var w = Math.max(44, k[0].length * 13 + 18, k[1].length * 13 + 6);
          out += box(x, y, w, 40, { fill: k[2] + 'L' in C ? C[k[2] + 'L'] : C.grayL, c: C[k[2]] || C.ink, r: 7 }) +
            t(x + w / 2, y + 21, k[0], { a: 'm', size: 20, b: 1, c: C[k[2]] || C.ink, halo: false });
          out += line(x + w / 2, y + 42, x + w / 2, y + 52, { c: C.sub, w: 1 }) +
            t(x + w / 2, y + 64, k[1], { a: 'm', size: 13, c: C.ink });
          x += w + 8;
        });
        return out;
      }
      s += t(18, 22, '예 1', { size: 14, b: 1, c: C.sub });
      s += row(32, [['왼', '감긴 방향', 'orange'], ['2줄', '줄 수', 'orange'], ['M', '미터 나사', 'blue'], ['20', '호칭지름', 'blue'],
        ['×1.5', '피치', 'green'], ['-6H', '등급', 'purple']]);
      s += t(18, 128, '예 2', { size: 14, b: 1, c: C.sub });
      s += row(138, [['Tr', '미터 사다리꼴', 'blue'], ['40', '호칭지름', 'blue'], ['×14', '리드', 'red'], ['(P7)', '피치', 'green'], ['LH', '왼나사', 'orange']]);
      s += line(18, 230, 462, 230, { c: C.edge, w: 1.2 });
      s += t(18, 248, '등급의 글자: 대문자 H = 암나사 · 소문자 h · g = 수나사', { size: 13.5 });
      s += t(18, 270, '감긴 방향을 안 쓰면 오른나사 · 리드 = 줄 수 × 피치', { size: 13.5 });
      s += t(18, 292, '관용 나사: R 테이퍼 수 · Rc 테이퍼 암 · Rp 평행 암 · G 평행', { size: 13.5, c: C.sub });
      return F.svg(480, 308, s);
    } },
  tap: cp('기계공작법 마스터/tap', /기초 ?구멍|탭 ?구멍/),
  lock: cp('기계요소설계 마스터/lock', /풀림 ?방지/, { cards: ['기계요소·조립|볼트·너트와 풀림 방지법 ★★'] }),
  boltTypes: { ex: /탭 ?볼트|스터드 ?볼트|관통 ?볼트|스테이 ?볼트|리머 ?볼트|머리 없는 볼트/, cards: ['기계요소·조립|볼트·너트와 풀림 방지법 ★★'], cap: '관통 볼트 · 탭 볼트 · 스터드 볼트 — 구멍을 뚫을 수 있느냐, 머리가 있느냐로 갈린다',
    draw: function () {
      var s = '';
      function plate(x, y, w, h) { return box(x, y, w, h, { fill: C.grayL, c: C.ink, r: 0, w: 1.6 }) + F.hatch(x, y, w, h, { gap: 9, c: C.sub }); }
      function threads(x, y1, y2) { var o = ''; for (var yy = y1; yy < y2; yy += 6) o += line(x - 9, yy, x + 9, yy + 3, { c: C.ink, w: 1 }); return o; }
      function head(x, y) { return box(x - 20, y - 14, 40, 14, { fill: C.blueL, c: C.blue, r: 2 }); }
      function nut(x, y) { return box(x - 18, y, 36, 13, { fill: C.orangeL, c: C.orange, r: 2 }); }
      var cx = [80, 240, 400];
      /* 관통 볼트 */
      s += plate(20, 70, 52, 30) + plate(88, 70, 52, 30) + plate(20, 100, 52, 30) + plate(88, 100, 52, 30);
      s += box(71, 54, 18, 100, { fill: C.blueL, c: C.blue, r: 2 }) + head(80, 56) + threads(80, 132, 152) + nut(80, 132);
      /* 탭 볼트 */
      s += plate(180, 70, 52, 26) + plate(248, 70, 52, 26) + plate(180, 96, 120, 62);
      s += box(231, 54, 18, 80, { fill: C.blueL, c: C.blue, r: 2 }) + head(240, 56) + threads(240, 98, 134);
      s += line(222, 134, 258, 134, { c: C.red, w: 1.2, dash: '4 3' });
      /* 스터드 볼트 */
      s += plate(340, 80, 52, 26) + plate(408, 80, 52, 26) + plate(340, 106, 120, 52);
      s += box(391, 46, 18, 92, { fill: C.blueL, c: C.blue, r: 2 }) + threads(400, 48, 66) + threads(400, 110, 136) + nut(400, 66);
      var nm = ['관통 볼트', '탭 볼트', '스터드 볼트'];
      var d1 = ['구멍을 뚫어 지나가게', '두꺼워 관통 못 할 때', '머리 없음 · 양끝 수나사'];
      var d2 = ['너트로 조인다', '상대 쪽 암나사에 직접', '한쪽은 박아 두고 너트로'];
      for (var i = 0; i < 3; i++) {
        s += t(cx[i], 28, nm[i], { a: 'm', b: 1, size: 17, c: C.blue });
        s += t(cx[i], 184, d1[i], { a: 'm', size: 13.5 }) + t(cx[i], 204, d2[i], { a: 'm', size: 13.5, c: C.sub });
      }
      s += callout(80, 140, 120, 166, '너트', { c: C.orange, tc: C.orange, size: 13 });
      s += callout(424, 70, 450, 46, '너트', { c: C.orange, tc: C.orange, size: 13 });
      return F.svg(480, 220, s);
    } },
  pins: cp('기계요소설계 마스터/pins', /분할 ?핀|테이퍼 ?핀|평행 ?핀|스프링 ?핀/, { not: /풀림 ?방지법/, cards: ['기계요소·조립|키·핀·코터 ★★'] }),
  keys: cp('기계요소설계 마스터/keys', /성크 ?키|묻힘 ?키|안장 ?키|접선 ?키|반달 ?키|미끄럼 ?키|페더 ?키|키\(Key\)|원뿔 ?키|키를 한 쌍/, { not: /단면|슬로팅|도면|스플라인/, cards: ['기계요소·조립|키·핀·코터 ★★'] }),
  keydim: cp('기계요소설계 마스터/keydim', /키의 호칭|TG ?20|키의 크기는/),
  spline: cp('기계요소설계 마스터/spline', /스플라인|세레이션/, { not: /슬로팅|부속 ?장치/ }),
  cotter: cp('기계요소설계 마스터/cotter', /코터/, { not: /단면|절단/ }),
  rivet: cp('기계요소설계 마스터/rivet', /리벳 ?이음|맞대기 이음|겹치기 이음|코킹/),
  couplings: cp('기계요소설계 마스터/couplings', /커플링|축 이음/, { not: /회전체를 축에 고정/ }),
  roller: cp('기계수동조립 마스터/roller', /테이퍼 ?베어링|원추 ?롤러|동시에 받는 베어링/),
  load: cp('기계요소설계 마스터/load', /레이디얼|스러스트|하중이 축에 직각/, { not: /줄무늬/, cards: ['기계요소·조립|베어링·커플링·브레이크 ★★'] }),
  brgcode: cp('기계요소설계 마스터/brgcode', /안지름 ?번호|호칭 ?번호|형식번호|계열 ?기호|\b6\d{3}\b|607C2P6|N 3 03|베어링 기호/, { not: /센터 ?구멍|간략|품번/, cards: ['기계제도|키·핀·리벳·베어링 호칭 ★★'] }),
  vbelt: cp('기계요소설계 마스터/vbelt', /V ?벨트/, { not: /품번/, cards: ['기계요소·조립|벨트·체인 전동장치 ★'] }),
  timing: cp('기계요소설계 마스터/timing', /타이밍 ?벨트/),
  chain: cp('기계요소설계 마스터/chain', /체인 ?전동/),
  springCombo: cp('기계요소설계 마스터/combo', /합성 ?스프링|스프링 ?상수|스프링 ?지수/, { cards: ['기계요소·조립|스프링과 축'] }),
  shafts: cp('기계요소설계 마스터/shafts', /크랭크 ?축/),
  valves: cp('기계요소설계 마스터/valves', /밸브·콕|글로브 ?밸브|게이트 ?밸브/),
  stressPA: { ex: /응력|변형률/, not: /응력 ?집중|응력 ?분산|잔류|센서|스트레인/, cap: '응력 σ = 하중 P ÷ 단면적 A, 변형률 ε = 늘어난 길이 ÷ 처음 길이',
    draw: function () {
      var s = '';
      /* 처음 막대(점선) 와 늘어난 막대 */
      s += box(90, 40, 260, 34, { fill: 'none', c: C.sub, r: 3, w: 1.2, dash: '5 4' });
      s += box(90, 92, 300, 34, { fill: C.blueL, c: C.blue, r: 3 });
      s += F.path('M210,92 a10,17 0 0,1 0,34 a10,17 0 0,1 0,-34 Z', { fill: C.orangeL, c: C.orange, w: 1.4 });
      s += callout(218, 120, 300, 158, '단면적 A', { c: C.orange, tc: C.orange, b: 1 });
      s += arrow(88, 109, 30, 109, { c: C.red, w: 2.6 }) + arrow(392, 109, 450, 109, { c: C.red, w: 2.6 });
      s += t(30, 90, 'P', { a: 'm', b: 1, c: C.red, size: 18 }) + t(450, 90, 'P', { a: 'm', b: 1, c: C.red, size: 18 });
      s += F.dim(90, 40, 350, 40, 'l₀ 처음 길이', { off: 14, size: 13 });
      s += F.dim(90, 126, 390, 126, 'l', { off: 18, side: -1, size: 14 });
      s += box(20, 182, 210, 52, { fill: C.grayL, c: C.edge, r: 8 }) + t(125, 199, '응력 σ = P / A', { a: 'm', b: 1, size: 17, halo: false }) +
        t(125, 221, '[N/mm²]  힘 ÷ 면적', { a: 'm', size: 13, c: C.sub, halo: false });
      s += box(250, 182, 210, 52, { fill: C.grayL, c: C.edge, r: 8 }) + t(355, 199, '변형률 ε = (l − l₀) / l₀', { a: 'm', b: 1, size: 15.5, halo: false }) +
        t(355, 221, '× 100 [%]  늘어난 비율', { a: 'm', size: 13, c: C.sub, halo: false });
      s += t(240, 254, '예) 4,000 N 을 10 × 10 mm² 가 받으면 4,000 ÷ 100 = 40 N/mm²', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 270, s);
    } },

  /* ════════ 공유압 ════════ */
  pascal: cp('공유압 마스터/pascal', /파스칼의? (원리|법칙)|F₁/, { cards: ['전기·제어|공압·유압의 기초 법칙 ★★'] }),
  conti: cp('공유압 마스터/conti', /연속의 법칙|유속|Q ?= ?A|토출량은 약|유량은 약|최대 유량|물의 속도|단면적에 반비례/, { not: /마이크로미터/, cards: ['전기·제어|공압·유압의 기초 법칙 ★★'] }),
  bern: cp('공유압 마스터/bern', /베르누이|속도 ?수두|속도에너지|위치 ?에너지/, { cards: ['전기·제어|공압·유압의 기초 법칙 ★★'] }),
  absPressure: { ex: /절대 ?압력|게이지 ?압|대기압|\[atm\]|1 ?atm|mmHg|수은주/, not: /절대 온도/, cards: ['전기·제어|공압·유압의 기초 법칙 ★★'], cap: '절대 압력 = 대기압 + 게이지 압력 — 게이지(압력계)는 대기압을 0 으로 잰다',
    draw: function () {
      var s = '', X = 170, y0 = 236, yA = 160, yP = 52;
      s += box(X - 18, y0 - 6, 36, 6, { fill: C.ink, r: 1 });
      s += F.hatch(X - 60, yA, 120, y0 - yA, { gap: 10, c: C.grayM });
      s += line(X - 70, yA, X + 70, yA, { c: C.blue, w: 2 }) + line(X - 70, y0, X + 70, y0, { c: C.ink, w: 2 });
      s += t(X - 76, y0, '0 (완전 진공)', { a: 'e', size: 13.5 });
      s += t(X - 76, yA, '대기압', { a: 'e', size: 15, b: 1, c: C.blue });
      s += t(X, (yA + y0) / 2, '진공 쪽', { a: 'm', size: 13, c: C.sub });
      s += F.circle(X, yP, 6, { fill: C.red, c: C.red });
      s += t(X - 14, yP, '잰 압력', { a: 'e', size: 14, b: 1, c: C.red });
      s += arrow(X + 34, yA, X + 34, yP + 6, { c: C.orange, w: 2.2 }) + t(X + 26, (yA + yP) / 2 + 10, '게이지 압력', { a: 'e', size: 14, b: 1, c: C.orange });
      s += arrow(X + 92, y0, X + 92, yP + 6, { c: C.green, w: 2.2 }) + t(X + 100, 120, '절대 압력', { size: 14, b: 1, c: C.green });
      s += line(X, yP, X + 100, yP, { c: C.sub, w: 1, dash: '3 3' });
      s += box(300, 148, 168, 104, { fill: C.blueL, c: C.blue, r: 8, w: 1.2 });
      s += t(384, 166, '1 atm (표준 대기압)', { a: 'm', size: 13.5, b: 1, c: C.blue, halo: false });
      ['= 760 mmHg', '= 10,332 mmAq (수주)', '= 1.0332 kgf/cm²', '= 101.3 kPa ≒ 1.013 bar'].forEach(function (v, i) {
        s += t(312, 188 + i * 18, v, { size: 12.5, halo: false });
      });
      s += t(240, 274, '예) 압력계 50 kgf/cm² → 절대 압력 ≒ 50 + 1.03 ≒ 51 kgf/cm²', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 290, s);
    } },
  force: cp('공유압 마스터/force', /추력|실린더가 낼 수 있는 힘|작용할 수 있는 하중|수축과정에서 발생하는 힘|피스톤 면적/, { not: /설치형식|요동|탠덤|2배/, cards: ['전기·제어|유압 실린더와 부속장치 ★★'] }),
  compress: cp('공유압 마스터/compress', /(^|[^비])압축성/, { cards: ['전기·제어|공압과 유압의 비교'] }),
  airpath: cp('기계수동조립 마스터/air', /애프터 ?쿨러|기기 순서|드레인|수분을 제거|압축공기를 생산/, { not: /외부 ?드레인|내부 ?드레인/, cards: ['전기·제어|공기압 발생·청정화 장치 ★★'] }),
  frl: cp('공유압 마스터/frl', /서비스 ?유닛|조정 ?유닛|루브리케이터|윤활기|필터-압력조절기/, { cards: ['전기·제어|공기압 발생·청정화 장치 ★★'] }),
  compressors: { ex: /(용적형|터보형|축류식|원심식|회전식|왕복식|베인형|스크루|스크류|루트).{0,20}압축기|압축기.{0,30}(용적형|터보형|축류|원심|베인|스크루|스크류|다이어프램|회전식|피스톤)/,
    cards: ['전기·제어|공기압 발생·청정화 장치 ★★'], cap: '공기 압축기 — 가둬서 부피를 줄이는 용적형, 날개로 빠르게 보내 압력으로 바꾸는 터보형',
    draw: function () {
      var s = box(160, 10, 160, 34, { fill: C.grayL, label: '공기 압축기', size: 16 });
      s += F.poly([[240, 44], [240, 56], [120, 56], [120, 66]], { w: 1.4 }) + F.poly([[240, 56], [360, 56], [360, 66]], { w: 1.4 });
      s += box(20, 66, 200, 46, { fill: C.blueL, c: C.blue, label: '' }) + t(120, 81, '용적형', { a: 'm', b: 1, size: 17, c: C.blue, halo: false }) +
        t(120, 100, '가둬서 부피를 줄인다', { a: 'm', size: 13, halo: false });
      s += box(260, 66, 200, 46, { fill: C.orangeL, c: C.orange, label: '' }) + t(360, 81, '터보형', { a: 'm', b: 1, size: 17, c: C.orange, halo: false }) +
        t(360, 100, '날개로 속도 → 압력', { a: 'm', size: 13, halo: false });
      /* 용적형 두 갈래 */
      s += box(20, 124, 96, 30, { fill: C.paper, c: C.blue, label: '왕복식', size: 14, lc: C.blue });
      s += box(124, 124, 96, 30, { fill: C.paper, c: C.blue, label: '회전식', size: 14, lc: C.blue });
      s += t(68, 170, '피스톤', { a: 'm', size: 13.5 }) + t(68, 188, '다이어프램', { a: 'm', size: 13.5 });
      s += t(172, 170, '베인 · 스크루', { a: 'm', size: 13.5 }) + t(172, 188, '루트 블로어', { a: 'm', size: 13.5 });
      /* 피스톤 아이콘 */
      s += box(40, 200, 56, 44, { fill: C.paper, c: C.ink, r: 2 }) + box(44, 222, 48, 10, { fill: C.grayM, r: 1, w: 1 }) +
        line(68, 232, 68, 252, { w: 2.4 }) + t(68, 212, '↕', { a: 'm', size: 13, c: C.blue, halo: false });
      /* 터보형 두 갈래 */
      s += box(260, 124, 96, 30, { fill: C.paper, c: C.orange, label: '원심식', size: 14, lc: C.orange });
      s += box(364, 124, 96, 30, { fill: C.paper, c: C.orange, label: '축류식', size: 14, lc: C.orange });
      /* 원심식: 바깥으로 */
      s += F.circle(308, 210, 14, { fill: C.grayM }) + dot(308, 210, 3);
      [0, 1, 2, 3, 4, 5].forEach(function (k) { var a = k * Math.PI / 3; s += arrow(308 + 16 * Math.cos(a), 210 + 16 * Math.sin(a), 308 + 34 * Math.cos(a), 210 + 34 * Math.sin(a), { c: C.orange, w: 1.6, head: 7 }); });
      s += t(308, 170, '공기 → 바깥', { a: 'm', size: 13 });
      /* 축류식: 축 방향 */
      s += line(370, 210, 454, 210, { w: 3, c: C.ink });
      [384, 404, 424, 444].forEach(function (x) { s += line(x - 5, 196, x + 5, 224, { c: C.ink, w: 2 }); });
      s += arrow(370, 236, 454, 236, { c: C.orange, w: 2 }) + t(412, 170, '공기 → 축 방향', { a: 'm', size: 13 });
      return F.svg(480, 262, s);
    } },
  symrule: cp('기계수동조립 마스터/symrule', /펌프를 의미|모터를 의미|공기압 모터|모터의 기호|공기압 모터의 기호/, { cards: ['전기·제어|공유압 기호 읽기'] }),
  portLetters: { ex: /연결구|포트\)?에 ['"]?P|'R'이 의미|ISO[- ]?(1219|5599)/, cards: ['전기·제어|방향제어밸브 ★★★'],
    cap: '밸브 포트의 이름 — 문자(ISO 1219)와 숫자(ISO 5599) 두 가지. 공급 P = 1, 작업 A·B = 짝수, 배기 R·S = 홀수',
    draw: function () {
      var s = '', x0 = 150, y0 = 96, w = 100, h = 64, top = [x0 + 30, x0 + 70], bot = [x0 + 18, x0 + 50, x0 + 82];
      s += box(x0, y0, w, h, { fill: C.paper, r: 0, w: 1.8 }) + box(x0 + w, y0, w, h, { fill: C.paper, r: 0, w: 1.8 });
      s += arrow(bot[1], y0 + h - 2, top[0], y0 + 4, { w: 1.4, head: 8 }) + arrow(top[1], y0 + 4, bot[2], y0 + h - 2, { w: 1.4, head: 8 });
      s += arrow(x0 + w + 50, y0 + h - 2, x0 + w + 70, y0 + 4, { w: 1.4, head: 8 }) + arrow(x0 + w + 30, y0 + 4, x0 + w + 18, y0 + h - 2, { w: 1.4, head: 8 });
      top.forEach(function (x) { s += line(x, y0, x, y0 - 26, { w: 1.8, c: C.blue }); });
      bot.forEach(function (x, i) { s += line(x, y0 + h, x, y0 + h + 24, { w: 1.8, c: i === 1 ? C.green : C.orange }); });
      s += box(x0 - 18, y0 + 20, 18, 24, { fill: C.paper, r: 0, w: 1.4 }) + box(x0 + 2 * w, y0 + 20, 18, 24, { fill: C.paper, r: 0, w: 1.4 });
      s += t(x0 + 50, y0 - 42, '작업 라인  A · B · C  =  2 · 4 · 6', { a: 'm', b: 1, size: 14.5, c: C.blue });
      s += t(bot[1], y0 + h + 42, '공급  P = 1', { a: 'm', b: 1, size: 14.5, c: C.green });
      s += t(bot[1], y0 + h + 64, '배기  R · S · T  =  3 · 5 · 7  (양옆)', { a: 'm', b: 1, size: 14.5, c: C.orange });
      s += t(x0 - 24, y0 + 22, '제어', { a: 'e', b: 1, size: 14, c: C.purple }) + t(x0 - 24, y0 + 42, 'X · Y · Z', { a: 'e', size: 13, c: C.purple });
      s += t(x0 - 24, y0 + 60, '= 10 · 12 · 14', { a: 'e', size: 12.5, c: C.purple });
      s += t(240, 262, 'P = 압축 공기를 공급하는 쪽(공기 탱크 쪽) · R = 배출구 · L = 누출 라인', { a: 'm', size: 13, c: C.sub });
      s += t(240, 282, '작업 라인을 「1, 2, 3」 으로 쓰면 틀린 표기', { a: 'm', size: 13, c: C.red });
      return F.svg(480, 298, s);
    } },
  portnum: cp('공유압 마스터/portnum', /연결구|포트\)?에 ['"]?P|'R'이 의미|ISO[- ]?(1219|5599)/, { cards: ['전기·제어|방향제어밸브 ★★★'] }),
  ports: cp('공유압 마스터/ports', /작동 방향을 바꾸는|방향 ?제어 ?밸브에 속하는|포트 ?\d ?위치|\d\/\d ?way|\d포트 ?\d|포트의 (개수|수)|위치의 수|포트 수/, { cards: ['전기·제어|방향제어밸브 ★★★'] }),
  ncno: cp('공유압 마스터/ncno', /정상상태 ?(닫힘|열림)|N\.C\b|N\.O\b|상시 ?(닫힘|열림)|NC형|NO형/, { not: /접점|릴레이/ }),
  actuation: { ex: /조작 ?방식|작동 방법 기호|조작방식의 명칭|기계 ?방식의 밸브|작동 ?방식이 아닌|작동을 위한 조작/, not: /제어계|제어 ?시스템/,
    cards: ['전기·제어|방향제어밸브 ★★★'], cap: '방향제어밸브의 조작 방식 — 밸브 칸 옆에 붙은 그림으로 읽는다 (사람 · 기계 · 전기 · 공기압)',
    draw: function () {
      var s = '';
      function valve(x, y) { return box(x, y - 14, 30, 28, { fill: C.paper, c: C.ink, r: 0, w: 1.4 }) + arrow(x + 6, y + 6, x + 24, y - 6, { w: 1.2, head: 6 }); }
      /* 각 조작기 그림: 밸브 왼쪽 끝 (x) 에 붙인다 */
      function op(kind, x, y) {
        var o = line(x - 14, y, x, y, { w: 1.4 });
        if (kind === 'push') o += line(x - 14, y - 9, x - 14, y + 9, { w: 1.4 }) + F.path('M' + (x - 14) + ',' + (y - 9) + ' a9,9 0 0,0 0,18', { w: 1.4 });
        if (kind === 'lever') o += line(x - 14, y, x - 24, y - 14, { w: 1.4 }) + dot(x - 24, y - 14, 3);
        if (kind === 'pedal') o += F.poly([[x - 14, y - 9], [x - 28, y + 9]], { w: 1.4 }) + line(x - 14, y - 9, x - 14, y + 9, { w: 1.4 });
        if (kind === 'plunger') o += line(x - 22, y - 7, x - 22, y + 7, { w: 2.2 }) + line(x - 22, y, x - 14, y, { w: 1.4 });
        if (kind === 'roller') o += F.circle(x - 21, y, 7, { fill: C.paper, w: 1.4 });
        if (kind === 'spring') o += F.poly([[x - 4, y], [x - 8, y - 8], [x - 13, y + 8], [x - 18, y - 8], [x - 23, y + 8], [x - 27, y]], { w: 1.3 });
        if (kind === 'sol') o += box(x - 26, y - 9, 14, 18, { fill: C.paper, r: 0, w: 1.4 }) + line(x - 26, y + 9, x - 12, y - 9, { w: 1.2 });
        if (kind === 'pilot') o = line(x - 18, y, x, y, { w: 1.3, dash: '4 3' }) + F.poly([[x - 18, y - 7], [x - 30, y], [x - 18, y + 7]], { close: 1, fill: C.paper, w: 1.3 });
        return o;
      }
      var groups = [
        ['인력 조작', C.blue, [['push', '누름 버튼'], ['lever', '레버'], ['pedal', '페달']]],
        ['기계 조작', C.green, [['plunger', '플런저'], ['roller', '롤러'], ['spring', '스프링']]],
        ['전기 · 공기압', C.orange, [['sol', '솔레노이드'], ['pilot', '공기압 파일럿']]]
      ];
      groups.forEach(function (g, gi) {
        var y = 34 + gi * 78;
        s += t(18, y, g[0], { b: 1, size: 15, c: g[1] });
        g[2].forEach(function (k, ki) {
          var x = 70 + ki * (gi === 2 ? 190 : 140), yy = y + 34;
          s += op(k[0], x, yy) + valve(x, yy) + t(x + 38, yy, k[1], { size: 13.5 });
        });
      });
      s += t(18, 262, '「유량 제어 방식」 · 「플랜트형」 같은 조작 방식은 없다', { size: 13, c: C.sub });
      return F.svg(480, 278, s);
    } },
  solenoid: cp('공유압 마스터/solenoid', /솔레노이드|편솔|양솔|전자 ?(전환|밸브)/, { not: /스텝|선형|PLC|입력장치/ }),
  unload: cp('공유압 마스터/unload', /탠덤 ?센터|센터 ?바이패스|무부하|언로드|언로딩/, { cards: ['전기·제어|압력제어밸브 ★★'] }),
  center3: cp('공유압 마스터/center3', /중간 정지|올 ?포트|클로즈드|중립 ?위치/, { not: /탠덤/ }),
  quickexh: cp('공유압 마스터/quickexh', /급속 ?배기/, { not: /유량제어 밸브에 해당하는|유량 제어 밸브가 아닌/, cards: ['전기·제어|유량제어밸브와 속도제어 회로 ★★★'] }),
  shuttle: cp('공유압 마스터/shuttle', /셔틀 ?밸브|2압 ?밸브|이압 ?밸브|AND ?밸브|OR ?밸브|고압 ?우선|양 ?제어밸브/),
  ff: cp('공유압 마스터/ff', /메모리형|ON으로 유지|플립플롭 ?회로/),
  delay: cp('공유압 마스터/delay', /시간 ?지연 ?밸브/),
  seqv: cp('공유압 마스터/seqv', /시퀀스 ?밸브|순서대로 작동|시퀀스 ?회로/, { not: /시퀀스 ?제어|전동기|논리식/, cards: ['전기·제어|압력제어밸브 ★★'] }),
  setp: cp('공유압 마스터/setp', /압력 ?설정 ?회로|최대 압력 설정|최고 압력|유체 ?퓨즈/),
  pilot: cp('공유압 마스터/pilot', /릴리프|감압 ?밸브|감압밸브|크래킹|2차 측의 압력|1차 압력/, { not: /브레이크|유체 ?퓨즈/, cards: ['전기·제어|압력제어밸브 ★★'] }),
  speed3: cp('공유압 마스터/speed3', /미터 ?인|미터 ?아웃|블리드 ?오프|속도 ?제어 ?회로|속도제어방식|바이패스/, { not: /공기압|단동|요동/, cards: ['전기·제어|유량제어밸브와 속도제어 회로 ★★★'] }),
  meter: cp('공유압 마스터/meter', /배기 교축|공기압 실린더의 속도|단동실린더의 속도|요동형 액추에이터|미터인 방식으로 접속/),
  oneway: cp('공유압 마스터/oneway', /일방향 ?유량|속도 ?제어 ?밸브|교축 ?밸브|스로틀/),
  orifice: { ex: /오리피스|초크/, cap: '오리피스는 짧게, 초크는 길게 좁힌 통로 — 오리피스는 기름의 점도(온도)에 거의 영향받지 않는다',
    draw: function () {
      var s = '';
      function pipe(y, nl, nr, label, note1, note2, c) {
        var o = '';
        o += line(30, y - 26, nl, y - 26) + line(30, y + 26, nl, y + 26) + line(nr, y - 26, 450, y - 26) + line(nr, y + 26, 450, y + 26);
        o += F.path('M' + nl + ',' + (y - 26) + ' V' + (y - 8) + ' H' + nr + ' V' + (y - 26), { fill: C.grayM, w: 2 });
        o += F.path('M' + nl + ',' + (y + 26) + ' V' + (y + 8) + ' H' + nr + ' V' + (y + 26), { fill: C.grayM, w: 2 });
        o += arrow(44, y, nl - 6, y, { c: C.blue, w: 1.8, flow: true }) + arrow(nr + 6, y, 436, y, { c: C.blue, w: 1.8, flow: true });
        o += t(30, y - 42, label, { b: 1, size: 16, c: c });
        o += t(240, y + 46, note1, { a: 'm', size: 13.5 }) + t(240, y + 64, note2, { a: 'm', size: 13, c: C.sub });
        return o;
      }
      s += pipe(70, 232, 248, '오리피스 (Orifice)', '좁힌 길이가 단면 치수보다 짧다', '압력 강하가 점도의 영향을 거의 받지 않는다', C.blue);
      s += pipe(210, 170, 310, '초크 (Choke)', '좁힌 길이가 단면 치수보다 길다', '압력 강하가 점도(온도)의 영향을 받는다', C.orange);
      return F.svg(480, 290, s);
    } },
  cylDouble: cp('공유압 마스터/cyl-double', /피스톤 로드|로드 커버/),
  cylSingle: cp('공유압 마스터/cyl-single', /단동 ?실린더/, { not: /속도 ?제어|급속/ }),
  mounts: { ex: /풋형|플랜지형|클레비스|클래비스|트러니언|피벗형|설치 ?형식|지지 ?형식|지지방식|부착 ?방식|고정방법/, not: /조립형식/,
    cards: ['전기·제어|유압 실린더와 부속장치 ★★'], cap: '실린더 설치 형식 — 몸체를 꽉 고정하는 풋형 · 플랜지형, 핀을 축으로 흔들리게 다는 클레비스형 · 트러니언형',
    draw: function () {
      var s = '';
      function cyl(x, y) { return box(x, y, 110, 30, { fill: C.blueL, c: C.blue, r: 3 }) + line(x + 110, y + 15, x + 150, y + 15, { w: 4, c: C.ink }); }
      /* 풋형 */
      s += cyl(30, 54) + box(36, 84, 18, 12, { fill: C.grayM, r: 1 }) + box(116, 84, 18, 12, { fill: C.grayM, r: 1 }) + line(18, 96, 196, 96, { w: 2 }) + F.hatch(18, 96, 178, 8, { gap: 8, c: C.sub });
      s += t(30, 32, '풋형', { b: 1, size: 15 }) + t(84, 32, '발을 바닥에 볼트로', { size: 12.5, c: C.sub });
      /* 플랜지형 */
      s += cyl(290, 54) + box(398, 44, 10, 50, { fill: C.grayM, r: 1 }) + line(410, 34, 410, 104, { w: 2 }) + F.hatch(410, 34, 8, 70, { gap: 8, c: C.sub });
      s += t(270, 32, '플랜지형', { b: 1, size: 15 }) + t(338, 32, '가장 강하게 붙는다', { size: 12.5, c: C.sub });
      /* 클레비스형 */
      s += cyl(60, 160) + F.path('M60,166 H44 V190 H60', { w: 2 }) + F.circle(40, 175, 6, { fill: C.orangeL, c: C.orange }) +
        F.path('M30,150 A50,50 0 0,1 30,200', { c: C.orange, w: 1.4, dash: '4 3' });
      s += t(30, 138, '클레비스형', { b: 1, size: 15, c: C.orange }) + t(118, 138, '뒤끝 핀으로 흔들림', { size: 12.5, c: C.sub });
      /* 트러니언형 */
      s += cyl(300, 160) + F.circle(355, 158, 6, { fill: C.orangeL, c: C.orange }) + F.circle(355, 192, 6, { fill: C.orangeL, c: C.orange });
      s += F.path('M330,214 A30,14 0 0,0 380,214', { c: C.orange, w: 1.4, dash: '4 3' });
      s += t(270, 138, '트러니언형', { b: 1, size: 15, c: C.orange }) + t(358, 138, '옆 핀으로 흔들림', { size: 12.5, c: C.sub });
      s += line(16, 112, 464, 112, { c: C.edge, w: 1.2 });
      s += t(240, 236, '고정형 = 풋 · 플랜지      요동형 = 클레비스 · 트러니언 · 피벗', { a: 'm', size: 13.5, b: 1 });
      s += t(240, 256, '「플랜트형」 · 「용접형」 · 「타이로드형」 이라는 설치 형식은 없다', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 272, s);
    } },
  oilTank: { ex: /오일 ?탱크의|기름 ?탱크의|탱크의 (크기|용량)|스트레이너|에어 ?블리저|유면계는|유면계를/, not: /기호의|기호가/, cap: '유압 오일 탱크 — 흡입관과 귀환관을 칸막이로 떼어 놓고, 스트레이너는 바닥에서 띄워 기름 속에 둔다',
    draw: function () {
      var s = '', L = 60, R = 360, T = 70, B = 240, oil = 110;
      s += box(L, oil, R - L, B - oil, { fill: C.orangeL, c: 'none', r: 0, w: 0 });
      s += F.path('M' + L + ',' + T + ' V' + B + ' H' + R + ' V' + T, { w: 2.4 }) + line(L, T, R, T, { w: 2.4 });
      s += line(L, oil, R, oil, { c: C.orange, w: 1.6, dash: '6 4' });
      s += line(236, 126, 236, B, { w: 2 });
      s += callout(236, 150, 256, 150, '칸막이', { size: 13 });
      /* 흡입관 + 스트레이너 */
      s += line(110, 30, 110, 196, { w: 3, c: C.blue }) + box(96, 196, 28, 22, { fill: C.blueL, c: C.blue, r: 3 });
      
      s += t(110, 22, '펌프로(흡입)', { a: 'm', size: 13, c: C.blue });
      s += callout(124, 207, 140, 186, '스트레이너', { c: C.blue, tc: C.blue, b: 1, size: 13.5 }) + t(146, 208, '바닥에서 띄운다', { size: 12, c: C.blue });
      /* 귀환관 */
      s += line(300, 30, 300, 200, { w: 3, c: C.green }) + arrow(300, 170, 300, 204, { c: C.green, w: 1.6, head: 8 });
      s += t(300, 22, '돌아오는 기름', { a: 'm', size: 13, c: C.green });
      /* 에어 블리저 · 유면계 */
      s += box(236, 56, 30, 14, { fill: C.grayM, r: 2 }) + callout(251, 56, 278, 44, '에어 블리저', { size: 13 });
      s += box(R, 96, 10, 70, { fill: C.paper, c: C.ink, r: 2, w: 1.2 }) + line(R, oil, R + 10, oil, { c: C.orange, w: 2 }) + callout(R + 10, 128, 384, 128, '유면계(높이)', { size: 13 });
      s += t(240, 262, '용량 ≥ 펌프 토출량 3배 · 스트레이너 유량 ≥ 토출량 2배', { a: 'm', size: 13.5, b: 1 });
      s += t(240, 282, '에어 블리저 통기 용량 ≥ 토출량 2배 · 유면계는 기름의 높이만 본다', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 298, s);
    } },

  /* ════════ 기계가공 · 측정 ════════ */
  millFeed: cp('기계공작법 마스터/mill-feed', /날 ?1개당|날당|fz|테이블의? 이송 ?속도|mm\/날/),
  speed: cp('기계공작법 마스터/speed', /절삭 ?속도는|절삭속도는|원주 ?속도|회전수를 구하는|적합한 회전수|회전수\[?rpm\]?|스핀들의 회전수/, { not: /구성|결합도|모터|나사/, cards: ['기계가공·측정|절삭가공 용어와 절삭속도 계산 ★★★'] }),
  turnTime: cp('기계공작법 마스터/turn-time', /가공 ?시간|소요 ?시간|소요되는 시간|이송\(Feed\)|mm\/rev/, { cards: ['기계가공·측정|절삭가공 용어와 절삭속도 계산 ★★★'] }),
  cut3: cp('기계공작법 마스터/cut3', /3분력|주분력|배분력/),
  chip4: cp('기계공작법 마스터/chip4', /균열형 ?칩|유동형 ?칩|전단형 ?칩|칩의 형태/),
  bue: cp('기계공작법 마스터/bue', /구성 ?인선|빌트 ?업/, { cards: ['기계가공·측정|구성인선(빌드업 에지) ★★'] }),
  bite: cp('기계공작법 마스터/bite', /경사각|여유각/, { not: /사인바/, cards: ['기계가공·측정|구성인선(빌드업 에지) ★★'] }),
  wear: cp('기계공작법 마스터/wear', /크레이터|플랭크|경사면 마|여유면 마|치핑|공구의 수명|인선의 마모/, { cards: ['기계가공·측정|공구 마모와 공구 수명'] }),
  lathe: cp('기계공작법 마스터/lathe', /주축대|왕복대|에이프런|새들|선반의 (4대|구성|주요)|선반을 구성|구성하고 있는 주요/, { cards: ['기계가공·측정|선반의 구조·부속장치와 테이퍼 ★★'] }),
  latheSize: cp('기계공작법 마스터/lathe-size', /선반의 크기|스윙/),
  center: cp('기계공작법 마스터/center', /방진구|면판|맨드릴|돌리개/, { not: /드릴가공의 종류/ }),
  chucks: { ex: /단동척|연동척|콜릿 ?척|마그네틱 ?척/, cards: ['기계가공·측정|선반의 구조·부속장치와 테이퍼 ★★'], cap: '선반의 척 — 단동척은 조 4개가 따로, 연동척은 조 3개가 함께, 콜릿척은 가는 봉을 집는다',
    draw: function () {
      var s = '';
      function jaw(cx, cy, ang, r, c) {
        var a = ang * Math.PI / 180, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        return F.g(box(-9, -7, 18, 14, { fill: c, c: C.ink, r: 2, w: 1.2 }), { x: x, y: y, r: ang });
      }
      /* 단동척 */
      s += F.circle(80, 110, 58, { fill: C.grayL }) + box(66, 92, 32, 22, { fill: C.orangeL, c: C.orange, r: 2 });
      [[0, 34], [90, 30], [180, 26], [270, 26]].forEach(function (k) { s += jaw(80, 110, k[0], k[1] + 4, C.blueL); });
      s += t(80, 30, '단동척', { a: 'm', b: 1, size: 16, c: C.blue });
      s += t(80, 186, '조 4개 · 하나씩 따로', { a: 'm', size: 13 }) + t(80, 204, '불규칙 · 편심 가공', { a: 'm', size: 13, c: C.sub });
      /* 연동척 */
      s += F.circle(240, 110, 58, { fill: C.grayL }) + F.circle(240, 110, 18, { fill: C.orangeL, c: C.orange });
      [270, 30, 150].forEach(function (a) { s += jaw(240, 110, a, 28, C.greenL); var r = a * Math.PI / 180; s += arrow(240 + 52 * Math.cos(r), 110 + 52 * Math.sin(r), 240 + 40 * Math.cos(r), 110 + 40 * Math.sin(r), { c: C.green, w: 1.6, head: 7 }); });
      s += t(240, 30, '연동척', { a: 'm', b: 1, size: 16, c: C.green });
      s += t(240, 186, '조 3개 · 한꺼번에', { a: 'm', size: 13 }) + t(240, 204, '원형 · 육각 빠르게', { a: 'm', size: 13, c: C.sub });
      /* 콜릿척 */
      s += F.circle(400, 110, 34, { fill: C.grayL }) + F.circle(400, 110, 9, { fill: C.orangeL, c: C.orange });
      [0, 120, 240].forEach(function (a) { var r = a * Math.PI / 180; s += line(400 + 11 * Math.cos(r), 110 + 11 * Math.sin(r), 400 + 32 * Math.cos(r), 110 + 32 * Math.sin(r), { w: 1.6 }); });
      s += t(400, 30, '콜릿척', { a: 'm', b: 1, size: 16, c: C.purple });
      s += t(400, 186, '가는 봉 · 각봉', { a: 'm', size: 13 }) + t(400, 204, '슬리브에 끼워 쓴다', { a: 'm', size: 13, c: C.sub });
      s += t(240, 236, '마그네틱척은 자석으로 얇은 판을 잡는다 (고정력이 약해 절삭 깊이를 작게)', { a: 'm', size: 12.5, c: C.sub });
      return F.svg(480, 252, s);
    } },
  taper: cp('기계공작법 마스터/taper', /편위|테이퍼를? (가공|절삭)/, { cards: ['기계가공·측정|선반의 구조·부속장치와 테이퍼 ★★'] }),
  updown: cp('기계공작법 마스터/updown', /상향 ?절삭|하향 ?절삭/, { cards: ['기계가공·측정|밀링 상향·하향절삭과 분할법 ★★★'] }),
  index: cp('기계공작법 마스터/index', /분할판|분할법|분할하는 방법|분할 가공|등분|구멍 ?열/, { not: /투상/, cards: ['기계가공·측정|밀링 상향·하향절삭과 분할법 ★★★'] }),
  shaper: cp('기계공작법 마스터/shaper', /슬로팅|슬로터/),
  wheel: cp('기계공작법 마스터/wheel', /숫돌의 구성|구성 3요소|기공, 결합제/, { cards: ['기계가공·측정|연삭숫돌과 자생작용 ★★'] }),
  wheelMark: cp('기계공작법 마스터/wheel-mark', /WA ?60|GC ?숫돌|입도|결합도|결합제|결합체|숫돌 ?입자|60 ?KmV/, { not: /CBN|질화붕소/, cards: ['기계가공·측정|연삭숫돌과 자생작용 ★★'] }),
  dressing: cp('기계공작법 마스터/dressing', /눈메움|무딤|드레싱|트루잉|글레이징/, { not: /시닝|인선의 마모|구성 요소/, cards: ['기계가공·측정|연삭숫돌과 자생작용 ★★'] }),
  centerless: cp('기계공작법 마스터/centerless', /센터리스/),
  drillOps: cp('기계공작법 마스터/drill-ops', /카운터 ?(싱킹|보링)|스폿 ?페이싱|드릴가공의 종류|원뿔자리/, { cards: ['기계가공·측정|절삭가공의 종류 구분'] }),
  broach: cp('기계공작법 마스터/broach', /브로치|브로칭/, { not: /약호|기호/ }),
  lapping: cp('기계공작법 마스터/lapping', /래핑/, { not: /약호|기호/ }),
  barrel: cp('기계공작법 마스터/barrel', /숏 ?피닝/),
  edm: cp('기계공작법 마스터/edm', /방전 ?가공/),
  vernier: cp('기계공작법 마스터/vernier', /버니어 ?캘리퍼스의 측정값|아들자/, { cards: ['기계가공·측정|측정기와 측정오차 ★★'] }),
  micrometer: cp('기계공작법 마스터/micrometer', /마이크로미터의 측정값|딤블/, { cards: ['기계가공·측정|측정기와 측정오차 ★★'] }),
  gaugeBlock: cp('기계공작법 마스터/gauge-block', /게이지 ?블록/, { not: /사인 ?바|래핑/ }),
  abbe: cp('기계공작법 마스터/abbe', /아베의 원리/),
  sineBar: { ex: /사인 ?바/, cards: ['기계가공·측정|측정기와 측정오차 ★★'], cap: '사인바 — 한쪽 롤러를 블록 게이지 높이 H 만큼 올리면 sin θ = H / L (L = 두 롤러 중심 거리)',
    draw: function () {
      var s = '', x1 = 90, y1 = 200, L = 260, H = 70;
      var x2 = x1 + Math.sqrt(L * L - H * H), y2 = y1 - H;
      s += box(30, 212, 420, 14, { fill: C.grayM, r: 2 }) + t(60, 244, '정반', { a: 'm', size: 13, c: C.sub });
      s += box(x2 - 22, y2 + 6, 44, H + 6, { fill: C.orangeL, c: C.orange, r: 1 });
      s += t(x2, 244, '블록 게이지', { a: 'm', size: 13, c: C.orange });
      var ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      s += F.g(box(-14, -24, L + 28, 14, { fill: C.blueL, c: C.blue, r: 2 }), { x: x1, y: y1, r: ang });
      s += F.circle(x1, y1 + 6, 6, { fill: C.paper }) + F.circle(x2, y2 + 6, 6, { fill: C.paper });
      s += line(x1, y1 + 6, x2, y2 + 6, { c: C.blue, w: 1, dash: '4 3' });
      s += t((x1 + x2) / 2 - 10, (y1 + y2) / 2 + 18, 'L', { a: 'm', b: 1, c: C.blue });
      s += F.dim(x2 + 44, y1 + 6, x2 + 44, y2 + 6, '', {}) + t(x2 + 54, (y1 + y2) / 2 + 6, 'H', { b: 1, size: 16 });
      s += F.path('M' + (x1 + 60) + ',' + (y1 + 6) + ' A60,60 0 0,0 ' + (x1 + 60 * Math.cos(ang * Math.PI / 180)) + ',' + (y1 + 6 + 60 * Math.sin(ang * Math.PI / 180)), { c: C.red, w: 1.4 });
      s += t(x1 + 70, y1 - 6, 'θ', { b: 1, c: C.red });
      s += t(20, 30, 'sin θ = (H − h) / L', { b: 1, size: 17 }) + t(20, 52, 'h = 낮은 쪽 블록 높이 (정반에 놓으면 0)', { size: 13, c: C.sub });
      s += t(20, 74, '예) L 200, H 42 → sin θ = 0.21, θ ≒ 12°', { size: 13, c: C.sub });
      s += t(20, 96, '45° 를 넘으면 오차가 커진다', { size: 13, c: C.red });
      return F.svg(480, 256, s);
    } },
  servo4: cp('CNC 마스터/servo4', /반 ?폐쇄|폐쇄 ?회로 ?방식|개방 ?회로 ?방식|서보 ?기구 ?방식|타코 ?제너레이터/),
  arcIJ: { ex: /I, ?J의 의미|I, ?J를|원호 ?중심까지/, cards: ['기계가공·측정|CNC 가공 — G코드·M코드'], cap: '원호 보간의 I · J — 시작점에서 원호 중심까지 X · Y 로 잰 거리 (끝점까지가 아니다)',
    draw: function () {
      var s = '', ox = 50, oy = 220, k = 4.6;
      function P(x, y) { return [ox + x * k, oy - y * k]; }
      s += arrow(ox - 10, oy, 460, oy, { w: 1.2, head: 8 }) + arrow(ox, oy + 10, ox, 30, { w: 1.2, head: 8 }) + t(460, oy + 16, 'X', { a: 'm', b: 1 }) + t(ox - 14, 34, 'Y', { a: 'm', b: 1 });
      var S = P(60, 20), M = P(40, 20), E = P(20, 20), r = 20 * k;
      s += F.path('M' + S[0] + ',' + S[1] + ' A' + r + ',' + r + ' 0 0,0 ' + E[0] + ',' + E[1], { c: C.blue, w: 3 });
      s += arrow(M[0] + 2, M[1] - r - 1, M[0] - 14, M[1] - r - 1, { c: C.blue, w: 2, head: 9 });
      s += dot(S[0], S[1], 5, C.green) + dot(M[0], M[1], 5, C.red) + dot(E[0], E[1], 5, C.blue);
      s += t(S[0], S[1] + 20, '시작점 (60, 20)', { a: 'm', size: 13, c: C.green, b: 1 });
      s += t(M[0], M[1] + 20, '중심 (40, 20)', { a: 'm', size: 13, c: C.red, b: 1 });
      s += t(E[0], E[1] + 20, '끝점 (20, 20)', { a: 'm', size: 13, c: C.blue, b: 1 });
      s += arrow(S[0], S[1] + 34, M[0], M[1] + 34, { c: C.red, w: 2.2 }) + t((S[0] + M[0]) / 2, S[1] + 48, 'I = −20', { a: 'm', b: 1, c: C.red, size: 15 });
      s += t(240, 262, 'G03 X20.0 Y20.0 I−20.0 ;', { a: 'm', b: 1, size: 16 });
      s += t(240, 284, 'J = 0 이라 안 쓴다 · G03 = 반시계, G02 = 시계', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 302, s);
    } },
  interp: cp('CNC 마스터/interp', /G0[0-3]\b|원호 ?보간|직선 ?보간/, { not: /G04|U_|증분/, cards: ['기계가공·측정|CNC 가공 — G코드·M코드'] }),
  g41: cp('CNC 마스터/g41', /G4[0-2]\b|인선 ?(좌측|우측)|반경 ?보정|지름 ?보정/),
  dh: cp('CNC 마스터/dh', /G43|공구 ?길이 ?보정/),
  xzuw: cp('CNC 마스터/xzuw', /증분|U_ W_/, { cards: ['기계가공·측정|CNC 가공 — G코드·M코드'] }),
  g54: cp('CNC 마스터/g54', /공작물 ?좌표계/),
  g71: cp('CNC 마스터/g71', /G71|황삭 ?사이클/),
  auto3: cp('CNC 마스터/auto3', /FMS|DNC|유연생산/),

  /* ════════ 기계제도 ════════ */
  linePriority: cp('도면양식 척도 마스터/line-priority', /우선 ?순위|같은 장소에 (선이 )?겹|중복되는 경우|순위가 가장/, { cards: ['기계제도|선의 종류·용도와 우선순위 ★★'] }),
  lineWidth: cp('도면양식 척도 마스터/line-width', /선의 굵기|최대 굵기|굵기 비율/, { not: /해칭/ }),
  sheetForm: cp('도면양식 척도 마스터/sheet-form', /윤곽선|표제란|중심 ?마크|재단 ?마크|비교 ?눈금|도면의 양식|반드시 마련/, { not: /철하지|각법|비례척|치수 밑/, cards: ['기계제도|도면의 크기와 양식'] }),
  scale3: cp('도면양식 척도 마스터/scale-3', /척도|배척|축척|현척|\bNS\b/, { not: /비례 ?척도가 아닌|치수 밑|밑에 그은|굵은 실선을 적용|레이놀즈/, cards: ['기계제도|척도 (현척·축척·배척)'] }),
  dimMarks: cp('도면양식 척도 마스터/dim-marks', /비례 ?척도가 아닌|비례하지 않는 치수|비례척이 아님|치수 밑에|밑에 그은 선|참고 ?치수/, { cards: ['기계제도|치수기입의 원칙과 치수보조기호 ★★★'] }),
  dimSym: cp('도면양식 척도 마스터/dim-symbols-part', /치수 ?보조 ?기호|치수에 사용하는 기호|정사각형|□ ?80|모[따떼]기/, { not: /핀|응력|각봉|기하/, cards: ['기계제도|치수기입의 원칙과 치수보조기호 ★★★'] }),
  phiR: cp('도면양식 척도 마스터/phi-vs-r', /구의 반지름|\bSR\b/),
  dimMain: cp('도면양식 척도 마스터/dim-main-view', /주 ?투상도에 집중|분산시켜|계산하여 구하도록|계산해서 구할|사용자가 계산하도록/),
  chordArc: { ex: /현의 (길이|치수)|호의 (길이|치수)/, cards: ['기계제도|치수기입의 원칙과 치수보조기호 ★★★'], cap: '현 · 호 · 각도 치수 — 현은 곧은 치수선, 호는 원호 치수선 위에 ⌒, 각도는 원호 치수선에 ° (숫자는 예시)',
    draw: function () {
      var s = '';
      function arcPart(cx, cy, R, a0, a1) {
        var p0 = [cx + R * Math.cos(a0), cy - R * Math.sin(a0)], p1 = [cx + R * Math.cos(a1), cy - R * Math.sin(a1)];
        return { d: 'M' + p0[0] + ',' + p0[1] + ' A' + R + ',' + R + ' 0 0,0 ' + p1[0] + ',' + p1[1], p0: p0, p1: p1 };
      }
      var cxs = [80, 240, 400], nm = ['현의 길이', '호의 길이', '각도'], col = [C.blue, C.orange, C.green];
      for (var i = 0; i < 3; i++) {
        var cx = cxs[i], cy = 170, a = arcPart(cx, cy, 60, Math.PI * 0.25, Math.PI * 0.75);
        s += F.path(a.d, { w: 2.4 }) + line(cx, cy, a.p0[0], a.p0[1], { c: C.sub, w: 1, dash: 'center' }) + line(cx, cy, a.p1[0], a.p1[1], { c: C.sub, w: 1, dash: 'center' });
        s += t(cx, 34, nm[i], { a: 'm', b: 1, size: 16, c: col[i] });
      }
      /* 현 */
      s += F.dim(cxs[0] - 42.4, 127.6, cxs[0] + 42.4, 127.6, '40', { off: 44, c: C.blue });
      /* 호 */
      var b = arcPart(cxs[1], 170, 92, Math.PI * 0.25, Math.PI * 0.75);
      s += F.path(b.d, { c: C.orange, w: 1 }) + t(cxs[1], 66, '⌒42', { a: 'm', b: 1, c: C.orange });
      s += line(b.p0[0], b.p0[1], b.p0[0] - 4, b.p0[1] + 4, { c: C.orange, w: 1 });
      /* 각도 */
      var g = arcPart(cxs[2], 170, 92, Math.PI * 0.25, Math.PI * 0.75);
      s += F.path(g.d, { c: C.green, w: 1 }) + t(cxs[2], 66, '90°', { a: 'm', b: 1, c: C.green });
      s += line(cxs[2], 170, cxs[2] + 70, 100, { c: C.green, w: 1 }) + line(cxs[2], 170, cxs[2] - 70, 100, { c: C.green, w: 1 });
      s += t(cxs[0], 200, '곧은 치수선', { a: 'm', size: 13 }) + t(cxs[1], 200, '원호 치수선 + ⌒', { a: 'm', size: 13 }) + t(cxs[2], 200, '원호 치수선 + °', { a: 'm', size: 13 });
      return F.svg(480, 218, s);
    } },
  pitchCount: { ex: /구멍이 11개|13-15 드릴|42-20D|12-φ15|'L' 치수|A의 길이|\(\*\) 안의 치수/, cap: '같은 간격의 구멍 — 구멍이 n 개면 간격은 n − 1 개. 전체 = 피치 × (n − 1) + 양끝 여유',
    draw: function () {
      var s = '', x0 = 40, p = 36, n = 11, y = 92;
      s += box(10, 66, 460, 52, { fill: C.grayL, c: C.ink, r: 0, w: 2 });
      for (var i = 0; i < n; i++) s += F.circle(x0 + 30 + i * p, y, 9, { fill: C.paper, w: 1.6 });
      var xa = x0 + 30, xb = x0 + 30 + (n - 1) * p;
      s += F.dim(10, 118, xa, 118, '70', { off: 26, side: -1, size: 14 }) + F.dim(xb, 118, 470, 118, '70', { off: 26, side: -1, size: 14 });
      s += F.dim(xa, 118, xb, 118, '10 × 120 (= 1,200)', { off: 26, side: -1, size: 14, c: C.blue });
      s += F.dim(10, 66, 470, 66, 'L = 1,340', { off: 26, size: 15, c: C.red });
      for (var j = 0; j < n - 1; j++) s += t(xa + j * p + p / 2, 82, String(j + 1), { a: 'm', size: 10.5, c: C.blue, halo: false });
      s += t(240, 186, '구멍 11 개 → 간격 10 개', { a: 'm', b: 1, size: 15 });
      s += t(240, 208, 'L = 120 × (11 − 1) + 70 × 2 = 1,340', { a: 'm', size: 14 });
      s += t(240, 230, '「12-φ15」 = 지름 15 구멍 12 개 (개수 - 지름)', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 246, s);
    } },
  tUnfold: cp('투상도 제3각법 마스터/t-unfold', /제3각|3각법|저면도|배면도|좌측면도|우측면도|정면도.{0,20}평면도|평면도.{0,20}정면도|입체도|정면도는 어느/,
    { not: /기하|공차|측정|풀리|치수|기어|보조|국부|회전|부분 ?(확대|투상|단면)|기호/, cards: ['기계제도|투상도의 종류와 제1각법·제3각법 ★★'] }),
  tMark: cp('투상도 제3각법 마스터/t-mark', /각법 ?기호|각법의 (표시 ?)?기호|투상법의 기호|제1각법의 기호|1각법 기호|제?[13]각법을 나타내는/),
  proj13: cp('3D프린터 마스터/proj13', /눈 ?→|1상한|3상한/),
  half: cp('단면도 규칙 마스터/half', /한쪽 ?단면도|반단면|1\/4로 절단/, { cards: ['기계제도|단면도의 종류와 단면하지 않는 부품 ★★'] }),
  full: cp('단면도 규칙 마스터/full', /온 ?단면도|전 ?단면도/, { cards: ['기계제도|단면도의 종류와 단면하지 않는 부품 ★★'] }),
  partial: cp('단면도 규칙 마스터/partial', /부분 ?단면도/, { cards: ['기계제도|단면도의 종류와 단면하지 않는 부품 ★★'] }),
  revolved: cp('단면도 규칙 마스터/revolved', /회전 ?(도시 ?)?단면/, { cards: ['기계제도|단면도의 종류와 단면하지 않는 부품 ★★'] }),
  offset: cp('단면도 규칙 마스터/offset', /계단 ?단면/),
  thin: cp('단면도 규칙 마스터/thin', /얇은 경우|두께가 얇은|아주 굵은 실선/),
  noSec: cp('단면도 규칙 마스터/noSecAssy', /길이 ?방향으로 (절단|단면)|단면하지|절단하지 않|단면하여 도면/, { cards: ['기계제도|단면도의 종류와 단면하지 않는 부품 ★★'] }),
  hatchBreak: cp('단면도 규칙 마스터/hatchBreak', /해칭을? 중단|해칭선은 어떠한/),
  hatchAdj: cp('단면도 규칙 마스터/hatchAdj', /해칭/, { not: /중단|어떠한|가는 실선/ }),
  fit3: cp('기계제도 기호 마스터/fit-3', /끼워 ?맞춤|헐거운|억지|중간 끼워/, { cards: ['기계제도|끼워맞춤의 종류와 틈새·죔새 ★★★'] }),
  fitCalc: cp('기계제도 기호 마스터/fit-calc', /최대 ?틈새|최소 ?틈새|최대 ?죔새|최소 ?죔새/, { cards: ['기계제도|끼워맞춤의 종류와 틈새·죔새 ★★★'] }),
  basis: cp('기계제도 기호 마스터/basis', /구멍 ?기준식|축 ?기준식|공차역의 위치|공차의 등급|H7과/),
  tolTerms: cp('기계제도 기호 마스터/tol-terms', /치수 ?공차|치수 ?허용차|허용 ?치수|허용 ?한계|기준 ?치수/, { not: /기하|누적|기입법|기입 방법/, cards: ['기계제도|치수공차 용어와 IT 기본공차 ★★★'] }),
  lay6: { ex: /줄무늬|거의 동심원/, cards: ['기계제도|표면거칠기·다듬질 기호와 줄무늬 방향 ★★★'], cap: '줄무늬 방향 기호 — 가공 자국(커터 줄무늬)이 어떻게 났는가 (= ⊥ X M C R)',
    draw: function () {
      var s = '';
      var items = [['=', '투상면에 평행'], ['⊥', '투상면에 직각'], ['X', '두 방향으로 교차'], ['M', '여러 방향 · 무방향'], ['C', '중심에 동심원'], ['R', '중심에서 방사상']];
      items.forEach(function (it, i) {
        var col = i % 2, row = Math.floor(i / 2), x = 20 + col * 232, y = 2 + row * 92, cx = x + 40, cy = y + 50, o = '';
        o += box(x, y + 12, 80, 76, { fill: C.paper, c: C.ink, r: 2, w: 1.4 });
        var k;
        if (i === 0) for (k = 0; k < 6; k++) o += line(x + 6, y + 22 + k * 12, x + 74, y + 22 + k * 12, { w: 1 });
        if (i === 1) for (k = 0; k < 6; k++) o += line(x + 10 + k * 12, y + 18, x + 10 + k * 12, y + 82, { w: 1 });
        if (i === 2) o += F.hatch(x, y + 12, 80, 76, { gap: 13 }) + '<g transform="translate(' + (x + 80) + ' ' + (y + 12) + ') scale(-1 1)">' + F.hatch(0, 0, 80, 76, { gap: 13 }) + '</g>';
        if (i === 3) [[10, 30, 30, 20], [24, 50, 50, 34], [8, 70, 40, 76], [44, 22, 70, 46], [52, 60, 72, 80], [30, 40, 20, 62], [60, 30, 48, 70]].forEach(function (q) { o += F.path('M' + (x + q[0]) + ',' + (y + 12 + q[1]) + ' q8,-6 ' + (q[2] - q[0]) + ',' + (q[3] - q[1]), { w: 1 }); });
        if (i === 4) for (k = 1; k < 5; k++) o += F.circle(cx, cy, k * 8, { fill: 'none', w: 1 });
        if (i === 5) for (k = 0; k < 12; k++) { var a = k * Math.PI / 6; o += line(cx + 6 * Math.cos(a), cy + 6 * Math.sin(a), cx + 34 * Math.cos(a), cy + 34 * Math.sin(a), { w: 1 }); }
        s += o + box(x, y + 12, 80, 76, { fill: 'none', c: C.ink, r: 2, w: 1.4 });
        s += t(x + 96, y + 36, it[0], { b: 1, size: 24, c: C.blue }) + t(x + 96, y + 66, it[1], { size: 13.5 });
        
      });
      return F.svg(480, 286, s);
    } },
  ry: cp('기계제도 기호 마스터/ry', /Rmax|최대 ?높이 ?거칠기/),
  ra: cp('기계제도 기호 마스터/ra', /\bRa\b|산술 평균|중심선 평균/),
  cutoff: cp('기계제도 기호 마스터/cutoff', /컷 ?오프|λc/),
  gdtform: cp('기계요소설계 마스터/gdtform', /모양 ?공차|단독 ?형체|진직도|평면도 ?공차|평면도\(|진원도|원통도|윤곽도/, { not: /MMC|최대 실체/, cards: ['기계제도|기하공차와 데이텀 ★★★'] }),
  gdtother: cp('기계요소설계 마스터/gdtother', /자세 ?공차|위치 ?공차|평행도|직각도|경사도|위치도|동심도|동축도|대칭도|흔들림/, { not: /MMC|최대 실체/, cards: ['기계제도|기하공차와 데이텀 ★★★'] }),
  geoFrame: cp('기계제도 기호 마스터/geo-frame', /기입 ?틀|기입하는 틀|공차 기입|기하공차 (도시|표기)/, { not: /일반 치수/ }),
  weldSide: cp('용접기호 마스터/side-3', /화살표 ?(쪽|반대쪽)|용접.{0,20}기준선|용접부의 기호|맞대기 ?용접/),
  weldFillet: cp('용접기호 마스터/fillet-za', /필릿|목 ?두께|\ba5\b/),
  rivetLength: { ex: /리벳의? 호칭 ?길이|머리부까지 포함/, cards: ['기계제도|키·핀·리벳·베어링 호칭 ★★'], cap: '리벳의 호칭 길이 — 접시머리 리벳만 머리까지 포함하고, 나머지는 머리를 빼고 잰다',
    draw: function () {
      var s = '';
      /* 둥근머리 */
      s += F.path('M70,60 A40,30 0 0,1 150,60 Z', { fill: C.blueL, c: C.blue, w: 2 }) + box(96, 60, 28, 140, { fill: C.blueL, c: C.blue, r: 2 });
      s += F.dim(124, 60, 124, 200, '', { off: 40, side: -1, c: C.red }) + t(176, 130, 'L', { b: 1, c: C.red, size: 18 });
      s += t(110, 226, '둥근머리 · 납작머리 · 냄비머리', { a: 'm', size: 13 }) + t(110, 246, '머리를 뺀 길이', { a: 'm', size: 14, b: 1, c: C.red });
      /* 접시머리 */
      s += F.path('M290,40 L370,40 L344,74 L316,74 Z', { fill: C.orangeL, c: C.orange, w: 2 }) + box(316, 74, 28, 126, { fill: C.orangeL, c: C.orange, r: 2 });
      s += F.dim(344, 40, 344, 200, '', { off: 50, side: -1, c: C.red }) + t(406, 120, 'L', { b: 1, c: C.red, size: 18 });
      s += t(330, 226, '접시머리', { a: 'm', size: 13 }) + t(330, 246, '머리까지 포함한 길이', { a: 'm', size: 14, b: 1, c: C.red });
      return F.svg(480, 262, s);
    } },
  material: cp('재료기호 마스터/three-parts', /S[MSF] ?\d|SS ?\d|재료 ?기호|SKH|\bSPS\b/, { not: /나사|선반|가공/, cards: ['기계제도|기계재료 표시법'] }),

  /* ════════ 전기 · 제어 / PLC ════════ */
  openClosed: cp('스마트공장 마스터/openClosed', /개회로|폐회로|피드백|되먹임|오픈 ?루프|닫힌 루프|폐루프|외란|정성적|정량적/, { not: /전달 ?함수|서보기구 방식/, cards: ['PLC·자동화|제어의 분류와 시퀀스 제어 ★★'] }),
  blockEq: cp('스마트공장 마스터/blockEq', /전달 ?함수|블록 ?선도/, { cards: ['PLC·자동화|제어의 분류와 시퀀스 제어 ★★'] }),
  pidCmp: cp('공기조화설비 마스터/pid', /잔류 ?편차|비례 ?(제어|동작)|P ?동작|적분 ?(제어|동작)/),
  stepResp: cp('스마트공장 마스터/stepResp', /미분 ?(동작|제어|조절)|D ?동작|PD 동작|비례 ?미분|속응성/),
  servoStep: cp('스마트공장 마스터/servoStep', /서보 ?모터|서보 ?전동기|스테핑|스텝 ?(모터|전동기)|펄스/, { not: /서보 ?센서|서보기구 방식|선형 스텝|플립플롭|클록/, cards: ['PLC·자동화|전동기의 종류와 제어 ★★'] }),
  proximity: cp('반도체설비보전 마스터/proximity', /유도형|정전 ?용량|용량형 (센서|근접)|근접 ?(센서|스위치)|금속체|금속만/, { not: /공압|접촉식/, cards: ['PLC·자동화|센서와 산업용 로봇 ★★'] }),
  photosensor: cp('반도체설비보전 마스터/photosensor', /광 ?센서|광센서|광전|투광|포토 ?인터럽트|광감지기/, { not: /접촉식|검출용 스위치/, cards: ['PLC·자동화|센서와 산업용 로봇 ★★'] }),
  detect: cp('기계수동조립 마스터/detect', /접촉식|비접촉|리밋 ?스위치|마이크로 ?스위치|검출용 스위치/, { not: /PLC 입력부/ }),
  timer: cp('기계수동조립 마스터/timer', /한시|순시|On ?Delay|Off ?Delay|OFF 지연|ON 지연|지연 ?타이머|설정시간 ?만큼|타이머/, { not: /공압|밸브|프로그램을 작성/, cards: ['PLC·자동화|접점과 제어용 기기 ★★'] }),
  latchPriority: { ex: /(ON|OFF|기동|정지) ?우선/, cards: ['PLC·자동화|접점과 제어용 기기 ★★'], cap: 'ON 우선과 OFF 우선 자기유지 — 두 버튼을 함께 눌렀을 때 켜지면 ON 우선, 꺼지면 OFF 우선',
    draw: function () {
      var s = '';
      function noC(x, y, lb, c) { return line(x, y, x + 12, y, { w: 1.6 }) + line(x + 12, y - 9, x + 12, y + 9, { w: 1.6 }) + line(x + 24, y - 9, x + 24, y + 9, { w: 1.6 }) + line(x + 24, y, x + 36, y, { w: 1.6 }) + t(x + 18, y - 18, lb, { a: 'm', size: 12.5, c: c || C.ink }); }
      function ncC(x, y, lb) { return noC(x, y, lb, C.red) + line(x + 8, y + 10, x + 28, y - 10, { w: 1.6, c: C.red }); }
      function coil(x, y) { return line(x, y, x + 12, y, { w: 1.6 }) + F.circle(x + 24, y, 12, { fill: C.paper, w: 1.6, label: 'R', size: 13 }) + line(x + 36, y, x + 48, y, { w: 1.6 }); }
      function rails(x0, x1, y0, y1) { return line(x0, y0, x0, y1, { w: 2.4 }) + line(x1, y0, x1, y1, { w: 2.4 }); }
      /* ON 우선 : [ON] ∥ ([OFF b] — [R-a]) → R */
      var X = 18;
      s += t(X + 100, 28, 'ON 우선', { a: 'm', b: 1, size: 16, c: C.green }) + rails(X, X + 214, 44, 158);
      s += line(X, 70, X + 10, 70, { w: 1.6 }) + noC(X + 10, 70, 'ON') + line(X + 46, 70, X + 130, 70, { w: 1.6 }) + coil(X + 130, 70) + line(X + 178, 70, X + 214, 70, { w: 1.6 });
      s += line(X, 124, X + 10, 124, { w: 1.6 }) + ncC(X + 10, 124, 'OFF') + noC(X + 46, 124, 'R-a', C.green) + line(X + 82, 124, X + 110, 124, { w: 1.6 }) + line(X + 110, 124, X + 110, 70, { w: 1.6 });
      s += t(X + 107, 178, 'OFF 가 유지 줄에만 있다', { a: 'm', size: 13 });
      /* OFF 우선 : [OFF b] — ([ON] ∥ [R-a]) → R */
      X = 254;
      s += t(X + 100, 28, 'OFF 우선 (정지 우선)', { a: 'm', b: 1, size: 16, c: C.red }) + rails(X, X + 214, 44, 158);
      s += line(X, 70, X + 6, 70, { w: 1.6 }) + ncC(X + 6, 70, 'OFF') + line(X + 42, 70, X + 54, 70, { w: 1.6 }) + noC(X + 54, 70, 'ON') + line(X + 90, 70, X + 130, 70, { w: 1.6 }) + coil(X + 130, 70) + line(X + 178, 70, X + 214, 70, { w: 1.6 });
      s += line(X + 48, 70, X + 48, 124, { w: 1.6 }) + line(X + 48, 124, X + 54, 124, { w: 1.6 }) + noC(X + 54, 124, 'R-a', C.green) + line(X + 90, 124, X + 106, 124, { w: 1.6 }) + line(X + 106, 124, X + 106, 70, { w: 1.6 });
      s += t(X + 107, 178, 'OFF 가 코일 바로 앞 공통 길에', { a: 'm', size: 13 });
      s += line(236, 40, 236, 200, { c: C.edge, w: 1.2 });
      s += t(240, 214, '빨간 사선 = b접점(누르면 열림) · 초록 = 자기유지 a접점', { a: 'm', size: 12.5, c: C.sub });
      return F.svg(480, 230, s);
    } },
  interlock: cp('기계수동조립 마스터/interlock', /인터록|정[·ㆍ]?역 ?(운전|회로)|정·역회로|동시 동작을 금지/, { not: /유압/, cards: ['PLC·자동화|접점과 제어용 기기 ★★'] }),
  ab: cp('시퀀스 PLC 마스터/ab', /a ?접점|b ?접점|A ?접점|R-a 접점/),
  selfhold: cp('기계수동조립 마스터/selfhold', /자기 ?유지/, { cards: ['PLC·자동화|접점과 제어용 기기 ★★'] }),
  solid: cp('기계수동조립 마스터/solid', /유접점|무접점/, { not: /코딩/ }),
  iecBlocks: { ex: /≧ ?1|&.{0,6}(요소|기호)|기능 ?다이어그램|기능선도/, cards: ['PLC·자동화|기본 논리회로 ★★★'], cap: '기능 다이어그램(IEC) 기호 — & 는 AND, ≥1 은 OR, 1 + 출력 동그라미는 NOT',
    draw: function () {
      var s = '';
      function blk(x, sym, ins, title, desc, c) {
        var o = box(x + 34, 60, 64, 84, { fill: C.paper, c: c, r: 2, w: 2 }) + t(x + 66, 78, sym, { a: 'm', b: 1, size: 20, c: c, halo: false });
        ins.forEach(function (n, i) { var y = ins.length === 1 ? 102 : 84 + i * 36; o += line(x + 4, y, x + 34, y, { w: 1.6 }) + t(x + 2, y - 10, n, { size: 12.5 }); });
        if (sym === '1') o += F.circle(x + 104, 102, 6, { fill: C.paper, w: 1.6, c: c }) + line(x + 110, 102, x + 132, 102, { w: 1.6 });
        else o += line(x + 98, 102, x + 132, 102, { w: 1.6 });
        o += t(x + 128, 90, 'L', { a: 'm', size: 12.5 });
        o += t(x + 68, 34, title, { a: 'm', b: 1, size: 16, c: c }) + t(x + 68, 168, desc, { a: 'm', size: 13 });
        return o;
      }
      s += blk(6, '&', ['S1', 'S2'], 'AND', '둘 다 1 이면 1', C.blue);
      s += blk(166, '≥1', ['S1', 'S2'], 'OR', '하나라도 1 이면 1', C.green);
      s += blk(326, '1', ['S1'], 'NOT', '반대로 (1 → 0)', C.red);
      s += t(240, 200, '래더로 옮기면 AND = 직렬 · OR = 병렬 · NOT = b접점', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 216, s);
    } },
  andOr: cp('디지털논리회로 마스터/switch-andor', /직렬 ?(연결|회로)|병렬 ?연결|PLC ?회로를 논리식|시퀀스 회로를 논리식|논리식으로 (표현|나타내)|PLC ?프로그램으로|제어기의 논리식/, { not: /블록|전달/, cards: ['PLC·자동화|기본 논리회로 ★★★'] }),
  ladderCmd: cp('시퀀스 PLC 마스터/ladder-cmd', /코딩|명령어 방식|스텝이 몇/),
  displacement: cp('시퀀스 PLC 마스터/displacement', /변위.?단계/, { cards: ['PLC·자동화|시퀀스 제어계의 표시법'] }),
  scan: cp('시퀀스 PLC 마스터/scan', /스캔 ?타임/, { cards: ['PLC·자동화|PLC의 특징과 구성 ★★'] }),
  plcIo: cp('시퀀스 PLC 마스터/plc-io', /PLC의 (주요 )?구성|PLC 기본 모듈|입력 ?장치|출력 ?장치|출력 ?인터페이스|PLC의 출력|PLC 입력부|입력장치로만|포토 ?커플러/, { not: /스트레인|로드 ?셀|D\/A/, cards: ['PLC·자동화|PLC의 특징과 구성 ★★'] }),
  relayPlc: cp('시퀀스 PLC 마스터/relay-plc', /계전기에 의한 제어|PLC의 특징/),
  doubleCoil: cp('시퀀스 PLC 마스터/double-coil', /이중 ?코일|동일한 출력 코일/),
  demorgan: cp('디지털논리회로 마스터/demorgan', /드모르간|쌍대/, { cards: ['PLC·자동화|불대수와 드모르간 정리 ★★'] }),
  simplify: cp('디지털논리회로 마스터/simplify', /간단히|간략|논리식이 틀린|A \+ A·B/, { not: /도시|기호/, cards: ['PLC·자동화|불대수와 드모르간 정리 ★★'] }),
  halfAdder: cp('디지털논리회로 마스터/half-adder', /반가산기|S=x/),
  ffSym: cp('디지털논리회로 마스터/ff-symbols', /JK ?플립|D ?플립|J-K|D\(Data|R-S 플립/),
  bcd: cp('디지털논리회로 마스터/bcd-digits', /BCD/),
  binWeights: { ex: /2진수 ?\d|\(2\) ?=|10진수 변환/, not: /BCD|보수/, cards: ['PLC·자동화|불대수와 드모르간 정리 ★★'], cap: '2진수 → 10진수 — 자리마다 2 의 거듭제곱(자리값)이 있고, 1 인 자리의 값만 더한다',
    draw: function () {
      var s = '', bits = ['1', '0', '1', '0', '1', '0'], w = [32, 16, 8, 4, 2, 1], x0 = 60;
      s += t(20, 40, '2진수', { b: 1, size: 14, c: C.sub }) + t(20, 112, '자리값', { b: 1, size: 14, c: C.sub });
      bits.forEach(function (b, i) {
        var x = x0 + i * 62, on = b === '1';
        s += box(x, 22, 52, 40, { fill: on ? C.blueL : C.grayL, c: on ? C.blue : C.grayM, r: 6, label: b, size: 22, lc: on ? C.blue : C.sub });
        s += line(x + 26, 64, x + 26, 88, { c: C.grayM, w: 1 });
        s += t(x + 26, 112, String(w[i]), { a: 'm', size: 18, b: on ? 1 : 0, c: on ? C.blue : C.sub });
        s += t(x + 26, 134, '2' + ['⁵', '⁴', '³', '²', '¹', '⁰'][i], { a: 'm', size: 13, c: C.sub });
      });
      s += t(240, 172, '101010₍₂₎ = 32 + 8 + 2 = 42', { a: 'm', b: 1, size: 18 });
      s += t(240, 198, 'BCD 는 다르다 — 10진수 한 자리마다 4비트 (56 → 0101 0110)', { a: 'm', size: 13, c: C.sub });
      return F.svg(480, 214, s);
    } },
  complement: cp('디지털논리회로 마스터/complement', /\d의 보수/),
  waveAd: cp('디지털논리회로 마스터/wave-ad', /아날로그 ?신호|아날로그 ?제어|디지털 ?제어|연속적 출력|양자화/, { not: /스테핑|모터/ }),

  /* ════════ 이 도구의 이론 카드에 이미 있던 그림 (가져다 씀) ════════ */
  symDevice: cp('시퀀스 PLC 마스터/sym-device', /전동기를 표시/),
  cylDraw: cp('전개도 마스터/cylDraw', /원통을 만들고자|강판의 크기/),
  triSplit: cp('전개도 마스터/triSplit', /편심 원뿔|삼각형법/),
  'th-geartypes': th('기계요소·조립|기어의 종류와 모듈 ★★', /헬리컬 ?기어|베벨 ?기어|웜 ?기어|내접 ?기어|하이포이드|어느 기어/, { not: /제도|도시|요목표|잇줄|창성|호브|호빙/ }),
  'th-bearing': th('기계요소·조립|베어링·커플링·브레이크 ★★', /베어링.{0,15}수명|수명은 몇 배/),
  'th-keys': th('기계요소·조립|키·핀·코터 ★★', /성크 ?키|묻힘 ?키|반달 ?키|접선 ?키|미끄럼 ?키|페더 ?키|안장 ?키|키\(Key\)/, { not: /단면|슬로팅|도면/ }),
  'th-nutlock': th('기계요소·조립|볼트·너트와 풀림 방지법 ★★', /풀림 ?방지|와셔/, { not: /단면/ }),
  'th-speed': th('전기·제어|유량제어밸브와 속도제어 회로 ★★★', /미터 ?인|미터 ?아웃|블리드 ?오프|속도 ?제어 ?회로|속도제어방식/, { not: /압력설정/ }),
  'th-dcv': th('전기·제어|방향제어밸브 ★★★', /포트 ?\d ?위치|\d\/\d ?way|\d포트|포트의 (개수|수)|위치의 수/),
  'th-pcv': th('전기·제어|압력제어밸브 ★★', /릴리프|감압|시퀀스 ?밸브|카운터 ?밸런스|언로딩|무부하 ?(밸브|회로)|압력 ?제어 ?밸브|압력제어 밸브/),
  'th-cyl': th('전기·제어|유압 실린더와 부속장치 ★★', /양 ?로드|텔레스코프|탠덤 ?실린더|단동 ?실린더|복동 ?실린더|충격 ?실린더|격판 실린더/),
  'th-service': th('전기·제어|공기압 발생·청정화 장치 ★★', /에어 ?드라이어|공기 ?건조기|흡착식|흡수식|공기건조기/),
  'th-pump': th('전기·제어|유압 펌프와 모터 ★★', /캐비테이션|공동 ?현상|기어 ?(펌프|모터)|베인 ?(펌프|모터)|피스톤 ?펌프|펌프의? (전 ?효율|동력)|유압 ?모터의 종류|비용적형|펌프가 기름을|펌프동력|펌프 동력/, { not: /탱크|방향 ?제어|유량 ?조절|릴리프/ }),
  'th-symbols': th('전기·제어|공유압 기호 읽기', /가열기|냉각기.{0,6}기호|필터를 나타내는 기호|필터의 기호|압력 스위치|온도계/, { not: /나사|재료|기하|베어링|줄무늬|논리|측온|셔틀/ }),
  'th-ph': th('전기·제어|공압과 유압의 비교', /공압시스템의 특징|공기압 및 유압|동력전달 비용|공압 모터의 특징/),
  'th-taper': th('기계가공·측정|선반의 구조·부속장치와 테이퍼 ★★', /편위|테이퍼를? (가공|절삭)/),
  'th-mill': th('기계가공·측정|밀링 상향·하향절삭과 분할법 ★★★', /상향 ?절삭|하향 ?절삭/),
  'th-measerr': th('기계가공·측정|측정기와 측정오차 ★★', /우연오차|측정기에 대한|직접 측정기|다이얼 ?게이지|공기 ?마이크로미터|측정값을 얻었다면/),
  'th-toolmat': th('기계가공·측정|절삭공구 재료 ★★', /고속도강|초경|세라믹|서멧|CBN|질화붕소|스텔라이트/, { not: /절삭 ?속도|가공 ?시간|결합제|마모|크레이터/ }),
  'th-drillm': th('기계가공·측정|드릴링·보링 머신', /보링 ?머신|보링머신|보링 ?바/),
  'th-gearcut': th('기계가공·측정|기어가공·정밀입자가공·특수가공', /창성|호브|호빙|셰이빙/, { not: /약호|기호|요목표/ }),
  'th-cnc': th('기계가공·측정|CNC 가공 — G코드·M코드', /S는 주축|G04|M ?기능|보조 ?기능|보조기능|어드레스|M08/, { not: /PLC|버스/ }),
  'th-lines': th('기계제도|선의 종류·용도와 우선순위 ★★', /가는 ?(실선|1점 ?쇄선|2점 ?쇄선|파선)|굵은 ?(실선|1점 ?쇄선)|가상선|파단선|특수 ?지정선|숨은선|절단선/, { not: /나사|기어|스프로킷|치수 밑|밑줄/ }),
  'th-views': th('기계제도|투상도의 표시방법 (보조·부분·국부·회전·확대)', /보조 ?투상도|국부 ?투상도|부분 ?확대도|회전 ?투상도|부분 ?투상도/),
  'th-dimline': th('기계제도|치수기입의 원칙과 치수보조기호 ★★★', /(직렬|병렬|누진|좌표|직선|공간|복합) ?치수 ?기입|치수 ?배치|치수배치/),
  'th-surface': th('기계제도|표면거칠기·다듬질 기호와 줄무늬 방향 ★★★', /제거 ?가공|다듬질 ?면|다듬면|가공 여부를 묻지/),
  'th-thread': th('기계제도|나사의 호칭과 도시법 ★★★', /나사.{0,20}(도시|그린다|그림에서)|골 ?지름|불완전 ?나사부|완전 ?나사부|피치원 지름선/),
  'th-geardraw': th('기계제도|기어·스프링·축 제도', /(기어|스프로킷).{0,30}(제도|도시)|이끝원|잇봉우리원|피치원은|피치원을 나타내는|요목표|잇줄/),
  'th-paper': th('기계제도|도면의 크기와 양식', /철하지|A[0-4] ?(크기|용지)|도면의 크기/),
  'th-logic': th('PLC·자동화|기본 논리회로 ★★★', /XOR|EX-OR|배타적|NOR|NAND|XNOR|일치 ?회로|AND ?회로|OR ?회로|논리 ?게이트|진리표|타임차트의 논리|AND 논리|NOT 게이트|AND 게이트|OR 게이트/),
  'th-bool': th('PLC·자동화|불대수와 드모르간 정리 ★★', /불 ?대수|불 논리식|논리대수식|논리방정식/),
  'th-ctrl': th('PLC·자동화|제어의 분류와 시퀀스 제어 ★★', /시퀀스 ?제어|제어계|신호처리 방식|논리 ?제어|동기 ?제어|추종 ?제어|프로세스 ?제어|서보 ?기구 제어/),
  'th-plc': th('PLC·자동화|PLC의 특징과 구성 ★★', /PLC/, { not: /스캔|코딩|논리식|명령어/ }),
  'th-robot': th('PLC·자동화|센서와 산업용 로봇 ★★', /로봇/),
  'th-fire': th('작업안전|화재와 소화·전기 안전 ★★', /화재/, { not: /작동유/ }),
  'th-handsafe': th('작업안전|기계·수공구 작업의 안전 ★', /장갑|해머/, { not: /피닝/ })
  };
})();

/* ── 해설에 붙일 그림 고르기 ──
   q: 문항 {q, choices, answer, explain} · 돌려주는 값: 그림 키 배열(최대 max 장) */
window.explFigKeys = function (q, max) {
  var F = window.FIGS || {}, out = [];
  if (!q) return out;
  /* 보기 전부가 아니라 정답 보기만 — 오답 보기 글자에 엉뚱한 그림이 걸리지 않게 */
  var hay = [q.q || '', (q.choices || [])[(q.answer || 0) - 1] || '', q.explain || ''].join(' ');
  for (var k in F) {
    var e = F[k];
    if (!e || !e.ex || !e.draw) continue;
    if (!e.ex.test(hay)) continue;
    if (e.not && e.not.test(hay)) continue;
    out.push(k);
    if (out.length >= (max || 2)) break;
  }
  return out;
};
/* ── 이론 카드('과목|카드 제목')에 함께 붙일 그림 ── */
window.cardFigKeys = function (cardKey) {
  var F = window.FIGS || {}, out = [];
  for (var k in F) { var e = F[k]; if (e && e.draw && e.cards && e.cards.indexOf(cardKey) >= 0) out.push(k); }
  return out;
};
