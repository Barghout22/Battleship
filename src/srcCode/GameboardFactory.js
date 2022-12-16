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
          hits = hits.concat([[x, y]]);

          return;
        }
      });
    }
    for (let i = 0; i < hits.length; i++) {
      if (x == hits[i][0] && y == hits[i][1]) {
        return;
      }
    }
    misses = misses.concat([[x, y]]);
  };
  const allShipsSunk = () => {
    let returnValue = true;
    groupOfShips.forEach((ship) => {
      returnValue = returnValue && ship[0].isSunk();
    });
    return returnValue;
  };
  const showHits = () => {
    return hits;
  };
  const showMisses = () => {
    return misses;
  };
  const showShips = () => {
    let shipCoordinates = [];
    for (let i = 0; i < groupOfShips.length; i++) {
      shipCoordinates.push(groupOfShips[i][1]);
    }
    return shipCoordinates;
  };
  return {
    createShip,
    allShipsSunk,
    receiveAttack,
    showHits,
    showMisses,
    showShips,
  };
};
