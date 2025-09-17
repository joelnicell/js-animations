import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"
const motionText = document.querySelectorAll(".motion-text");
const inViewSection = document.getElementById("section-in-view");
const sequence = []

// inView is literally (is element in viewport, if so, do this callback.)

// you can do it for a group of elements or for individual elements.

inView(".motion-text", element => {
  animate(element,
    { opacity: [0, 1], transform: ["translate(-20px, 0)", "translate(0)"] },
    { duration: 1, ease: "circIn" })
  },
  { margin: "0px 0px -150px 0px"}
)

// you can trigger a section in view, and then animate multiple components inside of it.

inView(inViewSection, element => {
  animate("#section-in-view > div",
    { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
    {
      duration: 3,
      delay: stagger(0.2),
      ease: "circInOut"
    })
  },
  { margin: "0px 0px -120px 0px"}
)

// const numbers = document.querySelector(".number");

// animate(0, 100, {
//   duration: 1,
//   ease: "linear",
//   onUpdate: latest => numbers.textContent = latest.toFixed(0),
// })