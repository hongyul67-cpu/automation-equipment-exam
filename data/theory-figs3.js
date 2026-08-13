/* 이론 개념 도해 3차 (나머지 카드 보강) — 키: "과목|개념카드 제목" */
(function(){
var S='font-family:"Malgun Gothic",sans-serif';
function f(svg,cap){return {svg:svg,cap:cap};}
var F3 = {

"기계제도|기계재료 표시법":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.3">
<text x="40" y="46" stroke="none" font-size="30" font-weight="700" letter-spacing="4">SM45C</text>
<line x1="48" y1="56" x2="48" y2="72" stroke-width="1"/><line x1="86" y1="56" x2="86" y2="72" stroke-width="1"/><line x1="132" y1="56" x2="132" y2="72" stroke-width="1"/>
<text x="26" y="88" stroke="none" font-size="11">S=강</text><text x="62" y="88" stroke="none" font-size="10.5">M=기계구조</text><text x="140" y="88" stroke="none" font-size="10.5">45C</text>
<text x="40" y="112" stroke="none" font-size="12.5">→ 탄소 함유량 <tspan font-weight="700" fill="#dc2626">0.45%</tspan></text>
<line x1="250" y1="14" x2="250" y2="140" stroke-dasharray="5 4" stroke-width="1"/>
<text x="270" y="30" stroke="none" font-weight="700" fill="#2563eb">숫자의 의미 구분</text>
<text x="272" y="54" stroke="none"><tspan font-weight="700">SS 400</tspan> → 최저인장강도 400[N/㎟]</text>
<text x="272" y="76" stroke="none"><tspan font-weight="700">SF 340A</tspan> → 단강품, 인장강도 340</text>
<text x="272" y="98" stroke="none"><tspan font-weight="700">GC 200</tspan> → 회주철, 인장강도 200</text>
<text x="272" y="120" stroke="none"><tspan font-weight="700">SM 45C</tspan> → <tspan fill="#dc2626">탄소량 0.45%</tspan> (예외!)</text>
<text x="272" y="142" stroke="none" font-size="11">S=Steel · F=단조 · C=주조 · GC=회주철</text>
</g></svg>`,"SM○○C의 숫자만 탄소량, 나머지는 인장강도")],

"기계가공·측정|절삭공구 재료 ★★":[
f(`<svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<line x1="50" y1="120" x2="300" y2="120"/><line x1="50" y1="120" x2="50" y2="20"/>
<text x="8" y="24" stroke="none" font-size="10.5">경도</text><text x="256" y="138" stroke="none" font-size="10.5">온도 →</text>
<path d="M50 40 q30 4 50 40 q14 30 24 40" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="102" y="66" stroke="none" font-size="10" fill="#64748b">탄소공구강</text>
<path d="M50 34 q60 6 100 34 q26 20 40 52" fill="none" stroke="#2563eb" stroke-width="2"/>
<text x="150" y="82" stroke="none" font-size="10" fill="#2563eb">고속도강</text>
<path d="M50 28 q110 6 180 40 q30 16 40 52" fill="none" stroke="#dc2626" stroke-width="2"/>
<text x="196" y="66" stroke="none" font-size="10" fill="#dc2626">초경합금·세라믹</text>
<text x="330" y="26" stroke="none" font-weight="700" fill="#2563eb">고속도강 표준 조성</text>
<text x="332" y="48" stroke="none" font-size="13" font-weight="700">W 18 − Cr 4 − V 1</text>
<text x="330" y="76" stroke="none" font-weight="700" fill="#2563eb">난삭재 절삭</text>
<text x="332" y="98" stroke="none"><tspan font-weight="700">CBN</tspan> — 철과 반응 안 함</text>
<text x="332" y="116" stroke="none" font-size="10.5">담금질강·내열강 고속절삭</text>
<text x="332" y="140" stroke="none" font-size="10.5">다이아몬드 = 비철금속용</text>
</g></svg>`,"온도가 올라가도 경도를 유지하는 정도(고온경도)가 공구재료의 핵심")],

"기계가공·측정|드릴링·보링 머신":[
f(`<svg viewBox="0 0 520 186" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(24,22)"><rect x="20" y="0" width="14" height="46" fill="#e2e8f0"/><path d="M27 46 v18 l-5 8 h10 l-5 -8" fill="#94a3b8"/>
<rect x="0" y="76" width="70" height="12" fill="#f1f5f9"/><text x="0" y="112" stroke="none" font-weight="700">탁상 드릴링</text><text x="0" y="126" stroke="none" font-size="10">φ13 이하 작은 구멍</text></g>
<g transform="translate(160,22)"><line x1="10" y1="0" x2="10" y2="88" stroke-width="3"/><line x1="10" y1="14" x2="86" y2="14" stroke-width="3"/>
<rect x="66" y="14" width="12" height="30" fill="#94a3b8"/><path d="M72 44 v14 l-4 6 h8 l-4 -6" fill="#94a3b8"/>
<rect x="0" y="88" width="100" height="12" fill="#f1f5f9"/>
<path d="M40 8 h34" stroke="#dc2626" stroke-width="1.4"/><path d="M74 8 l-6 -3 v6 z" fill="#dc2626" stroke="none"/>
<text x="0" y="122" stroke="none" font-weight="700">레이디얼 드릴링</text><text x="-8" y="136" stroke="none" font-size="10">큰 공작물 고정·주축 이동</text></g>
<g transform="translate(330,22)"><rect x="0" y="30" width="90" height="46" fill="#f1f5f9"/>
<circle cx="30" cy="53" r="10" fill="#fff"/><circle cx="66" cy="53" r="10" fill="#fff"/>
<circle cx="30" cy="53" r="3" fill="#dc2626" stroke="none"/><circle cx="66" cy="53" r="3" fill="#dc2626" stroke="none"/>
<text x="0" y="112" stroke="none" font-weight="700">지그 보링</text><text x="-4" y="126" stroke="none" font-size="10">정밀한 구멍 <tspan font-weight="700">위치</tspan></text></g>
<text x="14" y="176" stroke="none" font-size="10.5">드릴링 머신 크기 = 뚫을 수 있는 최대 지름 · 주축~테이블 거리 · 주축 이송거리</text>
</g></svg>`,"큰 공작물은 레이디얼, 정밀한 구멍 위치는 지그 보링")],

"기계가공·측정|기어가공·정밀입자가공·특수가공":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">창성법 (기어 절삭)</text>
<g transform="translate(20,24)"><circle cx="44" cy="44" r="36" fill="none" stroke-width="1.6"/><circle cx="44" cy="44" r="26" fill="none" stroke-dasharray="10 3 2 3" stroke-width="1"/>
<path d="M8 20 h72" stroke-width="2"/><path d="M14 20 l6 -8 l6 8 M32 20 l6 -8 l6 8 M50 20 l6 -8 l6 8 M68 20 l6 -8 l6 8" fill="none" stroke="#2563eb" stroke-width="1.6"/>
<text x="0" y="100" stroke="none"><tspan font-weight="700">래크 커터</tspan> · 피니언 커터 · <tspan font-weight="700">호브</tspan></text>
<text x="0" y="116" stroke="none" font-size="10.5" fill="#dc2626">✘ 브로치는 창성법이 아님</text></g>
<line x1="250" y1="10" x2="250" y2="140" stroke-dasharray="5 4" stroke-width="1"/>
<text x="270" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">정밀 입자가공·특수가공</text>
<text x="272" y="40" stroke="none"><tspan font-weight="700">래핑</tspan> — 랩제로 정밀 다듬질(블록게이지)</text>
<text x="272" y="62" stroke="none"><tspan font-weight="700">호닝</tspan> — 구멍 <tspan font-weight="700">내면</tspan> 다듬질</text>
<text x="272" y="84" stroke="none"><tspan font-weight="700">슈퍼피니싱</tspan> — 미세 숫돌 + 진동</text>
<text x="272" y="106" stroke="none"><tspan font-weight="700">방전가공</tspan> — 전기 <tspan font-weight="700">전도체</tspan>만, 경도 무관</text>
<text x="272" y="128" stroke="none"><tspan font-weight="700">와이어컷</tspan> — 열변형 작고 소비전력 적음</text>
</g></svg>`,"창성법 3총사(래크·피니언·호브) — 브로치가 보기에 있으면 그게 답")],

"기계가공·측정|CNC 가공 — G코드·M코드":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">보간(補間) 지령</text>
<g transform="translate(20,24)">
<line x1="0" y1="70" x2="80" y2="70" stroke-dasharray="4 3" stroke-width="1"/><line x1="0" y1="70" x2="0" y2="10" stroke-dasharray="4 3" stroke-width="1"/>
<path d="M0 70 l70 -52" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="7 4"/>
<text x="20" y="30" stroke="none" font-size="10.5" fill="#64748b">G00 급속</text></g>
<g transform="translate(130,24)">
<line x1="0" y1="70" x2="80" y2="70" stroke-dasharray="4 3" stroke-width="1"/><line x1="0" y1="70" x2="0" y2="10" stroke-dasharray="4 3" stroke-width="1"/>
<path d="M0 70 l70 -52" stroke="#2563eb" stroke-width="2.5"/>
<text x="18" y="30" stroke="none" font-size="10.5" fill="#2563eb">G01 직선</text></g>
<g transform="translate(240,24)">
<line x1="0" y1="70" x2="80" y2="70" stroke-dasharray="4 3" stroke-width="1"/><line x1="0" y1="70" x2="0" y2="10" stroke-dasharray="4 3" stroke-width="1"/>
<path d="M0 70 a58 58 0 0 1 58 -52" fill="none" stroke="#16a34a" stroke-width="2.5"/>
<text x="8" y="26" stroke="none" font-size="10.5" fill="#16a34a">G02 시계(CW)</text></g>
<text x="352" y="34" stroke="none"><tspan font-weight="700">G03</tspan> 반시계(CCW)</text>
<text x="352" y="56" stroke="none"><tspan font-weight="700">G04</tspan> 일시정지</text>
<text x="352" y="76" stroke="none" font-size="10.5">1.5초 → X1.5 / U1.5 / <tspan font-weight="700">P1500</tspan></text>
<text x="352" y="98" stroke="none" font-size="10.5">(P는 소수점 없이 ms)</text>
<text x="14" y="128" stroke="none" font-size="11.5">주소 : <tspan font-weight="700">G</tspan> 준비기능 · <tspan font-weight="700" fill="#dc2626">M</tspan> 보조기능 · <tspan font-weight="700">S</tspan> 주축 · <tspan font-weight="700">T</tspan> 공구 · <tspan font-weight="700">F</tspan> 이송</text>
<text x="14" y="146" stroke="none" font-size="11">M03 주축정회전 · M05 주축정지 · M08 절삭유ON · M30 종료</text>
</g></svg>`,"G00은 급속(점선), G01은 직선 절삭, G02/G03은 원호")],

"기계요소·조립|정비용 공구와 측정기구":[
f(`<svg viewBox="0 0 520 168" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(22,26)"><circle cx="34" cy="34" r="24" fill="#f1f5f9"/><circle cx="34" cy="34" r="9" fill="#fff"/>
<path d="M10 34 h-10 M58 34 h10" stroke-width="2"/><path d="M34 4 v-8" stroke-width="2"/>
<path d="M0 34 v-16 M68 34 v-16" stroke-width="2"/>
<text x="0" y="82" stroke="none" font-weight="700">기어 풀러</text><text x="-6" y="96" stroke="none" font-size="10">기어·커플링 빼기</text></g>
<g transform="translate(160,26)"><rect x="18" y="10" width="16" height="46" fill="#e2e8f0"/>
<path d="M26 10 v-8" stroke-width="2"/><path d="M14 56 l12 10 l12 -10" fill="#fca5a5" stroke="#dc2626"/>
<rect x="0" y="66" width="56" height="12" fill="#f1f5f9"/>
<text x="-14" y="96" stroke="none" font-weight="700">스크류 엑스트랙터</text><text x="-8" y="110" stroke="none" font-size="10">부러진 볼트 빼기</text></g>
<g transform="translate(310,26)"><rect x="0" y="26" width="80" height="14" fill="#e2e8f0"/>
<path d="M80 20 h18 v26 h-18 z" fill="#94a3b8"/><circle cx="8" cy="33" r="7" fill="#f1f5f9"/>
<text x="0" y="82" stroke="none" font-weight="700">토크 렌치</text><text x="-4" y="96" stroke="none" font-size="10">규정 토크로 조임</text></g>
<text x="414" y="52" stroke="none" font-weight="700" fill="#2563eb" font-size="13">T = F × L</text>
<text x="410" y="74" stroke="none" font-size="10.5">길수록 작은 힘으로</text>
<text x="410" y="90" stroke="none" font-size="10.5">큰 토크</text>
<text x="22" y="160" stroke="none" font-size="11">검사 단계 : 소재 검사 → 부품 검사 → 조립 검사 → 성능 검사</text>
</g></svg>`,"부러진 볼트=스크류 엑스트랙터, 기어 빼기=기어 풀러")],

"기계요소·조립|벨트·체인 전동장치 ★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">V 벨트 단면</text>
<g transform="translate(18,26)">
<path d="M4 0 h26 l-6 22 h-14 z" fill="#cbd5e1"/><text x="8" y="38" stroke="none" font-size="10">M</text>
<path d="M42 0 h34 l-8 28 h-18 z" fill="#cbd5e1"/><text x="52" y="44" stroke="none" font-size="10">A</text>
<path d="M88 0 h42 l-10 34 h-22 z" fill="#cbd5e1"/><text x="102" y="50" stroke="none" font-size="10">B</text>
<path d="M142 0 h50 l-12 40 h-26 z" fill="#94a3b8"/><text x="160" y="56" stroke="none" font-size="10">C</text>
<text x="0" y="76" stroke="none" font-size="10.5">M &lt; A &lt; B &lt; C &lt; D &lt; <tspan font-weight="700">E</tspan> (E가 가장 큼)</text>
<text x="0" y="94" stroke="none" font-size="10.5">홈 각도 <tspan font-weight="700">40°</tspan> · 속도비 1:7까지</text></g>
<line x1="238" y1="8" x2="238" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="256" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">체인 전동</text>
<g transform="translate(262,24)">
<circle cx="26" cy="34" r="20" fill="none" stroke-width="1.6"/><circle cx="118" cy="34" r="14" fill="none" stroke-width="1.6"/>
<line x1="26" y1="14" x2="118" y2="20" stroke-width="2.4"/><line x1="26" y1="54" x2="118" y2="48" stroke-width="2.4"/>
<g fill="#334155" stroke="none"><circle cx="50" cy="15" r="2.5"/><circle cx="74" cy="17" r="2.5"/><circle cx="98" cy="19" r="2.5"/></g>
<text x="0" y="76" stroke="none" font-size="10.5">✔ <tspan font-weight="700">미끄럼 없는 일정 속도비</tspan></text>
<text x="0" y="92" stroke="none" font-size="10.5">✔ 초기 장력 불필요 → 베어링 하중 작음</text>
<text x="0" y="108" stroke="none" font-size="10.5" fill="#dc2626">✘ 진동·소음 크고 고속 부적합</text>
<text x="0" y="124" stroke="none" font-size="10">교환 기준 : 길이가 <tspan font-weight="700">5%</tspan> 이상 늘어남</text></g>
</g></svg>`,"V벨트는 M이 가장 작고 E가 가장 큼 / 체인은 미끄럼 없으나 고속 부적합")],

