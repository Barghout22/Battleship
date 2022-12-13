import { shipFactory } from "./shipFactory";
export const Gameboard = () => {
  let attackedCoordinates = {};
  let groupOfShips = [];
  const createShip = ([x, y], length) => {
    let dummyShip = [[x, y]];
    for (let i = 0; i < length; i++) {
      dummyShip.concat([x + i, y]);
    }
    groupOfShips.push([shipFactory(length), dummyShip]);
  };
  const receiveAttack = (coor) => {
    attackedCoordinates.append(coor);
    for (i = 0; i < groupOfShips.length; i++) {}
  };
  const allShipsSunk = () => {
    let returnValue = true;
    groupOfShips.forEach((ship) => {
      returnValue = returnValue && ship.isSunk();
    });
    return returnValue;
  };
  return { createShip, allShipsSunk, receiveAttack };
};
