const box = document.getElementById("box");

let value = 0;
function animate(t) {
  value = Math.sin(t * 0.001) * 40 + 100;
  box.style.width =  `${value}px`;
  requestAnimationFrame((t) => animate(t))
}

animate();