"작업안전|산업안전의 목적과 무재해 운동":[
f(`<svg viewBox="0 0 520 152" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">안전의 3요소 (3E)</text>
<g transform="translate(20,26)">
<circle cx="46" cy="40" r="34" fill="#dbeafe" opacity="0.75"/><circle cx="86" cy="40" r="34" fill="#dcfce7" opacity="0.75"/><circle cx="66" cy="72" r="34" fill="#fef3c7" opacity="0.75"/>
<text x="26" y="34" stroke="none" font-size="11" font-weight="700">교육</text><text x="86" y="34" stroke="none" font-size="11" font-weight="700">기술</text><text x="50" y="94" stroke="none" font-size="11" font-weight="700">관리</text></g>
<line x1="200" y1="8" x2="200" y2="132" stroke-dasharray="5 4" stroke-width="1"/>
<text x="220" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">무재해 운동 3원칙</text>
<g transform="translate(222,30)">
<rect x="0" y="0" width="86" height="34" fill="#f1f5f9"/><text x="20" y="22" stroke="none" font-weight="700">무의 원칙</text>
<rect x="96" y="0" width="86" height="34" fill="#f1f5f9"/><text x="112" y="22" stroke="none" font-weight="700">선취의 원칙</text>
<rect x="192" y="0" width="86" height="34" fill="#f1f5f9"/><text x="208" y="22" stroke="none" font-weight="700">참가의 원칙</text>
<text x="4" y="52" stroke="none" font-size="10">재해는 원래</text><text x="14" y="66" stroke="none" font-size="10">없어야 함</text>
<text x="100" y="52" stroke="none" font-size="10">사전에 예측·</text><text x="116" y="66" stroke="none" font-size="10">대응</text>
<text x="196" y="52" stroke="none" font-size="10">전원이 적극</text><text x="210" y="66" stroke="none" font-size="10">참여</text>
<text x="-206" y="106" stroke="none" font-size="9.5">3요소 : 최고경영자 경영자세 · 관리감독자 안전보건 추진 · 직장 자주활동</text></g>
</g></svg>`,"안전 3요소 = 교육·기술·관리 / 무재해 3원칙 = 무·선취·참가")],

