import "./styles.css";

const App = document.getElementById("app");
const Ball = document.getElementById("ball");
//const Display = document.getElementById("display");

const area = App.getBoundingClientRect();
const ballSize = Ball.getBoundingClientRect();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//initial game state
let dx = getRandomInt(-1, 1);
let dy = getRandomInt(-1, 1);
let speed = 3;
let bWidth = ballSize.right - ballSize.x;

const court = {
  r: area.right-1-bWidth,
  l: area.left+1,
  t: area.top+1,
  b: area.bottom-1-bWidth
};

//debug
const printObject = object => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};

//main loop
setInterval(()=>{
  const { x, y } = Ball.getBoundingClientRect();
  
  if ((x == court.l && dx==-1) || (x == court.r && dx==1)) {
    dx *= -1;
  } 
  
  if ((y == court.t && dy==-1) || (y == court.b && dy==1)) {
    dy *= -1;
  }

  let computedPosX = x + (dx * speed);
  let computedPosY = y + (dy * speed);

  computedPosX = Math.min(Math.max(court.l, computedPosX), court.r);
  computedPosY = Math.min(Math.max(court.t, computedPosY), court.b);
  
  //debug statement
  console.log(`dx: ${dx}, dy: ${dy}, x: ${computedPosX}, y: ${computedPosY}`);

  Ball.style.left = `${computedPosX}px`;
  Ball.style.top = `${computedPosY}px`;

}, 16.7);