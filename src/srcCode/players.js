import { Gameboard } from "./GameboardFactory";
export const player = (playerName, shipsInput) => {
  const playerName = playerName;
  const thisGameboard = Gameboard();
  let moves = [];
  if (playerName !== "AI") {
    for (let i = 0; i < shipsInput.length; i++) {
      thisGameboard.createShip(shipsInput[i][0], shipsInput[i][1]);
    }
  } else {
  }

  const checkMoveValidity = ([x, y]) => {
    for (let i = 0; i < moves.length; i++) {
      if (x == moves[i][0] && y == moves[i][1]) return "invalid";
    }
    return "valid";
  };

  const playerAttack = () => {
    let playerMove;
    if (playerName === "AI") {
      do {
        playerMove = [
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 10 + 1),
        ];
      } while (checkMoveValidity(playerMove) === "invalid");
    } else {
      //playerMove = requestMove();
    }
    moves = moves.concat([playerMove]);
    return playerMove;
  };

  return { playerName, playerAttack };
};
