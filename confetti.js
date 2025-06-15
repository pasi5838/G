// Confetti.js from https://www.kirilv.com/canvas-confetti/
(function() {
    const canvas = document.getElementById('confetti-canvas');
    const confetti = window.confetti.create(canvas, { resize: true });

    window.startConfetti = function() {
        canvas.style.opacity = 1;
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    window.stopConfetti = function() {
        // Let it fade naturally
    };
})();