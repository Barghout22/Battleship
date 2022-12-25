import { Gameboard } from "./GameboardFactory";

const testGameboard = Gameboard();
testGameboard.createShip([1, 2], 4, "x");
testGameboard.createShip([1, 2], 4, "y");

test("are all ships sunk?", () => {
  expect(testGameboard.allShipsSunk()).toBe(false);
});
// console.log(testGameboard.showShips());
 console.log(testGameboard.showAllCoordinates());
test("do hits return value ?", () => {
  expect(testGameboard.receiveAttack(1, 2)).toBe(true);
});
describe("testing if all ships are sunk after hits", () => {
  beforeAll(() => {
    testGameboard.receiveAttack(2, 2);
    testGameboard.receiveAttack(3, 2);
    testGameboard.receiveAttack(4, 2);
    testGameboard.receiveAttack(1, 3);
    testGameboard.receiveAttack(1, 4);
    testGameboard.receiveAttack(1, 5);
    testGameboard.receiveAttack(1, 6);
    testGameboard.receiveAttack(5, 2);
    testGameboard.receiveAttack(6, 3);

    console.log(testGameboard.showHits());
    console.log(testGameboard.showMisses());
    return;
  });

  test("are all ships sunk now ?", () => {
    expect(testGameboard.allShipsSunk()).toBe(true);
  });
  test("what are my hits ?", () => {
    expect(testGameboard.showHits()[0]).toEqual([1, 2]);
  });
  test("what are my Misses ?", () => {
    expect(testGameboard.showMisses()[0]).toEqual([1, 6]);
  });
});
