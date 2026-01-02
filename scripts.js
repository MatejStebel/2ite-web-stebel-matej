gsap.registerPlugin(ScrollTrigger);
const glow = document.getElementById('ring-glow');

let t = 0;
let speed = 0.04;

let minOpacity = 0.4;
let maxOpacity = 0.7;

let flicker = 0;
let flickerRed = 0;

let scrollDepth = 0;

function animateGlow() {
    const amplitude = (maxOpacity - minOpacity) / 2;
    const mid = (maxOpacity + minOpacity) / 2;
    const baseOpacity = mid + Math.sin(t) * amplitude;

    glow.style.opacity = baseOpacity + flicker;

    glow.style.filter = `blur(35px) brightness(${1.4 + flickerRed * 2}) 
    saturate(${1.25 + flickerRed * 2}) hue-rotate(-10deg)`;
    glow.style.boxShadow = `0 0 40px rgba(${255}, ${120 - flickerRed * 80}, ${0 + flickerRed * 120}, ${0.2 + flickerRed}) hue-rotate(-20deg)`;
    flicker *= 0.9;
    flickerRed *= 0.88;
    t += speed;

    requestAnimationFrame(animateGlow);
}

animateGlow();

window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight || 1;

    scrollDepth = window.scrollY / maxScroll;
    const p = Math.min(Math.max(scrollDepth, 0), 1);

    minOpacity = 0.3 + p * 0.3;
    maxOpacity = 0.6 + p * 0.3;
    speed = 0.03 + p * 0.06;
});

setInterval(() => {
    if (scrollDepth > 0.8 && Math.random() < 0.15) {
    flicker = 0.12;
    flickerRed = 0.6;
    }
}, 450);
