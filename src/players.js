import { Gameboard } from "./GameboardFactory";
export const player = (playerName, shipsInput) => {
  const thisPlayerName = playerName;
  const thisGameboard = Gameboard();
  let moves = [];

  const checkShipPlacementValidity = ([x, y], length, axis) => {
    const ships = thisGameboard.showShips();
    let checker = undefined;
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < length; j++) {
        if (axis === "x") {
          checker ||= ships[i].find(
            (item) => item[0] === x + j && item[1] === y
          );
          checker ||= x + j < 1 || x + j > 10;
        } else {
          checker ||= ships[i].find(
            (item) => item[0] === x && item[1] === y + j
          );
          checker ||= y + j < 1 || y + j > 10;
        }
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
        checkShipPlacementValidity(
          shipsInput[i][0],
          shipsInput[i][1],
          shipsInput[i][2]
        ) === "valid"
      ) {
        thisGameboard.createShip(
          shipsInput[i][0],
          shipsInput[i][1],
          shipsInput[i][2]
        );
      }
    }
  } else {
    for (let i = 0; i < shipsInput.length; i++) {
      let randomShipPlacement;
      let randomAxis = ["x", "y"];
      let currentAxis;

      do {
        randomShipPlacement = [
          Math.floor(Math.random() * 10) + 1,
          Math.floor(Math.random() * 10) + 1,
        ];
        currentAxis = randomAxis[Math.round(Math.random())];
      } while (
        checkShipPlacementValidity(
          randomShipPlacement,
          shipsInput[i],
          currentAxis
        ) === "invalid"
      );
      thisGameboard.createShip(randomShipPlacement, shipsInput[i], currentAxis);
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
