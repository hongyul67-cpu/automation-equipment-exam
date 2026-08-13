/* 이론 개념 도해 2차 — 키: "과목|개념카드 제목" (theory-figs.js 에 병합) */
(function(){
var S='font-family:"Malgun Gothic",sans-serif';
function f(svg,cap){return {svg:svg,cap:cap};}
var F2 = {

"기계제도|도면의 크기와 양식":[
f(`<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.2">
<rect x="20" y="20" width="330" height="180" fill="#fff" stroke-width="1"/>
<rect x="45" y="32" width="293" height="156" fill="none" stroke-width="2.4"/>
<rect x="238" y="150" width="100" height="38" fill="#eff6ff" stroke-width="1.6"/>
<text x="252" y="173" stroke="none" font-weight="700" fill="#2563eb">표제란</text>
<line x1="183" y1="20" x2="183" y2="45" stroke-width="2"/><line x1="8" y1="110" x2="58" y2="110" stroke-width="2"/>
<text x="150" y="15" stroke="none" fill="#2563eb">중심마크</text>
<path d="M20 20 h14 M20 20 v14" stroke-width="3"/><text x="8" y="212" stroke="none" font-size="10.5">재단마크</text>
<text x="60" y="46" stroke="none" fill="#2563eb">윤곽선(0.5mm 이상)</text>
<line x1="20" y1="32" x2="45" y2="32" stroke-width="1"/><text x="16" y="28" stroke="none" font-size="10">d</text>
<line x1="338" y1="32" x2="350" y2="32" stroke-width="1"/><text x="340" y="28" stroke="none" font-size="10">c</text>
<text x="370" y="46" stroke="none" font-weight="700" fill="#2563eb">A열 규격</text>
<text x="370" y="68" stroke="none">A0 = 1189 × 841 (약 1㎡)</text>
<text x="370" y="88" stroke="none">A1 = 841 × 594</text>
<text x="370" y="108" stroke="none">A2 = 594 × 420</text>
<text x="370" y="128" stroke="none">A3 = 420 × 297</text>
<text x="370" y="148" stroke="none"><tspan font-weight="700">A4 = 297 × 210</tspan></text>
<text x="370" y="172" stroke="none" font-size="11">길이 : 폭 = √2 : 1</text>
<text x="370" y="192" stroke="none" font-size="11">철할 때 d = 25mm</text>
</g></svg>`,"윤곽선·표제란·중심마크는 반드시 설정해야 하는 양식")],

"기계제도|척도 (현척·축척·배척)":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="14">A : B</text>
<text x="14" y="38" stroke="none" font-size="11">A = 도면에서의 크기 / B = 물체의 실제 크기</text>
<text x="30" y="66" fill="#16a34a" stroke="none" font-weight="700">축척 1:2</text>
<rect x="30" y="76" width="50" height="34" fill="#dcfce7"/><text x="34" y="126" stroke="none" font-size="11">작게 그림</text>
<text x="170" y="66" fill="#2563eb" stroke="none" font-weight="700">현척 1:1</text>
<rect x="170" y="76" width="100" height="34" fill="#dbeafe"/><text x="182" y="126" stroke="none" font-size="11">실물 크기</text>
<text x="330" y="66" fill="#b45309" stroke="none" font-weight="700">배척 2:1</text>
<rect x="330" y="70" width="150" height="46" fill="#fef3c7"/><text x="350" y="126" stroke="none" font-size="11">크게 그림</text>
<text x="14" y="146" stroke="none" font-size="12.5">⚠ 어떤 척도로 그리든 <tspan font-weight="700" fill="#dc2626">치수는 항상 실제 치수(50)</tspan> 를 기입 · 비례척이 아니면 NS</text>
</g></svg>`,"세 도형 모두 치수는 실제 치수를 기입한다")],

"기계제도|투상도의 표시방법 (보조·부분·국부·회전·확대)":[
f(`<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="10" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">보조 투상도</text>
<path d="M15 30 h55 l22 26 v30 h-77 z" fill="none"/><path d="M70 30 l22 26" stroke-dasharray="3 3"/>
<g transform="translate(96,20) rotate(40)"><rect x="0" y="0" width="34" height="26" fill="#dbeafe"/></g>
<text x="10" y="108" stroke="none">경사면의 <tspan font-weight="700">실형</tspan>을</text><text x="10" y="124" stroke="none">대응 위치에 표시</text>
<text x="150" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">국부 투상도</text>
<line x1="150" y1="60" x2="230" y2="60" stroke-width="2"/><line x1="150" y1="80" x2="230" y2="80" stroke-width="2"/>
<circle cx="255" cy="70" r="16" fill="none" stroke-width="1.8"/><line x1="230" y1="70" x2="239" y2="70" stroke-dasharray="14 3 2 3" stroke-width="1"/>
<text x="150" y="108" stroke="none">구멍·홈 등 <tspan font-weight="700">한 부분만</tspan></text><text x="150" y="124" stroke="none">중심선·기준선으로 연결</text>
<text x="150" y="142" stroke="none" font-size="10.5" fill="#dc2626">(가상선으로는 연결하지 않음)</text>
<text x="320" y="14" fill="#2563eb" stroke="none" font-weight="700" font-size="12">부분 확대도</text>
<path d="M325 40 h70 v40 h-70 z" fill="none"/><circle cx="360" cy="60" r="14" fill="none" stroke-width="1"/>
<text x="352" y="34" stroke="none" font-size="10">A</text>
<circle cx="450" cy="60" r="28" fill="none" stroke-width="1"/><circle cx="450" cy="60" r="10" fill="none" stroke-width="1.6"/>
<text x="420" y="100" stroke="none" font-size="10.5">확대도 A (척도 2:1)</text>
<text x="320" y="124" stroke="none">작아서 <tspan font-weight="700">확대</tspan> · 치수는 실제 치수</text>
</g></svg>`,"경사면=보조, 일부분만=국부, 작아서 확대=부분 확대도")],

"기계제도|치수공차 용어와 IT 기본공차 ★★★":[
f(`<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<line x1="60" y1="90" x2="470" y2="90" stroke-dasharray="6 4"/><text x="10" y="94" stroke="none" font-weight="700">기준선(0)</text>
<rect x="150" y="52" width="200" height="38" fill="#dbeafe" stroke-width="1.6"/>
<line x1="150" y1="52" x2="470" y2="52" stroke-width="1"/><line x1="150" y1="90" x2="470" y2="90" stroke-width="1"/>
<text x="360" y="48" stroke="none" fill="#2563eb">최대 허용치수</text>
<text x="360" y="104" stroke="none" fill="#2563eb">최소 허용치수</text>
<line x1="120" y1="52" x2="120" y2="90" stroke="#dc2626" stroke-width="2"/>
<path d="M120 52 l-4 8 h8 z" fill="#dc2626" stroke="none"/><path d="M120 90 l-4 -8 h8 z" fill="#dc2626" stroke="none"/>
<text x="52" y="76" stroke="none" fill="#dc2626" font-weight="700">치수공차</text>
<text x="150" y="132" stroke="none">치수공차 = 최대 허용치수 − 최소 허용치수</text>
<text x="150" y="150" stroke="none">　　　　 = 위 치수허용차 − 아래 치수허용차</text>
<text x="10" y="20" stroke="none" font-weight="700" fill="#2563eb" font-size="12.5">예) φ20 (+0.025 / 0) → 공차 0.025</text>
<text x="10" y="150" stroke="none" font-size="11">위 허용차 = 최대−기준</text>
<text x="10" y="166" stroke="none" font-size="11">아래 허용차 = 최소−기준</text>
</g></svg>`,"치수허용차는 ‘허용한계치수 − 기준치수’ (실제치수가 아님)")],

"기계제도|키·핀·리벳·베어링 호칭 ★★":[
f(`<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="18" fill="#2563eb" stroke="none" font-weight="700">구름베어링 호칭번호</text>
<text x="40" y="52" stroke="none" font-size="26" font-weight="700" letter-spacing="6">6208</text>
<line x1="44" y1="60" x2="44" y2="74" stroke-width="1"/><line x1="96" y1="60" x2="96" y2="74" stroke-width="1"/>
<text x="14" y="90" stroke="none" font-size="11">62 = 계열번호</text>
<text x="86" y="90" stroke="none" font-size="11">08 = 안지름 번호</text>
<text x="14" y="118" stroke="none" font-size="12">안지름 = <tspan font-weight="700" fill="#dc2626">8 × 5 = 40[mm]</tspan></text>
<text x="240" y="18" fill="#2563eb" stroke="none" font-weight="700">안지름 번호 규칙</text>
<text x="242" y="42" stroke="none" font-size="12">00 → <tspan font-weight="700">10mm</tspan>　01 → <tspan font-weight="700">12mm</tspan></text>
<text x="242" y="64" stroke="none" font-size="12">02 → <tspan font-weight="700">15mm</tspan>　03 → <tspan font-weight="700">17mm</tspan></text>
<text x="242" y="86" stroke="none" font-size="12"><tspan font-weight="700" fill="#dc2626">04부터는 번호 × 5</tspan></text>
<text x="242" y="108" stroke="none" font-size="11">04=20 · 08=40 · 20=100</text>
<text x="14" y="146" stroke="none" font-size="11.5">리벳 호칭길이 : <tspan font-weight="700">접시머리만 머리 포함</tspan>, 나머지는 머리 제외</text>
</g></svg>`,"00·01·02·03만 예외(10·12·15·17), 04부터는 ×5")],

"기계가공·측정|절삭가공 용어와 절삭속도 계산 ★★★":[
f(`<svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<circle cx="90" cy="70" r="45" fill="#f1f5f9"/><circle cx="90" cy="70" r="4" fill="#334155"/>
<path d="M90 25 a45 45 0 0 1 32 13" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<path d="M126 42 l-6 8 l11 1 z" fill="#2563eb" stroke="none"/>
<text x="98" y="20" stroke="none" fill="#2563eb">n [rpm]</text>
<line x1="90" y1="70" x2="135" y2="70" stroke-dasharray="4 3" stroke-width="1"/><text x="100" y="86" stroke="none">d/2</text>
<path d="M140 60 l24 -12 v34 z" fill="#fecaca" stroke-width="1.4"/><text x="146" y="102" stroke="none" font-size="11">바이트</text>
<text x="200" y="30" stroke="none" font-weight="700" fill="#2563eb" font-size="13">v = πdn / 1000 [m/min]</text>
<text x="200" y="56" stroke="none" font-weight="700" fill="#2563eb" font-size="13">n = 1000v / πd [rpm]</text>
<text x="200" y="82" stroke="none" font-weight="700" fill="#2563eb" font-size="13">T = L / (n · f) [min]</text>
<text x="200" y="110" stroke="none" font-size="11">d: 지름[mm] · n: 회전수 · v: 절삭속도</text>
<text x="200" y="128" stroke="none" font-size="11">L: 가공길이[mm] · f: 이송[mm/rev]</text>
<text x="14" y="146" stroke="none" font-size="11">예) φ25, v=180 → n≒2292rpm / L=600, f=0.24 → T≒1.09분</text>
</g></svg>`,"n을 먼저 구하고 T에 대입하는 2단계 계산이 대부분")],

"기계가공·측정|구성인선(빌드업 에지) ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<rect x="20" y="76" width="180" height="34" fill="#f1f5f9"/><text x="30" y="126" stroke="none">공작물</text>
<path d="M150 76 l40 -34 v34 z" fill="#e2e8f0"/>
<path d="M150 76 l14 -12 l8 12 z" fill="#fca5a5" stroke="#dc2626"/>
<text x="176" y="60" stroke="none" fill="#dc2626" font-weight="700">구성인선</text>
<path d="M150 76 q20 -30 46 -40" fill="none" stroke="#94a3b8" stroke-dasharray="3 3"/><text x="196" y="34" stroke="none" font-size="10.5">칩</text>
<text x="250" y="24" stroke="none" font-weight="700" fill="#2563eb">발생 → 성장 → 최대성장 → 분열 → 탈락</text>
<text x="250" y="52" stroke="none" font-weight="700" fill="#16a34a">방지법</text>
<text x="252" y="74" stroke="none">• 윗면 경사각을 <tspan font-weight="700">크게</tspan></text>
<text x="252" y="94" stroke="none">• 절삭속도를 <tspan font-weight="700">크게</tspan> (120~150 m/min↑)</text>
<text x="252" y="114" stroke="none">• 절삭깊이를 <tspan font-weight="700">작게</tspan></text>
<text x="252" y="134" stroke="none">• 날 끝을 예리하게 · 절삭유 사용</text>
</g></svg>`,"경사각↑ 절삭속도↑ 절삭깊이↓ — 방향을 헷갈리지 말 것")],

