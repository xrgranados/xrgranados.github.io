function initMatrixHover({
  selector = "[data-matrix]",
  color = "#00e5c0",
  speed = 20,
  duration = 500
} = {}) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*.!•«»";

  function scramble(el) {
    const original = el.dataset.original || el.textContent;
    el.dataset.original = original;

    let frame = 0;
    const totalFrames = Math.floor(duration / speed);

    const interval = setInterval(() => {
      frame++;

      const progress = frame / totalFrames;

      const output = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";

          if (i < progress * original.length) {
            return original[i];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      el.textContent = output;

      if (frame >= totalFrames) {
        clearInterval(interval);
        el.innerHTML = original;
      }
    }, speed);
  }

  function apply(el) {
    el.style.transition = "color 0.2s ease";
    el.addEventListener("mouseenter", () => {
      el.style.color = color;
      scramble(el);
    });

    el.addEventListener("mouseleave", () => {
      el.style.color = "";
    });
  }

  document.querySelectorAll(selector).forEach(apply);
}