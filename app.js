let guesses = 1;
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
    paragraph.innerHTML = `
      Você acertou o número secreto: 
      ${secretNumber} em ${guesses} tentativa${(guesses > 1) ? 's' : ''}!
    `;

    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (guess > secretNumber) {
      paragraph.innerHTML = `Você errou! O número secreto é menor que ${guess}!`;
    } else {
      paragraph.innerHTML = `Você errou! O número secreto é maior que ${guess}!`;
    }

    guesses++;
  }

  document.querySelector('input').value = '';
}

function startNewGame() {
  guesses = 1;
  secretNumber = generateRandomNumber();
  paragraph.innerHTML = "Escolha um número entre 1 e 10: ";
  document.getElementById('reiniciar').setAttribute('disabled', true);
}