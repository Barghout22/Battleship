import { Gameboard } from "./GameboardFactory";
export const player = (playerName, shipsInput) => {
  const thisPlayerName = playerName;
  const thisGameboard = Gameboard();
  let moves = [];

  const checkShipPlacementValidity = ([x, y], length) => {
    const ships = thisGameboard.showShips();
    let checker = undefined;
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < length; j++) {
        checker ||= ships[i].find((item) => item[0] === x + j && item[1] === y);
      }
    }
    if (checker) {
      return "invalid";
    } else return "valid";
  };

  const checkMoveValidity = ([x, y]) => {
    for (let i = 0; i < moves.length; i++) {
      if (x == moves[i][0] && y == moves[i][1]) return "invalid";
    }
    return "valid";
  };

  if (playerName !== "AI") {
    for (let i = 0; i < shipsInput.length; i++) {
      if (
        checkShipPlacementValidity(shipsInput[i][0], shipsInput[i][1]) ===
        "valid"
      ) {
        thisGameboard.createShip(shipsInput[i][0], shipsInput[i][1]);
      }
    }
  } else {
    for (let i = 0; i < shipsInput.length; i++) {
      let randomShipPlacement;
      do {
        randomShipPlacement = [
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 10 + 1),
        ];
      } while (
        checkShipPlacementValidity(randomShipPlacement, shipsInput[i]) ===
        "invalid"
      );
      thisGameboard.createShip(randomShipPlacement, shipsInput[i]);
    }
  }

  const playerAttack = ([x, y]) => {
    let playerMove;
    if (playerName === "AI") {
      do {
        playerMove = [
          Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 10 + 1),
        ];
      } while (checkMoveValidity(playerMove) === "invalid");
      moves = moves.concat([playerMove]);
      return playerMove;
    } else {
      if (checkMoveValidity([x, y]) === "valid") {
        moves = moves.concat([[x, y]]);
        return true;
      } else return false; //playerMove = requestMove();
    }
  };

  const checkMoves = () => {
    return moves;
  };

  return { thisPlayerName, thisGameboard, playerAttack, checkMoves };
};
