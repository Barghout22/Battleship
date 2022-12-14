import { player } from "./players";

const playerTestMoves = [
  [[9, 10], 1, "x"],
  [[7, 1], 2, "x"],
  [[4, 8], 10, "y"],
  [[2, 8], 1, "y"],
  [[9, 1], 4, "y"],
  [[3, 8], 2, "x"],
];
const testPlayer1 = player("Mahmoud", playerTestMoves);
const testPlayer2 = player("AI", [5, 4, 3, 2, 1]);

//console.log(testPlayer1.thisGameboard.showShips());
// console.log(testPlayer2.thisGameboard.showShips());
// console.log(testPlayer2.thisGameboard.showShips());
testPlayer1.playerAttack([1, 2]);
testPlayer1.playerAttack([3, 4]);

test("player attacking:", () => {
  expect(testPlayer1.playerAttack([1, 3])).toBe(true);
});
test("player attacking:", () => {
  expect(testPlayer1.playerAttack([1, 2])).toBe(false);
});

test("does the ship placement algo prevent repetitive coordinates?;", () => {
  expect(testPlayer1.thisGameboard.showShips().length).toBe(5);
});
