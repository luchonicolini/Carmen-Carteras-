// Lógica del Carrito de Compras de Carmen Atelier
(function () {
    const STORAGE_KEY = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.cartStorageKey) 
        ? BRAND_CONFIG.cartStorageKey 
        : 'carmen_cart';
    const CUSTOMER_KEY = 'carmen_customer_info';
    const FREE_SHIPPING_THRESHOLD = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.freeShippingThreshold)
        ? BRAND_CONFIG.freeShippingThreshold
        : 150000;

    // Migración retrocompatible
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

    function formatCurrency(amount) {
        return '$' + Number(amount).toLocaleString('es-AR');
    }

    function saveCart() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartBadge();
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => {
            let price = 0;
            if (typeof item.priceNum === 'number') {
                price = item.priceNum;
            } else if (typeof item.price === 'number') {
                price = item.price;
            } else {
                const cleanStr = String(item.price).replace(/[^0-9]/g, '');
                price = parseInt(cleanStr, 10) || 0;
            }
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

        // Actualizar textos tipo "Bolsa (2)" como en el nuevo diseño
        const bolsaTextEls = document.querySelectorAll('.bolsa-text-count');
        bolsaTextEls.forEach(el => {
            el.textContent = `Bolsa (${count})`;
        });
    }

    function updateFreeShippingBar(total) {
        const progressEl = document.getElementById('free-shipping-progress');
        const textEl = document.getElementById('free-shipping-text');
        const statusEl = document.getElementById('free-shipping-status');

        if (!progressEl && !textEl) return;

        const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
        const percentage = Math.min(100, Math.round((total / FREE_SHIPPING_THRESHOLD) * 100));

        if (progressEl) {
            progressEl.style.width = `${percentage}%`;
            if (total >= FREE_SHIPPING_THRESHOLD) {
                progressEl.className = 'h-full bg-emerald-700 rounded-full transition-all duration-500';
            } else {
                progressEl.className = 'h-full bg-primary rounded-full transition-all duration-500';
            }
        }

        if (textEl) {
            if (total === 0) {
                textEl.innerHTML = `
                    <span class="flex items-center gap-1.5 text-stone-700 font-medium">
                        <span class="material-icons text-sm text-primary">local_shipping</span>
                        <span>Envío gratis sin cargo a partir de ${formatCurrency(FREE_SHIPPING_THRESHOLD)}</span>
                    </span>
                `;
            } else if (total < FREE_SHIPPING_THRESHOLD) {
                textEl.innerHTML = `
                    <span class="flex items-center gap-1.5 text-stone-700 font-medium">
                        <span class="material-icons text-sm text-primary">local_shipping</span>
                        <span>Te faltan <strong class="text-stone-900 font-bold">${formatCurrency(remaining)}</strong> para Envío Gratis</span>
                    </span>
                `;
            } else {
                textEl.innerHTML = `
                    <span class="flex items-center gap-1.5 text-emerald-800 font-bold">
                        <span class="material-icons text-sm text-emerald-700">check_circle</span>
                        <span>¡Tienes Envío Gratis asegurado! 🎉</span>
                    </span>
                `;
            }
        }

        if (statusEl) {
            statusEl.textContent = `${percentage}%`;
        }
    }

    function loadCustomerInfo() {
        try {
            const raw = localStorage.getItem(CUSTOMER_KEY);
            if (!raw) return;
            const info = JSON.parse(raw) || {};
            const nameInput = document.getElementById('checkout-customer-name');
            const cityInput = document.getElementById('checkout-customer-city');
            if (nameInput && info.name && !nameInput.value) nameInput.value = info.name;
            if (cityInput && info.city && !cityInput.value) cityInput.value = info.city;
        } catch (e) {}
    }

    function saveCustomerInfo() {
        try {
            const nameInput = document.getElementById('checkout-customer-name');
            const cityInput = document.getElementById('checkout-customer-city');
            const info = {
                name: nameInput ? nameInput.value.trim() : '',
                city: cityInput ? cityInput.value.trim() : ''
            };
            localStorage.setItem(CUSTOMER_KEY, JSON.stringify(info));
        } catch (e) {}
    }

    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalEl = document.getElementById('cart-total');

        if (!cartItemsContainer || !cartTotalEl) return;

        cartItemsContainer.innerHTML = '';
        const total = getCartTotal();

        updateFreeShippingBar(total);

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-16 px-4">
                    <span class="material-icons text-5xl text-stone-300 mb-3">shopping_bag</span>
                    <p class="text-stone-800 font-serif font-bold text-lg mb-1">Tu bolsa está vacía</p>
                    <p class="text-xs text-stone-600 max-w-xs mx-auto">Explora nuestra colección de piezas hechas a mano y añade tus preferidas.</p>
                </div>
            `;
            cartTotalEl.textContent = '$0';
            updateCartBadge();
            return;
        }

        cart.forEach((item, index) => {
            const quantity = item.quantity || 1;
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-3.5 p-3.5 bg-stone-50/90 rounded-2xl border border-stone-200/70 transition-all hover:bg-stone-50';
            
            const priceVal = typeof item.priceNum === 'number' 
                ? item.priceNum 
                : (typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^0-9]/g, ''), 10) || 0);
            const priceFormatted = formatCurrency(priceVal);
            
            itemEl.innerHTML = `
                <div class="w-20 h-20 rounded-xl overflow-hidden bg-stone-200 flex-shrink-0 border border-stone-200/50 p-1 flex items-center justify-center">
                    <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='images/bag-isabel.svg';" class="w-full h-full object-contain">
                </div>
                <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                        <h4 class="font-bold text-gray-900 text-sm leading-tight truncate" title="${item.name}">${item.name}</h4>
                        <div class="flex flex-wrap items-center gap-1.5 mt-1">
                            <span class="text-primary font-bold text-sm">${priceFormatted}</span>
                            ${item.color ? `
                                <span class="inline-flex items-center gap-1 text-xs font-medium text-stone-700 bg-stone-100 border border-stone-200 rounded-md px-2 py-0.5">
                                    <span class="w-2 h-2 rounded-full inline-block" style="background-color: ${item.colorHex || '#999'}"></span>
                                    ${item.color}
                                </span>
                            ` : ''}
                        </div>
                        ${item.monogram && item.monogram.initials ? `
                            <div class="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-amber-950 bg-amber-50 border border-amber-200/90 rounded-md px-2 py-0.5">
                                <span class="material-icons text-[13px] text-amber-700">auto_awesome</span>
                                <span>Grabado: <strong class="tracking-wider uppercase font-bold">${item.monogram.initials}</strong> <span class="text-xs text-amber-800">(${item.monogram.finish})</span></span>
                            </div>
                        ` : ''}
                    </div>
                    <div class="flex items-center gap-3 mt-2.5">
                        <div class="flex items-center border border-stone-200 rounded-lg bg-white overflow-hidden shadow-xs">
                            <button onclick="window.CarmenCart.changeQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 hover:text-black transition-colors" aria-label="Disminuir">-</button>
                            <span class="px-2 text-xs font-bold text-stone-800 select-none">${quantity}</span>
                            <button onclick="window.CarmenCart.changeQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 hover:text-black transition-colors" aria-label="Aumentar">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="window.CarmenCart.removeFromCart(${index})" class="text-stone-400 hover:text-red-500 self-start p-1 transition-colors" title="Eliminar producto" aria-label="Eliminar">
                    <span class="material-icons text-lg">delete</span>
                </button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalEl.textContent = formatCurrency(total);
        updateCartBadge();
    }

    function toggleCart(forceOpen) {
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        if (!cartSidebar || !cartOverlay) return;

        const isClosed = cartSidebar.classList.contains('translate-x-full');
        const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isClosed;

        if (shouldOpen) {
            if (typeof window.CarmenFavorites !== 'undefined' && window.CarmenFavorites.toggleFavoritesDrawer) {
                window.CarmenFavorites.toggleFavoritesDrawer(false);
            }

            cartSidebar.classList.remove('translate-x-full');
            cartOverlay.classList.remove('hidden');
            setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10);
            renderCart();
            loadCustomerInfo();
            document.body.style.overflow = 'hidden';
        } else {
            cartSidebar.classList.add('translate-x-full');
            cartOverlay.classList.add('opacity-0');
            setTimeout(() => cartOverlay.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    }

    function addToCart(productItem, quantity = 1, options = {}) {
        if (!productItem) return;

        const selectedColor = options.color || (productItem.colors && productItem.colors[0] ? productItem.colors[0].name : null);
        const colorObj = productItem.colors ? productItem.colors.find(c => c.name === selectedColor) : null;
        const colorHex = colorObj ? colorObj.hex : null;
        const itemImage = options.image || (colorObj ? colorObj.image : productItem.image);
        const selectedMonogram = (options.monogram && options.monogram.initials) ? options.monogram : null;

        const existingItemIndex = cart.findIndex(item => {
            const sameId = item.id === productItem.id;
            const sameColor = (item.color || null) === (selectedColor || null);
            const sameMonogram = JSON.stringify(item.monogram || null) === JSON.stringify(selectedMonogram || null);
            return sameId && sameColor && sameMonogram;
        });

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + quantity;
        } else {
            cart.push({
                id: productItem.id,
                name: productItem.name,
                price: productItem.price,
                priceNum: productItem.priceNum,
                image: itemImage,
                color: selectedColor,
                colorHex: colorHex,
                monogram: selectedMonogram,
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

        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn && checkoutBtn.disabled) return;

        saveCustomerInfo();

        const nameInput = document.getElementById('checkout-customer-name');
        const cityInput = document.getElementById('checkout-customer-city');
        const customerName = nameInput ? nameInput.value.trim() : '';
        const customerCity = cityInput ? cityInput.value.trim() : '';

        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            const originalHtml = checkoutBtn.innerHTML;
            checkoutBtn.innerHTML = `<span class="material-icons animate-spin text-sm">refresh</span> Abriendo WhatsApp...`;
            setTimeout(() => {
                if (checkoutBtn) {
                    checkoutBtn.disabled = false;
                    checkoutBtn.innerHTML = originalHtml;
                }
            }, 2500);
        }

        const brandName = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.name) ? BRAND_CONFIG.name : "Carmen Atelier";
        const phone = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.whatsappNumber) ? BRAND_CONFIG.whatsappNumber : "";

        let message = `¡Hola! Me gustaría realizar el siguiente pedido en ${brandName}:\n\n`;
        let total = 0;

        cart.forEach((item, i) => {
            const quantity = item.quantity || 1;
            const price = typeof item.priceNum === 'number' 
                ? item.priceNum 
                : (typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^0-9]/g, ''), 10) || 0);
            const lineTotal = price * quantity;
            total += lineTotal;

            message += `${i + 1}. *${item.name}* (x${quantity}) - ${formatCurrency(lineTotal)}`;
            if (item.color) {
                message += `\n   • Tono de cuero: ${item.color}`;
            }
            if (item.monogram && item.monogram.initials) {
                message += `\n   • Grabado artesanal: "${item.monogram.initials}" (${item.monogram.finish})`;
            }
            message += `\n\n`;
        });

        message += `*Total estimado:* ${formatCurrency(total)}\n`;

        if (total >= FREE_SHIPPING_THRESHOLD) {
            message += `*Envío:* ¡Envío Gratuito incluido! 📦✨\n`;
        } else {
            message += `*Envío:* A coordinar (${formatCurrency(FREE_SHIPPING_THRESHOLD - total)} para bonificado)\n`;
        }

        if (customerName || customerCity) {
            message += `\n*Datos para el despacho:*\n`;
            if (customerName) message += `• Destinatario: ${customerName}\n`;
            if (customerCity) message += `• Destino/Ciudad: ${customerCity}\n`;
        }

        message += `\n¿Tienen disponibilidad para coordinar los detalles? Muchas gracias.`;

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
        formatCurrency,
        getCart: () => cart
    };

    // Vincular eventos cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
        const openCartBtns = document.querySelectorAll('.open-cart-btn, #open-cart-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const cartOverlay = document.getElementById('cart-overlay');
        const checkoutBtn = document.getElementById('checkout-btn');
        const nameInput = document.getElementById('checkout-customer-name');
        const cityInput = document.getElementById('checkout-customer-city');

        openCartBtns.forEach(btn => btn.addEventListener('click', () => toggleCart(true)));
        if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
        if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));
        if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

        if (nameInput) nameInput.addEventListener('input', saveCustomerInfo);
        if (cityInput) cityInput.addEventListener('input', saveCustomerInfo);

        updateCartBadge();
    });
})();
