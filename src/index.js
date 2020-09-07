import "./styles.css";

//debug
const printObject = object => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomizeDirection = () => {
  let dx = getRandomInt(0,1) ? 1 : -1;
  let dy = getRandomInt(0,1) ? 1 : -1;
  return [dx, dy]; 
};

const randomizePlacement = () => {
  //get middle of play space
  //offset ball by width
  //randomize
  //return
};

const setBall = () => {
  //randomize ball direction
  let [dx,dy] = randomDirection();
  //randomize ball placement

  //set ball properties

  Ball.dx = dx;
  Ball.dy = dy;

};


const goal = player => {
  clearInterval(game);
  //play sound

  //scoring mechanism
  if (player) {
    scoreP1 += 1;
    boxP1.innerHTML = `${scoreP1}`;
  } else {
    scoreP2 += 1;
    boxP2.innerHTML = `${scoreP2}`;
  }

  //reset ball
  //game = setInterval(draw, 16.7);
  //ball reset and play
};

//main loop
function draw() {
  const { x, y } = Ball.getBoundingClientRect();
  
  if (x == court.l && dx==-1) {
    goal(1);  //player2 scores!
  } else if (x == court.r && dx==1) {
    goal(0);  //player1 scores!
  }
  
  if ((y == court.t && dy==-1) || (y == court.b && dy==1)) {
    //play sound
    dy *= -1;
  }

  let computedPosX = x + (dx * speed);
  let computedPosY = y + (dy * speed);

  computedPosX = Math.min(Math.max(court.l, computedPosX), court.r);
  computedPosY = Math.min(Math.max(court.t, computedPosY), court.b);
  
  //debug statement
  //console.log(`dx: ${dx}, dy: ${dy}, x: ${computedPosX}, y: ${computedPosY}`);

  Ball.style.left = `${computedPosX}px`;
  Ball.style.top = `${computedPosY}px`;
};

//set up game
const App = document.getElementById("app");
const Ball = document.getElementById("ball");
const boxP1 = document.getElementById("boxP1");
const boxP2 = document.getElementById("boxP2");

const area = App.getBoundingClientRect();
const { width } = Ball.getBoundingClientRect();

let scoreP1 = 0;
let scoreP2= 0;

Ball.speed = 3;

console.log(width); 

/*
const court = {
  r: area.right-1-bWidth,
  l: area.left+1,
  t: area.top+1,
  b: area.bottom-1-bWidth
};
*/
//printObject(Ball);

//let game = setInterval(draw, 16.7);