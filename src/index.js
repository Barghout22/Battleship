import "./style.css";
import { GameLoop } from "./GameLoop";
let player1 = "mahmoud";
let shipPlacement = [
  [[1, 1], 5, "x"],
  [[5, 2], 4, "x"],
  [[4, 3], 3, "y"],
  [[2, 1], 3, "y"],
  [[7, 1], 2, "x"],
];
let AiPlacement = [5, 4, 3, 3, 2];

const start = GameLoop(player1, shipPlacement, AiPlacement);
start();
// function create() {
//   const div = document.createElement("div");
//   div.textContent = "hello";
//   div.classList.add("display");
//   return div;
// }
// document.body.appendChild(create());
