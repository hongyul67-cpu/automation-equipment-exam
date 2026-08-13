/* 이론 개념 도해 (SVG) — 키: "과목|개념카드 제목" */
(function(){
var S='font-family:"Malgun Gothic",sans-serif';
function f(svg,cap){return {svg:svg,cap:cap};}
window.THEORY_FIGS = {

"기계제도|선의 종류·용도와 우선순위 ★★":[
f(`<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g stroke="#334155" stroke-width="1.2" font-size="12" fill="#0f172a">
<text x="8" y="18">외형선 (굵은 실선)</text><line x1="200" y1="14" x2="500" y2="14" stroke-width="3"/>
<text x="8" y="46">숨은선 (가는 파선)</text><line x1="200" y1="42" x2="500" y2="42" stroke-dasharray="10 5"/>
<text x="8" y="74">중심선 (가는 1점 쇄선)</text><line x1="200" y1="70" x2="500" y2="70" stroke-dasharray="22 4 3 4"/>
<text x="8" y="102">가상선 (가는 2점 쇄선)</text><line x1="200" y1="98" x2="500" y2="98" stroke-dasharray="22 4 3 4 3 4"/>
<text x="8" y="130">특수지정선 (굵은 1점 쇄선)</text><line x1="200" y1="126" x2="500" y2="126" stroke-width="3" stroke-dasharray="22 4 3 4"/>
<text x="8" y="158">파단선 (자유 실선)</text>
<path d="M200 154 h60 l8 -8 l10 16 l10 -16 l10 16 l8 -8 h194" fill="none"/>
<text x="8" y="186">해칭 (가는 실선 45°)</text>
<g stroke-width="1"><path d="M200 190 l16 -16 M216 190 l16 -16 M232 190 l16 -16 M248 190 l16 -16 M264 190 l16 -16 M280 190 l16 -16"/></g>
<rect x="196" y="172" width="104" height="20" fill="none" stroke-width="1.6"/>
</g></svg>`,"선의 종류별 모양 — 1점 쇄선(길게-짧게)과 2점 쇄선(길게-짧-짧)의 차이에 주의")],

"기계제도|투상도의 종류와 제1각법·제3각법 ★★":[
f(`<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="60" y="18" font-weight="700" fill="#2563eb">제1각법</text>
<rect x="70" y="90" width="60" height="45" fill="none"/><text x="78" y="117" stroke="none">정면도</text>
<rect x="0" y="90" width="60" height="45" fill="none" stroke-dasharray="4 3"/><text x="6" y="117" stroke="none" font-size="11">우측면도</text>
<rect x="70" y="145" width="60" height="45" fill="none" stroke-dasharray="4 3"/><text x="80" y="172" stroke="none">평면도</text>
<text x="14" y="215" stroke="none" font-size="11">평면도 ↓ 아래 · 우측면도 ← 왼쪽</text>
<line x1="260" y1="10" x2="260" y2="230" stroke-dasharray="5 4" stroke-width="1"/>
<text x="360" y="18" font-weight="700" fill="#2563eb">제3각법 (KS 기본)</text>
<rect x="330" y="90" width="60" height="45" fill="none"/><text x="338" y="117" stroke="none">정면도</text>
<rect x="400" y="90" width="60" height="45" fill="none" stroke-dasharray="4 3"/><text x="404" y="117" stroke="none" font-size="11">우측면도</text>
<rect x="330" y="35" width="60" height="45" fill="none" stroke-dasharray="4 3"/><text x="340" y="62" stroke="none">평면도</text>
<text x="312" y="215" stroke="none" font-size="11">평면도 ↑ 위 · 우측면도 → 오른쪽</text>
<g stroke-width="1.6"><path d="M120 232 l-18 -9 v18 z" fill="none"/><circle cx="150" cy="232" r="9" fill="none"/><circle cx="150" cy="232" r="4" fill="none"/><line x1="136" y1="232" x2="164" y2="232"/>
<circle cx="370" cy="232" r="9" fill="none"/><circle cx="370" cy="232" r="4" fill="none"/><line x1="356" y1="232" x2="384" y2="232"/><path d="M400 232 l18 -9 v18 z" fill="none"/></g>
</g></svg>`,"기호에서 원뿔이 왼쪽이면 제1각법, 오른쪽이면 제3각법")],

"기계제도|단면도의 종류와 단면하지 않는 부품 ★★":[
f(`<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="30" y="16" fill="#2563eb" stroke="none" font-weight="700">온 단면도(1/2)</text>
<rect x="20" y="30" width="110" height="80" fill="none"/>
<g stroke-width="0.9"><path d="M22 108 l20 -20 M42 108 l20 -20 M62 108 l20 -20 M82 108 l20 -20 M102 108 l20 -20 M22 88 l20 -20 M42 88 l20 -20 M62 88 l20 -20 M82 88 l20 -20 M102 88 l20 -20 M22 68 l20 -20 M42 68 l20 -20 M62 68 l20 -20 M82 68 l20 -20 M102 68 l20 -20 M42 48 l20 -20 M62 48 l20 -20 M82 48 l20 -20"/></g>
<text x="22" y="130" stroke="none" font-size="11">전체를 절단</text>
<text x="200" y="16" fill="#2563eb" stroke="none" font-weight="700">한쪽 단면도(1/4)</text>
<rect x="195" y="30" width="110" height="80" fill="none"/>
<line x1="250" y1="30" x2="250" y2="110" stroke-dasharray="18 3 2 3"/>
<g stroke-width="0.9"><path d="M197 108 l20 -20 M217 108 l20 -20 M237 108 l13 -13 M197 88 l20 -20 M217 88 l20 -20 M237 88 l13 -13 M197 68 l20 -20 M217 68 l20 -20 M237 68 l13 -13 M217 48 l20 -20 M237 48 l13 -13"/></g>
<text x="197" y="130" stroke="none" font-size="11">대칭형 → 내부+외부 동시</text>
<text x="380" y="16" fill="#2563eb" stroke="none" font-weight="700">부분 단면도</text>
<rect x="370" y="30" width="110" height="80" fill="none"/>
<path d="M370 75 q12 -14 24 0 t24 0 t24 6 v29 h-72 z" fill="none" stroke-width="1.1"/>
<g stroke-width="0.9"><path d="M372 108 l20 -20 M392 108 l20 -20 M412 108 l20 -20 M432 108 l12 -12"/></g>
<text x="372" y="130" stroke="none" font-size="11">필요한 일부만 (경계=파단선)</text>
</g></svg>`,"절단 범위에 따른 단면도 구분")],

"기계제도|치수기입의 원칙과 치수보조기호 ★★★":[
f(`<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.2">
<text x="10" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">직렬 치수기입 (공차 누적)</text>
<line x1="15" y1="30" x2="15" y2="52"/><line x1="75" y1="30" x2="75" y2="52"/><line x1="145" y1="30" x2="145" y2="52"/><line x1="200" y1="30" x2="200" y2="52"/>
<g stroke-width="1"><line x1="15" y1="44" x2="75" y2="44" marker-start="url(#a)" marker-end="url(#a)"/><line x1="75" y1="44" x2="145" y2="44"/><line x1="145" y1="44" x2="200" y2="44"/></g>
<text x="38" y="40" stroke="none">30</text><text x="103" y="40" stroke="none">35</text><text x="165" y="40" stroke="none">28</text>
<text x="300" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">병렬 치수기입 (기준면 공통)</text>
<line x1="305" y1="26" x2="305" y2="80"/><line x1="365" y1="26" x2="365" y2="44"/><line x1="435" y1="26" x2="435" y2="60"/><line x1="490" y1="26" x2="490" y2="76"/>
<line x1="305" y1="40" x2="365" y2="40" stroke-width="1"/><text x="328" y="36" stroke="none">30</text>
<line x1="305" y1="56" x2="435" y2="56" stroke-width="1"/><text x="360" y="52" stroke="none">65</text>
<line x1="305" y1="72" x2="490" y2="72" stroke-width="1"/><text x="390" y="68" stroke="none">93</text>
<text x="10" y="105" fill="#2563eb" stroke="none" font-weight="700" font-size="12">누진 치수기입 (한 줄에 누적)</text>
<line x1="15" y1="118" x2="15" y2="145"/><line x1="75" y1="118" x2="75" y2="145"/><line x1="145" y1="118" x2="145" y2="145"/><line x1="200" y1="118" x2="200" y2="145"/>
<line x1="15" y1="138" x2="200" y2="138" stroke-width="1"/>
<circle cx="15" cy="138" r="3.5" fill="#334155"/>
<text x="8" y="158" stroke="none">0</text><text x="66" y="158" stroke="none">30</text><text x="136" y="158" stroke="none">65</text><text x="192" y="158" stroke="none">93</text>
<text x="300" y="105" fill="#2563eb" stroke="none" font-weight="700" font-size="12">치수보조기호</text>
<text x="305" y="125" stroke="none">φ 지름 · R 반지름 · Sφ 구의 지름</text>
<text x="305" y="142" stroke="none">□ 정사각형 · C 45°모따기 · t 두께</text>
<text x="305" y="159" stroke="none">( ) 참고치수 · [ ] 이론적으로 정확</text>
</g></svg>`,"공차가 누적되어도 좋으면 직렬, 누적을 피하려면 병렬·누진")],

"기계제도|끼워맞춤의 종류와 틈새·죔새 ★★★":[
f(`<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="20" y="16" fill="#16a34a" stroke="none" font-weight="700" font-size="12.5">헐거운 끼워맞춤</text>
<rect x="15" y="30" width="130" height="56" fill="#f1f5f9"/><rect x="35" y="44" width="90" height="28" fill="#bfdbfe"/>
<text x="26" y="105" stroke="none">구멍 &gt; 축 → 항상 <tspan fill="#16a34a" font-weight="700">틈새</tspan></text>
<text x="26" y="122" stroke="none" font-size="11">회전·미끄럼 운동부</text>
<text x="200" y="16" fill="#b45309" stroke="none" font-weight="700" font-size="12.5">중간 끼워맞춤</text>
<rect x="190" y="30" width="130" height="56" fill="#f1f5f9"/><rect x="200" y="38" width="110" height="40" fill="#fde68a"/>
<text x="196" y="105" stroke="none">틈새 또는 죔새</text><text x="196" y="122" stroke="none" font-size="11">위치 결정·정밀 조립</text>
<text x="375" y="16" fill="#dc2626" stroke="none" font-weight="700" font-size="12.5">억지 끼워맞춤</text>
<rect x="365" y="30" width="130" height="56" fill="#f1f5f9"/><rect x="360" y="26" width="140" height="64" fill="#fecaca"/>
<text x="371" y="105" stroke="none">구멍 &lt; 축 → 항상 <tspan fill="#dc2626" font-weight="700">죔새</tspan></text>
<text x="371" y="122" stroke="none" font-size="11">분해하지 않는 결합</text>
<text x="15" y="150" stroke="none" font-size="12">최대 죔새 = <tspan font-weight="700">축의 최대 − 구멍의 최소</tspan>　／　최대 틈새 = <tspan font-weight="700">구멍의 최대 − 축의 최소</tspan></text>
</g></svg>`,"파란색=축, 회색=구멍. H7/g6은 헐거운, H7/m6은 중간, H7/x6은 억지")],

"기계제도|표면거칠기·다듬질 기호와 줄무늬 방향 ★★★":[
f(`<svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="10" y="15" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">제거가공 지시</text>
<path d="M20 60 l14 -26 l14 26" fill="none"/><text x="16" y="78" stroke="none">기본(묻지 않음)</text>
<path d="M120 60 l14 -26 l14 26" fill="none"/><line x1="120" y1="60" x2="148" y2="60"/><text x="108" y="78" stroke="none">제거가공 필요</text>
<path d="M225 60 l14 -26 l14 26" fill="none"/><circle cx="239" cy="52" r="7" fill="none"/><text x="205" y="78" stroke="none">제거가공 불가</text>
<text x="330" y="15" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">줄무늬 방향 기호</text>
<text x="330" y="36" stroke="none">= 투상면에 <tspan font-weight="700">평행</tspan></text>
<text x="330" y="54" stroke="none">⊥ 투상면에 <tspan font-weight="700">직각</tspan></text>
<text x="330" y="72" stroke="none">X 경사·두 방향 <tspan font-weight="700">교차</tspan></text>
<text x="330" y="90" stroke="none">M <tspan font-weight="700">여러 방향</tspan>·무방향</text>
<text x="330" y="108" stroke="none">C 대략 <tspan font-weight="700">동심원</tspan></text>
<text x="330" y="126" stroke="none">R 대략 <tspan font-weight="700">방사상</tspan></text>
<text x="10" y="105" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">기입 위치</text>
<path d="M30 140 l16 -28 l16 28" fill="none"/><line x1="30" y1="140" x2="90" y2="140"/>
<text x="8" y="122" stroke="none" font-size="10">a: Ra값</text><text x="66" y="126" stroke="none" font-size="10">b: 가공방법</text>
<text x="96" y="140" stroke="none" font-size="10">c: 컷오프　d: 줄무늬 방향</text>
</g></svg>`,"삼각기호에 가로선을 그으면 ‘제거가공 필요’, 원을 붙이면 ‘제거가공 불가’")],

"기계제도|기하공차와 데이텀 ★★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="10" y="16" fill="#2563eb" stroke="none" font-weight="700">공차 기입틀 (왼쪽부터)</text>
<rect x="15" y="28" width="44" height="30" fill="none"/><rect x="59" y="28" width="80" height="30" fill="none"/><rect x="139" y="28" width="34" height="30" fill="none"/><rect x="173" y="28" width="34" height="30" fill="none"/>
<text x="27" y="49" stroke="none">⊕</text><text x="68" y="49" stroke="none" font-size="12">φ0.1</text><text x="150" y="49" stroke="none">A</text><text x="184" y="49" stroke="none">B</text>
<text x="15" y="76" stroke="none" font-size="11">기호</text><text x="76" y="76" stroke="none" font-size="11">공차값</text><text x="146" y="76" stroke="none" font-size="11">데이텀</text>
<text x="260" y="16" fill="#2563eb" stroke="none" font-weight="700">데이텀이 필요 없는 공차</text>
<text x="262" y="38" stroke="none" font-size="11.5">모양(단독형체) : 진직도 — · 평면도 ▱</text>
<text x="262" y="57" stroke="none" font-size="11.5">　진원도 ○ · 원통도 ⌭ · 윤곽도 ⌒</text>
<text x="260" y="82" fill="#2563eb" stroke="none" font-weight="700">데이텀이 필요한 공차</text>
<text x="262" y="103" stroke="none" font-size="11.5">자세 : 평행도 ∥ · 직각도 ⊥ · 경사도 ∠</text>
<text x="262" y="121" stroke="none" font-size="11.5">위치 : 위치도 ⊕ · 동축도 ◎ · 대칭도 ⌯</text>
<text x="262" y="139" stroke="none" font-size="11.5">흔들림 : 원주 ↗ · 온 흔들림 ↗↗</text>
<g><rect x="30" y="105" width="26" height="26" fill="none"/><text x="37" y="123" stroke="none">A</text><path d="M43 105 l-8 -12 h16 z" fill="#334155"/></g>
<text x="66" y="123" stroke="none" font-size="11">데이텀 삼각기호</text>
</g></svg>`,"단독형체(모양공차)는 데이텀이 붙지 않는다는 점이 핵심")],

"기계제도|나사의 호칭과 도시법 ★★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155">
<text x="15" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">수나사</text>
<rect x="20" y="30" width="150" height="48" fill="none" stroke-width="2.4"/>
<line x1="20" y1="38" x2="170" y2="38" stroke-width="1"/><line x1="20" y1="70" x2="170" y2="70" stroke-width="1"/>
<line x1="170" y1="30" x2="196" y2="30" stroke-width="2.4"/><line x1="170" y1="78" x2="196" y2="78" stroke-width="2.4"/>
<text x="25" y="98" stroke="none">바깥지름=<tspan font-weight="700">굵은 실선</tspan> / 골지름=가는 실선</text>
<text x="300" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">암나사</text>
<rect x="300" y="30" width="150" height="48" fill="none" stroke-width="1"/>
<line x1="300" y1="38" x2="450" y2="38" stroke-width="2.4"/><line x1="300" y1="70" x2="450" y2="70" stroke-width="2.4"/>
<text x="300" y="98" stroke="none">안지름=<tspan font-weight="700">굵은 실선</tspan> / 골지름=가는 실선</text>
<text x="15" y="124" stroke="none" font-size="12">호칭 예 :　<tspan font-weight="700" fill="#2563eb">왼 2줄 M20×1.5−6H</tspan></text>
<text x="15" y="142" stroke="none" font-size="11">감김방향(왼) · 줄 수(2줄) · 호칭(M20) · 피치(1.5) · 등급(6H)　|　리드 l = 줄 수 n × 피치 p</text>
</g></svg>`,"‘보이는 지름은 굵은 실선’ — 수나사는 바깥, 암나사는 안")],

"기계제도|기어·스프링·축 제도":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155">
<text x="15" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">기어의 3선</text>
<circle cx="110" cy="80" r="56" fill="none" stroke-width="2.6"/>
<circle cx="110" cy="80" r="46" fill="none" stroke-width="1.2" stroke-dasharray="16 3 2 3"/>
<circle cx="110" cy="80" r="34" fill="none" stroke-width="1"/>
<line x1="110" y1="14" x2="110" y2="146" stroke-width="1" stroke-dasharray="16 3 2 3"/>
<line x1="44" y1="80" x2="176" y2="80" stroke-width="1" stroke-dasharray="16 3 2 3"/>
<text x="200" y="46" stroke="none">이끝원(잇봉우리원) = <tspan font-weight="700">굵은 실선</tspan></text>
<text x="200" y="70" stroke="none">피치원 = <tspan font-weight="700">가는 1점 쇄선</tspan></text>
<text x="200" y="94" stroke="none">이뿌리원(이골원) = <tspan font-weight="700">가는 실선</tspan></text>
<text x="200" y="112" stroke="none" font-size="11">(축 직각 단면에서는 굵은 실선)</text>
<text x="200" y="136" stroke="none" font-size="12">모듈 <tspan font-weight="700" fill="#2563eb">m = D / Z</tspan> (피치원 지름 ÷ 잇수)</text>
</g></svg>`,"바깥부터 이끝원(굵은실선) → 피치원(1점쇄선) → 이뿌리원(가는실선)")],

"기계가공·측정|밀링 상향·하향절삭과 분할법 ★★★":[
f(`<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="30" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">상향절삭 (Up)</text>
<circle cx="90" cy="60" r="32" fill="none"/><path d="M90 28 a32 32 0 0 1 26 14" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M120 36 l-4 8 l9 1 z" fill="#2563eb" stroke="none"/>
<rect x="20" y="92" width="150" height="26" fill="#f1f5f9"/>
<line x1="150" y1="105" x2="188" y2="105" stroke="#dc2626" stroke-width="2"/><path d="M188 105 l-9 -5 v10 z" fill="#dc2626" stroke="none"/>
<text x="20" y="136" stroke="none">커터 회전 ↔ 이송 <tspan font-weight="700">반대</tspan></text>
<text x="20" y="153" stroke="none" font-size="11">가공면 거칠고 공작물이 들림</text>
<line x1="260" y1="8" x2="260" y2="160" stroke-dasharray="5 4" stroke-width="1"/>
<text x="330" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">하향절삭 (Down)</text>
<circle cx="390" cy="60" r="32" fill="none"/><path d="M390 28 a32 32 0 0 0 -26 14" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M360 36 l4 8 l-9 1 z" fill="#2563eb" stroke="none"/>
<rect x="320" y="92" width="150" height="26" fill="#f1f5f9"/>
<line x1="450" y1="105" x2="488" y2="105" stroke="#dc2626" stroke-width="2"/><path d="M488 105 l-9 -5 v10 z" fill="#dc2626" stroke="none"/>
<text x="320" y="136" stroke="none">커터 회전 ↔ 이송 <tspan font-weight="700">같음</tspan></text>
<text x="320" y="153" stroke="none" font-size="9.5">가공면 깨끗·공구수명↑ (백래시 제거 필요)</text>
</g></svg>`,"빨간 화살표=공작물 이송 방향, 파란 화살표=커터 회전 방향")],

"기계가공·측정|선반의 구조·부속장치와 테이퍼 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<path d="M60 45 h230 l90 22 v14 l-90 22 h-230 z" fill="#f1f5f9"/>
<line x1="20" y1="78" x2="460" y2="78" stroke-dasharray="16 3 2 3" stroke-width="1"/>
<line x1="60" y1="45" x2="60" y2="111" stroke-width="1"/><line x1="290" y1="45" x2="290" y2="111" stroke-width="1"/><line x1="380" y1="67" x2="380" y2="89" stroke-width="1"/>
<text x="55" y="132" stroke="none">←　　　L (전체 길이)　　　→</text>
<line x1="60" y1="124" x2="380" y2="124" stroke-width="1"/>
<line x1="290" y1="34" x2="380" y2="34" stroke-width="1"/><text x="308" y="30" stroke="none">ℓ (테이퍼)</text>
<text x="396" y="60" stroke="none">D</text><text x="396" y="98" stroke="none">d</text>
<text x="15" y="20" fill="#2563eb" stroke="none" font-weight="700" font-size="13">심압대 편위량　e = L(D − d) / (2ℓ)</text>
</g></svg>`,"테이퍼 부분 길이 ℓ 과 공작물 전체 길이 L 을 반드시 구분해서 대입")],

