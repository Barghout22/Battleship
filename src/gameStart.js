import { GameLoop } from "./GameLoop";
import { clearAll } from "./domInteraction";

function gameStarter() {
  let player1 = "player";
  let AiPlacement = [5, 4, 3, 3, 2];
}
const ships = [];

const checkShipPlacementValidity = ([x, y], length, axis) => {
  let checker = false;
  for (let i = 0; i < ships.length; i++) {
    for (let j = 0; j < length; j++) {
      if (axis === "x") {
        checker ||= ships[i].find((item) => item[0] === x + j && item[1] === y);
      } else {
        checker ||= ships[i].find((item) => item[0] === x && item[1] === y + j);
      }
    }
  }
  for (let counter = 0; counter < length; counter++) {
    if (axis === "x") {
      checker ||= x + counter < 1 || x + counter > 10;
    } else {
      checker ||= y + counter < 1 || y + counter > 10;
    }
  }
  if (checker) {
    return "invalid";
  } else return "valid";
};

function placeShip([x, y], length, axis) {
  let dummyShip = [];
  if (checkShipPlacementValidity([x, y], length, axis)) {
    for (let i = 0; i < length; i++) {
      if (axis === "x") {
        dummyShip.push([x + i, y]);
      } else {
        dummyShip.push([x, y + i]);
      }
    }
  }
  ships.push([dummyShip, length, axis]);
}
