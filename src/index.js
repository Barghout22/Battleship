import "./style.css";
import { GameLoop } from "./GameLoop";
import { clearAll } from "./domInteraction";
let player1 = "player";
let shipPlacement = [
  [[1, 1], 5, "x"],
  [[6, 3], 4, "x"],
  [[4, 4], 3, "y"],
  [[2, 3], 3, "y"],
  [[8, 8], 2, "x"],
];
let AiPlacement = [5, 4, 3, 3, 2];
const selectionGameboard = document.querySelector(".selectionGameboard");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const div1 = document.createElement("div");
    div1.setAttribute("id", `${j},${i}`);
    div1.classList.add("emptySelectionSlot");
    selectionGameboard.appendChild(div1);
  }
}

const randomizeButton = document.querySelector(".randomize");
randomizeButton.addEventListener("click", () => {
  clearAll(selectionGameboard);
  const gameStartDiv = document.querySelector(".gameStartDiv");
  gameStartDiv.classList.remove("show");
  GameLoop(player1, AiPlacement, AiPlacement, true);
});

const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
  const winingDiv = document.querySelector(".endgameMessage");
  winingDiv.classList.remove("show");
  if (randomize) {
    GameLoop(player1, AiPlacement, AiPlacement, randomize);
  } else {
    GameLoop(player1, shipPlacement, AiPlacement);
  }
});
