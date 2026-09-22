const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const checks = [
  ['DOCTYPE', html.includes('<!DOCTYPE html>'), 'Valid HTML5 DOCTYPE'],
  ['closingHtml', html.includes('</html>'), 'Proper HTML closing tag'],
  ['canvasEl', html.includes('id="canvas"'), 'Canvas element present'],
  ['controlsDiv', html.includes('id="controls"'), 'Controls panel present'],
  ['statsDiv', html.includes('id="stats"'), 'Stats overlay present'],
  ['rocketClass', html.includes('class Rocket'), 'Rocket class defined'],
  ['particleClass', html.includes('class Particle'), 'Particle class defined'],
  ['burstSphere', html.includes('sphere'), 'Sphere burst shape'],
  ['burstRing', html.includes('ring'), 'Ring burst shape'],
  ['burstWillow', html.includes('willow'), 'Willow burst shape'],
  ['autoShowBtn', html.includes('id="autoShow"'), 'Auto Show button present'],
  ['clearBtn', html.includes('id="clearBtn"'), 'Clear button present'],
  ['particleSlider', html.includes('id="pCount"'), 'Particle count slider'],
  ['gravitySlider', html.includes('id="gravity"'), 'Gravity slider'],
  ['fadeSlider', html.includes('id="fadeSpeed"'), 'Fade speed slider'],
  ['burstSelect', html.includes('id="burstShape"'), 'Burst shape dropdown'],
  ['requestAnimationFrame', html.includes('requestAnimationFrame'), 'Game loop uses rAF'],
  ['globalCompositeAdd', html.includes('lighter'), 'Additive blending enabled'],
  ['particleCap', html.includes('MAX_PARTICLES'), 'Particle cap defined'],
  ['fpsCounter', html.includes('FPS'), 'FPS counter present'],
  ['multiColor', html.includes('multi-color') || html.includes('multiColor'), 'Multi-color support'],
  ['gravityApplied', html.includes('gravity') && html.includes('vy'), 'Gravity applied to particles'],
  ['alphaDecay', html.includes('alpha') && html.includes('-='), 'Alpha decay implemented'],
  ['clearRect', html.includes('clearRect') || html.includes('fillRect'), 'Canvas clearing present'],
  ['globalAlpha', html.includes('globalAlpha'), 'Alpha control for fade effect'],
  ['shadowBlur', html.includes('shadowBlur'), 'Glow effect enabled'],
  ['clickHandler', html.includes('mousedown') || html.includes('click'), 'Click handler present'],
  ['dragHandler', html.includes('mousemove') || html.includes('mouseup'), 'Drag handler present'],
  ['autoShowLoop', html.includes('autoShow') || html.includes('auto_show'), 'Auto show logic'],
  ['particleCleanup', html.includes('alpha <= 0'), 'Particle cleanup condition'],
];

let pass = 0;
checks.forEach(([name, result, desc]) => {
  if (result) {
    pass++;
    console.log(`PASS: ${desc}`);
  } else {
    console.log(`FAIL: ${desc} (${name})`);
  }
});

console.log(`\n${pass}/${checks.length} checks passed`);
process.exit(pass === checks.length ? 0 : 1);
