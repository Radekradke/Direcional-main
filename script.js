/* ============================================
   REFATORAÇÃO PROFISSIONAL - DIRECIONAL IMÓVEIS
   Otimizado, Acessível e Performático
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // 1. DADOS DOS IMÓVEIS (CORRIGIDOS E UNIFICADOS)
    // ============================================
    
    // Imagem Placeholder para falhas (imagem genérica de prédio)
    const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80';

    const properties = [
        {
            id: "uniq-condominio-clube",
            name: "UNIQ Condomínio Clube",
            location: "Nova Iguaçu, Rio de Janeiro",
            price: "R$ 320.000",
            badge: "em-obra",
            badgeText: "Em obras",
            image: "img/UNIQ/Feed1.png",
            rooms: 2,
            area: 68,
            garage: 1,
            lat: -22.8455,
            lng: -43.3105
        },
        {
            id: "nova-caxias-up",
            name: "Nova Caxias UP",
            location: "Vila Ouro Preto / Duque de Caxias",
            price: "R$ 280.000",
            badge: "pronto",
            badgeText: "Pronto para Morar",
            image: "img/NovaCaxiasUP/FACHADA.jpg",
            rooms: 2,
            area: 54,
            garage: 1,
            lat: -22.7857,
            lng: -43.3056
        },
        {
            id: "nova-caxias-fun",
            name: "Nova Caxias FUN",
            location: "Duque de Caxias, RJ",
            price: "R$ 295.000",
            badge: "pronto",
            badgeText: "Pronto para Morar",
            image: "img/NovaCaxiasFUN/002_Fchd_04.jpg",
            rooms: 2,
            area: 70,
            garage: 1,
            lat: -22.7857,
            lng: -43.3056
        },
        {
            id: "conquista-parque-iguacu",
            name: "Conquista Parque Iguaçu",
            location: "Campo Grande, Rio de Janeiro",
            price: "R$ 350.000",
            badge: "em-obra",
            badgeText: "Em Obras",
            image: "img/ConquistaParqueIguaçu/FACHADA_FINAL_EMAIL.jpg",
            rooms: 3,
            area: 85,
            garage: 2,
            lat: -22.8978,
            lng: -43.5592
        },
        {
            id: "sky-mario-guimaraes",
            name: "Sky Mario Guimarães",
            location: "Tijuca, Rio de Janeiro",
            price: "R$ 450.000",
            badge: "pronto",
            badgeText: "Pronto para Morar",
            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
            rooms: 3,
            area: 95,
            garage: 2,
            lat: -22.9325,
            lng: -43.2437
        },
        {
            id: "inn-barra-olimpica",
            name: "Inn Barra Olímpica",
            location: "Barra da Tijuca, Rio de Janeiro",
            price: "R$ 520.000",
            badge: "lancamento",
            badgeText: "Lançamento",
            image: "img/InnBarraOlimpico/ApartamentPonta.jpg",
            rooms: 3,
            area: 100,
            garage: 2,
            lat: -23.0076,
            lng: -43.3658
        },
        {
            id: "conquista-max-norte",
            name: "Conquista Max Norte",
            location: "Olaria, Rio de Janeiro",
            price: "R$ 310.000",
            badge: "pronto",
            badgeText: "Pronto para Morar",
            image: "img/ConquistaMaxNorte/FACHADA.jpg",
            rooms: 2,
            area: 72,
            garage: 1,
            lat: -22.8455,
            lng: -43.3105
        },
        {
            id: "soul-samba",
            name: "Soul Samba",
            location: "Madureira, Rio de Janeiro",
            price: "R$ 380.000",
            badge: "em-obra",
            badgeText: "Em Obras",
            image: "img/SoulSamba/FACHADADIURNA.jpg",
            rooms: 3,
            area: 88,
            garage: 2,
            lat: -22.8806,
            lng: -43.3497
        },
        {
            id: "residencial-laranjeiras",
            name: "Residencial Laranjeiras",
            location: "Laranjeiras, Rio de Janeiro",
            price: "R$ 420.000",
            badge: "pronto",
            badgeText: "Pronto para Morar",
            image: "", // Fallback irá atuar
            rooms: 3,
            area: 90,
            garage: 2,
            lat: -22.9297,
            lng: -43.1925
        },
        {
            id: "residencial-viva",
            name: "Residencial Viva",
            location: "Irajá, Rio de Janeiro",
            price: "R$ 265.000",
            badge: "lancamento",
            badgeText: "Lançamento",
            image: "", // Fallback irá atuar
            rooms: 2,
            area: 60,
            garage: 1,
            lat: -22.8262,
            lng: -43.3167
        }
    ];

    // Dados da Galeria (Corrigido: IDs agora batem com properties)
    const galleryData = {
        "uniq-condominio-clube": {
            title: "UNIQ Condomínio Clube",
            location: "Nova Iguaçu, Rio de Janeiro",
            images: [
                "img/UNIQ/Feed1.png",
                "img/UNIQ/Feed2.png",
                "img/UNIQ/Feed3.png"
            ]
        },
        "nova-caxias-up": {
            title: "Nova Caxias UP",
            location: "Duque de Caxias, RJ",
            images: [
                "img/NovaCaxiasUP/FACHADA.jpg",
                "img/NovaCaxiasUP/GUARITA.jpg",
                "img/NovaCaxiasUP/CHURRASQUEIRA.jpg",
                "img/NovaCaxiasUP/IMAGEMAREADOLAZER.jpg"
            ]
        },
        "nova-caxias-fun": {
            title: "Nova Caxias FUN",
            location: "Duque de Caxias, RJ",
            images: [
                "img/NovaCaxiasFUN/001_Grta_08.jpg",
                "img/NovaCaxiasFUN/002_Fchd_04.jpg",
                "img/NovaCaxiasFUN/Piscinacomdeckmolhado.jpg",
                "img/NovaCaxiasFUN/VarandadaChurrasqueira.jpg"
            ]
        },
        "conquista-max-norte": {
            title: "Conquista Max Norte",
            location: "Olaria, RJ",
            images: [
                "img/ConquistaMaxNorte/GUARITADIURNA.jpg",
                "img/ConquistaMaxNorte/3.jpg",
                "img/ConquistaMaxNorte/5.jpg"
            ]
        },
        "soul-samba": {
            title: "Soul Samba",
            location: "Madureira, RJ",
            images: [
                "img/SoulSamba/FACHADADIURNA.jpg",
                "img/SoulSamba/APARTAMENTO.jpg",
                "img/SoulSamba/CHURRASQUEIRA.jpg",
                "img/SoulSamba/GUARITA.jpg",
                "img/SoulSamba/piscina.jpg"
            ]
        }
    };

    // ============================================
    // 2. ELEMENTOS DO DOM
    // ============================================
    const elements = {
        header: document.getElementById('mainHeader'),
        menuToggle: document.getElementById('menuToggle'),
        mobileNav: document.getElementById('mobileNav'),
        mobileOverlay: document.getElementById('mobileOverlay'),
        mobileNavClose: document.getElementById('mobileNavClose'),
        mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
        
        // Carousel
        carouselTrack: document.getElementById('propertiesCarousel'),
        carouselPrev: document.getElementById('carouselPrev'),
        carouselNext: document.getElementById('carouselNext'),
        carouselDots: document.getElementById('carouselDots'),
        
        // Gallery Modal
        galleryModal: document.getElementById('galleryModal'),
        galleryOverlay: document.getElementById('galleryOverlay'),
        galleryClose: document.getElementById('galleryClose'),
        galleryPrev: document.getElementById('galleryPrev'),
        galleryNext: document.getElementById('galleryNext'),
        galleryTitle: document.getElementById('galleryTitle'),
        galleryLocation: document.getElementById('galleryLocation'),
        galleryTrack: document.getElementById('galleryTrack'),
        galleryDots: document.getElementById('galleryDots'),
        galleryThumbnails: document.getElementById('galleryThumbnails'),
        
        // Map Modal
        mapModal: document.getElementById('mapModal'),
        mapOverlay: document.getElementById('mapOverlay'),
        mapClose: document.getElementById('mapClose'),
        mapModalTitle: document.getElementById('mapModalTitle'),
        mapContainer: document.getElementById('mapContainer'),
        
        // Countdown
        countdown: {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        }
    };

    // Estado da Aplicação
    let state = {
        lastScrollY: 0,
        ticking: false,
        galleryIndex: 0,
        galleryImages: [],
        carouselCardWidth: 0,
        isDragging: false,
        startX: 0,
        scrollLeft: 0
    };

    // ============================================
    // 3. HEADER & NAVEGAÇÃO
    // ============================================
    function initHeader() {
        window.addEventListener('scroll', () => updateHeader(), { passive: true });
        updateHeader();
    }

    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
        
        state.lastScrollY = currentScrollY;
    }

    function initMobileMenu() {
        const toggleMenu = () => {
            const isOpen = elements.mobileNav.classList.contains('active');
            
            elements.menuToggle.classList.toggle('active');
            elements.mobileNav.classList.toggle('active');
            elements.mobileOverlay.classList.toggle('active');
            elements.menuToggle.setAttribute('aria-expanded', !isOpen);
            
            document.body.style.overflow = isOpen ? '' : 'hidden';
            
            // Foco no primeiro link ao abrir
            if (!isOpen) {
                setTimeout(() => elements.mobileNavLinks[0]?.focus(), 300);
            }
        };

        const closeMenu = () => {
            elements.menuToggle.classList.remove('active');
            elements.mobileNav.classList.remove('active');
            elements.mobileOverlay.classList.remove('active');
            elements.menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        elements.menuToggle.addEventListener('click', toggleMenu);
        elements.mobileOverlay.addEventListener('click', closeMenu);
        elements.mobileNavClose?.addEventListener('click', closeMenu);
        
        elements.mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.mobileNav.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // ============================================
    // 4. CARROSSEL DE IMÓVEIS
    // ============================================
    function initCarousel() {
        renderProperties();
        setupCarouselDrag();
        setupCarouselScroll();
        
        // Botões de navegação
        elements.carouselPrev.addEventListener('click', () => scrollCarousel(-1));
        elements.carouselNext.addEventListener('click', () => scrollCarousel(1));
        
        // Responsividade: recalcular largura ao redimensionar
        window.addEventListener('resize', () => {
            calculateCardWidth();
            renderDots();
        });
    }

    function calculateCardWidth() {
        const firstCard = elements.carouselTrack.querySelector('.property-card');
        if (firstCard) {
            // Largura do card + gap (1.5rem = 24px)
            state.carouselCardWidth = firstCard.offsetWidth + 24;
        }
    }

    function renderProperties() {
        elements.carouselTrack.innerHTML = '';
        
        properties.forEach((property, index) => {
            const card = document.createElement('article');
            card.className = 'property-card';
            card.setAttribute('role', 'listitem');
            
            // Fallback de imagem
            const imgSrc = property.image || PLACEHOLDER_IMAGE;
            
            card.innerHTML = `
                <div class="property-image" data-action="gallery" data-id="${property.id}" role="button" tabindex="0" aria-label="Ver galeria de ${property.name}">
                    <img src="${imgSrc}" 
                         alt="${property.name} - ${property.location}" 
                         loading="lazy"
                         width="320"
                         height="200">
                    <span class="property-badge ${property.badge}">${property.badgeText}</span>
                    <div class="property-overlay"></div>
                    <div class="gallery-icon">
                        <i class="ph ph-images"></i>
                        <span>Ver Galeria</span>
                    </div>
                </div>
                
                <div class="property-content">
                    <!-- Header com Nome -->
                    <div class="property-header">
                        <h3 class="property-name">${property.name}</h3>
                    </div>
                    
                    <!-- Info de Localização -->
                    <div class="property-location">
                        <i class="ph ph-map-pin"></i>
                        <span>${property.location}</span>
                    </div>
                    
                    <!-- Preço Destaque -->
                    <div class="property-price-section">
                        <div class="property-price">
                            ${property.price}
                        </div>
                        <span class="property-price-note">à vista</span>
                    </div>
                    
                    <!-- Specs Grid -->
                    <div class="property-specs">
                        <div class="spec-item">
                            <i class="ph ph-bed"></i>
                            <span class="spec-value">${property.rooms}</span>
                            <span class="spec-label">Qtos</span>
                        </div>
                        <div class="spec-divider"></div>
                        <div class="spec-item">
                            <i class="ph ph-ruler"></i>
                            <span class="spec-value">${property.area}m²</span>
                            <span class="spec-label">Área</span>
                        </div>
                        <div class="spec-divider"></div>
                        <div class="spec-item">
                            <i class="ph ph-car"></i>
                            <span class="spec-value">${property.garage}</span>
                            <span class="spec-label">Vaga</span>
                        </div>
                    </div>
                    
                    <!-- Botões de Ação -->
                    <div class="property-actions">
                        <a href="captacao.html?imovel=${property.id}" class="property-action-btn property-action-primary">
                            <i class="ph ph-heart"></i>
                            Tenho Interesse
                        </a>
                        <button class="property-action-btn property-action-secondary" 
                                data-action="map" 
                                data-id="${property.id}"
                                aria-label="Ver mapa de ${property.name}">
                            <i class="ph ph-map-pin"></i>
                        </button>
                    </div>
                </div>
            `;
            elements.carouselTrack.appendChild(card);
        });

            
       // Event delegation para botões de ação
    elements.carouselTrack.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;

        const action = btn.dataset.action;
        const propertyId = btn.dataset.id;
        const property = properties.find(p => p.id === propertyId);

        if (action === 'gallery') {
            openGallery(propertyId);
        } else if (action === 'map' && property) {
            openMapModal(property.name, property.lat, property.lng);
        }
    });
    
    // Event delegation para tecla Enter (acessibilidade)
    elements.carouselTrack.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const btn = e.target.closest('[data-action]');
            if (btn) {
                btn.click();
            }
        }
    });

    calculateCardWidth();
    renderDots();
}

function renderDots() {
    elements.carouselDots.innerHTML = '';
    const totalDots = properties.length;
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para imóvel ${i + 1}`);
        dot.addEventListener('click', () => scrollToDot(i));
        elements.carouselDots.appendChild(dot);
    }
}

function scrollToDot(dotIndex) {
    if (state.carouselCardWidth === 0) calculateCardWidth();
    
    const scrollAmount = dotIndex * state.carouselCardWidth;
    
    elements.carouselTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function scrollCarousel(direction) {
    if (state.carouselCardWidth === 0) calculateCardWidth();
    
    const currentScroll = elements.carouselTrack.scrollLeft;
    const containerWidth = elements.carouselTrack.offsetWidth;
    
    // Rolar aproximadamente 1 card e meio para melhor UX
    const scrollAmount = state.carouselCardWidth * direction;
    
    elements.carouselTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function updateCarouselDots() {
    if (state.carouselCardWidth === 0) calculateCardWidth();
    
    const scrollLeft = elements.carouselTrack.scrollLeft;
    const containerWidth = elements.carouselTrack.offsetWidth;
    
    // Calcular qual card está mais visível
    const cardCenterPosition = scrollLeft + (containerWidth / 2);
    const activeIndex = Math.max(0, Math.floor(cardCenterPosition / state.carouselCardWidth));
    
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
        dot.setAttribute('aria-current', i === activeIndex ? 'true' : 'false');
    });
}

function setupCarouselDrag() {
    elements.carouselTrack.addEventListener('mousedown', (e) => {
        state.isDragging = true;
        state.startX = e.pageX - elements.carouselTrack.offsetLeft;
        state.scrollLeft = elements.carouselTrack.scrollLeft;
        elements.carouselTrack.style.cursor = 'grabbing';
    });

    elements.carouselTrack.addEventListener('mouseleave', () => {
        state.isDragging = false;
        elements.carouselTrack.style.cursor = 'grab';
    });

    elements.carouselTrack.addEventListener('mouseup', () => {
        state.isDragging = false;
        elements.carouselTrack.style.cursor = 'grab';
    });

    elements.carouselTrack.addEventListener('mousemove', (e) => {
        if (!state.isDragging) return;
        e.preventDefault();
        const x = e.pageX - elements.carouselTrack.offsetLeft;
        const walk = (x - state.startX) * 2;
        elements.carouselTrack.scrollLeft = state.scrollLeft - walk;
    });
}

function setupCarouselScroll() {
    elements.carouselTrack.addEventListener('scroll', updateCarouselDots, { passive: true });
}

// ============================================
// 5. GALERIA DE IMAGENS
// ============================================
function initGallery() {
    // Fechar
    elements.galleryClose.addEventListener('click', closeGallery);
    elements.galleryOverlay.addEventListener('click', closeGallery);
    
    // Navegação
    elements.galleryPrev.addEventListener('click', prevGalleryImage);
    elements.galleryNext.addEventListener('click', nextGalleryImage);
    
    // Touch / Swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    elements.galleryTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    elements.galleryTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextGalleryImage();
            else prevGalleryImage();
        }
    }
}

function openGallery(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    // Buscar imagens da galeria ou usar fallback
    const galleryInfo = galleryData[propertyId];
    state.galleryImages = galleryInfo ? galleryInfo.images : [
        property.image || PLACEHOLDER_IMAGE,
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ];

    state.galleryIndex = 0;

    // Preencher informações
    elements.galleryTitle.textContent = galleryInfo ? galleryInfo.title : property.name;
    elements.galleryLocation.innerHTML = `<i class="ph ph-map-pin"></i> ${property.location}`;

    // Renderizar slides
    elements.galleryTrack.innerHTML = '';
    elements.galleryDots.innerHTML = '';
    elements.galleryThumbnails.innerHTML = '';

    state.galleryImages.forEach((img, index) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'gallery-image';
        slide.innerHTML = `<img src="${img}" alt="${property.name} - Imagem ${index + 1}" loading="eager">`;
        elements.galleryTrack.appendChild(slide);

        // Dot
        const dot = document.createElement('button');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ver imagem ${index + 1}`);
        dot.addEventListener('click', () => goToGalleryImage(index));
        elements.galleryDots.appendChild(dot);

        // Thumbnail
        const thumb = document.createElement('button');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.setAttribute('aria-label', `Ver imagem ${index + 1}`);
        thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
        thumb.addEventListener('click', () => goToGalleryImage(index));
        elements.galleryThumbnails.appendChild(thumb);
    });

    // Mostrar modal
    elements.galleryModal.classList.add('active');
    elements.galleryModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Foco no botão de fechar para acessibilidade
    setTimeout(() => elements.galleryClose.focus(), 100);
}

function closeGallery() {
    elements.galleryModal.classList.remove('active');
    elements.galleryModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function goToGalleryImage(index) {
    state.galleryIndex = index;
    elements.galleryTrack.style.transform = `translateX(-${index * 100}%)`;

    // Atualizar dots
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    // Atualizar thumbnails
    document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function prevGalleryImage() {
    const newIndex = state.galleryIndex > 0 ? state.galleryIndex - 1 : state.galleryImages.length - 1;
    goToGalleryImage(newIndex);
}

function nextGalleryImage() {
    const newIndex = state.galleryIndex < state.galleryImages.length - 1 ? state.galleryIndex + 1 : 0;
    goToGalleryImage(newIndex);
}

// ============================================
// 6. MODAL DO MAPA
// ============================================
function initMapModal() {
    elements.mapClose.addEventListener('click', closeMapModal);
    elements.mapOverlay.addEventListener('click', closeMapModal);
}

function openMapModal(title, lat, lng) {
    if (!lat || !lng) {
        console.error('Coordenadas inválidas para o mapa');
        alert('Localização não disponível para este imóvel.');
        return;
    }

    elements.mapModalTitle.textContent = title;
    
    // Embed do Google Maps
    elements.mapContainer.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(title)}!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
    
    elements.mapModal.classList.add('active');
    elements.mapModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => elements.mapClose.focus(), 100);
}

function closeMapModal() {
    elements.mapModal.classList.remove('active');
    elements.mapModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Limpar iframe para liberar memória
    setTimeout(() => {
        elements.mapContainer.innerHTML = '';
    }, 300);
}

// ============================================
// 7. CONTROLES DE TECLADO (ACESSIBILIDADE)
// ============================================
function initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        // Galeria
        if (elements.galleryModal.classList.contains('active')) {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowLeft') prevGalleryImage();
            if (e.key === 'ArrowRight') nextGalleryImage();
        }
        
        // Mapa
        if (elements.mapModal.classList.contains('active')) {
            if (e.key === 'Escape') closeMapModal();
        }
    });
}

// ============================================
// 8. COUNTDOWN TIMER
// ============================================
function initCountdown() {
    function update() {
        // Define deadline para 3 dias a partir de agora
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 3);
        
        const now = new Date();
        const diff = deadline - now;
        
        if (diff <= 0) {
            elements.countdown.days.textContent = '00';
            elements.countdown.hours.textContent = '00';
            elements.countdown.minutes.textContent = '00';
            elements.countdown.seconds.textContent = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        elements.countdown.days.textContent = String(days).padStart(2, '0');
        elements.countdown.hours.textContent = String(hours).padStart(2, '0');
        elements.countdown.minutes.textContent = String(minutes).padStart(2, '0');
        elements.countdown.seconds.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// ============================================
// 9. SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botão CTA Final
    const ctaBtn = document.getElementById('ctaFinalBtn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            // Você pode direcionar para o formulário ou WhatsApp
            window.location.href = 'https://wa.me/552121345000?text=Olá! Gostaria de receber ofertas personalizadas.';
        });
    }
}

// ============================================
// 10. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initCarousel();
    initGallery();
    initMapModal();
    initKeyboardControls();
    initCountdown();
    initSmoothScroll();
    
    console.log('🚀 Direcional Imóveis - Projeto Otimizado');
})})();