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
document.querySelectorAll(".fade").forEach((el) => fadeIn.observe(el));

// Approach pipeline: the step crossing the middle of the screen picks the figure
const steps = [...document.querySelectorAll(".step")];
const frames = [...document.querySelectorAll(".frame")];
const tabs = [...document.querySelectorAll(".pipe-nav li")];
const count = document.querySelector(".pipe-count .grad");

function setStep(i) {
  steps.forEach((el, k) => el.classList.toggle("on", k === i));
  frames.forEach((el, k) => el.classList.toggle("on", k === i));
  tabs.forEach((el, k) => el.classList.toggle("on", k === i));
  count.textContent = String(i + 1).padStart(2, "0");
}

const stepWatch = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) setStep(steps.indexOf(e.target));
  }
}, { rootMargin: "-45% 0px -45% 0px" });
steps.forEach((el) => stepWatch.observe(el));
setStep(0);

// Clicking a step name scrolls to that step
document.querySelectorAll(".pipe-nav button").forEach((b) => {
  b.addEventListener("click", () => {
    steps[Number(b.dataset.step)].scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
