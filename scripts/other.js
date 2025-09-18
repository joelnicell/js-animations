import { observerOptions } from './animate-script.js';
const cssText = document.querySelectorAll(".css-animation");

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      console.log("is intersecting!", entry);
      entry.target.classList.add('animated');
      observer.unobserve(entry.target); // Stop observing after the first intersection
    }
  })
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

cssText.forEach(element => {
  observer.observe(element);
})

// -----

const toggle = document.getElementById('css-toggle-p');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('shifted');
})