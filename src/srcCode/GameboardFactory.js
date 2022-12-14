import { shipFactory } from "./shipFactory";
export const Gameboard = () => {
  let hits = [];
  let misses = [];
  let groupOfShips = [];
  const createShip = ([x, y], length) => {
    let dummyShip = [[x, y]];
    for (let i = 1; i < length; i++) {
      dummyShip = dummyShip.concat([[x + i, y]]);
    }
    groupOfShips.push([shipFactory(length), dummyShip]);
  };
  const receiveAttack = (x, y) => {
    for (let i = 0; i < groupOfShips.length; i++) {
      groupOfShips[i][1].forEach((coor) => {
        if (x == coor[0] && y == coor[1]) {
          groupOfShips[i][0].isHit();
          hits.concat([[x, y]]);
          return;
        }
      });
      misses.concat([[x, y]]);
      return;
    }
  };
  const allShipsSunk = () => {
    let returnValue = true;
    groupOfShips.forEach((ship) => {
      returnValue = returnValue && ship[0].isSunk();
    });
    return returnValue;
  };
  return { createShip, allShipsSunk, receiveAttack };
};
