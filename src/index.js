import "./styles.css";

const App = document.getElementById("app");
const Player1 = document.getElementById("player1");
const Display = document.getElementById("display");

App.addEventListener("mousemove", (event) => {
  const { clientY } = event;
  Player1.style.top = `${clientY}px`;

  const paddle = Player1.getBoundingClientRect();
  
  //hacky way to assign box values
  document.getElementById("xBox").innerHTML = `x: ${paddle.x}`;
  document.getElementById("yBox").innerHTML = `y: ${paddle.y}`;
  document.getElementById("rBox").innerHTML = `right: ${paddle.right}`;
  document.getElementById("bBox").innerHTML = `bottom: ${paddle.bottom}`;
});

/* TODO:
    -as a user, i want a text box which Infos cursor and app box position
    -research .getElementByID
    -create play area, centered
    -if outside of border, turn border red
    -display info in each box
    -set limits on paddle
*/