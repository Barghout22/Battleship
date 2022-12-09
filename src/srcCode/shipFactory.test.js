import { testShip } from "./shipFactory";

test("test sinking function:", () => {
  expect(testShip.isSunk()).toBe(false);
});
