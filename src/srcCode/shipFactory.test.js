import { shipFactory } from "./shipFactory";

const testShip = shipFactory(4);
test("test sinking function:", () => {
  expect(testShip.isSunk()).toBe(false);
});

describe("test if the ship is sunk after 4 hits", () => {
  beforeEach(() => {
    testShip.isHit();
    testShip.isHit();
    testShip.isHit();
    testShip.isHit();
    return;
  });
  test("is the ship sunk now ?", () => {
    expect(testShip.isSunk()).toBe(true);
  });
});
