const boxOne = document.getElementById("box-eg-one");
const buttonOne = document.getElementById("button-eg-one");

const floatingBoxes = document.querySelectorAll(".floating-box");
const floatingBoxesLength = floatingBoxes.length;
const floatingContainer = document.querySelector("#floating-container");

// let pressed = false;
// let startX = 0;
// let startY = 0;

// floatingContainer.addEventListener('mousedown', (e) => {
//   pressed = true;
//   startX = e.clientX;
//   startY = e.clientY;
// });

// floatingContainer.addEventListener('mouseup', (e) => {
//   pressed = false;
// });

// floatingContainer.addEventListener('mousemove', (e) => {
//   if (pressed) {

//   }
// })

let value = 0;
function animate(t) {
  // basic oscillation for example 1:

  value = Math.sin(t * 0.001) * 40 + 100;
  boxOne.style.width = `${value}px`;
  buttonOne.style.transform = `translateX(${value}px)`;

  // floating boxes for example one:

  floatingBoxes.forEach((box, index) => {
    const phase = index / floatingBoxesLength;
    const xPos = Math.sin(t * 0.0002 + phase * Math.PI * 2) * 80;
    const yPos = Math.cos(t * 0.0002 + phase * Math.PI * 2) * 30;
    box.style.transform = `translate(${xPos}px, ${yPos}px)`;
  })


  requestAnimationFrame((t) => animate(t))
}

animate();