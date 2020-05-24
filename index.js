var numberOne = generateRandomNumber();
var numberTwo = generateRandomNumber();

changeDice("myImg1", numberOne);
changeDice("myImg2", numberTwo);

setWinner(numberOne, numberTwo);

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeDice(id, number) {
  switch (number) {
    case 1:
      document.getElementById(id).src = "images/dice1.png";
      break;
    case 2:
      document.getElementById(id).src = "images/dice2.png";
      break;
    case 3:
      document.getElementById(id).src = "images/dice3.png";
      break;
    case 4:
      document.getElementById(id).src = "images/dice4.png";
      break;
    case 5:
      document.getElementById(id).src = "images/dice5.png";
      break;
    case 6:
      document.getElementById(id).src = "images/dice6.png";
      break;
    default:

      break;
  }
}

function setWinner(number1, number2) {
  if (number1 > number2) {
    document.getElementById("h1").innerHTML = "Player 1 wins";
  } else if (number2 > number1) {
    document.getElementById("h1").innerHTML = "Player 2 wins";
  }
}
