import { player } from "./players";
import { intiateGameboards } from "./domInteraction";
const GameLoop = (playerName, ShipArrangement) => {
  const player1 = player(playerName, ShipArrangement);
  const AI = player("AI", ShipArrangement);
  let playerTurn = player1.playerName;
  intiateGameboards(player1);
};
