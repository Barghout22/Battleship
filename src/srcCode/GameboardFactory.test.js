import { Gameboard } from "./GameboardFactory";

const testGameboard = Gameboard();
testGameboard.createShip([1,2],4);
test("are all ships sunk?", () => {
  expect(testGameboard.allShipsSunk()).toBe(true);
});
