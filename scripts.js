const glow = document.getElementById('ring-glow');

let t = 0;
let speed = 0.04;

let minOpacity = 0.4;
let maxOpacity = 0.7;

let a = 0;
const specificNumbers = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

function animateGlow() {
    const amplitude = (maxOpacity - minOpacity) / 2;
    const mid = (maxOpacity + minOpacity) / 2;

    glow.style.opacity = mid + Math.sin(t) * amplitude;
    t += speed;

    requestAnimationFrame(animateGlow);
}

animateGlow();

window.addEventListener('scroll', () => {
    const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    a = progress;

    const p = Math.min(Math.max(progress, 0), 1);

    minOpacity = 0.3 + p * 0.3;
    maxOpacity = 0.6 + p * 0.3;

    speed = 0.03 + p * 0.06;
});

setInterval(() => {
    if (a > 0.8) {
        const result = specificNumbers[Math.floor(Math.random() * specificNumbers.length)];
        console.log(result);
        if (result == 0.4) {
            glow.style.opacity = 1;
        }
    }
}, 500);