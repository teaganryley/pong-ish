import "./styles.css";

const App = document.getElementById("app");
const Ball = document.getElementById("ball");
const Display = document.getElementById("display");

let dx = -1;
let dy = -1;
let speed = 3;

const paddle = App.getBoundingClientRect();
  
//hacky way to assign box values
document.getElementById("xBox").innerHTML = `x: ${paddle.x}`;
document.getElementById("yBox").innerHTML = `y: ${paddle.y}`;
document.getElementById("rBox").innerHTML = `right: ${paddle.right}`;
document.getElementById("bBox").innerHTML = `bottom: ${paddle.bottom}`;

//main loop
setInterval(()=>{
  const { x, y } = Ball.getBoundingClientRect();
  
  //collision x axis
  if (8 < x < 814 ) { //refactor to dynamic values
    Ball.style.left = `${x + (dx * speed)}px`;
  } else {
    dx *= -1;
    Ball.style.left = `${x + (dx * speed)}px`;
  }

  // collision y axis
  if (8 < y < 464) {
    Ball.style.top = `${y + (dy * speed)}px`;
  } else {
    dy *= -1;
    Ball.style.top = `${y + (dy * speed)}px`;
  }
}, 16.7);

/* TODO:
    -randomize initial direction
    -collision logic
      1) find out how to persist data outside of function scope, for dx and dy
      2) do right hand collision once 1) is solved
      3) refactor boiler-plate code
*/