"작업안전|재해의 원인과 재해율 계산 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">재해율 공식 — 분모와 곱하는 수</text>
<g transform="translate(16,26)">
<rect x="0" y="0" width="230" height="30" fill="#f1f5f9"/><text x="8" y="20" stroke="none">연천인율 = 재해자수 / 근로자수 × <tspan font-weight="700">1,000</tspan></text>
<rect x="0" y="36" width="230" height="30" fill="#fee2e2"/><text x="8" y="56" stroke="none">도수율 = 재해건수 / 근로시간 × <tspan font-weight="700" fill="#dc2626">1,000,000</tspan></text>
<rect x="0" y="72" width="230" height="30" fill="#f1f5f9"/><text x="8" y="92" stroke="none">강도율 = 손실일수 / 근로시간 × <tspan font-weight="700">1,000</tspan></text>
<text x="0" y="122" stroke="none" font-size="11">연천인율 = 도수율 × 2.4</text></g>
<line x1="264" y1="8" x2="264" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="284" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">재해의 원인</text>
<g transform="translate(286,26)">
<rect x="0" y="0" width="100" height="26" fill="#dbeafe"/><text x="8" y="18" stroke="none" font-size="11">불안전한 <tspan font-weight="700">상태</tspan></text>
<text x="0" y="42" stroke="none" font-size="10">물적 원인 : 작업환경·</text><text x="0" y="56" stroke="none" font-size="10">보호구·방호장치 결함</text>
<rect x="118" y="0" width="100" height="26" fill="#fef3c7"/><text x="126" y="18" stroke="none" font-size="11">불안전한 <tspan font-weight="700">행동</tspan></text>
<text x="118" y="42" stroke="none" font-size="10">인적 원인 : 안전조치</text><text x="118" y="56" stroke="none" font-size="10">불이행·위험접근</text>
<text x="0" y="84" stroke="none" font-size="11"><tspan font-weight="700">기인물</tspan> = 재해의 원인이 된 것</text>
<text x="0" y="104" stroke="none" font-size="11"><tspan font-weight="700">가해물</tspan> = 직접 접촉해 가해한 것</text>
<text x="0" y="122" stroke="none" font-size="10.5">하인리히 법칙 1 : 29 : 300</text></g>
</g></svg>`,"도수율만 100만, 나머지는 1,000을 곱한다")],

"작업안전|상해의 종류와 기계 안전사고":[
f(`<svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">기계 안전사고 (위험점)</text>
<g transform="translate(20,26)">
<rect x="0" y="10" width="60" height="20" fill="#94a3b8"/><rect x="0" y="52" width="60" height="20" fill="#f1f5f9"/>
<path d="M30 34 v14" stroke="#dc2626" stroke-width="2.5"/><path d="M30 48 l-5 -9 h10 z" fill="#dc2626" stroke="none"/>
<text x="0" y="92" stroke="none" font-weight="700" fill="#dc2626">끼임(협착)</text><text x="-6" y="106" stroke="none" font-size="10">왕복 부분 ↔ 고정 부분</text><text x="0" y="120" stroke="none" font-size="10">프레스·전단기</text></g>
<g transform="translate(150,26)">
<circle cx="26" cy="40" r="22" fill="none" stroke-width="1.6"/><circle cx="72" cy="40" r="22" fill="none" stroke-width="1.6"/>
<path d="M49 40 v-10" stroke="#dc2626" stroke-width="2"/><path d="M49 30 l-4 8 h8 z" fill="#dc2626" stroke="none"/>
<text x="12" y="92" stroke="none" font-weight="700">말림(권입)</text><text x="0" y="106" stroke="none" font-size="10">회전체에 감김</text></g>
<g transform="translate(280,26)">
<path d="M20 66 l14 -40 h6 l14 40 z" fill="#fee2e2" stroke="#dc2626"/>
<path d="M30 20 l-8 -10 M44 20 l8 -10 M37 16 v-12" stroke="#dc2626" stroke-width="1.6"/>
<text x="4" y="92" stroke="none" font-weight="700">폭발·파열</text><text x="0" y="106" stroke="none" font-size="10">압력용기·보일러</text></g>
<text x="382" y="42" stroke="none" font-weight="700" fill="#2563eb">위험의 5요소</text>
<text x="384" y="64" stroke="none" font-size="11">함정 · 충격 · 말림</text>
<text x="384" y="82" stroke="none" font-size="11">· 접촉 · 튀어나옴</text>
<text x="382" y="108" stroke="none" font-size="10.5">타박상 = 피하조직·</text><text x="384" y="122" stroke="none" font-size="10.5">근육부 손상</text>
</g></svg>`,"프레스의 대표 위험요소는 끼임(협착)")],

"작업안전|용접·연삭 등 특수작업 안전":[
f(`<svg viewBox="0 0 520 152" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">연삭 숫돌 안전</text>
<g transform="translate(24,24)">
<circle cx="46" cy="46" r="38" fill="#f1f5f9" stroke-width="2"/><circle cx="46" cy="46" r="10" fill="#fff"/>
<path d="M8 46 a38 38 0 0 1 76 0" fill="none" stroke="#2563eb" stroke-width="6"/>
<text x="60" y="16" stroke="none" font-size="10" fill="#2563eb">덮개</text>
<rect x="84" y="40" width="26" height="8" fill="#94a3b8"/>
<line x1="84" y1="44" x2="76" y2="44" stroke="#dc2626" stroke-width="2"/>
<text x="96" y="34" stroke="none" font-size="9.5" fill="#dc2626">3mm 이내</text>
<text x="0" y="104" stroke="none" font-size="11">작업 전 <tspan font-weight="700">3분</tspan> · 교체 후 <tspan font-weight="700">1분</tspan> 시운전</text>
<text x="0" y="120" stroke="none" font-size="11" fill="#dc2626">숫돌 <tspan font-weight="700">측면 사용 금지</tspan> · 정면에 서지 않기</text></g>
<line x1="270" y1="8" x2="270" y2="132" stroke-dasharray="5 4" stroke-width="1"/>
<text x="292" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">용접 유해광선</text>
<g transform="translate(294,26)">
<path d="M20 40 l-14 -12 M20 40 l-18 4 M20 40 l-8 16" stroke="#f59e0b" stroke-width="2"/>
<circle cx="26" cy="40" r="8" fill="#fde047" stroke="#b45309"/>
<text x="46" y="24" stroke="none" font-size="11"><tspan font-weight="700">적외선</tspan> → 백내장</text>
<text x="46" y="46" stroke="none" font-size="11"><tspan font-weight="700">자외선</tspan> → 전광성 안염</text>
<text x="46" y="68" stroke="none" font-size="11">가시광선 → 반사광 눈 상해</text>
<text x="0" y="94" stroke="none" font-size="11">차광 보안면 착용 · 우천 시 옥외작업 금지</text>
<text x="0" y="112" stroke="none" font-size="11">가스 용기는 <tspan font-weight="700">세워서</tspan> 보관, <tspan font-weight="700">40℃ 이하</tspan></text></g>
</g></svg>`,"연삭은 3분·1분 시운전, 용접은 적외선→백내장 자외선→전광성 안염")],

"전기·제어|공압과 유압의 비교":[
f(`<svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<rect x="14" y="24" width="234" height="108" fill="#eff6ff" stroke="#2563eb" stroke-width="1.6"/>
<text x="96" y="18" stroke="none" font-weight="700" fill="#2563eb" font-size="13">공압</text>
<text x="26" y="46" stroke="none">사용압력 <tspan font-weight="700">5~7 bar</tspan> · 힘 작음</text>
<text x="26" y="68" stroke="none">압축성 → <tspan font-weight="700" fill="#dc2626">정밀 속도제어 곤란</tspan></text>
<text x="26" y="90" stroke="none">✔ 인화·폭발 위험 없음, 과부하 안전</text>
<text x="26" y="112" stroke="none">✔ 대기 방출(회수 불필요) · ✘ 배기소음</text>
<rect x="272" y="24" width="234" height="108" fill="#fef3c7" stroke="#b45309" stroke-width="1.6"/>
<text x="352" y="18" stroke="none" font-weight="700" fill="#b45309" font-size="13">유압</text>
<text x="284" y="46" stroke="none">사용압력 <tspan font-weight="700">70~350 bar</tspan> · 힘 매우 큼</text>
<text x="284" y="68" stroke="none">비압축성 → <tspan font-weight="700" fill="#16a34a">정밀 속도제어 용이</tspan></text>
<text x="284" y="90" stroke="none">✘ 기름 누설·화재 위험</text>
<text x="284" y="112" stroke="none">✘ 탱크로 회수 필요 · 점도(온도) 영향</text>
</g></svg>`,"큰 힘·정밀 제어는 유압, 안전·간단은 공압")],

"전기·제어|유압 펌프와 모터 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">기어 펌프 (구조가 가장 간단)</text>
<g transform="translate(26,26)">
<rect x="0" y="4" width="104" height="76" rx="8" fill="#f1f5f9"/>
<circle cx="34" cy="42" r="24" fill="#fff" stroke-width="1.6"/><circle cx="72" cy="42" r="24" fill="#fff" stroke-width="1.6"/>
<path d="M34 18 v-6 M34 66 v6 M10 42 h-6 M58 42 h-8" stroke-width="1.2"/>
<path d="M-18 42 h18" stroke="#16a34a" stroke-width="2.4"/><path d="M0 42 l-9 -5 v10 z" fill="#16a34a" stroke="none" transform="translate(9,0)"/>
<text x="-24" y="34" stroke="none" font-size="10" fill="#16a34a">흡입</text>
<path d="M104 42 h20" stroke="#dc2626" stroke-width="2.4"/><path d="M124 42 l-9 -5 v10 z" fill="#dc2626" stroke="none"/>
<text x="106" y="34" stroke="none" font-size="10" fill="#dc2626">토출</text>
<text x="-4" y="104" stroke="none" font-size="10.5">차량·건설기계에 널리 사용 (외접·내접)</text></g>
<line x1="250" y1="8" x2="250" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="270" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">캐비테이션(공동현상) 원인</text>
<text x="272" y="40" stroke="none">• 펌프를 규정 속도 <tspan font-weight="700">이상으로 고속</tspan> 회전</text>
<text x="272" y="60" stroke="none">• 흡입 필터 막힘 · 급격한 유로 차단</text>
<text x="272" y="80" stroke="none">• 과부하 · 오일 <tspan font-weight="700">점도가 클</tspan> 경우</text>
<text x="272" y="100" stroke="none" fill="#dc2626">✘ 정격속도 <tspan font-weight="700">이하 저속</tspan> 회전은 원인 아님</text>
<text x="272" y="126" stroke="none" font-size="11">기름을 토출하지 않을 때 → <tspan font-weight="700">스트레이너</tspan> 점검</text>
<text x="272" y="144" stroke="none" font-size="11">펌프동력 L = P×Q/612 [kW]</text>
</g></svg>`,"고속 회전이 캐비테이션 원인 — ‘저속’ 보기는 오답")],

