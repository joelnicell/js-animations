const boxOne = document.getElementById("box-eg-one");
const buttonOne = document.getElementById("button-eg-one");


let value = 0;
function animate(t) {
  value = Math.sin(t * 0.001) * 40 + 100;
  boxOne.style.width = `${value}px`;
  buttonOne.style.transform = `translateX(${value}px)`;
  requestAnimationFrame((t) => animate(t))
}

animate();