const boxOne = document.getElementById("box-eg-one");
const buttonOne = document.getElementById("button-eg-one");

const floatingBoxes = document.querySelectorAll(".floating-box");
const floatingBoxesLength = floatingBoxes.length;
const floatingContainer = document.querySelector("#floating-container");

class Vector {
  constructor(x, y) {
    this.initX = x || 0;
    this.initY = y || 0;
    this.x = x || 0;
    this.y = y || 0;
  }

  reset() {
    this.x = this.initX;
    this.y = this.initY;
  }

  set(vector) {
    this.x = vector.x;
    this.y = vector.y;
  }

  length() {
    return Math.sqrt(Math.pow(vel.x, 2) + Math.pow(vel.y, 2))
  }
}

let pressed = false;
let start = new Vector();
let drag = new Vector();
let oldDrag = new Vector();
let vel = new Vector();

let oldPos = new Vector();
let pos = new Vector();
let moving = false;

function mouseDown(event) {
  start.x = event.clientX;
  start.y = event.clientY;
  moving = false;
  pressed = true;
  vel.reset();
}

function mouseUp(event) {
  pressed = false;
  moving = true;
  vel.x = (pos.x - oldPos.x) * 10;
  vel.y = (pos.y - oldPos.y) * 10;
  oldDrag.set(drag);
}

function mouseMove(event) {
  if (pressed) {
    oldPos.set(pos);
    drag.x = oldDrag.x + event.clientX - start.x;
    drag.y = oldDrag.y + event.clientY - start.y;
    pos.x = event.clientX;
    pos.y = event.clientY;
  }
}

floatingContainer.addEventListener('mousedown', (e) => mouseDown(e));
document.addEventListener('mouseup', (e) => mouseUp(e));
document.addEventListener('mousemove', (e) => mouseMove(e));


function oscillate(t) {
  const value = Math.sin(t * 0.001) * 40 + 100;
  boxOne.style.width = `${value}px`;
  buttonOne.style.transform = `translateX(${value}px)`;
}

function floating(t) {
  if (vel.length() - 1 && !moving) {
    vel.reset();
    moving = false;
  } else {
    vel.x *= 0.95;
    vel.y *= 0.95;
  }
  
  floatingBoxes.forEach((box, index) => {
    const phase = (t * 0.0002) + ((drag.x - vel.x) / 100) + (index / floatingBoxesLength) * Math.PI * 2;
    const xPos = Math.sin(phase) * 80;
    const yPos = Math.cos(phase) * 30 * ((drag.y - vel.y) * 0.01 + 1);
    box.style.transform = `translate(${xPos}px, ${yPos}px)`;
  })
}

function animate(t) {
  oscillate(t);
  floating(t);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
