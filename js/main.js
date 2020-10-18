"use strict";
const tracks = document.querySelector(".js-trackUser");
const attempts = document.querySelector(".js-attemptsUser");
const btnPoof = document.querySelector(".js-btnProof");
const introNumber = document.querySelector(".js-numberUser");
const numberRamdon = getRandomNumber(100);
let counterclick = 0;

// action
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(numberRamdon);

// paint

function counterBtn() {
  counterclick++;
  attempts.innerHTML = "Número de intentos: ";
  attempts.innerHTML += counterclick;
}
btnPoof.addEventListener("click", counterBtn);

function checkNumberRandom() {
  let numberValue = parseInt(introNumber.value);
  if ((numberValue = numberRamdon)) {
    tracks.innerHTML = "Has ganado campeona!!!";
  } else if (numberValue < numberRamdon) {
    tracks.innerHTML = "Demasiado bajo";
  } else if (numberValue > numberRamdon) {
    tracks.innerHTML = "Demasiado alto";
  } else if (numberValue < 0 || numberValue >= 100) {
    tracks.innerHTML = "El número debe estar entre 1 y 100";
  }
}
checkNumberRandom();
