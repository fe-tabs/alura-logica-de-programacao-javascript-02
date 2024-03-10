let generatedSecretNumbers = [];
let maxNumber = 100;
let guesses = 1;
let secretNumber = generateRandomNumber();

changeElementContent('h1', "Jogo do Número Secreto");
changeElementContent('p', `Escolha um número entre 1 e ${maxNumber}: `);

function generateRandomNumber() {
  let generatedNumber = parseInt(Math.random() * maxNumber) + 1;

  if (generatedSecretNumbers.length == maxNumber) {
    generatedSecretNumbers = [];
  }

  if (generatedSecretNumbers.includes(generatedNumber)) {
    return generateRandomNumber();
  } else {
    generatedSecretNumbers.push(generatedNumber);
    return generatedNumber;
  }
}

function changeElementContent(tag, content) {
  let element = document.querySelector(tag);
  element.innerHTML = content;

  responsiveVoice.speak(content, 'Brazilian Portuguese Female', {rate: 1.2});
}

function checkGuess() {
  let guess = document.querySelector('input').value;

  if (guess == secretNumber) {
    changeElementContent('p', `
      Você acertou o número secreto: 
      ${secretNumber} em ${guesses} tentativa${(guesses > 1) ? 's' : ''}!
    `);

    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (guess > secretNumber) {
      changeElementContent('p', `
        Você errou! O número secreto é menor que ${guess}!
      `);
    } else {
      changeElementContent('p', `
        Você errou! O número secreto é maior que ${guess}!
      `);
    }

    guesses++;
  }

  document.querySelector('input').value = '';
}

function startNewGame() {
  guesses = 1;
  secretNumber = generateRandomNumber();
  changeElementContent('p', `Escolha um número entre 1 e ${maxNumber}: `);
  document.getElementById('reiniciar').setAttribute('disabled', true);
}