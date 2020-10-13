"use strict"

const introNumber = document.querySelector (".numberUser");
const btnPoof = document.querySelector(".btnProof");
const attemptsNum = document.querySelector (".attempts");

function listenProof (event) {
  btnPoof = event.currentTarget;
  attemptsNum.value = btnPoof.click;
  const truckToUser = document.querySelector(".trackUser");
  if (introNumber === getRandomNumber) {
    truckToUser.innerHTML = "Has ganado campeona!!!"
    
  } else if(introNumber < getRandomNumber){
    truckToUser.innerHTML = "Demasiado bajo"
    
  } else if (introNumber > getRandomNumber){
    truckToUser.innerHTML = "Demasiado alto"
  }
}
function getRandomNumber(max) {
  return Math.ceil(Math.random()* max);
}

btnPoof.addEventListener("click", listenProof);
console.log(introNumber.value);
