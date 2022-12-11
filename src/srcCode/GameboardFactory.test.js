import { Gameboard } from "./GameboardFactory";

const testGameboard = Gameboard();
test("are all ships sunk?", () => {
  expect(testGameboard.allShipsSunk()).toBe(true);
});
