# Carmen Atelier — Plataforma Digital de Marroquinería de Autor

Plataforma de comercio electrónico y catálogo digital diseñada para **Carmen Atelier**, firma boutique especializada en marroquinería artesanal y carteras de cuero curtido vegetal en Buenos Aires, Argentina.

El proyecto concilia la identidad del lujo silencioso (*quiet luxury*) y la narrativa editorial de alta costura con una arquitectura web ligera, accesible y orientada a la conversión directa mediante atención personalizada por WhatsApp.

---

## 1. Descripción del Proyecto

### 1.1 Contexto y Propósito
El objetivo de esta plataforma es trasladar la experiencia táctil, exclusiva y pausada de un atelier tradicional al entorno digital. A diferencia de las tiendas genéricas de comercio electrónico sobrecargadas de elementos promocionales agresivos, Carmen Atelier prioriza la jerarquía visual, la apreciación de los materiales nobles y una interacción sobria donde el producto y el oficio artesanal son los protagonistas.

### 1.2 Modelo de Conversión
La plataforma implementa un modelo de venta directa al consumidor (D2C) adaptado a productos de autor:
- **Catálogo interactivo:** Visualización de piezas insignia, variantes de color y especificaciones técnicas en tiempo real.
- **Personalización de monograma:** Grabado de iniciales en relieve o foil metálico previsualizado en tiempo real antes de la compra.
- **Checkout conversacional:** El flujo de compra converge en un mensaje estructurado hacia la línea oficial de WhatsApp del taller, permitiendo coordinar detalles de fabricación a medida, métodos de pago y despacho personalizado sin intermediarios.

---

## 2. Principios de Diseño y Experiencia de Usuario

- **Estética editorial de lujo silencioso:** Tipografía combinada de alto contraste formal (*Playfair Display* para titulares y *Manrope* para cuerpo y especificaciones técnicas), combinada con una paleta cálida inspirada en materias primas naturales (tonos arena, marfil y cuero tostado).
- **Microinteracciones físicas y cinéticas:**
  - *Parallax 3D interactivo:* El producto insignia en portada responde a la posición del cursor con inclinación tridimensional e ingravidez.
  - *Costura artesanal en scroll:* Animación secuencial en SVG que traza las puntadas de hilo encerado a medida que el usuario recorre el manifiesto del atelier.
  - *Transición de tonalidades:* Desvanecimiento cruzado (*cross-fade*) de imágenes al seleccionar diferentes muestras de cuero.
  - *Desplazamiento suave:* Implementación de *Lenis Smooth Scroll* para una navegación fluida y uniforme entre dispositivos.
- **Accesibilidad y cumplimiento normativo:**
  - Contraste cromático verificado conforme a los estándares WCAG AA y AAA.
  - Estructura semántica HTML5, navegación por teclado y etiquetas ARIA completas.
  - Cero patrones oscuros o anti-patrones de diseño evaluados bajo la suite Impeccable Style.

---

## 3. Arquitectura y Módulos del Sistema

La solución está construida con JavaScript moderno (ES6+) desacoplado y sin dependencias pesadas de frameworks, lo que garantiza tiempos de carga casi instantáneos y un mantenimiento sencillo.

### 3.1 Módulos Principales

- `products.js`: Fuente única de verdad para el catálogo de productos, variantes de cuero, precios, metadatos y configuración general de la marca.
- `cart.js`: Gestión del estado del carrito de compras en almacenamiento local (`localStorage`), cálculo dinámico de la barra de progreso hacia el envío bonificado y generación del enlace de pedido estructurado para WhatsApp.
- `favorites.js`: Sistema persistente de lista de deseos (*wishlist*) con panel lateral dedicado y sincronización inmediata con el carrito.
- `search.js`: Motor de búsqueda en el cliente con filtrado instantáneo por nombre, categoría y descripción, desplegado en un modal con soporte de atajos de teclado (`Esc`).
- `product.html`: Ficha de producto dinámica impulsada por parámetros URL (`?id=X`), con selector reactivo de tonalidades, motor de personalización de monograma y carrusel de recomendaciones mediante Embla Carousel.

---

## 4. Estructura del Directorio

