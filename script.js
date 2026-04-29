const header = document.querySelector('header');
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu-modal');
const modalLinks = document.querySelectorAll('.modal-links a');

// 1. Efeito visual do Header ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Sistema de Navegação (Scroll Suave) - Desktop & Modal
// Selecionamos os links tanto do nav principal quanto do modal
const allLinks = document.querySelectorAll('.nav-links a, .modal-links a');

allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Se o menu mobile estiver aberto, fechamos ele antes de rolar
            handleCloseMenu();

            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 3. Funções do Modal Mobile
function handleOpenMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Trava o scroll da página ao fundo
}

function handleCloseMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; // Libera o scroll da página
}

// Eventos do Modal
menuToggle.addEventListener('click', handleOpenMenu);
closeMenu.addEventListener('click', handleCloseMenu);

// Fechar o modal se o usuário clicar fora do conteúdo (opcional, mas recomendado)
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        handleCloseMenu();
    }
});