// Scroll effects for the web page. Without JS everything is simply shown.
document.documentElement.classList.add("js");

// Fade each block up the first time it scrolls into view
const fadeIn = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      fadeIn.unobserve(e.target);
    }
  }
}, { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".fade, .reveal").forEach((el) => fadeIn.observe(el));

// Videos play while on screen and pause when scrolled away (saves data and battery)
const playWatch = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const v = e.target;
    if (e.isIntersecting) { const p = v.play(); if (p) p.catch(() => {}); } else v.pause();
  }
}, { threshold: 0.35 });
document.querySelectorAll("video").forEach((v) => playWatch.observe(v));
