const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'images');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

function generateBagSVG(primaryColor, darkColor, lockColor, stitchColor = '#FFFFFF', shadowOpacity = '0.35') {
    const cleanId = primaryColor.replace('#', '');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 450" class="w-full h-auto drop-shadow-sm">
  <defs>
    <radialGradient id="shadow-${cleanId}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111111" stop-opacity="${shadowOpacity}"/>
      <stop offset="65%" stop-color="#111111" stop-opacity="${parseFloat(shadowOpacity) * 0.4}"/>
      <stop offset="100%" stop-color="#111111" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bodyGrad-${cleanId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${primaryColor}"/>
      <stop offset="100%" stop-color="${darkColor}"/>
    </linearGradient>
    <linearGradient id="handleGrad-${cleanId}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${darkColor}"/>
      <stop offset="50%" stop-color="${primaryColor}"/>
      <stop offset="100%" stop-color="${darkColor}"/>
    </linearGradient>
  </defs>

  <!-- Sombra de contacto suave -->
  <ellipse cx="250" cy="405" rx="170" ry="22" fill="url(#shadow-${cleanId})" />

  <!-- Asa trasera (profundidad) -->
  <path d="M 180 200 C 180 80, 320 80, 320 200" fill="none" stroke="${darkColor}" stroke-width="16" stroke-linecap="round" opacity="0.65" />

  <!-- Cuerpo de la Cartera (Silueta trapezoidal con bordes redondeados) -->
  <path d="M 148 185 
           L 352 185 
           C 362 185, 369 191, 372 199 
           L 412 360 
           C 416 376, 404 390, 388 390 
           L 112 390 
           C 96 390, 84 376, 88 360 
           L 128 199 
           C 131 191, 138 185, 148 185 Z" 
        fill="url(#bodyGrad-${cleanId})" />

  <!-- Asa delantera -->
  <path d="M 195 190 C 195 85, 305 85, 305 190" fill="none" stroke="url(#handleGrad-${cleanId})" stroke-width="16" stroke-linecap="round" />
  <!-- Remaches / Soportes de asa -->
  <rect x="187" y="182" width="16" height="18" rx="3" fill="${darkColor}" />
  <rect x="297" y="182" width="16" height="18" rx="3" fill="${darkColor}" />

  <!-- Línea de costura superior punteada artesanal -->
  <line x1="155" y1="208" x2="345" y2="208" stroke="${stitchColor}" stroke-width="2.5" stroke-dasharray="4,5" opacity="0.8" />

  <!-- Broche central de bronce / cerradura giratoria -->
  <rect x="237" y="225" width="26" height="28" rx="4" fill="${lockColor}" />
  <rect x="246" y="232" width="8" height="14" rx="2" fill="#1c1917" opacity="0.45" />
</svg>`;
}

// 1. Hero Bag (Beige suave / arena tostado como en el hero)
fs.writeFileSync(path.join(imgDir, 'bag-hero.svg'), generateBagSVG('#E9D5BD', '#CEB193', '#A8845A', '#FAF9F7', '0.25'));

// 2. Bolso Isabel (Caramelo / Suela artesanal)
fs.writeFileSync(path.join(imgDir, 'bag-isabel.svg'), generateBagSVG('#BF7C43', '#9D5E2A', '#6B3E19', '#FDF8F0', '0.35'));

// 3. Tote Alba (Habano / Tierra tostada)
fs.writeFileSync(path.join(imgDir, 'bag-alba.svg'), generateBagSVG('#7B6047', '#5C4430', '#3D2A1C', '#FDF8F0', '0.35'));

// 4. Cartera Lola (Borgoña / Vino artesanal)
fs.writeFileSync(path.join(imgDir, 'bag-lola.svg'), generateBagSVG('#642232', '#4B1622', '#2E0912', '#FDF8F0', '0.35'));

console.log('SVGs generated successfully in images/');
