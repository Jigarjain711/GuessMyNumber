'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Play again Function
const again = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Check function whether Guess is right or wrong
const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔ No number');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }

    // Input is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Check value
document.querySelector('.check').addEventListener('click', check);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    check();
  }
});

// Play Again
document.querySelector('.again').addEventListener('click', again);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    again();
  }
});