"기계가공·측정|공구 마모와 공구 수명":[
f(`<svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<rect x="30" y="70" width="180" height="30" fill="#f1f5f9"/><text x="36" y="118" stroke="none">공작물</text>
<path d="M150 70 l56 -40 v40 z" fill="#e2e8f0"/>
<path d="M168 46 q12 6 22 2" fill="none" stroke="#dc2626" stroke-width="2.5"/>
<text x="196" y="34" stroke="none" fill="#dc2626" font-weight="700" font-size="11">크레이터 마모</text>
<text x="200" y="50" stroke="none" font-size="10.5" fill="#dc2626">(경사면·윗면)</text>
<line x1="150" y1="70" x2="163" y2="70" stroke="#2563eb" stroke-width="3"/>
<text x="120" y="92" stroke="none" fill="#2563eb" font-weight="700" font-size="11">플랭크 마모</text>
<text x="126" y="106" stroke="none" font-size="10.5" fill="#2563eb">(여유면)</text>
<text x="310" y="30" stroke="none" font-weight="700" fill="#2563eb">공구 수명 판정</text>
<text x="312" y="52" stroke="none">• 가공면에 광택 무늬·반점</text>
<text x="312" y="72" stroke="none">• 인선 마모가 일정량 도달</text>
<text x="312" y="92" stroke="none">• <tspan font-weight="700">배분력·이송분력 급증</tspan></text>
<text x="312" y="112" stroke="none">• 완성 치수 변화가 허용값 초과</text>
<text x="312" y="134" stroke="none" font-size="11">공구수명식 V·T ⁿ = C</text>
</g></svg>`,"연성 재료는 크레이터(경사면), 취성 재료는 플랭크(여유면) 마모가 뚜렷")],

