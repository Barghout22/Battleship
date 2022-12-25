import { player } from "./players";
import {
  intiateGameboards,
  getattack,
  displayBoards,
  displayResult,
  bottomDisplayText,
} from "./domInteraction";
export const GameLoop = (playerName, ShipArrangement, arrangementInputAI) => {
  const player1 = player(playerName, ShipArrangement);
  const AI = player("AI", arrangementInputAI);
  let playerTurn = true;
  intiateGameboards(player1);

  while (
    !player1.thisGameboard.allShipsSunk() &&
    !AI.thisGameboard.allShipsSunk()
  ) {
    let attack;
    if (playerTurn) {
      setTimeout(() => {
        bottomDisplayText(player1.thisPlayerName);
      }, 5000);
      // do {
      //   attack = getattack();
      // } while (!player1.playerAttack(attack));
      const slots = document.querySelectorAll(".enemySpot");
      slots.forEach((slot) => slot.classList.add("enemySlot"));
      slots.forEach((slot) =>
        slot.addEventListener("click", () => {
          let desiredValue = slot.getAttribute("id").split(",");
          desiredValue = [
            Number(desiredValue[0]) - 10,
            Number(desiredValue[1]) - 10,
          ];
          slot.className = " ";
          player1.playerAttack(desiredValue);
          AI.thisGameboard.receiveAttack(desiredValue)
            ? slot.classList.add("hitAttacks")
            : slot.classList.add("missed");
          displayBoards(player1, AI);
        })
      );
      playerTurn = false;
    } else {
      setTimeout(() => {
        bottomDisplayText(AI.thisPlayerName);
      }, 2000);

      attack = AI.playerAttack([1, 1]);
     // console.log(`#${attack[1]},${attack[0]}`);
      const attackSpot = document.getElementById(`${attack[1]},${attack[0]}`);
      attackSpot.className = " ";
      player1.thisGameboard.receiveAttack(attack)
        ? attackSpot.classList.add("hitAttacks")
        : attackSpot.classList.add("missed");
      playerTurn = true;
    }
    displayBoards(player1, AI);
  }
  if (player1.thisGameboard.allShipsSunk()) {
    displayResult("computer won");
    //computer won
  } else {
    displayResult(`${player1.playerName} won`);
    //player won
  }
};
