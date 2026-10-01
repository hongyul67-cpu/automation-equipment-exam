/* ══════════════════════════════════════════════════════════════
   다른 도구의 그림을 이 도구로 복사한다 → figs-copied.js 를 새로 쓴다
     node tools/copy-figs.js

   figs.js 안의 cp('도구 폴더/그림 키', …) 를 모두 찾아,
   그 도구의 figs.js 를 공용 fig.js(../links/fig.js)로 실제로 그려 SVG 문자열로 저장한다.
   - 원본 저장소는 읽기만 한다(작업지시-그림.md 규칙 4).
   - 원본 그림이 고쳐지면 이 스크립트를 다시 돌리면 따라온다.
   - figs-copied.js 는 손으로 고치지 않는다.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs'), path = require('path'), vm = require('vm');
const HERE = path.resolve(__dirname, '..');
const ROOT = path.resolve(HERE, '..');                 // claude code 작업방
const FIGJS = path.join(ROOT, 'links', 'fig.js');

function makeCtx() {
  const noop = () => {};
  const doc = { addEventListener: noop, getElementById: () => null, createElement: () => ({ setAttribute: noop }),
    head: { appendChild: noop }, documentElement: { appendChild: noop }, querySelectorAll: () => [] };
  const ctx = { console, document: doc, Math, String, Number, Array, Object, JSON, RegExp, isNaN, parseFloat, parseInt };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(FIGJS, 'utf8'), ctx);
  return ctx;
}

const mine = fs.readFileSync(path.join(HERE, 'figs.js'), 'utf8');
const want = [...new Set([...mine.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/cp\('([^']+)'/g)].map(m => m[1]))];
const byTool = {};
want.forEach(s => { const i = s.lastIndexOf('/'); (byTool[s.slice(0, i)] = byTool[s.slice(0, i)] || []).push(s.slice(i + 1)); });

const out = {}, miss = [];
for (const [tool, keys] of Object.entries(byTool)) {
  const ctx = makeCtx();
  let src = fs.readFileSync(path.join(ROOT, tool, 'figs.js'), 'utf8')
    .replace(/^\s*(var|const|let)\s+FIGS\s*=/m, 'window.FIGS =');
  vm.runInContext(src, ctx);
  const F = ctx.FIGS || {};
  for (const k of keys) {
    let e = F[k];
    if (typeof e === 'function') e = { draw: e, cap: '' };
    if (!e || !e.draw) { miss.push(tool + '/' + k); continue; }
    const svg = ctx.FIG.svgOf(k);
    if (!svg) { miss.push(tool + '/' + k); continue; }
    out[tool + '/' + k] = { cap: e.cap || '', svg: svg.replace(/ aria-label="[^"]*"/, '') };
  }
}
const body = '/* 자동 생성 — node tools/copy-figs.js · 손으로 고치지 말 것\n' +
  '   다른 도구의 그림(fig.js 로 그린 것)을 그대로 옮겨 온 것. 출처 = 키의 앞부분(도구 폴더) */\n' +
  'window.FIGS_COPIED = ' + JSON.stringify(out, null, 0).replace(/\},"/g, '},\n"') + ';\n';
fs.writeFileSync(path.join(HERE, 'figs-copied.js'), body);
console.log('복사', Object.keys(out).length, '장 · 도구', Object.keys(byTool).length, '개 · 크기', (body.length / 1024).toFixed(0) + 'KB');
if (miss.length) { console.log('!! 못 찾음:', miss.join(', ')); process.exitCode = 1; }
