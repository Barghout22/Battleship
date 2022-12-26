import "./style.css";

import { gameStarter } from "./gameStart";

gameStarter();
const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
  const winingDiv = document.querySelector(".endgameMessage");
  winingDiv.classList.remove("show");

  gameStarter();
});
