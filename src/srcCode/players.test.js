import { player } from "./players";

const playerTestMoves = [
  [[1, 1], 2],
  [[5, 2], 4],
  [[4, 3], 3],
  [[1, 1], 2],
];
const testPlayer1 = player("Mahmoud", playerTestMoves);
const testPlayer2 = player("AI", [5, 4, 3, 2, 1]);

testPlayer1.playerAttack([1, 2]);
testPlayer1.playerAttack([3, 4]);

test("player attacking:", () => {
  expect(testPlayer1.playerAttack([1, 3])).toBe(true);
});
test("player attacking:", () => {
  expect(testPlayer1.playerAttack([1, 2])).toBe(false);
});

test("does the ship placement algo prevent repetitive coordinates?;", () => {
  expect(testPlayer1.thisGameboard.showShips().length).toBe(3);
});

