import "./styles.css";

const App = document.getElementById("app");
const Ball = document.getElementById("ball");
const Display = document.getElementById("display");

let dx = 1;
let dy = 1;
let speed = 3;

//refactor: move to function with height
const bDimensions = Ball.getBoundingClientRect();
const bWidth = bDimensions.right - bDimensions.x;

const boundary = App.getBoundingClientRect();
const adjacent = {
  r: boundary.right-1-30,
  l: boundary.left+1,
  top: boundary.top+1,
  bottom: boundary.bottom-1-30
};

//hacky way to assign box values
document.getElementById("lBox").innerHTML = `left: ${boundary.left}`;
document.getElementById("rBox").innerHTML = `right: ${boundary.right}`;
document.getElementById("tBox").innerHTML = `top: ${boundary.top}`;
document.getElementById("bBox").innerHTML = `bottom: ${boundary.bottom}`;

//main loop
setInterval(()=>{
  const { x, y } = Ball.getBoundingClientRect();
  
  if ((x == adjacent.l && dx==-1) || (x == adjacent.r && dx==1)) {
    dx *= -1;
  }
  
  if ((y == adjacent.top && dx==-1) || (y == adjacent.bottom && dx==1)) {
    dy *= -1;
  }

  let computedPosX = x + (dx * speed);
  let computedPosY = y + (dy * speed);

  computedPosX = Math.min(Math.max(adjacent.l, computedPosX), adjacent.r);
  computedPosY = Math.min(Math.max(adjacent.top, computedPosY), adjacent.bottom);
  
  Ball.style.left = `${computedPosX}px`;
  Ball.style.top = `${computedPosY}px`;

}, 16.7);

/* TODO:
    -randomize initial direction
    -bounce logic
*/