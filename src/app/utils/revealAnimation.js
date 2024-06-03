// revealUtils.js
import _debounce from 'lodash/debounce';

export function setupScrollReveal() {
  const debouncedReveal = _debounce(reveal, 100);
  window.addEventListener("scroll", debouncedReveal);

  return () => {
    window.removeEventListener("scroll", debouncedReveal);
  };
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const revealLeft = document.querySelectorAll(".revealLeft");

  if (reveals) {
    for (let i = 0; i < reveals.length; i++) {
      applyRevealLogic(reveals[i]);
    }
  }

  if (revealLeft) {
    for (let i = 0; i < revealLeft.length; i++) {
      applyRevealLogic(revealLeft[i]);
    }
  }
}

function applyRevealLogic(element) {
  const windowHeight = window.innerHeight;
  const revealTop = element.getBoundingClientRect().top;
  const revealPoint = 0;
  console.log(windowHeight - revealPoint,"reveal")
  console.log(windowHeight,"revealw")

  if (revealTop < windowHeight - revealPoint) {
    element.classList.add("actived");
  } else {
    element.classList.remove("actived");
  }
}
