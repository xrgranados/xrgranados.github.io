particlesJS("particles-js", {
  particles: {
    color: "#fff",
    shape: "circle", // "circle", "edge" or "triangle"
    opacity: 0.75,
    size: 3,
    size_random: true,
    nb: 250,
    line_linked: {
      enable_auto: false,
      distance: 100,
      color: "#fff",
      opacity: 0.85,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.25
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 250
    },
    detect_on: "window", // "canvas" or "window"
    mode: "grab",
    line_linked: {
      opacity: 0.5
    },
    events: {
      onclick: {
        enable: true,
        mode: "push", // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
