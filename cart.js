// Lógica del Carrito de Compras de Carmen
(function () {
    const STORAGE_KEY = BRAND_CONFIG ? BRAND_CONFIG.cartStorageKey : 'carmen_cart';

    // Migración retrocompatible desde artisan_cart
    if (!localStorage.getItem(STORAGE_KEY) && localStorage.getItem('artisan_cart')) {
        try {
            localStorage.setItem(STORAGE_KEY, localStorage.getItem('artisan_cart'));
        } catch (e) {
            console.error('Error al migrar carrito anterior:', e);
        }
    }

    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
        cart = [];
    }

    function saveCart() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartBadge();
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => {
            const price = typeof item.price === 'number' 
                ? item.price 
                : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
            const quantity = item.quantity || 1;
            return sum + (price * quantity);
        }, 0);
    }

    function getCartCount() {
        return cart.reduce((count, item) => count + (item.quantity || 1), 0);
    }

    function updateCartBadge() {
        const count = getCartCount();
        const badges = document.querySelectorAll('.cart-badge');
        badges.forEach(badge => {
            badge.textContent = count;
            if (count > 0) {
                badge.classList.remove('hidden');
                badge.classList.add('flex');
            } else {
                badge.classList.add('hidden');
                badge.classList.remove('flex');
            }
        });
    }

    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalEl = document.getElementById('cart-total');

        if (!cartItemsContainer || !cartTotalEl) return;

        cartItemsContainer.innerHTML = '';
        const total = getCartTotal();

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-16 px-4">
                    <span class="material-icons text-5xl text-gray-300 mb-3">shopping_bag</span>
                    <p class="text-gray-500 font-medium">Tu bolsa está vacía.</p>
                    <p class="text-xs text-gray-400 mt-1">Explora nuestra colección y añade piezas únicas.</p>
                </div>
            `;
            cartTotalEl.textContent = '$0.00';
            updateCartBadge();
            return;
        }

        cart.forEach((item, index) => {
            const quantity = item.quantity || 1;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-4 p-3 bg-gray-50/80 rounded-xl border border-gray-100 transition-all hover:bg-gray-50';
            itemEl.innerHTML = `
                <div class="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                        <h4 class="font-bold text-gray-900 text-sm leading-tight">${item.name}</h4>
                        <p class="text-primary font-bold text-sm mt-1">${typeof item.price === 'number' ? '$' + item.price.toFixed(2) : item.price}</p>
                    </div>
                    <div class="flex items-center gap-3 mt-2">
                        <div class="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <button onclick="window.CarmenCart.changeQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors" aria-label="Disminuir">-</button>
                            <span class="px-2 text-xs font-bold text-gray-700 select-none">${quantity}</span>
                            <button onclick="window.CarmenCart.changeQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors" aria-label="Aumentar">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="window.CarmenCart.removeFromCart(${index})" class="text-gray-400 hover:text-red-500 self-start p-1 transition-colors" title="Eliminar producto" aria-label="Eliminar">
                    <span class="material-icons text-lg">delete</span>
                </button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalEl.textContent = `$${total.toFixed(2)}`;
        updateCartBadge();
    }

    function toggleCart(forceOpen) {
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        if (!cartSidebar || !cartOverlay) return;

        const isClosed = cartSidebar.classList.contains('translate-x-full');
        const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isClosed;

        if (shouldOpen) {
            cartSidebar.classList.remove('translate-x-full');
            cartOverlay.classList.remove('hidden');
            setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
            renderCart();
            document.body.style.overflow = 'hidden';
        } else {
            cartSidebar.classList.add('translate-x-full');
            cartOverlay.classList.add('opacity-0');
            setTimeout(() => cartOverlay.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    }

    function addToCart(productItem, quantity = 1) {
        if (!productItem) return;

        const existingItemIndex = cart.findIndex(item => item.id === productItem.id);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + quantity;
        } else {
            cart.push({
                id: productItem.id,
                name: productItem.name,
                price: productItem.price,
                image: productItem.image,
                quantity: quantity
            });
        }

        saveCart();
        toggleCart(true);
    }

    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            saveCart();
            renderCart();
        }
    }

    function changeQuantity(index, delta) {
        if (index >= 0 && index < cart.length) {
            const newQty = (cart[index].quantity || 1) + delta;
            if (newQty <= 0) {
                removeFromCart(index);
            } else {
                cart[index].quantity = newQty;
                saveCart();
                renderCart();
            }
        }
    }

    function checkout() {
        if (cart.length === 0) return;

        const brandName = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.name) ? BRAND_CONFIG.name : "Carmen";
        const phone = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.whatsappNumber) ? BRAND_CONFIG.whatsappNumber : "";

        let message = `¡Hola! Me gustaría realizar el siguiente pedido en ${brandName}:\n\n`;
        let total = 0;

        cart.forEach((item, i) => {
            const quantity = item.quantity || 1;
            const price = typeof item.price === 'number' 
                ? item.price 
                : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
            const lineTotal = price * quantity;
            total += lineTotal;
            message += `${i + 1}. ${item.name} (x${quantity}) - $${lineTotal.toFixed(2)}\n`;
        });

        message += `\n*Total estimado:* $${total.toFixed(2)}\n\n¿Tienen disponibilidad para coordinar el envío? Muchas gracias.`;

        const whatsappUrl = phone 
            ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
            : `https://wa.me/?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    }

    // Exponer API global de CarmenCart
    window.CarmenCart = {
        addToCart,
        removeFromCart,
        changeQuantity,
        toggleCart,
        renderCart,
        checkout,
        updateCartBadge,
        getCart: () => cart
    };

    // Vincular eventos cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
        const openCartBtns = document.querySelectorAll('.open-cart-btn, #open-cart-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const cartOverlay = document.getElementById('cart-overlay');
        const checkoutBtn = document.getElementById('checkout-btn');

        openCartBtns.forEach(btn => btn.addEventListener('click', () => toggleCart(true)));
        if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
        if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));
        if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

        updateCartBadge();
    });
})();