"전기·제어|공유압 기호 읽기":[
f(`<svg viewBox="0 0 520 162" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="10.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(24,24)"><path d="M24 0 l24 24 l-24 24 l-24 -24 z" fill="none"/><path d="M8 8 l32 32" stroke-width="1.6"/>
<text x="2" y="66" stroke="none" font-weight="700">냉각기</text><text x="-6" y="80" stroke="none">마름모+대각선</text></g>
<g transform="translate(126,24)"><path d="M24 0 l24 24 l-24 24 l-24 -24 z" fill="none"/><path d="M24 8 v32 M8 24 h32" stroke-width="1.6"/>
<text x="2" y="66" stroke="none" font-weight="700">가열기</text><text x="4" y="80" stroke="none">마름모+십자</text></g>
<g transform="translate(228,24)"><path d="M24 0 l24 24 l-24 24 l-24 -24 z" fill="none"/><line x1="24" y1="4" x2="24" y2="44" stroke-dasharray="4 3" stroke-width="1.4"/>
<text x="6" y="66" stroke="none" font-weight="700">필터</text><text x="-4" y="80" stroke="none">마름모+점선</text></g>
<g transform="translate(330,24)"><circle cx="24" cy="24" r="22" fill="none"/><line x1="24" y1="24" x2="36" y2="10" stroke-width="1.8"/><circle cx="24" cy="24" r="2.5" fill="#334155"/>
<text x="4" y="66" stroke="none" font-weight="700">압력계</text></g>
<g transform="translate(430,24)"><rect x="6" y="2" width="36" height="44" rx="18" fill="none"/><line x1="6" y1="24" x2="42" y2="24" stroke-width="1.4"/>
<text x="-6" y="66" stroke="none" font-weight="700">어큐뮬레이터</text></g>
<text x="24" y="120" stroke="none" font-size="11.5" font-weight="700" fill="#2563eb">조작 방식</text>
<text x="24" y="142" stroke="none" font-size="11">인력(버튼·레버·페달) · 기계(롤러·스프링·플런저) · <tspan font-weight="700">전자(솔레노이드)</tspan> · <tspan font-weight="700">파일럿</tspan></text>
</g></svg>`,"마름모 안의 표시로 구분 — 냉각기는 대각선, 가열기는 십자")],

