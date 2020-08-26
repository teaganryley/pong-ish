import "./styles.css";

const App = document.getElementById("app");
const Player1 = document.getElementById("player1");
const Data = document.getElementById("data");

App.addEventListener("mousemove", (event) => {
  const { clientY } = event;
  Player1.style.top = `${clientY}px`;
  //Data.innerHTML = `${clientY}px`;
  
  const rect = Player1.getBoundingClientRect();
  //const rect = Info.getBoundingClientRect;
  //Data.innerHTML = `x/left: ${rect.left}  y/top: ${rect.top}  right: ${rect.right}  bottom: ${rect.bottom}`;
});

/* TODO:
    -as a user, i want a text box which Infos cursor and app box position
    -research .getElementByID
    -create play area, centered
    -if outside of border, turn border red
    -display info in each box
    -set limits on paddle
*/