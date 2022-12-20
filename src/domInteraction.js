export {
  intiateGameboards,
  getattack,
  displayBoards,
  displayResult,
  bottomDisplayText,
};

function intiateGameboards(player1) {
  const player1Board = document.querySelector(".player1GameBoard");
  const player2Board = document.querySelector(".player2GameBoard");
  clearAll(player1Board);
  clearAll(player2Board);
  const playerName = document.querySelector(".playerName1");
  playerName.textContent = `${player1.thisPlayerName}'s board`;
  const shipPlacement = player1.thisGameboard.showAllCoordinates();
  //console.log(shipPlacement);

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const div1 = document.createElement("div");
      div1.setAttribute("id", `${i},${j}`);
      let checker = false;
      shipPlacement.forEach((ship) => {
        if (i === ship[1] && j === ship[0]) {
          div1.classList.add("occupied");
          checker = true;
        }
      });
      if (!checker) {
        div1.classList.add("emptySlot");
      }

      const div2 = document.createElement("div");
      div2.setAttribute("id", `${j + 10},${i + 10}`);
      div2.classList.add("emptySlot");
      //div2.classList.add("enemySlot");
      div2.classList.add("enemySpot");

      player1Board.appendChild(div1);
      player2Board.appendChild(div2);
    }
  }
}
function getattack() {}
function displayBoards(player1, player2) {
  intiateGameboards(player1);
  displayHitsAndMisses(
    player1.thisGameboard.showHits(),
    player1.thisGameboard.showMisses(),
    0
  );
  displayHitsAndMisses(
    player2.thisGameboard.showHits(),
    player2.thisGameboard.showMisses(),
    10
  );
  //add sunk values
}
function displayResult() {}

function bottomDisplayText(name) {
  const displaySentence = document.querySelector(".displaySentence");
  displaySentence.textContent = `it's ${name}'s turn!`;
}

function clearAll(playerDomNode) {
  while (playerDomNode.firstChild) {
    playerDomNode.removeChild(playerDomNode.lastChild);
  }
}

function displayHitsAndMisses(hits, misses, offset) {
  for (let i = 0; i < hits.length; i++) {
    const affectedElement = document.querySelector(
      `#${hits[i][1] + offset},${hits[i][0] + offset}`
    );
    affectedElement.className = " ";
    affectedElement.classList.add("hitAttacks");
  }
  for (let i = 0; i < misses.length; i++) {
    const affectedElement = document.querySelector(
      `#${misses[i][1] + offset},${misses[i][0] + offset}`
    );
    affectedElement.className = " ";
    affectedElement.classList.add("missed");
  }
}