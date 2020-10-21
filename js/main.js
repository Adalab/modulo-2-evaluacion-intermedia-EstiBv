"use strict";
const tracks = document.querySelector(".js-trackUser");
const attempts = document.querySelector(".js-attemptsUser");
const btnPoof = document.querySelector(".js-btnProof");
const introNumber = document.querySelector(".js-numberUser");

let numberRamdon = getRandomNumber(100);
let counterProof = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(numberRamdon);

function counterBtn() {
  counterProof++;
  attempts.innerHTML = "Número de intentos: ";
  attempts.innerHTML += counterProof;
}
function checkNumberRandom() {
  let numberValue = parseInt(introNumber.value);
  if (numberValue < 0 || numberValue > 100) {
    tracks.innerHTML = "El número debe estar entre 1 y 100";
  } else if (numberValue === numberRamdon) {
    tracks.innerHTML = "Has ganado campeona!!!";
  } else if (numberValue < numberRamdon) {
    tracks.innerHTML = "Demasiado bajo";
  } else if (numberValue > numberRamdon) {
    tracks.innerHTML = "Demasiado alto";
  }
  counterBtn();
}
btnPoof.addEventListener("click", checkNumberRandom);