```text
Carmen-Carteras/
├── css/
│   └── styles.css            Compilado final y minificado de Tailwind CSS
├── src/
│   └── input.css             Directivas de estilos, animaciones y keyframes
├── images/
│   ├── bag-hero.svg          Ilustración vectorial del producto principal
│   ├── bag-isabel.svg        Silueta del Bolso Isabel
│   ├── bag-alba.svg          Silueta del Tote Alba
│   └── bag-lola.svg          Silueta de la Cartera Lola
├── index.html                Página principal, catálogo y manifiesto de marca
├── product.html              Detalle de producto dinámico y personalización
├── shipping-returns.html     Políticas de envío, cambios y devoluciones
├── 404.html                  Página de error 404 personalizada
├── products.js               Base de datos local del catálogo y configuración
├── cart.js                   Lógica del carrito off-canvas y checkout
├── favorites.js              Módulo de favoritos y cajón lateral
├── search.js                 Buscador en tiempo real
├── server.js                 Servidor de desarrollo local Node.js
├── tailwind.config.js        Configuración de Tailwind (paleta, fuentes y radios)
├── package.json              Scripts de compilación y dependencias
├── README.md                 Documentación técnica y operativa del proyecto
└── .gitignore                Archivos y directorios excluidos de control de versiones
```

---

## 5. Pila Tecnológica

| Componente | Tecnología | Justificación Técnica |
| :--- | :--- | :--- |
| Marcado | HTML5 Semántico | Accesibilidad nativa, SEO optimizado y etiquetas Open Graph / Twitter Card. |
| Estilos | Tailwind CSS v3 | Generación de CSS utilitario purgado y compilado en estático sin sobrecarga de runtime. |
| Lógica del Cliente | JavaScript Vanilla (ES6+) | Máximo rendimiento, compatibilidad universal y cero dependencias de ejecución pesadas. |
| Animaciones | CSS Transitions & SVG | Aceleración por hardware para transiciones y trazado de vectores. |
| Desplazamiento | Lenis Smooth Scroll | Control de inercia y sincronización precisa con animaciones de scroll. |
| Carrusel | Embla Carousel | Carrusel táctil ultra-liviano (menos de 7 KB) para navegación en dispositivos móviles. |
| Servidor de Desarrollo | Node.js (Módulo HTTP nativo) | Entorno local ligero sin configuración compleja adicional. |

---

## 6. Instalación y Entorno de Desarrollo

### 6.1 Requisitos Previos
- Node.js versión 18.0.0 o superior.
- Git instalado.

### 6.2 Clonación y Puesta en Marcha
1. Clonar el repositorio localmente:
   ```bash
   git clone https://github.com/luchonicolini/Carmen-Carteras-.git
   cd Carmen-Carteras-
   ```

2. Instalar las dependencias de desarrollo:
   ```bash
   npm install
   ```

3. Iniciar el servidor local:
   ```bash
   npm start
   ```
   El entorno estará disponible en `http://localhost:3000`.

### 6.3 Scripts Disponibles

- `npm run build`: Compila y minifica `src/input.css` hacia `css/styles.css` para despliegue en producción.
- `npm run dev:css`: Ejecuta el compilador de Tailwind en modo escucha (*watch*) para reflejar cambios en tiempo real.
- `npm start`: Inicia el servidor estático Node.js.

---

## 7. Configuración de Parámetros de Negocio

Los parámetros operativos de la tienda se configuran de forma centralizada en el objeto `BRAND_CONFIG` dentro del archivo `products.js`:

```javascript
const BRAND_CONFIG = {
    name: "Carmen Atelier",
    tagline: "Atelier de cuero y marroquinería de lujo. Buenos Aires.",
    whatsappNumber: "5491100000000", // Número de WhatsApp internacional con código de país y área
    freeShippingThreshold: 150000,   // Monto mínimo en ARS para bonificar el costo de envío
    cartStorageKey: "carmen_cart"    // Clave para almacenamiento en localStorage
};
```

---

## 8. Despliegue en Producción

El proyecto está diseñado como un sitio estático optimizado, lo que permite su alojamiento en plataformas como GitHub Pages, Vercel, Netlify o servidores Apache/Nginx convencionales.

### Despliegue en GitHub Pages
1. Asegurarse de que el archivo `css/styles.css` esté compilado (`npm run build`).
2. En el repositorio de GitHub, navegar a **Settings** > **Pages**.
3. En la sección **Build and deployment**, seleccionar:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Confirmar con **Save**. El sitio quedará accesible públicamente en la URL asignada.

---

## 9. Autoría y Licencia

- **Desarrollo y Diseño:** Luciano Nicolini
- **Contacto:** nicolini.luciano@hotmail.com
- **Perfil de GitHub:** [github.com/luchonicolini](https://github.com/luchonicolini)
- **Licencia:** Distribuido bajo los términos de la Licencia [MIT](LICENSE).
