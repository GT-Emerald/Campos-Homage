
// Navegação entre as seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Abrir imagem ampliada
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (!modal || !modalImage || !element) return;

    const imagem = element.tagName === 'IMG'
        ? element
        : element.querySelector('img');

    if (!imagem) return;

    modalImage.src = imagem.currentSrc || imagem.src;
    modalImage.alt = imagem.alt || 'Imagem ampliada';

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fechar imagem
function closeModal() {
    const modal = document.getElementById('imageModal');

    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Fechar clicando fora da imagem
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');

    if (event.target === modal) {
        closeModal();
    }
});

// Fechar apertando ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Música de fundo
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (backgroundMusic) {
        backgroundMusic.volume = 0.3;

        backgroundMusic.play().catch(function() {
            console.log('A reprodução automática foi bloqueada pelo navegador.');
        });
    }
});

// Botão de comemoração
function celebrateNow() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const confettiSound = document.getElementById('confettiSound');
    const fireworkSound = document.getElementById('fireworkSound');

    if (backgroundMusic) {
        backgroundMusic.pause();
    }

    createConfetti();

    if (confettiSound) {
        confettiSound.currentTime = 0;
        confettiSound.play().catch(function() {});
    }

    createStrongFlash();

    setTimeout(function() {
        if (fireworkSound) {
            fireworkSound.currentTime = 0;
            fireworkSound.play().catch(function() {});
        }
    }, 1000);

    setTimeout(function() {
        if (backgroundMusic) {
            backgroundMusic.play().catch(function() {});
        }
    }, 5000);
}

// Criar confetes
function createConfetti() {
    const colors = [
        '#ffd700',
        '#ff69b4',
        '#00ffff',
        '#ff4500',
        '#9370db',
        '#ffffff'
    ];

    const animations = [
        'confettiFall',
        'confettiFallLeft',
        'confettiFallRight'
    ];

    for (let wave = 0; wave < 4; wave++) {
        setTimeout(function() {
            for (let i = 0; i < 125; i++) {
                const confetti = document.createElement('div');

                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.width = (Math.random() * 8 + 5) + 'px';
                confetti.style.height = (Math.random() * 8 + 5) + 'px';
                confetti.style.backgroundColor =
                    colors[Math.floor(Math.random() * colors.length)];

                confetti.style.borderRadius =
                    Math.random() > 0.5 ? '50%' : '2px';

                const animation =
                    animations[Math.floor(Math.random() * animations.length)];

                const duration = Math.random() * 3 + 2;

                confetti.style.animation =
                    animation + ' ' + duration + 's linear forwards';

                document.body.appendChild(confetti);

                setTimeout(function() {
                    confetti.remove();
                }, 5000);
            }
        }, wave * 400);
    }
}

// Efeito de clarão
function createStrongFlash() {
    const flash = document.createElement('div');

    flash.className = 'strong-flash';

    flash.style.background =
        'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)';

    document.body.appendChild(flash);

    setTimeout(function() {
        flash.remove();
    }, 1000);

    setTimeout(function() {
        const secondFlash = document.createElement('div');

        secondFlash.className = 'strong-flash';

        secondFlash.style.background =
            'radial-gradient(circle, rgba(255,215,0,0.7), transparent 70%)';

        document.body.appendChild(secondFlash);

        setTimeout(function() {
            secondFlash.remove();
        }, 1000);
    }, 400);
}

// Animação das seções ao aparecer na tela
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(function(section) {
    observer.observe(section);
});
