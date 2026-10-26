# 👜 Carmen — Marroquinería de Lujo & Diseño Atemporal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-blueviolet?style=for-the-badge)](https://carmen.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](LICENSE)

> Tienda web y landing page de alta gama para una firma boutique de marroquinería y carteras de cuero artesanal. Diseñada bajo la filosofía visual del *quiet luxury*, combinando una estética editorial cálida, microinteracciones fluidas y un flujo de conversión directo vía WhatsApp.

---

## 🌟 Vista Previa y Demo en Vivo

Puedes explorar el sitio en vivo a través de **GitHub Pages**:
👉 **[Ver Demo de Carmen Marroquinería](https://luchonicolini.github.io/Carmen-Carteras-/)**

*(Para habilitar GitHub Pages en tu fork: dirígete a `Settings` > `Pages` > `Build and deployment` > seleccionar Branch `main` y carpeta `/ (root)`).*

---

## ✨ Características Principales

### 🎨 Experiencia Visual y Diseño ("Quiet Luxury")
- **Paleta editorial:** Tonos terracota (`#cf7317`), cremas cálidos (`#FAF9F7`) y contraste tipográfico con la fuente **Manrope**.
- **Desplazamiento sedoso (*Smooth Scroll*):** Integración nativa con **Studio Freight Lenis** para una sensación de navegación suave y moderna.
- **Transición de Navbar reactiva:** Cabecera transparente con tipografía blanca sobre el hero que muta a fondo sólido con `backdrop-blur` al hacer scroll.
- **Efectos de revelado progresivo:** Animaciones de entrada sincronizadas mediante `IntersectionObserver`.

### 🛍️ Catálogo y Comercio Electrónico Liviano
- **Catálogo centralizado:** Los productos se gestionan desde un único archivo [`products.js`](products.js) (nombres, categorías, precios numéricos, descripciones y galerías de fotos).
- **Filtros por categoría en tiempo real:** Pestañas interactivas sobre el grid para alternar entre *Todos*, *Bolsos*, *Carteras* y *Billeteras* sin recargar.
- **Buscador modal a pantalla completa:** Búsqueda instantánea con indexación de nombres, categorías y descripciones, accesible mediante icono o atajo de teclado (`Esc` para cerrar).

### 🛒 Carrito de Compras Off-Canvas ([`cart.js`](cart.js))
- **Persistencia local:** Los artículos se guardan en el navegador (`localStorage`) para que el usuario no pierda su selección al cambiar de página.
- **Contador flotante (*Badge*):** Indicador visual en tiempo real en la barra de navegación que muestra la cantidad exacta de productos en la bolsa.
- **Gestor de cantidades:** Control para aumentar (`+`), disminuir (`-`) o eliminar piezas directamente desde el panel lateral.
- **Checkout optimizado a WhatsApp:** Genera un mensaje estructurado con el detalle de los productos, cantidades y subtotal exacto para concretar el pedido de forma personalizada.

### 🔍 Ficha de Producto Dinámica ([`product.html`](product.html))
- **Lupa interactiva en imagen principal:** Efecto lupa que calcula las coordenadas del cursor (`xPercent`, `yPercent`) para apreciar el grano y costura del cuero.
- **Galería de miniaturas sincronizada:** Múltiples ángulos y planos de detalle propios de cada artículo.
- **Carrusel de piezas recomendadas:** Integrado con **Embla Carousel** para una experiencia táctil y fluida, excluyendo automáticamente el producto visualizado.
- **Interacciones de usuario:** Botón de compartir con soporte de **Web Share API** (y copia al portapapeles con notificación *toast*) y selector de favoritos persistente.

---

## 📁 Estructura del Repositorio

El proyecto cuenta con una arquitectura limpia y modular de frontend estático, lista para alojarse en cualquier CDN, GitHub Pages, Netlify o Vercel:

```text
Carmen-Carteras-/
├── index.html              # Landing page principal y catálogo interactivo
├── product.html            # Ficha de producto dinámica (?id=1..8)
├── shipping-returns.html   # Información de envíos, tiempos y devoluciones
├── 404.html                # Página de error 404 personalizada con enlace de retorno
├── products.js             # Fuente única de verdad del catálogo y configuración de marca
├── cart.js                 # Lógica global del carrito de compras y checkout
├── search.js               # Buscador en tiempo real con modal overlay
├── README.md               # Documentación completa del proyecto
└── .gitignore              # Archivos y carpetas del sistema ignorados
```

---

## 🛠️ Tecnologías y Librerías

| Tecnología | Propósito |
| :--- | :--- |
| **HTML5 Semántico** | Estructura accesible con metadatos Open Graph / Twitter Card completos |
| **Tailwind CSS (CDN)** | Maquetación responsiva basada en utilidades y diseño mobile-first |
| **Vanilla JavaScript (ES6+)** | Lógica modular sin dependencias pesadas de frameworks |
| **Studio Freight Lenis** | Motor de smooth scrolling de alto rendimiento |
| **Embla Carousel** | Carrusel táctil y liviano para productos relacionados |
| **Google Fonts (Manrope)** | Tipografía geométrica moderna de alta legibilidad |
| **Google Material Icons & SVGs** | Iconografía de interfaz e iconos vectoriales de marcas (WhatsApp, Instagram, Facebook) |

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

No se requieren gestores de paquetes ni pasos de compilación complejos. Puedes correr el proyecto en 2 pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/luchonicolini/Carmen-Carteras-.git
cd Carmen-Carteras-
```

### 2. Abrir en tu navegador
Puedes abrir directamente el archivo `index.html` con doble clic o iniciar un servidor web local:

**Con Node.js (npx serve):**
```bash
npx serve .
```

**Con Python:**
```bash
# Python 3
python3 -m http.server 8000
```

**Con VS Code:**
Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## ⚙️ Personalización y Configuración

Toda la información del negocio se configura en las primeras líneas de [`products.js`](products.js):

```javascript
// Configuración general de la marca
const BRAND_CONFIG = {
    name: "Carmen",
    whatsappNumber: "5491100000000", // Ingresa aquí tu número con código de país
    cartStorageKey: "carmen_cart"
};
```

Para añadir un nuevo producto al catálogo, basta con agregar un nuevo objeto en el arreglo `PRODUCTS` dentro de [`products.js`](products.js) con sus respectivos atributos (`id`, `name`, `category`, `price`, `images`, `description`, `specs`).

---

## 👤 Autor

Desarrollado por **Luciano Nicolini**  
- GitHub: [@luchonicolini](https://github.com/luchonicolini)
- Contacto: `nicolini.luciano@hotmail.com`

---

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE). Siéntete libre de utilizarlo como inspiración o base para tus propios proyectos.
