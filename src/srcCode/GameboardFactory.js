import { shipFactory } from "./shipFactory";
export const Gameboard = () => {
  let attackedCoordinates = {};
  let groupOfShips = {};
  const createShip = ([x, y], length) => {
    let dummyShip = [[x, y]];
    for (i = 0; i < length; i++) {
      dummyShip.concat([x + 1, y]);
    }
    groupOfShips.push({
      ship: shipFactory(length),
      shipCoordinates: dummyShip,
    });
  };
  const receiveAttack = (coor) => {
    attackedCoordinates.append(coor);
    for (i = 0; i < groupOfShips.length; i++) {}
  };
  const allShipsSunk = () => {
    let returnValue = true;
    groupOfShips.array.forEach((ship) => {
      returnValue = returnValue && ship.ship.isSunk();
    });
    return returnValue;
  };
  return { createShip, allShipsSunk, receiveAttack };
};
