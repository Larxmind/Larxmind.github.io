tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "#0F1115", // Fondo oscuro (Aunque ya está en tu CSS)
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "grab" },
            resize: true
        },
        modes: {
            grab: { distance: 140, links: { opacity: 1 } },
            push: { quantity: 4 }
        }
    },
    particles: {
        color: { value: "#00D4FF" },
        links: {
            color: "#00D4FF",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: { enable: true, area: 800 },
            value: 60
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
});