function startCelebration() {
    startConfetti();
}

function startConfetti() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    confettiWrapper.style.display = 'block';
    for (let i = 0; i < 300; i++) {  // Increased the number of confetti pieces for more visual impact
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
        confettiWrapper.appendChild(confetti);
    }
}
