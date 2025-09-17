// import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"
const animateText = document.querySelectorAll(".animate-text");

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px 0px -150px 0px',
}

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('is intersecting!', entry);
      entry.target.animate(
        [
          { opacity: 0, transform: 'translate(-20px, 0)' }, // From
          { opacity: 1, transform: 'translate(0, 0)' }      // To
        ],
        // object of properties
        {
          duration: 1000, // milliseconds
          easing: 'cubic-bezier(0,0.51,0,1)', // standard easing, or apply cubic-bezier here
          fill: 'forwards', // Retain the final state after the animation
        }
      );
      observer.unobserve(entry.target); // Stop observing after the first intersection
    }
  })
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

animateText.forEach(element => {
  observer.observe(element);
})

// animate(element,
//   { opacity: [0, 1], transform: ["translate(-20px, 0)", "translate(0)"] },
//   { duration: 1, ease: "circIn" })
