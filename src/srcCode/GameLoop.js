import { player } from "./players";
import {
  intiateGameboards,
  getattack,
  displayBoards,
  displayResult,
} from "./domInteraction";
const GameLoop = (playerName, ShipArrangement) => {
  const player1 = player(playerName, ShipArrangement);
  const AI = player("AI", ShipArrangement);
  let playerTurn = true;
  intiateGameboards(player1, AI);

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
      attack = AI.playerAttack();
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
