// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao rolar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature, .step-item, .stat').forEach(el => {
    observer.observe(el);
});

// Adicionar animação CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }
        50% {
            box-shadow: 0 0 40px rgba(0, 217, 255, 0.6);
        }
    }
`;
document.head.appendChild(style);

// Efeito de parallax suave
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// Atualizar ano
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer-content p');
    if (footer) {
        footer.textContent = footer.textContent.replace('2026', year);
    }
});

console.log('%c SEDES-DF Painel de Aprovação', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%c Sistema carregado com sucesso! 🚀', 'color: #60a5fa; font-size: 14px;');