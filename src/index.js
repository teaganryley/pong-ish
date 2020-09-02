import "./styles.css";

const App = document.getElementById("app");
const Ball = document.getElementById("ball");
const Display = document.getElementById("display");

let dx = -1;
let dy = -1;
let speed = 3;

const boundary = App.getBoundingClientRect();
  
//hacky way to assign box values
document.getElementById("lBox").innerHTML = `left: ${boundary.left}`;
document.getElementById("rBox").innerHTML = `right: ${boundary.right}`;
document.getElementById("tBox").innerHTML = `top: ${boundary.top}`;
document.getElementById("bBox").innerHTML = `bottom: ${boundary.bottom}`;

//main loop
setInterval(()=>{
  const { x, y, right, bottom } = Ball.getBoundingClientRect();
  
  //collision x axis
  if (x <= 10 || right >= 814) { //refactor to dynamic values
    dx *= -1;
    Ball.style.left = `${x + (dx * speed)}px`;
  } else {
    Ball.style.left = `${Math.max(x + (dx * speed), 10)}px`;
  }

  //TODO: truncate righthand values

  console.log(`x: ${x}, Dx: ${dx}`);

}, 16.7);

/* TODO:
    -randomize initial direction
    -collision logic
      0) should collision logic detect adjacency instead of range?
      3) refactor boiler-plate code
*/