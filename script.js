// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal functions
function openModal(element) {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Iniciar música de fundo quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('backgroundMusic');
    if (bgMusic) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(err => console.log('Autoplay bloqueado'));
    }
});

// ============================================
// CONFETTI ANIMATION COM ÁUDIO
// ============================================
function celebrateNow() {
    console.log('Celebrando!');
    
    // Parar música de fundo
    const bgMusic = document.getElementById('backgroundMusic');
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    // Criar confetes
    createConfetti();

    // Tocar som de confete
    const confettiSound = document.getElementById('confettiSound');
    if (confettiSound) {
        confettiSound.currentTime = 0;
        confettiSound.play().catch(err => console.log('Erro confetti'));
    }

    // Tocar som de foguete depois de 1 segundo
    setTimeout(() => {
        const fireworkSound = document.getElementById('fireworkSound');
        if (fireworkSound) {
            fireworkSound.currentTime = 0;
            fireworkSound.play().catch(err => console.log('Erro foguete'));
        }
    }, 1000);

    // Retomar música de fundo após 5 segundos
    setTimeout(() => {
        if (bgMusic) {
            bgMusic.currentTime = 0;
            bgMusic.play().catch(err => console.log('Erro ao retomar'));
        }
    }, 5000);
}

// Função para criar confetes
function createConfetti() {
    const confettiCount = 500;
    const colors = [
        '#d4af37', '#c99f2e', '#e0e0e0', '#b8b8b8', 
        '#ffd700', '#ff69b4', '#00d4ff', '#ff1493',
        '#ffb6c1', '#dda0dd', '#87ceeb', '#f0e68c'
    ];
    
    // Flash muito forte
    createStrongFlash();
    
    // Cria 4 ondas de confetes
    const waves = 4;
    const confettiPerWave = confettiCount / waves;
    
    for (let wave = 0; wave < waves; wave++) {
        setTimeout(() => {
            for (let i = 0; i < confettiPerWave; i++) {
                const confetti = document.createElement('div');
                
                // 3 tipos diferentes de animacao
                const animationType = Math.floor(Math.random() * 3);
                confetti.className = `confetti type-${animationType + 1}`;
                
                // Define de qual lado o confete vai sair
                const side = Math.floor(Math.random() * 8);
                let startX, startY;
                
                switch(side) {
                    case 0: // Topo centro
                        startX = Math.random() * 100;
                        startY = -20;
                        break;
                    case 1: // Topo esquerda (diagonal)
                        startX = Math.random() * 20 - 20;
                        startY = Math.random() * 20 - 20;
                        break;
                    case 2: // Esquerda
                        startX = -20;
                        startY = Math.random() * 100;
                        break;
                    case 3: // Esquerda baixo (diagonal)
                        startX = Math.random() * 20 - 20;
                        startY = Math.random() * 20 + 80;
                        break;
                    case 4: // Topo direita (diagonal)
                        startX = Math.random() * 20 + 80;
                        startY = Math.random() * 20 - 20;
                        break;
                    case 5: // Direita
                        startX = 100 + Math.random() * 20;
                        startY = Math.random() * 100;
                        break;
                    case 6: // Direita baixo (diagonal)
                        startX = 100 + Math.random() * 20;
                        startY = Math.random() * 20 + 80;
                        break;
                    case 7: // Topo (outro ponto)
                        startX = Math.random() * 100;
                        startY = -30;
                        break;
                }
                
                confetti.style.left = startX + '%';
                confetti.style.top = startY + 'px';
                
                // Delay aleatorio
                confetti.style.animationDelay = (Math.random() * 0.6) + 's';
                
                // Tamanho aleatorio
                const size = Math.random() * 12 + 3;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                
                // Cor aleatoria
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Alguns redondos, outros quadrados
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                }
                
                // Sombra para profundidade
                confetti.style.boxShadow = `0 0 ${Math.random() * 8 + 4}px rgba(212, 175, 55, 0.6)`;
                
                document.body.appendChild(confetti);
                
                // Remove apos a animacao
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 4500);
            }
        }, wave * 120);
    }
}

// Flash muito forte
function createStrongFlash() {
    // Primeiro flash
    const flash1 = document.createElement('div');
    flash1.style.position = 'fixed';
    flash1.style.top = '0';
    flash1.style.left = '0';
    flash1.style.width = '100%';
    flash1.style.height = '100%';
    flash1.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(212, 175, 55, 0.3) 50%, transparent 70%)';
    flash1.style.pointerEvents = 'none';
    flash1.style.zIndex = '999';
    flash1.style.animation = 'strongFlash 0.3s ease-out forwards';
    
    document.body.appendChild(flash1);
    setTimeout(() => {
        if (flash1.parentNode) {
            flash1.parentNode.removeChild(flash1);
        }
    }, 300);
    
    // Segundo flash
    setTimeout(() => {
        const flash2 = document.createElement('div');
        flash2.style.position = 'fixed';
        flash2.style.top = '0';
        flash2.style.left = '0';
        flash2.style.width = '100%';
        flash2.style.height = '100%';
        flash2.style.background = 'radial-gradient(circle, rgba(255, 215, 0, 0.7) 0%, transparent 60%)';
        flash2.style.pointerEvents = 'none';
        flash2.style.zIndex = '999';
        flash2.style.animation = 'strongFlash 0.4s ease-out forwards';
        
        document.body.appendChild(flash2);
        setTimeout(() => {
            if (flash2.parentNode) {
                flash2.parentNode.removeChild(flash2);
            }
        }, 400);
    }, 150);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Adiciona estilos de animacao dinamicamente
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .confetti {
        position: fixed;
        pointer-events: none;
        will-change: transform, opacity;
        transform: translate3d(0, 0, 0);
    }

    .confetti.type-1 {
        animation: fall-spin 4.5s ease-in forwards;
    }

    .confetti.type-2 {
        animation: fall-wave 4.5s ease-in forwards;
    }

    .confetti.type-3 {
        animation: fall-bounce 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    @keyframes fall-spin {
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotateZ(0deg) rotateX(0deg);
        }
        100% {
            opacity: 0;
            transform: translate3d(-150px, 100vh, 0) rotateZ(1080deg) rotateX(360deg);
        }
    }

    @keyframes fall-wave {
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
        }
        50% {
            transform: translate3d(200px, 50vh, 0) rotate(360deg) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate3d(0, 100vh, 0) rotate(720deg) scale(0.5);
        }
    }

    @keyframes fall-bounce {
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg);
        }
        25% {
            transform: translate3d(80px, 25vh, 0) rotate(180deg);
        }
        50% {
            transform: translate3d(-80px, 50vh, 0) rotate(360deg);
        }
        75% {
            transform: translate3d(100px, 75vh, 0) rotate(540deg);
        }
        100% {
            opacity: 0;
            transform: translate3d(0, 100vh, 0) rotate(720deg);
        }
    }

    @keyframes strongFlash {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

document.head.appendChild(styleSheet);