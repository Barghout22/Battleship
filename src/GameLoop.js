import { player } from "./players";
import {
  intiateGameboards,
  getattack,
  displayBoards,
  displayResult,
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
      attack = getattack();
      while (!player1.playerAttack(attack)) {}
      AI.thisGameboard.receiveAttack(attack);
      playerTurn = false;
    } else {
      setTimeout(() => {
        attack = AI.playerAttack();
      }, 1000);

      player1.thisGameboard.receiveAttack(attack);
      playerTurn = true;
    }
    displayBoards(player1.thisGameboard, AI.thisGameboard, playerTurn);
  }
  if (player1.thisGameboard.allShipsSunk()) {
    displayResult("computer won");
    //computer won
  } else {
    displayResult(`${player1.playerName} won`);
    //player won
  }
};
