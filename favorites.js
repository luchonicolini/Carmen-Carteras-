// Gestión de Piezas Favoritas (Wishlist) de Carmen
(function () {
    const STORAGE_KEY = 'carmen_favorites';

    let favorites = [];
    try {
        favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        if (!Array.isArray(favorites)) favorites = [];
    } catch (e) {
        favorites = [];
    }

    function saveFavorites() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        } catch (e) {
            console.error('Error al guardar favoritos:', e);
        }
        updateFavBadges();
        updateHeartIcons();
    }

    function getFavorites() {
        return favorites;
    }

    function isFavorite(productId) {
        const id = Number(productId);
        return favorites.includes(id);
    }

    function showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs font-semibold px-5 py-3 rounded-full shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 z-[100]';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.remove('opacity-0', 'pointer-events-none');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.add('opacity-0', 'pointer-events-none');
        }, 2400);
    }

    function toggleFavorite(productId) {
        const id = Number(productId);
        const index = favorites.indexOf(id);
        let added = false;

        if (index > -1) {
            favorites.splice(index, 1);
            showToast('Pieza eliminada de tus favoritos');
        } else {
            favorites.push(id);
            added = true;
            showToast('Pieza guardada en tus favoritos');
        }

        saveFavorites();

        // Si el drawer de favoritos está abierto, re-renderizarlo
        const favSidebar = document.getElementById('fav-sidebar');
        if (favSidebar && !favSidebar.classList.contains('translate-x-full')) {
            renderFavorites();
        }

        return added;
    }

    function updateFavBadges() {
        const count = favorites.length;
        const badges = document.querySelectorAll('.fav-badge');
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

        const favTextEls = document.querySelectorAll('.fav-text-count');
        favTextEls.forEach(el => {
            el.textContent = count > 0 ? `Favoritos (${count})` : 'Favoritos';
        });
    }

    function updateHeartIcons() {
        // Actualizar botones de tarjetas con data-product-id
        const favButtons = document.querySelectorAll('.favorite-card-btn[data-product-id]');
        favButtons.forEach(btn => {
            const id = Number(btn.getAttribute('data-product-id'));
            const icon = btn.querySelector('.material-icons');
            if (icon) {
                if (isFavorite(id)) {
                    icon.textContent = 'favorite';
                    icon.classList.add('text-red-500');
                    btn.setAttribute('title', 'Quitar de favoritos');
                } else {
                    icon.textContent = 'favorite_border';
                    icon.classList.remove('text-red-500');
                    btn.setAttribute('title', 'Guardar en favoritos');
                }
            }
        });

        // Actualizar botón de vista de producto si existe
        const productFavIcon = document.getElementById('fav-icon');
        if (productFavIcon && typeof currentProduct !== 'undefined' && currentProduct) {
            if (isFavorite(currentProduct.id)) {
                productFavIcon.textContent = 'favorite';
                productFavIcon.classList.add('text-red-500');
            } else {
                productFavIcon.textContent = 'favorite_border';
                productFavIcon.classList.remove('text-red-500');
            }
        }
    }

    function renderFavorites() {
        const favItemsContainer = document.getElementById('fav-items');
        if (!favItemsContainer) return;

        favItemsContainer.innerHTML = '';

        if (typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS)) {
            return;
        }

        const favProducts = PRODUCTS.filter(p => favorites.includes(p.id));

        if (favProducts.length === 0) {
            favItemsContainer.innerHTML = `
                <div class="text-center py-16 px-4">
                    <span class="material-icons text-5xl text-stone-300 mb-3">favorite_border</span>
                    <p class="text-stone-800 font-serif font-bold text-lg mb-1">Aún no tienes piezas guardadas</p>
                    <p class="text-xs text-stone-600 max-w-xs mx-auto">Marca tus artículos favoritos con el corazón para tenerlos a mano y añadirlos a tu bolsa cuando desees.</p>
                </div>
            `;
            return;
        }

        favProducts.forEach(product => {
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-3.5 p-3.5 bg-stone-50/90 rounded-2xl border border-stone-200/70 transition-all hover:bg-stone-50';

            const defaultColor = product.colors && product.colors[0] ? product.colors[0].name : null;
            const defaultImage = (product.colors && product.colors[0] && product.colors[0].image) ? product.colors[0].image : product.image;

            itemEl.innerHTML = `
                <div class="w-20 h-20 rounded-xl overflow-hidden bg-stone-200 flex-shrink-0 border border-stone-200/50 cursor-pointer">
                    <a href="product.html?id=${product.id}">
                        <img src="${defaultImage}" alt="${product.name}" 
                            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=870&q=80';" 
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </a>
                </div>
                <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                        <a href="product.html?id=${product.id}" class="hover:text-primary transition-colors">
                            <h4 class="font-bold text-gray-900 text-sm leading-tight truncate" title="${product.name}">${product.name}</h4>
                        </a>
                        <p class="text-primary font-bold text-sm mt-1">${product.price}</p>
                        <p class="text-xs text-stone-600 mt-0.5">${product.category}</p>
                    </div>
                    <div class="flex items-center gap-2 mt-2.5">
                        <button onclick="window.CarmenFavorites.moveToCart(${product.id})" 
                            class="text-xs font-bold uppercase tracking-wider bg-stone-900 hover:bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-xs">
                            <span class="material-icons text-xs">shopping_bag</span>
                            Añadir a la bolsa
                        </button>
                    </div>
                </div>
                <button onclick="window.CarmenFavorites.toggleFavorite(${product.id})" 
                    class="text-stone-400 hover:text-red-500 self-start p-1 transition-colors" 
                    title="Quitar de favoritos" aria-label="Quitar de favoritos">
                    <span class="material-icons text-lg">close</span>
                </button>
            `;

            favItemsContainer.appendChild(itemEl);
        });
    }

    function moveToCart(productId) {
        if (typeof window.CarmenCart === 'undefined' || !window.CarmenCart.addToCart) return;
        const product = PRODUCTS.find(p => p.id === Number(productId));
        if (!product) return;

        window.CarmenCart.addToCart(product, 1, {
            color: product.colors && product.colors[0] ? product.colors[0].name : null,
            image: (product.colors && product.colors[0] && product.colors[0].image) ? product.colors[0].image : product.image
        });

        showToast(`"${product.name}" añadida a tu bolsa`);
        toggleFavoritesDrawer(false);
    }

    function toggleFavoritesDrawer(forceOpen) {
        const favSidebar = document.getElementById('fav-sidebar');
        const favOverlay = document.getElementById('fav-overlay');
        if (!favSidebar || !favOverlay) return;

        const isClosed = favSidebar.classList.contains('translate-x-full');
        const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isClosed;

        if (shouldOpen) {
            // Si el carrito está abierto, cerrarlo primero
            if (typeof window.CarmenCart !== 'undefined' && window.CarmenCart.toggleCart) {
                window.CarmenCart.toggleCart(false);
            }
            favSidebar.classList.remove('translate-x-full');
            favOverlay.classList.remove('hidden');
            setTimeout(() => favOverlay.classList.remove('opacity-0'), 10);
            renderFavorites();
            document.body.style.overflow = 'hidden';
        } else {
            favSidebar.classList.add('translate-x-full');
            favOverlay.classList.add('opacity-0');
            setTimeout(() => favOverlay.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    }

    // Exponer API global
    window.CarmenFavorites = {
        getFavorites,
        isFavorite,
        toggleFavorite,
        moveToCart,
        toggleFavoritesDrawer,
        renderFavorites,
        updateFavBadges,
        updateHeartIcons
    };

    // Vincular eventos DOM
    document.addEventListener('DOMContentLoaded', () => {
        const openFavBtns = document.querySelectorAll('.open-fav-btn, #open-fav-btn');
        const closeFavBtn = document.getElementById('close-fav');
        const favOverlay = document.getElementById('fav-overlay');

        openFavBtns.forEach(btn => btn.addEventListener('click', () => toggleFavoritesDrawer(true)));
        if (closeFavBtn) closeFavBtn.addEventListener('click', () => toggleFavoritesDrawer(false));
        if (favOverlay) favOverlay.addEventListener('click', () => toggleFavoritesDrawer(false));

        updateFavBadges();
        updateHeartIcons();
    });
})();
