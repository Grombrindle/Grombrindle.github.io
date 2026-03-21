// ========== SCRIPT.JS – uses config.js ==========

// --- Helper to populate elements from config ---
document.addEventListener('DOMContentLoaded', () => {
    // Hero section
    document.getElementById('hero-title').innerText = config.title;
    const heroNameElem = document.getElementById('hero-name');
    heroNameElem.innerText = config.name.toUpperCase();
    heroNameElem.setAttribute('data-text', config.name.toUpperCase());
    document.getElementById('nav-name').innerText = config.name;
    document.getElementById('footer-name').innerText = config.name.toUpperCase();
    
    // Typed.js
    const typed = new Typed('#typed', {
        strings: config.typedStrings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
    });
    
    // Social icons in hero
    document.getElementById('github-icon').href = config.github;
    document.getElementById('linkedin-icon').href = config.linkedin;
    document.getElementById('terminal-icon').href = config.github + '?tab=repositories';
    
    // Expertise description
    document.getElementById('expertise-desc').innerText = config.expertiseDesc;
    
    // Backend list
    const backendList = document.getElementById('backend-list');
    backendList.innerHTML = config.backendTechs.map(t => `<li>• ${t}</li>`).join('');
    
    // DevOps list
    const devopsList = document.getElementById('devops-list');
    devopsList.innerHTML = config.devopsTechs.map(t => `<li>• ${t}</li>`).join('');
    
    // AI list
    const aiList = document.getElementById('ai-list');
    aiList.innerHTML = config.aiTechs.map(t => `<li>• ${t}</li>`).join('');
    
    // Skill bars
    const skillContainer = document.getElementById('skill-bars');
    skillContainer.innerHTML = config.skillBars.map(skill => `
        <div>
            <div class="flex justify-between items-end mb-4">
                <span class="font-label text-white uppercase text-sm tracking-widest">${skill.label}</span>
                <span class="text-${skill.color} font-label">${skill.percent}%</span>
            </div>
            <div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div class="h-full bg-${skill.color} rounded-full" style="width: ${skill.percent}%"></div>
            </div>
        </div>
    `).join('');
    
    // Tech stack cloud
    const techCloud = document.getElementById('tech-stack-cloud');
    techCloud.innerHTML = `
        <h3 class="font-headline text-2xl font-bold text-white mb-8">Tech Stack Cloud</h3>
        ${config.techStackGroups.map(group => `
            <div class="mb-8">
                <p class="text-xs font-label text-${group.color} uppercase tracking-tighter mb-4">${group.title}</p>
                <div class="flex flex-wrap gap-3">
                    ${group.items.map(item => `<span class="px-4 py-2 glass-card rounded-md text-sm text-on-surface">${item}</span>`).join('')}
                </div>
            </div>
        `).join('')}
    `;
    
    // Featured projects
    const featuredGrid = document.getElementById('featured-projects-grid');
    featuredGrid.innerHTML = config.featuredProjects.map(proj => `
        <div class="group relative overflow-hidden rounded-2xl glass-card border-none hover:translate-y-[-8px] transition-transform duration-500">
            <img class="w-full h-[400px] object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="${proj.image}" alt="${proj.title}">
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent flex flex-col justify-end p-8">
                <div class="flex gap-2 mb-4">
                   ${proj.tech.map(t => `
  <span
    class="text-[10px] font-label uppercase
           bg-sky-900/70 text-sky-100
           px-2 py-1 rounded-full font-semibold
           border border-sky-500/40"
  >
    ${t}
  </span>
`).join('')}

                </div>
                <h3 class="font-headline text-2xl font-bold text-white mb-2">${proj.title}</h3>
                <p class="text-on-surface-variant text-sm line-clamp-2 mb-6">${proj.desc}</p>
                <div class="flex gap-4">
                    <a class="text-white flex items-center gap-2 hover:text-primary transition-colors" href="${proj.repo}" target="_blank">
                        <span class="material-symbols-outlined text-xl">terminal</span> Source
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Contact links
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
        <a href="mailto:${config.email}" class="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all">
            <i class="fas fa-envelope text-primary"></i> ${config.email}
        </a>
        <a href="${config.linkedin}" target="_blank" class="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all">
            <i class="fab fa-linkedin text-secondary"></i> LinkedIn
        </a>
        <a href="${config.github}" target="_blank" class="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all">
            <i class="fab fa-github text-primary"></i> GitHub
        </a>
        <a href="tel:${config.phone}" class="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all">
            <i class="fas fa-phone text-tertiary"></i> ${config.phone}
        </a>
    `;
    
    // Footer links
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = `
        <a class="text-slate-500 hover:text-blue-300 transition-transform hover:translate-x-1" href="${config.github}" target="_blank">GitHub</a>
        <a class="text-slate-500 hover:text-blue-300 transition-transform hover:translate-x-1" href="${config.linkedin}" target="_blank">LinkedIn</a>
        
    `;
    document.getElementById('copyright').innerHTML = `© ${new Date().getFullYear()} ${config.name} — Built with logic and art`;
    document.getElementById('contact-message').innerText = "Open for backend leadership, full‑stack contracts, or DevOps Engineer.";
    
    // Slider with config.moreProjects
    buildSliderFromConfig();
});

// ========== Slider Logic (uses config.moreProjects) ==========
let sliderTrack, prevBtn, nextBtn, dotsContainer;
let currentIndex = 0;
let cardsPerView = 1;
let totalCards = 0;

function updateCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1024) cardsPerView = 3;
    else if (width >= 768) cardsPerView = 2;
    else cardsPerView = 1;
    return cardsPerView;
}