"기계가공·측정|절삭가공의 종류 구분":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="10" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">구멍 자리파기 3형제</text>
<g transform="translate(20,30)">
<rect x="0" y="20" width="110" height="60" fill="#f1f5f9"/>
<path d="M40 20 l14 -18 h4 l14 18" fill="#fff" stroke-width="1.6"/>
<rect x="46" y="20" width="18" height="60" fill="#fff" stroke-width="1.6"/>
<text x="8" y="98" stroke="none" font-weight="700">카운터 싱킹</text><text x="4" y="114" stroke="none" font-size="10.5">접시머리 (원추형)</text></g>
<g transform="translate(190,30)">
<rect x="0" y="20" width="110" height="60" fill="#f1f5f9"/>
<rect x="36" y="20" width="38" height="22" fill="#fff" stroke-width="1.6"/>
<rect x="46" y="42" width="18" height="38" fill="#fff" stroke-width="1.6"/>
<text x="10" y="98" stroke="none" font-weight="700">카운터 보링</text><text x="4" y="114" stroke="none" font-size="10.5">볼트머리 (원통형)</text></g>
<g transform="translate(360,30)">
<rect x="0" y="20" width="110" height="60" fill="#f1f5f9"/>
<rect x="30" y="14" width="50" height="8" fill="#fff" stroke-width="1.6"/>
<rect x="46" y="22" width="18" height="58" fill="#fff" stroke-width="1.6"/>
<text x="12" y="98" stroke="none" font-weight="700">스폿 페이싱</text><text x="10" y="114" stroke="none" font-size="10.5">자리면 평평하게</text></g>
</g></svg>`,"접시머리=싱킹(원추), 볼트머리=보링(원통), 자리면=스폿페이싱")],

"기계가공·측정|연삭숫돌과 자생작용 ★★":[
f(`<svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<circle cx="80" cy="70" r="52" fill="#f1f5f9" stroke-width="2"/><circle cx="80" cy="70" r="12" fill="#fff"/>
<circle cx="60" cy="42" r="6" fill="#94a3b8" stroke="none"/><circle cx="100" cy="46" r="6" fill="#94a3b8" stroke="none"/>
<circle cx="46" cy="86" r="6" fill="#94a3b8" stroke="none"/><circle cx="106" cy="92" r="6" fill="#94a3b8" stroke="none"/>
<text x="118" y="40" stroke="none" fill="#2563eb" font-weight="700">숫돌의 3요소</text>
<text x="120" y="62" stroke="none">① 숫돌입자　② 결합제　③ 기공</text>
<text x="118" y="92" stroke="none" fill="#2563eb" font-weight="700">표시 순서</text>
<text x="120" y="114" stroke="none"><tspan font-weight="700">입자 − 입도 − 결합도 − 조직 − 결합제</tspan></text>
<text x="120" y="134" stroke="none" font-size="11">예) A 60 K m V</text>
<text x="330" y="40" stroke="none" fill="#dc2626" font-weight="700">눈메움(로딩)</text>
<text x="332" y="60" stroke="none" font-size="11">결합도 <tspan font-weight="700">높은</tspan> 숫돌 +</text>
<text x="332" y="78" stroke="none" font-size="11"><tspan font-weight="700">연한</tspan> 금속(Al·Cu)</text>
<text x="330" y="104" stroke="none" fill="#16a34a" font-weight="700">자생작용</text>
<text x="332" y="124" stroke="none" font-size="11">마멸→파쇄→탈락→생성</text>
<text x="332" y="144" stroke="none" font-size="10.5">드레싱=날 세우기 / 트루잉=형상 수정</text>
</g></svg>`,"연한 금속 + 결합도 높은 숫돌 → 기공이 메워지는 눈메움")],

"기계가공·측정|측정기와 측정오차 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="12" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">아베(Abbe)의 원리</text>
<text x="12" y="36" stroke="none" font-size="11">측정 대상과 표준자를 <tspan font-weight="700">측정 방향 동일선상</tspan>에 배치</text>
<g transform="translate(20,50)">
<rect x="0" y="10" width="90" height="16" fill="#dbeafe"/><text x="96" y="22" stroke="none" font-size="10.5">표준자</text>
<rect x="0" y="34" width="90" height="16" fill="#f1f5f9"/><text x="96" y="46" stroke="none" font-size="10.5">측정물</text>
<line x1="0" y1="30" x2="150" y2="30" stroke-dasharray="4 3" stroke-width="1" stroke="#16a34a"/>
<text x="0" y="72" stroke="none" font-size="11" fill="#16a34a">✔ 마이크로미터 (만족)</text>
<text x="0" y="90" stroke="none" font-size="11" fill="#dc2626">✘ 버니어 캘리퍼스 (불만족)</text></g>
<text x="290" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">측정 오차의 종류</text>
<text x="292" y="40" stroke="none"><tspan font-weight="700">개인오차</tspan> — 측정자 습관·시차</text>
<text x="292" y="62" stroke="none"><tspan font-weight="700">기기오차</tspan> — 측정기 자체</text>
<text x="292" y="84" stroke="none"><tspan font-weight="700" fill="#dc2626">우연오차</tspan> — 소음·진동 등 환경</text>
<text x="306" y="102" stroke="none" font-size="10.5">(원인을 알 수 없는 오차)</text>
<text x="292" y="126" stroke="none"><tspan font-weight="700">온도오차</tspan> — 온도·습도·기압</text>
</g></svg>`,"‘환경·자연현상 급변으로 생기는 오차’ = 우연오차")],

"기계요소·조립|밀봉장치와 정비용 재료":[
f(`<svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="30" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">개스킷 (고정부)</text>
<rect x="20" y="34" width="80" height="52" fill="#f1f5f9"/><rect x="106" y="34" width="80" height="52" fill="#f1f5f9"/>
<rect x="100" y="30" width="6" height="60" fill="#fca5a5" stroke="#dc2626"/>
<text x="60" y="112" stroke="none">플랜지 등 <tspan font-weight="700">움직이지 않는</tspan> 곳</text>
<line x1="255" y1="8" x2="255" y2="138" stroke-dasharray="5 4" stroke-width="1"/>
<text x="320" y="18" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">패킹 (운동부)</text>
<rect x="290" y="34" width="180" height="52" fill="#f1f5f9"/>
<rect x="330" y="40" width="46" height="40" fill="#e2e8f0"/>
<rect x="326" y="40" width="6" height="40" fill="#fca5a5" stroke="#dc2626"/>
<rect x="374" y="40" width="6" height="40" fill="#fca5a5" stroke="#dc2626"/>
<line x1="376" y1="60" x2="470" y2="60" stroke-width="3"/>
<path d="M462 60 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<text x="300" y="112" stroke="none">축·피스톤 등 <tspan font-weight="700">움직이는</tspan> 곳</text>
<text x="30" y="138" stroke="none" font-size="12">윤활유 기능 : 감마 · 냉각 · 밀봉 · 방청 · 응력분산 · 세정</text>
</g></svg>`,"고정부 = 개스킷, 운동부 = 패킹")],

