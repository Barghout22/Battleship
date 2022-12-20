export { intiateGameboards, getattack, displayBoards, displayResult };

function intiateGameboards(player1) {
  const player1Board = document.querySelector(".player1GameBoard");
  const player2Board = document.querySelector(".player2GameBoard");
  const playerName = document.querySelector(".playerName1");
  playerName.textContent = player1.thisPlayerName;
  const shipPlacement = player1.thisGameboard.showAllCoordinates();
  console.log(shipPlacement);

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const div1 = document.createElement("div");
      div1.setAttribute("id", `${i},${j}`);
      let checker = false;
      shipPlacement.forEach((ship) => {
        if (i === ship[0] && j === ship[1]) {
          div1.classList.add("occupied");
          checker = true;
        }
      });
      if (!checker) {
        div1.classList.add("emptySlot");
      }

      const div2 = document.createElement("div");
      div2.setAttribute("id", `${i},${j}`);
      div2.classList.add("emptySlot");
      div2.classList.add("enemySlot");

      player1Board.appendChild(div1);
      player2Board.appendChild(div2);
    }
  }
}
function getattack() {}
function displayBoards() {}
function displayResult() {}