"PLC·자동화|불대수와 드모르간 정리 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">드모르간의 정리</text>
<rect x="16" y="28" width="228" height="34" fill="#eff6ff"/>
<text x="30" y="51" stroke="none" font-size="14">(A · B)‾ = A‾ + B‾</text>
<rect x="16" y="68" width="228" height="34" fill="#eff6ff"/>
<text x="30" y="91" stroke="none" font-size="14">(A + B)‾ = A‾ · B‾</text>
<text x="16" y="122" stroke="none" font-size="11.5">부정을 나누면 기호(· ↔ +)가 <tspan font-weight="700">뒤집힌다</tspan></text>
<line x1="264" y1="8" x2="264" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="284" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">간소화의 무기</text>
<text x="286" y="42" stroke="none" font-size="13"><tspan font-weight="700">A + A‾ = 1</tspan>　　<tspan font-weight="700">A · A‾ = 0</tspan></text>
<text x="286" y="66" stroke="none" font-size="12">A+0=A · A+1=1 · A·1=A · A·0=0</text>
<text x="286" y="88" stroke="none" font-size="12">분배 : <tspan font-weight="700" fill="#dc2626">A(B+C) = AB + AC</tspan></text>
<text x="286" y="112" stroke="none" font-size="11.5">예) (AB + AB‾)·C = A·1·C = <tspan font-weight="700">AC</tspan></text>
<text x="286" y="134" stroke="none" font-size="11.5">예) A·A‾ + B = <tspan font-weight="700">B</tspan></text>
</g></svg>`,"A+Ā=1, A·Ā=0 두 개로 대부분의 간소화 문제가 풀린다")],

"PLC·자동화|전동기의 종류와 제어 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<circle cx="70" cy="66" r="40" fill="#f1f5f9" stroke-width="2"/><text x="56" y="74" stroke="none" font-size="22" font-weight="700">M</text>
<path d="M70 26 a40 40 0 0 1 28 12" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M102 42 l-6 8 l11 1 z" fill="#2563eb" stroke="none"/>
<text x="18" y="126" stroke="none" font-size="11">3상 중 <tspan font-weight="700">두 상을 바꾸면</tspan> 역회전</text>
<text x="160" y="30" stroke="none" font-weight="700" fill="#2563eb" font-size="14">Ns = 120 f / p [rpm]</text>
<text x="162" y="52" stroke="none" font-size="11">f : 주파수[Hz] · p : 극수</text>
<text x="162" y="74" stroke="none" font-size="11.5">예) 4극, 60Hz → <tspan font-weight="700">1,800 rpm</tspan></text>
<text x="160" y="102" stroke="none" font-weight="700" fill="#2563eb" font-size="13">슬립 s = (Ns − N) / Ns</text>
<text x="162" y="124" stroke="none" font-size="11.5"><tspan font-weight="700">s = 1 → 정지</tspan> · s = 0 → 동기속도</text>
<line x1="374" y1="8" x2="374" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="392" y="30" stroke="none" font-weight="700" fill="#2563eb">스테핑 모터</text>
<text x="394" y="54" stroke="none" font-size="11">펄스 1개 = 일정 각도</text>
<text x="394" y="76" stroke="none" font-size="11"><tspan font-weight="700">속도 = 펄스 주파수</tspan></text>
<text x="394" y="96" stroke="none" font-size="11"><tspan font-weight="700">회전각 = 펄스 수</tspan></text>
<text x="392" y="122" stroke="none" font-size="11">서보 = 응답 빠르고</text><text x="394" y="138" stroke="none" font-size="11">제어성 우수</text>
</g></svg>`,"Ns=120f/p 와 ‘스테핑 속도=주파수, 각도=펄스수’가 핵심")]

};
window.THEORY_FIGS = window.THEORY_FIGS || {};
for (var k in F3) { if (Object.prototype.hasOwnProperty.call(F3,k)) window.THEORY_FIGS[k] = F3[k]; }
})();
