import "./style.css";
import { GameLoop } from "./GameLoop";
let player1 = "Mahmoud";
let shipPlacement = [
  [[1, 1], 5, "x"],
  [[6, 3], 4, "x"],
  [[4, 4], 3, "y"],
  [[2, 3], 3, "y"],
  [[8, 8], 2, "x"],
];
let AiPlacement = [5, 4, 3, 3, 2];
GameLoop(player1, AiPlacement, AiPlacement, true);

// function create() {
//   const div = document.createElement("div");
//   div.textContent = "hello";
//   div.classList.add("display");
//   return div;
// }
// document.body.appendChild(create());