"기계요소·조립|볼트·너트와 풀림 방지법 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(20,26)"><rect x="10" y="0" width="50" height="16" fill="#e2e8f0"/><rect x="10" y="16" width="50" height="16" fill="#e2e8f0"/>
<rect x="26" y="-14" width="18" height="60" fill="#f1f5f9"/><text x="0" y="62" stroke="none" font-weight="700">로크 너트</text><text x="0" y="76" stroke="none" font-size="10">이중 너트</text></g>
<g transform="translate(140,26)"><rect x="10" y="0" width="50" height="18" fill="#e2e8f0"/>
<rect x="26" y="-14" width="18" height="60" fill="#f1f5f9"/>
<line x1="18" y1="30" x2="52" y2="30" stroke="#dc2626" stroke-width="2.5"/>
<path d="M22 30 v10 M48 30 v10" stroke="#dc2626" stroke-width="2"/>
<text x="0" y="62" stroke="none" font-weight="700">분할 핀</text><text x="0" y="76" stroke="none" font-size="10">핀으로 고정</text></g>
<g transform="translate(260,26)"><rect x="10" y="0" width="50" height="18" fill="#e2e8f0"/>
<rect x="26" y="-14" width="18" height="60" fill="#f1f5f9"/>
<path d="M8 22 h54 l-4 6 h-46 z" fill="#fde68a" stroke="#b45309"/>
<text x="0" y="62" stroke="none" font-weight="700">와셔</text><text x="0" y="76" stroke="none" font-size="10">스프링·혀붙이</text></g>
<g transform="translate(380,26)"><rect x="10" y="0" width="50" height="18" fill="#e2e8f0"/>
<rect x="26" y="-14" width="18" height="60" fill="#f1f5f9"/>
<path d="M12 4 l46 10" stroke="#dc2626" stroke-width="2"/>
<text x="0" y="62" stroke="none" font-weight="700">절삭 너트</text><text x="0" y="76" stroke="none" font-size="10">멈춤나사 등</text></g>
<text x="20" y="132" stroke="none" font-size="12">그 밖에 : 자동 죔 너트(나일론) · <tspan font-weight="700">혐기성 접착제</tspan>(공기 차단 시 경화)</text>
</g></svg>`,"너트 풀림 방지법 4가지 — 분할핀·로크너트·와셔·절삭너트")],

"기계요소·조립|나사의 종류와 리드 계산 ★★":[
f(`<svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<path d="M30 80 l16 -26 l16 26 l16 -26 l16 26 l16 -26 l16 26" fill="none" stroke-width="2"/>
<line x1="30" y1="80" x2="142" y2="80" stroke-width="1"/>
<line x1="46" y1="94" x2="78" y2="94" stroke-width="1"/><path d="M46 94 l6 -3 v6 z" fill="#334155"/><path d="M78 94 l-6 -3 v6 z" fill="#334155"/>
<text x="52" y="110" stroke="none">피치 p</text>
<text x="30" y="42" stroke="none" fill="#2563eb" font-weight="700">1줄 나사 : 리드 = 피치</text>
<text x="200" y="30" stroke="none" font-weight="700" fill="#dc2626" font-size="14">리드 l = 줄 수 n × 피치 p</text>
<text x="200" y="60" stroke="none">예1) 3줄 × 피치 2mm → 1회전 <tspan font-weight="700">6mm</tspan></text>
<text x="200" y="80" stroke="none">　　 6회전이면 <tspan font-weight="700">36mm</tspan> 이동</text>
<text x="200" y="104" stroke="none">예2) 2회전에 10mm, 4산 진행</text>
<text x="200" y="124" stroke="none">　→ 2줄 나사, 리드 5, <tspan font-weight="700">피치 2.5mm</tspan></text>
<text x="20" y="138" stroke="none" font-size="11">줄 수↑ → 리드↑ → 적은 회전으로 빨리 조임</text>
</g></svg>`,"리드 = 줄 수 × 피치 — 계산문제의 출발점")],

"기계요소·조립|키·핀·코터 ★★":[
f(`<svg viewBox="0 0 520 172" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<g transform="translate(24,24)"><circle cx="40" cy="40" r="34" fill="#f1f5f9"/><circle cx="40" cy="40" r="20" fill="#fff"/>
<rect x="32" y="14" width="16" height="14" fill="#fca5a5" stroke="#dc2626"/>
<text x="6" y="98" stroke="none" font-weight="700">성크(묻힘) 키</text><text x="4" y="112" stroke="none" font-size="10">축·보스 양쪽 홈</text></g>
<g transform="translate(150,24)"><circle cx="40" cy="40" r="34" fill="#f1f5f9"/><circle cx="40" cy="40" r="20" fill="#fff"/>
<rect x="32" y="17" width="16" height="8" fill="#fca5a5" stroke="#dc2626"/>
<text x="12" y="98" stroke="none" font-weight="700">안장(새들) 키</text><text x="4" y="112" stroke="none" font-size="10">보스에만 홈 · 가장 약함</text></g>
<g transform="translate(276,24)"><circle cx="40" cy="40" r="34" fill="#f1f5f9"/><circle cx="40" cy="40" r="20" fill="#fff"/>
<rect x="32" y="14" width="16" height="14" fill="#fca5a5" stroke="#dc2626" transform="rotate(60 40 40)"/>
<rect x="32" y="14" width="16" height="14" fill="#fca5a5" stroke="#dc2626" transform="rotate(-60 40 40)"/>
<text x="18" y="98" stroke="none" font-weight="700">접선 키</text><text x="0" y="112" stroke="none" font-size="10">120° 간격 · 큰 회전력</text></g>
<g transform="translate(402,24)"><circle cx="40" cy="40" r="34" fill="#f1f5f9"/><circle cx="40" cy="40" r="20" fill="#fff"/>
<g fill="#fca5a5" stroke="#dc2626"><rect x="35" y="15" width="10" height="10"/><rect x="35" y="55" width="10" height="10"/><rect x="15" y="35" width="10" height="10"/><rect x="55" y="35" width="10" height="10"/></g>
<text x="14" y="98" stroke="none" font-weight="700">스플라인</text><text x="4" y="112" stroke="none" font-size="10">여러 개 홈 · 큰 동력</text></g>
<text x="24" y="166" stroke="none" font-size="11.5">강도 순서 : 세레이션 &gt; 스플라인 &gt; 접선 &gt; 성크 &gt; 반달 &gt; 평 &gt; <tspan font-weight="700">안장</tspan></text>
</g></svg>`,"홈이 많을수록 큰 동력 전달 — 안장 키가 가장 약하다")],

"기계요소·조립|기어의 종류와 모듈 ★★":[
f(`<svg viewBox="0 0 520 168" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12.5">두 축의 관계에 따른 분류</text>
<g transform="translate(20,28)"><line x1="0" y1="16" x2="70" y2="16" stroke-width="2"/><line x1="0" y1="52" x2="70" y2="52" stroke-width="2"/>
<text x="0" y="78" stroke="none" font-weight="700">평행</text><text x="0" y="94" stroke="none" font-size="10.5">스퍼·헬리컬·랙</text><text x="0" y="108" stroke="none" font-size="10.5">·내접기어</text></g>
<g transform="translate(160,28)"><line x1="0" y1="52" x2="70" y2="52" stroke-width="2"/><line x1="35" y1="52" x2="35" y2="8" stroke-width="2"/>
<text x="0" y="78" stroke="none" font-weight="700">교차</text><text x="0" y="94" stroke="none" font-size="10.5">베벨·스파이럴베벨</text><text x="0" y="108" stroke="none" font-size="10.5">·마이터·크라운</text></g>
<g transform="translate(300,28)"><line x1="0" y1="52" x2="70" y2="52" stroke-width="2"/><line x1="20" y1="10" x2="60" y2="26" stroke-width="2" stroke-dasharray="5 3"/>
<text x="0" y="78" stroke="none" font-weight="700">어긋남</text><text x="0" y="94" stroke="none" font-size="10.5"><tspan font-weight="700">웜</tspan>·하이포이드</text><text x="0" y="108" stroke="none" font-size="10.5">·스크루기어</text></g>
<text x="400" y="46" stroke="none" font-weight="700" fill="#dc2626" font-size="13">m = D / Z</text>
<text x="392" y="68" stroke="none" font-size="11">모듈 = 피치원지름</text><text x="404" y="84" stroke="none" font-size="11">÷ 잇수</text>
<text x="392" y="106" stroke="none" font-size="11">예) 250/50 = <tspan font-weight="700">5</tspan></text>
<text x="14" y="160" stroke="none" font-size="11">웜기어 = 큰 감속비·역전방지 / 내접기어 = 회전방향 같고 감속비 큼</text>
</g></svg>`,"축 관계로 3분류 — 웜·하이포이드는 두 축이 어긋난 경우")],

"기계요소·조립|베어링·커플링·브레이크 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<g transform="translate(30,26)"><circle cx="46" cy="46" r="44" fill="none" stroke-width="2"/><circle cx="46" cy="46" r="22" fill="#f1f5f9" stroke-width="2"/>
<g fill="#94a3b8" stroke="none"><circle cx="46" cy="13" r="7"/><circle cx="79" cy="46" r="7"/><circle cx="46" cy="79" r="7"/><circle cx="13" cy="46" r="7"/></g>
<line x1="46" y1="46" x2="46" y2="-6" stroke="#dc2626" stroke-width="2"/><path d="M46 -6 l-5 9 h10 z" fill="#dc2626" stroke="none"/>
<text x="54" y="0" stroke="none" fill="#dc2626" font-size="10.5">레이디얼</text>
<line x1="46" y1="46" x2="104" y2="46" stroke="#2563eb" stroke-width="2"/><path d="M104 46 l-9 -5 v10 z" fill="#2563eb" stroke="none"/>
<text x="66" y="62" stroke="none" fill="#2563eb" font-size="10.5">스러스트</text></g>
<text x="180" y="30" stroke="none" font-weight="700" fill="#2563eb">베어링 수명</text>
<text x="180" y="56" stroke="none" font-weight="700" font-size="13">L = (C/P)ʳ × 10⁶</text>
<text x="180" y="78" stroke="none">볼베어링 <tspan font-weight="700">r = 3</tspan> / 롤러 r = 10/3</text>
<text x="180" y="100" stroke="none">하중 2배 → 수명 <tspan font-weight="700" fill="#dc2626">1/8배</tspan></text>
<text x="180" y="126" stroke="none" font-size="11">구름=마찰작음·고속 / 미끄럼=충격에 강함</text>
<text x="360" y="30" stroke="none" font-weight="700" fill="#2563eb">커플링</text>
<text x="360" y="52" stroke="none" font-size="11"><tspan font-weight="700">올덤</tspan> : 평행·가까움</text>
<text x="360" y="72" stroke="none" font-size="11"><tspan font-weight="700">유니버설</tspan> : 각도 변함</text>
<text x="360" y="92" stroke="none" font-size="11"><tspan font-weight="700">플렉시블</tspan> : 진동 흡수</text>
<text x="360" y="112" stroke="none" font-size="11"><tspan font-weight="700">플랜지</tspan> : 큰 축·고속</text>
</g></svg>`,"하중 방향으로 레이디얼/스러스트 구분, 수명은 볼베어링 3제곱")],

