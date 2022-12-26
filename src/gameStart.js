import { GameLoop } from "./GameLoop";
import { clearAll } from "./domInteraction";

export function gameStarter() {
  const gameBeginningContainer = document.querySelector(".gameStartDiv");
  gameBeginningContainer.classList.add("show");
  let player1 = "player";
  let AiPlacement = [5, 4, 3, 3, 2];
  let axis = "x";
  let shipCoordinatePool = [];
  let ships = [];
  let placementCounter = 0;

  const selectionGameboard = document.querySelector(".selectionGameboard");
  const switchAxis = document.querySelector(".switchAxis");
  const randomizeButton = document.querySelector(".randomize");

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const div1 = document.createElement("div");
      div1.setAttribute("id", `${j},${i}`);
      div1.classList.add("emptySelectionSlot");
      selectionGameboard.appendChild(div1);
    }
  }
  const placementSpots = document.querySelectorAll(".emptySelectionSlot");
  switchAxis.addEventListener("click", () => {
    axis === "x" ? (axis = "y") : (axis = "x");
    //console.log(axis);
  });
  placementSpots.forEach((spot) =>
    spot.addEventListener("click", () => {
      //console.log(shipCoordinatePool);
      if (placementCounter < 5) {
        let desiredInput = spot.getAttribute("id").split(",");
        desiredInput = [Number(desiredInput[0]), Number(desiredInput[1])];
        //console.log(desiredInput);
        if (
          checkShipPlacementValidity(
            desiredInput,
            AiPlacement[placementCounter],
            axis
          ) === "valid"
        ) {
          placeShip(desiredInput, AiPlacement[placementCounter], axis);
          spot.className = " ";
          spot.classList.add("occupied");
          for (let i = 1; i <AiPlacement[placementCounter]; i++) {
            if (axis === "x") {
              let element = document.getElementById(
                `${desiredInput[0] + i},${desiredInput[1]}`
              );
              element.className = " ";
              element.classList.add("occupied");
             // console.log(`${desiredInput[0] + i},${desiredInput[1]}`);
            } else {
              let element = document.getElementById(
                `${desiredInput[0]},${desiredInput[1] + i}`
              );
              element.className = " ";
              element.classList.add("occupied");
              //console.log(`${desiredInput[0]},${desiredInput[1] + i}`);
            }
          }
          placementCounter++;
        }
        if (placementCounter >= 5) {
          setTimeout(() => {
            clearAll(selectionGameboard);
            const gameStartDiv = document.querySelector(".gameStartDiv");
            gameStartDiv.classList.remove("show");
            GameLoop(player1, ships, AiPlacement);
          }, 1000);
        }
      }
    })
  );

  randomizeButton.addEventListener("click", () => {
    clearAll(selectionGameboard);
    const gameStartDiv = document.querySelector(".gameStartDiv");
    gameStartDiv.classList.remove("show");
    GameLoop(player1, AiPlacement, AiPlacement, true);
  });

  const checkShipPlacementValidity = ([x, y], length, axis) => {
    let checker = false;
    for (let i = 0; i < shipCoordinatePool.length; i++) {
      for (let j = 0; j < length; j++) {
        if (axis === "x") {
          checker ||= shipCoordinatePool[i].find(
            (item) => item[0] === x + j && item[1] === y
          );
        } else {
          checker ||= shipCoordinatePool[i].find(
            (item) => item[0] === x && item[1] === y + j
          );
        }
      }
    }
    for (let counter = 0; counter < length; counter++) {
      if (axis === "x") {
        checker ||= x + counter < 1 || x + counter > 10;
      } else {
        checker ||= y + counter < 1 || y + counter > 10;
      }
    }
    if (checker) {
      return "invalid";
    } else return "valid";
  };

  function placeShip([x, y], length, axis) {
    let dummyShip = [];

    for (let i = 0; i < length; i++) {
      if (axis === "x") {
        dummyShip.push([x + i, y]);
      } else {
        dummyShip.push([x, y + i]);
      }
    }
    shipCoordinatePool.push(dummyShip);
    ships.push([[x, y], length, axis]);
  }
}
