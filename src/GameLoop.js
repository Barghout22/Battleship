import { player } from "./players";
import {
  intiateGameboards,
  displayResult,
  bottomDisplayText,
} from "./domInteraction";
export const GameLoop = (
  playerName,
  ShipArrangement,
  arrangementInputAI,
  playerRandomizeInput
) => {
  const player1 = player(playerName, ShipArrangement, playerRandomizeInput);
  const AI = player("AI", arrangementInputAI);
  let playerTurn = true;
  intiateGameboards(player1);
  const slots = document.querySelectorAll(".enemySlot");

  //  console.log(player1.thisGameboard.showShips());
  // console.log(AI.thisGameboard.showShips());

  slots.forEach((slot) =>
    slot.addEventListener("click", () => {
      if (
        !player1.thisGameboard.allShipsSunk() &&
        !AI.thisGameboard.allShipsSunk() &&
        slot.classList.contains("enemySlot")
      ) {
        if (playerTurn) {
          playerTurn = false;
          bottomDisplayText(AI.thisPlayerName);
          let desiredValue = slot.getAttribute("id").split(",");
          desiredValue = [
            Number(desiredValue[0]) - 10,
            Number(desiredValue[1]) - 10,
          ];
          //console.log(`player's attack:${desiredValue}`);
          slot.className = " ";
          player1.playerAttack(desiredValue);
          AI.thisGameboard.receiveAttack(desiredValue[0], desiredValue[1])
            ? slot.classList.add("hitAttacks")
            : slot.classList.add("missed");

          if (AI.thisGameboard.allShipsSunk()) {
            displayResult(player1.thisPlayerName);
            return;
          }

          let attack = AI.playerAttack([1, 1]);
          //console.log(`computer attack:${attack}`);
          const attackSpot = document.getElementById(
            `${attack[1]},${attack[0]}`
          );

          setTimeout(() => {
            bottomDisplayText(player1.thisPlayerName);
            attackSpot.className = " ";
            player1.thisGameboard.receiveAttack(attack[1], attack[0])
              ? attackSpot.classList.add("hitAttacks")
              : attackSpot.classList.add("missed");
            playerTurn = true;
            if (player1.thisGameboard.allShipsSunk()) {
              displayResult(AI.thisPlayerName);
            }
          }, 1000);
        }
      }
    })
  );
};
