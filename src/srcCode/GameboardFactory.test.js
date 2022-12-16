import { Gameboard } from "./GameboardFactory";

const testGameboard = Gameboard();
testGameboard.createShip([1, 2], 4);
testGameboard.createShip([1, 2], 4);
testGameboard.createShip([1, 2], 4);

test("are all ships sunk?", () => {
  expect(testGameboard.allShipsSunk()).toBe(false);
});

describe("testing if all ships are sunk after hits", () => {
  beforeEach(() => {
    testGameboard.receiveAttack(1, 2);
    testGameboard.receiveAttack(2, 2);
    testGameboard.receiveAttack(3, 2);
    testGameboard.receiveAttack(4, 2);
    testGameboard.receiveAttack(5, 2);
    testGameboard.receiveAttack(6, 3);
    return;
  });
  test("are all ships sunk now ?", () => {
    expect(testGameboard.allShipsSunk()).toBe(true);
  });
  test("what are my hits ?", () => {
    expect(testGameboard.showHits()[0]).toEqual([1, 2]);
  });
  test("what are my Misses ?", () => {
    expect(testGameboard.showMisses()[0]).toEqual([5, 2]);
  });
});