"기계요소·조립|스프링과 축":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.6">
<text x="20" y="16" fill="#2563eb" stroke="none" font-weight="700">직렬 연결</text>
<line x1="60" y1="26" x2="60" y2="34"/>
<path d="M60 34 l-14 8 l28 8 l-28 8 l28 8 l-28 8 l14 8" fill="none"/>
<path d="M60 82 l-14 8 l28 8 l-28 8 l-28 8" fill="none" transform="translate(0,0)"/>
<path d="M60 82 l-14 8 l28 8 l-28 8 l28 8 l-28 8 l14 8" fill="none"/>
<line x1="60" y1="130" x2="60" y2="138"/>
<text x="88" y="60" stroke="none" font-size="11">k₁</text><text x="88" y="112" stroke="none" font-size="11">k₂</text>
<text x="20" y="150" stroke="none" font-weight="700" fill="#dc2626">1/k = 1/k₁ + 1/k₂</text>
<line x1="255" y1="8" x2="255" y2="145" stroke-dasharray="5 4" stroke-width="1"/>
<text x="320" y="16" fill="#2563eb" stroke="none" font-weight="700">병렬 연결</text>
<line x1="300" y1="30" x2="420" y2="30"/>
<path d="M330 30 l-12 8 l24 8 l-24 8 l24 8 l-24 8 l12 8" fill="none"/>
<path d="M390 30 l-12 8 l24 8 l-24 8 l24 8 l-24 8 l12 8" fill="none"/>
<line x1="300" y1="78" x2="420" y2="78"/>
<text x="344" y="58" stroke="none" font-size="11">k₁</text><text x="404" y="58" stroke="none" font-size="11">k₂</text>
<text x="300" y="150" stroke="none" font-weight="700" fill="#16a34a">k = k₁ + k₂</text>
</g></svg>`,"전기 저항과 반대 — 스프링은 병렬이 덧셈, 직렬이 역수 합")],

"전기·제어|유량제어밸브와 속도제어 회로 ★★★":[
f(`<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="18" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">미터 인</text>
<rect x="14" y="24" width="60" height="26" fill="#f1f5f9"/><line x1="44" y1="24" x2="44" y2="50"/>
<line x1="44" y1="50" x2="44" y2="78"/><rect x="30" y="78" width="28" height="18" fill="none" stroke="#dc2626"/>
<path d="M34 96 l20 -18" stroke="#dc2626"/><line x1="44" y1="96" x2="44" y2="120"/>
<text x="10" y="140" stroke="none"><tspan font-weight="700">유입</tspan>측 직렬</text><text x="6" y="156" stroke="none">→ 들어가는 유량 조절</text>
<line x1="176" y1="8" x2="176" y2="172" stroke-dasharray="5 4" stroke-width="1"/>
<text x="200" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">미터 아웃</text>
<rect x="196" y="24" width="60" height="26" fill="#f1f5f9"/><line x1="226" y1="24" x2="226" y2="50"/>
<line x1="226" y1="50" x2="226" y2="78"/><rect x="212" y="78" width="28" height="18" fill="none" stroke="#dc2626"/>
<path d="M216 96 l20 -18" stroke="#dc2626"/><line x1="226" y1="96" x2="226" y2="120"/>
<path d="M226 24 l0 -10" /><text x="192" y="140" stroke="none"><tspan font-weight="700">유출</tspan>측 직렬</text><text x="188" y="156" stroke="none">→ 관성 부하에 유리</text>
<line x1="356" y1="8" x2="356" y2="172" stroke-dasharray="5 4" stroke-width="1"/>
<text x="378" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">블리드 오프</text>
<rect x="374" y="24" width="60" height="26" fill="#f1f5f9"/><line x1="404" y1="24" x2="404" y2="50"/>
<line x1="404" y1="50" x2="404" y2="120"/>
<line x1="404" y1="76" x2="470" y2="76"/><rect x="456" y="86" width="28" height="18" fill="none" stroke="#dc2626"/>
<line x1="470" y1="76" x2="470" y2="86"/><path d="M460 104 l20 -18" stroke="#dc2626"/><line x1="470" y1="104" x2="470" y2="120"/>
<text x="374" y="140" stroke="none"><tspan font-weight="700">병렬</tspan>로 분기</text><text x="368" y="156" stroke="none">→ 남는 유량을 탱크로</text>
</g></svg>`,"빨간 사각형=유량조절밸브. 직렬이면 미터인/아웃, 병렬로 빼내면 블리드오프")],

"전기·제어|방향제어밸브 ★★★":[
f(`<svg viewBox="0 0 520 182" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="15" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">5/2-way 밸브 기호 읽기</text>
<g transform="translate(0,18)">
<rect x="60" y="34" width="70" height="52" fill="none"/><rect x="130" y="34" width="70" height="52" fill="none"/>
<path d="M72 78 l16 -32 M88 46 l4 8 M88 46 l-8 2 M104 46 l16 32 M120 78 l-2 -9 M120 78 l9 -2" fill="none"/>
<path d="M142 46 l16 32 M158 78 l-2 -9 M158 78 l9 -2 M174 78 l16 -32 M190 46 l4 8 M190 46 l-8 2" fill="none"/>
<line x1="88" y1="86" x2="88" y2="104"/><line x1="130" y1="86" x2="130" y2="104"/><line x1="110" y1="86" x2="110" y2="104"/>
<line x1="88" y1="34" x2="88" y2="18"/><line x1="130" y1="34" x2="130" y2="18"/>
<text x="82" y="118" stroke="none">R</text><text x="104" y="118" stroke="none">P</text><text x="126" y="118" stroke="none">S</text>
<text x="82" y="14" stroke="none">B</text><text x="126" y="14" stroke="none">A</text></g>
<text x="15" y="158" stroke="none"><tspan font-weight="700">포트 수</tspan> = 배관 개수(5) · <tspan font-weight="700">위치 수</tspan> = 네모칸 개수(2)</text>
<text x="290" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">포트 기호</text>
<text x="292" y="40" stroke="none"><tspan font-weight="700">P(1)</tspan> 공급 — 공기탱크와 연결</text>
<text x="292" y="62" stroke="none"><tspan font-weight="700">A, B(2,4)</tspan> 작업 — 실린더와 연결</text>
<text x="292" y="84" stroke="none"><tspan font-weight="700">R, S, T(3,5)</tspan> 배기 — 소음기로</text>
<text x="292" y="106" stroke="none"><tspan font-weight="700">X, Y, Z</tspan> 제어(파일럿) 라인</text>
<text x="292" y="134" stroke="none" font-size="11">기호로 알 수 없는 것 = <tspan font-weight="700">접속 형식</tspan></text>
</g></svg>`,"네모칸 개수가 위치 수, 한 칸에 연결된 선의 개수가 포트 수")],

"PLC·자동화|기본 논리회로 ★★★":[
f(`<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.6">
<g><path d="M30 26 h22 a22 22 0 0 1 0 40 h-22 z" fill="none"/><line x1="16" y1="34" x2="30" y2="34"/><line x1="16" y1="58" x2="30" y2="58"/><line x1="74" y1="46" x2="88" y2="46"/><text x="26" y="86" stroke="none" font-weight="700">AND</text><text x="20" y="102" stroke="none" font-size="10.5">모두 1일 때 1</text></g>
<g transform="translate(120,0)"><path d="M28 26 q22 20 0 40 q26 0 46 -20 q-20 -20 -46 -20 z" fill="none"/><line x1="14" y1="34" x2="30" y2="34"/><line x1="14" y1="58" x2="30" y2="58"/><line x1="74" y1="46" x2="88" y2="46"/><text x="30" y="86" stroke="none" font-weight="700">OR</text><text x="16" y="102" stroke="none" font-size="10.5">하나라도 1이면 1</text></g>
<g transform="translate(240,0)"><path d="M30 26 l36 20 l-36 20 z" fill="none"/><circle cx="71" cy="46" r="5" fill="none"/><line x1="16" y1="46" x2="30" y2="46"/><line x1="76" y1="46" x2="88" y2="46"/><text x="28" y="86" stroke="none" font-weight="700">NOT</text><text x="26" y="102" stroke="none" font-size="10.5">입력의 반대</text></g>
<g transform="translate(0,90)"><path d="M30 26 h22 a22 22 0 0 1 0 40 h-22 z" fill="none"/><circle cx="79" cy="46" r="5" fill="none"/><line x1="16" y1="34" x2="30" y2="34"/><line x1="16" y1="58" x2="30" y2="58"/><line x1="84" y1="46" x2="94" y2="46"/><text x="24" y="86" stroke="none" font-weight="700">NAND</text></g>
<g transform="translate(120,90)"><path d="M28 26 q22 20 0 40 q26 0 46 -20 q-20 -20 -46 -20 z" fill="none"/><circle cx="79" cy="46" r="5" fill="none"/><line x1="14" y1="34" x2="30" y2="34"/><line x1="14" y1="58" x2="30" y2="58"/><line x1="84" y1="46" x2="94" y2="46"/><text x="30" y="86" stroke="none" font-weight="700">NOR</text><text x="14" y="102" stroke="none" font-size="10.5">모두 0일 때만 1</text></g>
<g transform="translate(240,90)"><path d="M28 26 q22 20 0 40 q26 0 46 -20 q-20 -20 -46 -20 z" fill="none"/><path d="M20 26 q22 20 0 40" fill="none"/><line x1="8" y1="34" x2="24" y2="34"/><line x1="8" y1="58" x2="24" y2="58"/><line x1="74" y1="46" x2="88" y2="46"/><text x="26" y="86" stroke="none" font-weight="700">XOR</text><text x="16" y="102" stroke="none" font-size="10.5">서로 다를 때만 1</text></g>
<g transform="translate(370,10)" stroke-width="1.2">
<text x="0" y="10" stroke="none" font-weight="700" fill="#2563eb" font-size="12">회로 ↔ 논리</text>
<line x1="0" y1="34" x2="120" y2="34"/><circle cx="34" cy="34" r="4" fill="#fff"/><circle cx="52" cy="34" r="4" fill="#fff"/><circle cx="80" cy="34" r="4" fill="#fff"/><circle cx="98" cy="34" r="4" fill="#fff"/>
<text x="0" y="54" stroke="none" font-size="11">직렬 = <tspan font-weight="700">AND</tspan> (논리곱)</text>
<line x1="0" y1="80" x2="120" y2="80"/><path d="M20 80 v22 h80 v-22" fill="none"/>
<circle cx="52" cy="80" r="4" fill="#fff"/><circle cx="52" cy="102" r="4" fill="#fff"/>
<text x="0" y="126" stroke="none" font-size="11">병렬 = <tspan font-weight="700">OR</tspan> (논리합)</text>
</g></g></svg>`,"NOR은 ‘모두 없을 때만’, XOR은 ‘서로 다를 때만’ 출력")],

"PLC·자동화|접점과 제어용 기기 ★★":[
f(`<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.6">
<text x="15" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">접점의 종류</text>
<g transform="translate(20,30)"><line x1="0" y1="20" x2="20" y2="20"/><line x1="44" y1="20" x2="64" y2="20"/><line x1="20" y1="20" x2="42" y2="6"/><circle cx="20" cy="20" r="3" fill="#334155"/><circle cx="44" cy="20" r="3" fill="#334155"/><text x="6" y="48" stroke="none"><tspan font-weight="700">a접점</tspan> (평소 열림)</text></g>
<g transform="translate(180,30)"><line x1="0" y1="20" x2="20" y2="20"/><line x1="44" y1="20" x2="64" y2="20"/><line x1="20" y1="20" x2="44" y2="20"/><line x1="26" y1="8" x2="42" y2="26"/><circle cx="20" cy="20" r="3" fill="#334155"/><circle cx="44" cy="20" r="3" fill="#334155"/><text x="6" y="48" stroke="none"><tspan font-weight="700">b접점</tspan> (평소 닫힘)</text></g>
<g transform="translate(340,30)"><line x1="0" y1="20" x2="20" y2="20"/><line x1="20" y1="20" x2="44" y2="6"/><line x1="44" y1="20" x2="64" y2="20"/><line x1="44" y1="34" x2="64" y2="34"/><circle cx="20" cy="20" r="3" fill="#334155"/><text x="6" y="56" stroke="none"><tspan font-weight="700">c접점</tspan> (전환)</text></g>
<text x="15" y="106" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">자기유지 회로</text>
<g transform="translate(20,112)" stroke-width="1.4">
<line x1="0" y1="8" x2="300" y2="8"/><line x1="0" y1="56" x2="300" y2="56"/>
<line x1="40" y1="8" x2="40" y2="20"/><line x1="40" y1="20" x2="62" y2="8"/><circle cx="40" cy="20" r="3" fill="#334155"/>
<text x="18" y="34" stroke="none" font-size="10.5">PB(기동)</text>
<line x1="40" y1="20" x2="40" y2="44"/><line x1="40" y1="44" x2="150" y2="44"/>
<line x1="90" y1="44" x2="90" y2="20" stroke-dasharray="3 3"/><text x="96" y="36" stroke="none" font-size="10.5">R-a</text>
<line x1="150" y1="8" x2="150" y2="20"/><rect x="136" y="20" width="30" height="20" fill="none"/><text x="146" y="35" stroke="none" font-size="11">R</text>
<line x1="150" y1="40" x2="150" y2="56"/>
</g>
<text x="330" y="130" stroke="none" font-size="11">기동 신호가 없어져도</text><text x="330" y="148" stroke="none" font-size="11">자신의 a접점으로 <tspan font-weight="700">동작 유지</tspan></text>
</g></svg>`,"자기유지: 릴레이 자신의 a접점을 기동 버튼과 병렬로 연결")],

"작업안전|화재와 소화·전기 안전 ★★":[
f(`<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<g><rect x="20" y="20" width="100" height="46" fill="#ffffff" stroke-width="2"/><text x="56" y="42" stroke="none" font-weight="700" font-size="15">A급</text><text x="34" y="60" stroke="none" font-size="11.5">일반화재</text><text x="30" y="86" stroke="none" font-size="11">목재·종이·섬유</text><text x="34" y="104" stroke="none" font-size="11" fill="#2563eb">냉각(물)</text></g>
<g><rect x="140" y="20" width="100" height="46" fill="#fef9c3" stroke-width="2"/><text x="176" y="42" stroke="none" font-weight="700" font-size="15">B급</text><text x="150" y="60" stroke="none" font-size="11.5">유류·가스화재</text><text x="152" y="86" stroke="none" font-size="11">휘발유·벤젠</text><text x="152" y="104" stroke="none" font-size="11" fill="#2563eb">질식(포·분말)</text></g>
<g><rect x="260" y="20" width="100" height="46" fill="#dbeafe" stroke-width="2"/><text x="296" y="42" stroke="none" font-weight="700" font-size="15">C급</text><text x="282" y="60" stroke="none" font-size="11.5">전기화재</text><text x="270" y="86" stroke="none" font-size="11">배전반·전기기기</text><text x="266" y="104" stroke="none" font-size="11" fill="#dc2626">물 사용 금지!</text></g>
<g><rect x="380" y="20" width="100" height="46" fill="#f1f5f9" stroke-width="2"/><text x="416" y="42" stroke="none" font-weight="700" font-size="15">D급</text><text x="402" y="60" stroke="none" font-size="11.5">금속화재</text><text x="388" y="86" stroke="none" font-size="11">마그네슘·나트륨</text><text x="392" y="104" stroke="none" font-size="11" fill="#2563eb">마른 모래</text></g>
</g></svg>`,"화재 등급별 색과 소화 방법 — 전기화재(C급)에 물은 절대 금지")]

};
})();
