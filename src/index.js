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
    console.log(`x: ${x}, Dx: ${dx}`);
  }
  
  let computedPosition = x + (dx * speed);
  
  //ensure computed values fall within boundaries 
  computedPosition = Math.min(Math.max(adjacent.l, computedPosition), adjacent.r);
  
  //move ball
  Ball.style.left = `${computedPosition}px`;
}, 16.7);

/* TODO:
    -randomize initial direction
    -collision logic
*/