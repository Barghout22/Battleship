import { player } from "./players";
import {
  intiateGameboards,
  displayResult,
  bottomDisplayText,
} from "./domInteraction";
export const GameLoop = (playerName, ShipArrangement, arrangementInputAI) => {
  const player1 = player(playerName, ShipArrangement);
  const AI = player("AI", arrangementInputAI);
  let playerTurn = true;
  intiateGameboards(player1);
  const slots = document.querySelectorAll(".enemySlot");

  // console.log(player1.thisGameboard.showShips());
  // console.log(AI.thisGameboard.showShips());

  slots.forEach((slot) =>
    slot.addEventListener("click", () => {
      if (
        !player1.thisGameboard.allShipsSunk() &&
        !AI.thisGameboard.allShipsSunk()
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
            bottomDisplayText(`${player1.thisPlayerName} won`);
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
              bottomDisplayText("computer won");
            }
          }, 2000);
        }
      }
    })
  );
};
//   if (
//     !player1.thisGameboard.allShipsSunk() &&
//     !AI.thisGameboard.allShipsSunk()
//   ) {
//     let attack;
//     if (playerTurn) {
//       setTimeout(() => {
//         bottomDisplayText(player1.thisPlayerName);
//       }, 5000);
//       // do {
//       //   attack = getattack();
//       // } while (!player1.playerAttack(attack));
//       slots.forEach((slot) =>
//         slot.addEventListener("click", () => {
//           let desiredValue = slot.getAttribute("id").split(",");
//           desiredValue = [
//             Number(desiredValue[0]) - 10,
//             Number(desiredValue[1]) - 10,
//           ];
//           slot.className = " ";
//           player1.playerAttack(desiredValue);
//           AI.thisGameboard.receiveAttack(desiredValue)
//             ? slot.classList.add("hitAttacks")
//             : slot.classList.add("missed");
//           // displayBoards(player1, AI);
//         })
//       );
//       playerTurn = false;
//     } else {
//       setTimeout(() => {
//         bottomDisplayText(AI.thisPlayerName);
//       }, 2000);

//       attack = AI.playerAttack([1, 1]);
//       // console.log(`#${attack[1]},${attack[0]}`);
//       const attackSpot = document.getElementById(`${attack[1]},${attack[0]}`);
//       attackSpot.className = " ";
//       player1.thisGameboard.receiveAttack(attack)
//         ? attackSpot.classList.add("hitAttacks")
//         : attackSpot.classList.add("missed");
//       playerTurn = true;
//     }
//     // displayBoards(player1, AI);
//   }
//   if (player1.thisGameboard.allShipsSunk()) {
//     displayResult("computer won");
//     //computer won
//   } else {
//     displayResult(`${player1.playerName} won`);
//     //player won
//   }
// };
