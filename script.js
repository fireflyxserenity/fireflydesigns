document.addEventListener('DOMContentLoaded', () => {
    createFireflies();
});

function createFireflies() {
    const container = document.getElementById('fireflies');
    if (!container) return;

    const colors = ['#ff6bf5', '#c084fc', '#67e8f9', '#86efac', '#fde68a', '#fdba74'];
    const count = 25;

    for (let i = 0; i < count; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');

        const size = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 10;
        const pulseDuration = Math.random() * 2 + 1;
        const delay = Math.random() * duration * -1;

        firefly.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            color: ${color};
            background: ${color};
            animation-duration: ${duration}s, ${pulseDuration}s;
            animation-delay: ${delay}s, ${Math.random() * -2}s;
        `;

        container.appendChild(firefly);
    }
}