function buildSliderFromConfig() {
    sliderTrack = document.getElementById('slider-track');
    prevBtn = document.getElementById('slider-prev');
    nextBtn = document.getElementById('slider-next');
    dotsContainer = document.getElementById('slider-dots');
    
    if (!sliderTrack) return;
    
    // Clear and rebuild cards
    sliderTrack.innerHTML = '';
    config.moreProjects.forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = 'slider-card glass-card rounded-xl p-6 transition-all hover:scale-[1.02]';
        
        let repoLink = '';
        if (project.private) {
            repoLink = `<span class="inline-flex items-center gap-2 text-slate-400 text-sm"><i class="fas fa-lock"></i> ${project.privateNote || 'Private project'}</span>`;
        } else {
            repoLink = `<a href="${project.repo}" target="_blank" class="inline-flex items-center gap-2 text-primary hover:underline text-sm"><span class="material-symbols-outlined text-sm">terminal</span> Source</a>`;
        }
        
        card.innerHTML = `
            <h3 class="font-headline text-xl font-bold text-white mb-2">${project.title}</h3>
            <p class="text-on-surface-variant text-sm mb-4">${project.desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(t => `<span class="text-[10px] font-label text-primary-dim uppercase bg-primary-container/20 px-2 py-1 rounded">${t}</span>`).join('')}
            </div>
            ${repoLink}
        `;
        sliderTrack.appendChild(card);
    });
    
    totalCards = config.moreProjects.length;
    updateCardsPerView();
    createDots();
    updateSliderPosition();
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    window.addEventListener('resize', () => {
        updateCardsPerView();
        createDots();
        updateSliderPosition();
    });
    
    // Touch swipe
    let touchStartX = 0;
    let touchEndX = 0;
    const wrapper = document.getElementById('slider-wrapper');
    wrapper.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    });
}

function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const totalDots = Math.ceil(totalCards / cardsPerView);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-4' : 'bg-outline'}`;
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSliderPosition();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateSliderPosition() {
    const card = document.querySelector('.slider-card');
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    const trackWidth = sliderTrack.scrollWidth;
    const containerWidth = document.getElementById('slider-wrapper').offsetWidth;
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
    currentIndex = Math.min(currentIndex, maxIndex);
    currentIndex = Math.max(currentIndex, 0);
    
    let scrollLeft = currentIndex * (cardWidth + gap) * cardsPerView;
    if (scrollLeft + containerWidth > trackWidth) {
        scrollLeft = trackWidth - containerWidth;
    }
    sliderTrack.style.transform = `translateX(-${scrollLeft}px)`;
    
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.add('bg-primary', 'w-4');
            dots[i].classList.remove('bg-outline', 'w-2');
        } else {
            dots[i].classList.remove('bg-primary', 'w-4');
            dots[i].classList.add('bg-outline', 'w-2');
        }
    }
}

function nextSlide() {
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
    if (currentIndex < maxIndex) currentIndex++;
    else currentIndex = 0;
    updateSliderPosition();
}

function prevSlide() {
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
    if (currentIndex > 0) currentIndex--;
    else currentIndex = maxIndex;
    updateSliderPosition();
}

// Custom cursor, scroll progress, back to top (unchanged from earlier)
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
document.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
document.querySelectorAll('a, button, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.transform += ' scale(1.5)';
        ring.style.borderColor = '#85adff';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.transform = ring.style.transform.replace(' scale(1.5)', '');
        ring.style.borderColor = 'rgba(133, 173, 255, 0.3)';
    });
});
const progressBar = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
    if (winScroll > 300) backToTop.style.opacity = "1";
    else backToTop.style.opacity = "0";
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.documentElement.classList.remove('dark');
else if (savedTheme === 'dark') document.documentElement.classList.add('dark');