// Lógica del Buscador en tiempo real de Carmen
(function () {
    function initSearch() {
        const searchBtns = document.querySelectorAll('#search-btn, .open-search-btn');
        const closeSearchBtn = document.getElementById('close-search');
        const searchOverlay = document.getElementById('search-overlay');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (!searchOverlay || !searchInput || !searchResults) return;

        function toggleSearch(forceOpen) {
            const isHidden = searchOverlay.classList.contains('hidden');
            const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : isHidden;

            if (shouldOpen) {
                searchOverlay.classList.remove('hidden');
                setTimeout(() => {
                    searchOverlay.classList.remove('opacity-0');
                    searchInput.focus();
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                searchOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    searchOverlay.classList.add('hidden');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                }, 300);
                document.body.style.overflow = '';
            }
        }

        function performSearch(query) {
            searchResults.innerHTML = '';
            const trimmed = query.trim().toLowerCase();
            if (!trimmed) {
                searchResults.innerHTML = '';
                return;
            }

            const catalog = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];
            const filtered = catalog.filter(p => 
                p.name.toLowerCase().includes(trimmed) || 
                (p.category && p.category.toLowerCase().includes(trimmed)) ||
                (p.description && p.description.toLowerCase().includes(trimmed))
            );

            if (filtered.length === 0) {
                searchResults.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <span class="material-icons text-5xl text-gray-300 mb-2">search_off</span>
                        <p class="text-gray-600 text-lg font-medium">No se encontraron productos para "${query}".</p>
                        <p class="text-gray-400 text-sm mt-1">Prueba buscando "bolso", "cartera" o "billetera".</p>
                    </div>
                `;
                return;
            }

            filtered.forEach(product => {
                const card = document.createElement('div');
                card.className = 'group cursor-pointer bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all';
                card.onclick = () => window.location.href = `product.html?id=${product.id}`;
                card.innerHTML = `
                    <div class="relative overflow-hidden rounded-xl aspect-[4/5] mb-3 bg-gray-100">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <span class="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md text-gray-700">${product.category}</span>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">${product.name}</h3>
                    <p class="text-primary font-bold mt-1 text-sm">${product.price}</p>
                `;
                searchResults.appendChild(card);
            });
        }

        searchBtns.forEach(btn => btn.addEventListener('click', () => toggleSearch(true)));
        if (closeSearchBtn) closeSearchBtn.addEventListener('click', () => toggleSearch(false));

        searchInput.addEventListener('input', (e) => performSearch(e.target.value));

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !searchOverlay.classList.contains('hidden')) {
                toggleSearch(false);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', initSearch);
})();