"작업안전|안전보호구와 안전표지 ★★":[
f(`<svg viewBox="0 0 520 162" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<g transform="translate(24,20)"><circle cx="42" cy="34" r="30" fill="#fff" stroke="#dc2626" stroke-width="7"/>
<line x1="21" y1="13" x2="63" y2="55" stroke="#dc2626" stroke-width="7"/>
<text x="8" y="90" stroke="none" font-weight="700">금지표지</text><text x="0" y="106" stroke="none" font-size="10.5">흰 바탕 · 빨간 모형</text></g>
<g transform="translate(150,20)"><path d="M42 4 l32 56 h-64 z" fill="#fde047" stroke="#0f172a" stroke-width="3"/>
<text x="38" y="52" stroke="none" font-weight="700" font-size="18">!</text>
<text x="8" y="90" stroke="none" font-weight="700">경고표지</text><text x="0" y="106" stroke="none" font-size="10.5">노란 바탕 · 검은 모형</text></g>
<g transform="translate(276,20)"><circle cx="42" cy="34" r="30" fill="#2563eb" stroke="none"/>
<circle cx="42" cy="26" r="8" fill="#fff"/><path d="M28 50 q14 -14 28 0 z" fill="#fff"/>
<text x="8" y="90" stroke="none" font-weight="700">지시표지</text><text x="0" y="106" stroke="none" font-size="10.5">파란 바탕 · 흰 그림</text></g>
<g transform="translate(402,20)"><rect x="12" y="6" width="60" height="56" fill="#16a34a" stroke="none"/>
<path d="M28 34 l10 10 l20 -22" stroke="#fff" stroke-width="5" fill="none"/>
<text x="8" y="90" stroke="none" font-weight="700">안내표지</text><text x="0" y="106" stroke="none" font-size="10.5">녹색 바탕 · 흰 그림</text></g>
<text x="24" y="154" stroke="none" font-size="12">방진마스크는 <tspan font-weight="700">산소 18% 이상</tspan>인 장소에서만 · 산소결핍 시 <tspan font-weight="700">송기마스크</tspan></text>
</g></svg>`,"금지=빨강 · 경고=노랑 · 지시=파랑 · 안내=녹색")],

