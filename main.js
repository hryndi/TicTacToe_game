winList = [
  ["l1_1", "l1_2", "l1_3"],
  ["l2_1", "l2_2", "l2_3"],
  ["l3_1", "l3_2", "l3_3"],
  ["l1_1", "l2_1", "l3_1"],
  ["l1_2", "l2_2", "l3_2"],
  ["l1_3", "l2_3", "l3_3"],
  ["l1_1", "l2_2", "l3_3"],
  ["l1_3", "l2_2", "l3_1"],
];

const playerTurn = document.getElementById("player-turn");
const container = document.getElementById("container");
let kreuzTurn = true;
let nullTurn = false;
let kreuzTurnAuf = [];
let NullTurnAuf = [];
let gewonen = false;
let keinGewinner = 0;

document.addEventListener("DOMContentLoaded", function () {
  if (kreuzTurn) {
    playerTurn.innerHTML = "Player 1 turn";
  } else {
    return;
  }

  if (nullTurn) {
    playerTurn.innerHTML = "Player 2 turn";
  } else {
    return;
  }
});

function setbuild(el) {
  if (
    kreuzTurnAuf.includes(el.id) ||
    NullTurnAuf.includes(el.id) ||
    gewonen === true
  ) {
    return;
  }
  keinGewinner += 1;
  console.log(keinGewinner);
  if (keinGewinner === 9) {
    alert("nobody won this game. Refresh page to try again");
  } else {
    if (kreuzTurn) {
      el.innerHTML = `<img src="x_szmbol.png" alt="kreuz picture">`;
      kreuzTurnAuf.push(el.id);
      console.log(kreuzTurnAuf);
      kreuzTurn = false;
      nullTurn = true;
      playerTurn.innerHTML = "Player 2 turn";
      console.log(vergleichung(winList, kreuzTurnAuf));
      return;
    }

    if (nullTurn) {
      el.innerHTML = `<img src="o_symbol.webp" alt="null picture">`;
      NullTurnAuf.push(el.id);
      console.log(NullTurnAuf);
      nullTurn = false;
      kreuzTurn = true;
      playerTurn.innerHTML = "Player 1 turn";
      console.log(vergleichung(winList, NullTurnAuf));
      return;
    }
    return true;
  }
}

function vergleichung(arr, subArray) {
  if (subArray.length < 3) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let foundAll = true;
    itemCount = 0;
    for (let item of arr[i]) {
      if (!subArray.includes(item)) {
        itemCount += 1;
        foundAll = false;
        if (item === 3) {
          break;
        }
      }
    }
    if (foundAll) {
      gewonen = true;
      return alert("you won this game");
    }
  }
  return false;
}
