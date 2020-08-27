import "./styles.css";

const App = document.getElementById("app");
const Player1 = document.getElementById("player1");
const Display = document.getElementById("display");

App.addEventListener("mousemove", (event) => {
  const { clientY } = event;
  if ((clientY-40 >= 10) && (clientY+40 <= 460)) {
    Player1.style.top = `${clientY-40}px`;
  }

  const paddle = Player1.getBoundingClientRect();
  
  //hacky way to assign box values
  document.getElementById("xBox").innerHTML = `x: ${paddle.x}`;
  document.getElementById("yBox").innerHTML = `y: ${paddle.y}`;
  document.getElementById("rBox").innerHTML = `right: ${paddle.right}`;
  document.getElementById("bBox").innerHTML = `bottom: ${paddle.bottom}`;
});

/* TODO:
    -draw method --> game update loop?
    -dial in top/bottom limits on paddle-- what is the value of a double thick border in pixels? 
    -scroll speed lock for mouse-- mouse acceleration creates paddle movement problems  
    -restrict mouse to play area?
*/