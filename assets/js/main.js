import "./animations.js";

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  if (counters) {
    counters.forEach((element) => {
      const count = Number(element.innerHTML.replace("+", ""));
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateValue(element, 0, count, 2000);
          }
        },
        {
          threshold: 1.0,
        }
      );
      observer.observe(element);
    });
  }

  window.onload = function () {
    if (window.location.pathname === "/") {
      // Select header element
      const header = document.getElementsByTagName("header")[0];

      
      header.className += " bg-gray";
    }
  };
});
