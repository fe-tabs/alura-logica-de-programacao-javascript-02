let secretNumber = generateRandomNumber();

let title = document.querySelector('h1');
title.innerHTML = "Jogo do Número Secreto";

let paragraph = document.querySelector('p');
paragraph.innerHTML = "Escolha um número entre 1 e 10: ";

function generateRandomNumber() {
  return parseInt(Math.random() * 10) + 1;
}

function checkGuess() {
  let guess = document.querySelector('input').value;

  if (guess == secretNumber) {
    paragraph.innerHTML = `Você acertou o número secreto: ${secretNumber}!`;
  } else {
    if (guess > secretNumber) {
      paragraph.innerHTML = `Você errou! O número secreto é menor que ${guess}!`;
    } else {
      paragraph.innerHTML = `Você errou! O número secreto é maior que ${guess}!`;
    }
  }
}