"작업안전|기계·수공구 작업의 안전 ★":[
f(`<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="12" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<g transform="translate(30,18)"><circle cx="40" cy="34" r="30" fill="#fff" stroke="#dc2626" stroke-width="6"/>
<path d="M28 24 q0 -8 6 -8 t6 8 v6 q4 -6 8 -2 t2 10 q0 12 -12 12 t-10 -14 z" fill="#fca5a5" stroke="#dc2626" stroke-width="1.4"/>
<line x1="19" y1="13" x2="61" y2="55" stroke="#dc2626" stroke-width="6"/></g>
<text x="120" y="34" stroke="none" font-weight="700" fill="#dc2626">장갑 착용 금지</text>
<text x="120" y="56" stroke="none">선반 · 밀링 · 드릴 · 연삭 · 목공기계</text>
<text x="120" y="80" stroke="none" font-weight="700" fill="#16a34a">✔ 용접 작업은 장갑 착용</text>
<text x="120" y="104" stroke="none" font-size="11">그 밖에 : 절삭 중 측정 금지 · 칩은 브러시로 제거</text>
<text x="120" y="124" stroke="none" font-size="11">· 기계 위에 공구를 놓지 않음 · 회전 중 조작 금지</text>
</g></svg>`,"‘장갑을 착용해도 좋은 작업’ 문제의 답은 항상 용접")],

