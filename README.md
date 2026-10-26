# 👜 Carmen Atelier — Marroquinería de Lujo & Diseño Atemporal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Impeccable Style](https://img.shields.io/badge/Impeccable-0_Anti--patterns-success?style=for-the-badge)](https://impeccable.style)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](LICENSE)

> Tienda web y landing page de alta gama para **Carmen Atelier**, firma boutique de marroquinería y carteras de autor en cuero curtido vegetal hecha en Buenos Aires. Diseñada bajo la filosofía del *quiet luxury*, combinando una estética editorial táctil, microinteracciones fluidas y un flujo de conversión directo vía WhatsApp.

---

## 🌟 Vista Previa y Demo en Vivo

Puedes explorar el sitio en vivo a través de **GitHub Pages**:
👉 **[Ver Demo de Carmen Atelier](https://luchonicolini.github.io/Carmen-Carteras-/)**

*(Para habilitar GitHub Pages en tu fork: dirígete a `Settings` > `Pages` > `Build and deployment` > seleccionar Branch `main` y carpeta `/ (root)`).*

---

## ✨ Características Principales

### 🎨 Experiencia Visual y Diseño ("Quiet Luxury")
- **Paleta editorial cálida:** Tonos arena suave (`#EFE9DF`), cuero tostado artesanal (`#9C4C13`), marfil (`#FAF9F7`) y contraste tipográfico accesible (WCAG AA/AAA).
- **Tipografía de alta costura:** Titulares en **Playfair Display** combinados con **Manrope** para textos y detalles técnicos.
- **Suite de movimiento (*Motion Suite*):**
  - **Parallax 3D:** La cartera del Hero responde al cursor con inclinación tridimensional e ingravidez orgánica (`bag-float`).
  - **Costuras secuenciales:** Animación que traza las puntadas de hilo encerado en el bloque del atelier al hacer scroll.
  - **Cross-fade de tonos:** Transición suave de imágenes al seleccionar diferentes muestras de cuero en catálogo.
  - **Trazado magnético:** Línea guía fluida en enlaces de navegación al pasar el cursor.
- **Desplazamiento sedoso (*Smooth Scroll*):** Integración con **Studio Freight Lenis**.

### 🛍️ Catálogo y Comercio Electrónico Liviano
- **Catálogo centralizado:** Piezas gestionadas desde [`products.js`](products.js) con soporte para variantes de color, especificaciones y precios.
- **Piezas de autor destacadas:** Bolso Isabel, Tote Alba, Cartera Lola y Billetera Atelier.
- **Muestrario interactivo:** Alterna tonos de cuero directamente en las tarjetas del catálogo sin recargar.
- **Filtros por categoría:** Pestañas en tiempo real (*Todos*, *Bolsos*, *Carteras*, *Billeteras*).
- **Buscador en tiempo real:** Modal overlay instantáneo con atajo `Esc`.

### 🛒 Carrito de Compras Off-Canvas ([`cart.js`](cart.js))
- **Barra de envío gratis dinámica:** Progreso visual en tiempo real hacia el umbral de envío bonificado ($150.000).
- **Checkout exprés para WhatsApp:** Campos opcionales para Nombre y Ciudad que se memorizan automáticamente y nutren el mensaje de despacho a WhatsApp.
- **Persistencia local:** Guarda productos, tonos y monogramas en `localStorage`.
- **Gestión de cantidades:** Control de unidades y eliminación ágil desde el panel lateral.

### ❤️ Lista de Favoritos ([`favorites.js`](favorites.js))
- **Wishlist global:** Marcador con forma de corazón en cada producto y acceso rápido desde el header con contador.
- **Drawer dedicado:** Panel lateral para revisar piezas guardadas y moverlas directamente a la bolsa de compras.

### 🔍 Ficha de Producto Dinámica ([`product.html`](product.html))
- **Selector de tonos sincronizado:** Muestras de color con actualización inmediata de fotografía y nombre.
- **Grabado de iniciales en vivo (*Monogramming*):** Personalización en bajo relieve, foil dorado o plateado con previsualización en tag de cuero.
- **Lupa interactiva en imagen principal:** Efecto lupa de alta precisión para apreciar el grano del cuero.
- **Carrusel táctil de recomendados:** Impulsado por **Embla Carousel**.

---

## 📁 Estructura del Repositorio

```text
Carmen-Carteras-/
├── css/
│   └── styles.css          # CSS compilado y minificado de Tailwind
├── src/
│   └── input.css           # Punto de entrada de estilos, keyframes y directivas
├── images/
│   ├── bag-hero.svg        # Cartera insignia del Hero banner
│   ├── bag-isabel.svg      # Silueta de Bolso Isabel
│   ├── bag-alba.svg        # Silueta de Tote Alba
│   └── bag-lola.svg        # Silueta de Cartera Lola
├── index.html              # Landing page principal y catálogo interactivo
├── product.html            # Ficha de producto dinámica (?id=1..6)
├── shipping-returns.html   # Información de envíos y devoluciones
├── 404.html                # Página de error 404 personalizada
├── products.js             # Catálogo de productos y configuración de marca
├── cart.js                 # Lógica de carrito, barra de envío y checkout
├── favorites.js            # Módulo global de favoritos y wishlist drawer
├── search.js               # Buscador en tiempo real con modal overlay
├── server.js               # Servidor local Node.js para desarrollo
├── tailwind.config.js      # Configuración de diseño, fuentes y paleta
├── package.json            # Scripts y dependencias
├── README.md               # Documentación completa del proyecto
└── .gitignore              # Archivos y carpetas del sistema ignorados
```

---

## 🛠️ Tecnologías y Librerías

| Tecnología | Propósito |
| :--- | :--- |
| **HTML5 Semántico** | Estructura accesible con metadatos Open Graph / Twitter Card completos |
| **Tailwind CSS v3** | Compilación estática y ultra-liviana sin sobrecarga de CDN |
| **Vanilla JavaScript (ES6+)** | Lógica modular sin dependencias pesadas de frameworks |
| **Studio Freight Lenis** | Motor de smooth scrolling de alto rendimiento |
| **Embla Carousel** | Carrusel táctil y liviano para productos relacionados |
| **Google Fonts** | *Playfair Display* (serif editorial) & *Manrope* (sans-serif técnica) |
| **Impeccable Style** | Sistema de auditoría y calidad de interfaz de usuario |

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

### 1. Clonar el repositorio
```bash
git clone https://github.com/luchonicolini/Carmen-Carteras-.git
cd Carmen-Carteras-
npm install
```

### 2. Comandos disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run build` | Compila y minifica el archivo `css/styles.css` para producción |
| `npm run dev:css` | Modo observador (*watch*): recompila automáticamente al editar HTML o JS |
| `npm start` | Inicia el servidor local en `http://localhost:3000` |

---

## ⚙️ Personalización de Marca

Toda la información del negocio se configura en las primeras líneas de [`products.js`](products.js):

```javascript
const BRAND_CONFIG = {
    name: "Carmen Atelier",
    tagline: "Atelier de cuero y marroquinería de lujo. Buenos Aires.",
    whatsappNumber: "5491100000000", // Reemplazar con tu número internacional
    freeShippingThreshold: 150000,   // Monto mínimo para envío bonificado
    cartStorageKey: "carmen_cart"
};
```

---

## 👤 Autor

Desarrollado por **Luciano Nicolini**  
- GitHub: [@luchonicolini](https://github.com/luchonicolini)  
- Contacto: `nicolini.luciano@hotmail.com`

---

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
