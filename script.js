const envelope = document.getElementById('envelope');
const birthdayCard = document.getElementById('birthday-card');

envelope.addEventListener('click', () => {
    // Animasi membuka surat
    envelope.style.transition = 'all 1s ease';
    envelope.style.transform = 'scale(0.8) rotateX(180deg)';
    envelope.style.opacity = '0';

    setTimeout(() => {
        envelope.style.display = 'none';
        birthdayCard.style.display = 'block';
        
        // Confetti pink
        createConfetti();
    }, 800);
});

function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1'];
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '12px';
        confetti.style.height = '12px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.opacity = Math.random() * 0.8 + 0.5;
        confetti.style.zIndex = '100';
        document.body.appendChild(confetti);

        const duration = Math.random() * 4 + 4;
        confetti.animate([
            { transform: `translateY(0) rotate(0deg)` },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 2000}deg)` }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}