"전기·제어|공압·유압의 기초 법칙 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11.5" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<path d="M40 60 h60 v50 h-60 z M100 90 h120 v20 h-120 z M220 40 h100 v70 h-100 z" fill="#dbeafe"/>
<rect x="38" y="46" width="64" height="16" fill="#94a3b8"/><line x1="70" y1="46" x2="70" y2="20" stroke-width="3"/>
<path d="M70 20 l-6 10 h12 z" fill="#334155" stroke="none"/><text x="46" y="16" stroke="none" font-weight="700">F₁</text>
<text x="56" y="132" stroke="none">A₁ (작음)</text>
<rect x="218" y="26" width="104" height="16" fill="#94a3b8"/><line x1="270" y1="26" x2="270" y2="6" stroke-width="3"/>
<path d="M270 6 l-6 10 h12 z" fill="#334155" stroke="none"/><text x="246" y="16" stroke="none" font-weight="700">F₂</text>
<text x="234" y="132" stroke="none">A₂ (큼)</text>
<text x="350" y="40" stroke="none" font-weight="700" fill="#2563eb" font-size="13">파스칼의 원리</text>
<text x="350" y="66" stroke="none" font-weight="700" font-size="14">F₁ / A₁ = F₂ / A₂</text>
<text x="350" y="92" stroke="none" font-size="11">압력은 모든 방향으로</text>
<text x="350" y="110" stroke="none" font-size="11">같은 크기로 전달된다</text>
<text x="350" y="134" stroke="none" font-size="11">→ F₁ = A₁ × F₂ / A₂</text>
</g></svg>`,"면적비가 곧 힘의 비 — 작은 힘으로 큰 힘을 얻는 원리")],

"전기·제어|공기압 발생·청정화 장치 ★★":[
f(`<svg viewBox="0 0 520 140" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(14,34)"><rect x="0" y="0" width="70" height="46" fill="#f1f5f9"/><text x="10" y="27" stroke="none" font-size="10.5">압축기</text></g>
<path d="M88 57 h20" /><path d="M108 57 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<g transform="translate(112,34)"><rect x="0" y="0" width="70" height="46" fill="#dbeafe"/><text x="4" y="22" stroke="none" font-size="10.5">애프터쿨러</text><text x="10" y="38" stroke="none" font-size="9.5">냉각·수분</text></g>
<path d="M186 57 h20" /><path d="M206 57 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<g transform="translate(210,34)"><rect x="0" y="0" width="66" height="46" fill="#dbeafe"/><text x="6" y="27" stroke="none" font-size="10.5">공기건조기</text></g>
<path d="M280 57 h18" /><path d="M298 57 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<rect x="302" y="24" width="204" height="66" fill="#fff" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3"/>
<text x="336" y="20" stroke="none" fill="#2563eb" font-weight="700">서비스 유닛 (3점 세트)</text>
<g transform="translate(310,34)"><rect x="0" y="6" width="58" height="40" fill="#fef3c7"/><text x="14" y="30" stroke="none" font-weight="700">필터</text></g>
<g transform="translate(374,34)"><rect x="0" y="6" width="58" height="40" fill="#fef3c7"/><text x="4" y="24" stroke="none" font-size="10">압력조절</text><text x="16" y="38" stroke="none" font-size="10">기</text></g>
<g transform="translate(438,34)"><rect x="0" y="6" width="60" height="40" fill="#fef3c7"/><text x="14" y="30" stroke="none" font-weight="700">윤활기</text></g>
<text x="14" y="126" stroke="none" font-size="11.5">필터=응축수·이물질 제거 / 압력조절기=감압·일정 유지 / 윤활기=윤활유 안개 공급</text>
</g></svg>`,"서비스 유닛 설치 순서: 필터 → 압력조절기 → 윤활기")],

"전기·제어|유압 실린더와 부속장치 ★★":[
f(`<svg viewBox="0 0 520 182" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(14,22)"><rect x="0" y="0" width="90" height="34" fill="#f1f5f9"/><rect x="26" y="4" width="14" height="26" fill="#94a3b8"/>
<line x1="40" y1="17" x2="110" y2="17" stroke-width="3"/><path d="M60 4 q8 13 0 26" fill="none" stroke="#16a34a"/>
<text x="0" y="52" stroke="none" font-weight="700">단동</text><text x="0" y="66" stroke="none" font-size="10">복귀=스프링·자중</text></g>
<g transform="translate(160,22)"><rect x="0" y="0" width="90" height="34" fill="#f1f5f9"/><rect x="26" y="4" width="14" height="26" fill="#94a3b8"/>
<line x1="40" y1="17" x2="110" y2="17" stroke-width="3"/>
<text x="0" y="52" stroke="none" font-weight="700">복동</text><text x="0" y="66" stroke="none" font-size="10">양방향 유압</text></g>
<g transform="translate(310,22)"><rect x="0" y="0" width="90" height="34" fill="#f1f5f9"/><rect x="38" y="4" width="14" height="26" fill="#94a3b8"/>
<line x1="-24" y1="17" x2="52" y2="17" stroke-width="3"/><line x1="38" y1="17" x2="114" y2="17" stroke-width="3"/>
<text x="0" y="52" stroke="none" font-weight="700">복동 양로드</text><text x="-6" y="66" stroke="none" font-size="10">전·후진 속도·힘 같음</text></g>
<g transform="translate(14,104)"><rect x="0" y="0" width="60" height="30" fill="#f1f5f9"/><rect x="60" y="5" width="46" height="20" fill="#e2e8f0"/><rect x="106" y="9" width="36" height="12" fill="#cbd5e1"/>
<text x="0" y="50" stroke="none" font-weight="700">텔레스코프</text><text x="0" y="64" stroke="none" font-size="10">다단 → 긴 행정</text></g>
<text x="230" y="112" stroke="none" font-weight="700" fill="#2563eb">지지(설치) 형식</text>
<text x="232" y="132" stroke="none">고정형 : 풋형 · 플랜지형</text>
<text x="232" y="150" stroke="none">요동형 : <tspan font-weight="700">클레비스형 · 트러니언형</tspan></text>
<text x="400" y="112" stroke="none" font-size="10.5" fill="#dc2626">‘플랜트형’은 없음</text>
</g></svg>`,"양로드=속도/힘 동일, 텔레스코프=긴 행정, 탠덤=큰 출력")],

"전기·제어|압력제어밸브 ★★":[
f(`<svg viewBox="0 0 520 168" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(16,26)"><rect x="0" y="0" width="42" height="42" fill="none"/><path d="M21 42 v14 M21 0 v-14"/>
<path d="M8 30 l26 -18" /><path d="M34 12 l-8 1 M34 12 l-1 8"/>
<path d="M46 6 q12 6 0 12 q-12 6 0 12" fill="none" stroke="#16a34a"/>
<text x="-10" y="76" stroke="none" font-weight="700">릴리프</text><text x="-14" y="90" stroke="none" font-size="10">최고압 제한</text><text x="-10" y="103" stroke="none" font-size="10">(안전밸브)</text></g>
<g transform="translate(146,26)"><rect x="0" y="0" width="42" height="42" fill="none"/><path d="M21 42 v14 M21 0 v-14"/>
<path d="M8 12 l26 18" /><path d="M8 12 l8 1 M8 12 l1 8"/>
<path d="M46 6 q12 6 0 12 q-12 6 0 12" fill="none" stroke="#16a34a"/>
<text x="-4" y="76" stroke="none" font-weight="700">감압</text><text x="-16" y="90" stroke="none" font-size="10">낮춰서 일정 유지</text></g>
<g transform="translate(276,26)"><rect x="0" y="0" width="42" height="42" fill="none"/><path d="M21 42 v14 M21 0 v-14"/>
<path d="M8 30 l26 -18"/><path d="M34 12 l-8 1 M34 12 l-1 8"/>
<path d="M-14 21 h14" stroke-dasharray="3 2"/>
<text x="-8" y="76" stroke="none" font-weight="700">시퀀스</text><text x="-16" y="90" stroke="none" font-size="10">순서대로 작동</text></g>
<g transform="translate(406,26)"><rect x="0" y="0" width="42" height="42" fill="none"/><path d="M21 42 v14 M21 0 v-14"/>
<path d="M8 30 l26 -18"/><circle cx="52" cy="21" r="9" fill="none"/><path d="M43 21 h-9"/>
<text x="-16" y="76" stroke="none" font-weight="700">카운터밸런스</text><text x="-16" y="90" stroke="none" font-size="10">낙하 방지·배압</text><text x="-10" y="103" stroke="none" font-size="10">(체크밸브 내장)</text></g>
<text x="16" y="160" stroke="none" font-size="11.5">무부하(언로딩) 밸브 : 일하지 않을 때 작동유를 탱크로 → 펌프 무부하 운전</text>
</g></svg>`,"릴리프=최고압 제한, 감압=낮게 유지, 시퀀스=순서, 카운터밸런스=낙하방지")],

"PLC·자동화|제어의 분류와 시퀀스 제어 ★★":[
f(`<svg viewBox="0 0 520 186" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">개회로(시퀀스) 제어</text>
<g transform="translate(14,26)">
<line x1="0" y1="24" x2="24" y2="24"/><rect x="24" y="8" width="52" height="32" fill="#f1f5f9"/><text x="34" y="28" stroke="none" font-size="10">제어기</text>
<line x1="76" y1="24" x2="100" y2="24"/><rect x="100" y="8" width="58" height="32" fill="#f1f5f9"/><text x="108" y="28" stroke="none" font-size="10">제어대상</text>
<line x1="158" y1="24" x2="186" y2="24"/><path d="M186 24 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<text x="-8" y="58" stroke="none" font-size="10.5">피드백 <tspan font-weight="700" fill="#dc2626">없음</tspan> · 출력이 제어에 영향 안 줌</text></g>
<line x1="0" y1="98" x2="520" y2="98" stroke-dasharray="5 4" stroke-width="1"/>
<text x="14" y="118" fill="#2563eb" stroke="none" font-weight="700" font-size="12">폐회로(피드백) 제어</text>
<g transform="translate(14,124)">
<line x1="0" y1="18" x2="18" y2="18"/><circle cx="26" cy="18" r="8" fill="#fff"/><text x="22" y="22" stroke="none" font-size="10">−</text>
<line x1="34" y1="18" x2="52" y2="18"/><rect x="52" y="4" width="46" height="28" fill="#f1f5f9"/><text x="58" y="22" stroke="none" font-size="9.5">조절부</text>
<line x1="98" y1="18" x2="116" y2="18"/><rect x="116" y="4" width="52" height="28" fill="#f1f5f9"/><text x="122" y="22" stroke="none" font-size="9.5">제어대상</text>
<line x1="168" y1="18" x2="220" y2="18"/><path d="M220 18 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<path d="M196 18 v22 h-170 v-14" fill="none" stroke="#dc2626" stroke-width="1.6"/>
<path d="M26 26 l-4 8 h8 z" fill="#dc2626" stroke="none"/>
<text x="86" y="52" stroke="none" font-size="10" fill="#dc2626">검출부(피드백)</text></g>
<text x="300" y="132" stroke="none" font-size="11">목표값 : 정치 / 추치(추종·프로그램·비율)</text>
<text x="300" y="150" stroke="none" font-size="11">제어량 : 프로세스(온도·유량) / 서보(위치)</text>
</g></svg>`,"피드백의 유무가 개회로와 폐회로를 가르는 기준")],

"PLC·자동화|시퀀스 제어계의 표시법":[
f(`<svg viewBox="0 0 520 172" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.4">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">타임차트</text>
<g transform="translate(20,24)" stroke-width="1.6">
<text x="-6" y="16" stroke="none">PB</text><path d="M22 20 h20 v-14 h26 v14 h60" fill="none" stroke="#2563eb"/>
<text x="-6" y="52" stroke="none">R</text><path d="M22 56 h20 v-14 h100" fill="none" stroke="#16a34a"/>
<text x="-6" y="88" stroke="none">L</text><path d="M22 92 h20 v-14 h100" fill="none" stroke="#dc2626"/>
<line x1="22" y1="0" x2="22" y2="100" stroke-dasharray="3 3" stroke-width="1"/>
<text x="0" y="116" stroke="none" font-size="10">가로축 = 시간, 세로축 = ON(1)/OFF(0)</text></g>
<line x1="230" y1="8" x2="230" y2="142" stroke-dasharray="5 4" stroke-width="1"/>
<text x="248" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">래더 다이어그램</text>
<g transform="translate(252,24)" stroke-width="1.5">
<line x1="0" y1="6" x2="0" y2="76"/><line x1="200" y1="6" x2="200" y2="76"/>
<line x1="0" y1="24" x2="40" y2="24"/><path d="M40 16 v16 M56 16 v16"/><line x1="56" y1="24" x2="130" y2="24"/>
<circle cx="150" cy="24" r="12" fill="none"/><line x1="162" y1="24" x2="200" y2="24"/>
<text x="36" y="12" stroke="none" font-size="9.5">PB</text><text x="144" y="28" stroke="none" font-size="9.5">R</text>
<line x1="0" y1="58" x2="40" y2="58"/><path d="M40 50 v16 M56 50 v16"/><line x1="56" y1="58" x2="130" y2="58"/>
<circle cx="150" cy="58" r="12" fill="none"/><line x1="162" y1="58" x2="200" y2="58"/>
<text x="34" y="46" stroke="none" font-size="9.5">R-a</text><text x="146" y="62" stroke="none" font-size="9.5">L</text>
<text x="0" y="98" stroke="none" font-size="10">사다리 모양 — PLC 프로그래밍의 기본</text></g>
<text x="14" y="166" stroke="none" font-size="11">직류전원 = <tspan font-weight="700">P(+), N(−)</tspan> / 교류전원 = <tspan font-weight="700">R, S, T</tspan> · 회로도는 횡서(좌→우)</text>
</g></svg>`,"타임차트는 시간축, 래더는 사다리 모양 회로도")],

"PLC·자동화|PLC의 특징과 구성 ★★":[
f(`<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<g transform="translate(14,30)">
<rect x="0" y="0" width="66" height="56" fill="#f1f5f9"/><text x="10" y="26" stroke="none" font-size="10.5">입력부</text><text x="6" y="42" stroke="none" font-size="9">스위치·센서</text>
<path d="M70 28 h22" /><path d="M92 28 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<rect x="96" y="-8" width="86" height="72" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="116" y="20" stroke="none" font-weight="700" fill="#2563eb">CPU</text><text x="106" y="40" stroke="none" font-size="9.5">연산·메모리</text><text x="110" y="56" stroke="none" font-size="9.5">프로그램</text>
<path d="M186 28 h22" /><path d="M208 28 l-9 -5 v10 z" fill="#334155" stroke="none"/>
<rect x="212" y="0" width="66" height="56" fill="#f1f5f9"/><text x="222" y="26" stroke="none" font-size="10.5">출력부</text><text x="216" y="42" stroke="none" font-size="9">램프·전자밸브</text>
<rect x="96" y="76" width="86" height="24" fill="#f1f5f9"/><text x="112" y="92" stroke="none" font-size="10">전원부</text>
<line x1="139" y1="64" x2="139" y2="76"/></g>
<text x="320" y="26" stroke="none" font-weight="700" fill="#2563eb">언어</text>
<text x="322" y="48" stroke="none">도형식 : <tspan font-weight="700">LD(래더), FBD</tspan></text>
<text x="322" y="68" stroke="none">문자식 : IL, ST, SFC</text>
<text x="322" y="88" stroke="none" font-size="10.5" fill="#dc2626">‘문자식이 아닌 것’ = FBD</text>
<text x="320" y="114" stroke="none" font-weight="700" fill="#2563eb">명령어</text>
<text x="322" y="134" stroke="none">AND=직렬 · <tspan font-weight="700">OR=병렬</tspan> · OUT=출력</text>
</g></svg>`,"입력부 → CPU → 출력부 구조, 배선 대신 프로그램으로 제어")],

"PLC·자동화|센서와 산업용 로봇 ★★":[
f(`<svg viewBox="0 0 520 178" xmlns="http://www.w3.org/2000/svg" style="${S}">
<g font-size="11" fill="#0f172a" stroke="#334155" stroke-width="1.5">
<text x="14" y="16" fill="#2563eb" stroke="none" font-weight="700" font-size="12">산업용 로봇 (구조별)</text>
<g transform="translate(20,26)"><line x1="0" y1="60" x2="56" y2="60" stroke-width="2"/><line x1="10" y1="60" x2="10" y2="14" stroke-width="2"/><line x1="10" y1="20" x2="50" y2="20" stroke-width="2"/>
<text x="0" y="86" stroke="none" font-weight="700">직교좌표</text><text x="4" y="100" stroke="none" font-size="9.5">X·Y·Z</text></g>
<g transform="translate(120,26)"><ellipse cx="28" cy="62" rx="26" ry="8" fill="none"/><line x1="28" y1="60" x2="28" y2="16" stroke-width="2"/><line x1="28" y1="24" x2="60" y2="24" stroke-width="2"/>
<text x="0" y="86" stroke="none" font-weight="700">원통좌표</text></g>
<g transform="translate(226,26)"><ellipse cx="28" cy="62" rx="26" ry="8" fill="none"/><line x1="28" y1="60" x2="28" y2="34" stroke-width="2"/><line x1="28" y1="34" x2="62" y2="14" stroke-width="2"/>
<text x="4" y="86" stroke="none" font-weight="700">극좌표</text></g>
<g transform="translate(320,26)"><line x1="10" y1="62" x2="10" y2="40" stroke-width="2"/><line x1="10" y1="40" x2="38" y2="22" stroke-width="2"/><line x1="38" y1="22" x2="66" y2="36" stroke-width="2"/>
<circle cx="10" cy="40" r="3.5" fill="#dc2626" stroke="none"/><circle cx="38" cy="22" r="3.5" fill="#dc2626" stroke="none"/>
<text x="0" y="86" stroke="none" font-weight="700">수직다관절</text></g>
<text x="418" y="42" stroke="none" font-size="10.5">제어방식</text>
<text x="418" y="60" stroke="none" font-size="10.5">PTP(점대점)</text>
<text x="418" y="76" stroke="none" font-size="10.5">CP(연속경로)</text>
<text x="418" y="92" stroke="none" font-size="10.5">티칭 플레이백</text>
<text x="14" y="150" stroke="none" font-size="11.5"><tspan font-weight="700">유도형</tspan>=금속만 / <tspan font-weight="700">정전용량형</tspan>=플라스틱·유리 등 비금속도 검출</text>
<text x="14" y="168" stroke="none" font-size="11.5">열전대=온도차로 기전력 · 서미스터=저항 변화 · 스트레인게이지=변형→압력</text>
</g></svg>`,"‘다관절’은 구조에 의한 분류 (교시에 따른 분류가 아님)")]

};
// 기존 도해에 병합
window.THEORY_FIGS = window.THEORY_FIGS || {};
for (var k in F2) { if (Object.prototype.hasOwnProperty.call(F2,k)) window.THEORY_FIGS[k] = F2[k]; }
})();
