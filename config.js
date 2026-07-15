// ─────────────────────────────────────────────────────────────
//  교사 설정 파일
//  Google Apps Script 웹앱을 배포한 뒤, 아래 따옴표 안에 /exec URL을 붙여넣으세요.
//  (배포 방법은 TEACHER-SETUP.md 참고)
//
//  · 비워두면  → 학습 기록이 "그 기기의 브라우저"에만 저장됩니다(교사 확인 불가).
//  · 채워두면  → 학생이 반·이름으로 어느 기기서든 이어하기 + 교사가 구글 시트로 확인.
// ─────────────────────────────────────────────────────────────
window.AUTOEXAM_CONFIG = {
  // 링크에 ?rc=<본인 exec URL> 이 있으면 그 주소(교사별 시트)가 우선합니다.
  // 없으면 아래 기본 주소로 갑니다. → 선생님마다 자기 시트로 이어하기가 분리돼요.
  syncUrl: (function(){ try { return new URLSearchParams(location.search).get('rc') || ""; } catch(e){ return ""; } })()
           || "https://script.google.com/macros/s/AKfycbx_3vHqONU7_rMHhgHqZ1Vqem6kd23SIyLLDplWn7DJbR_3V0ChVXanOjKg8fTQFIIvjg/exec"
};
