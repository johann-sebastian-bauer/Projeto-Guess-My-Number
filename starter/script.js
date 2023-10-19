'use strict';

//document.querySelector('.number').value

let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
document.querySelector('.score').textContent = Number(10);
let y = document.querySelector('.label-score').value;
console.log(`the secret number is ${secretNumber}, but why cheat?`);
let highscore = 0;

let score = 15;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'no guess m8🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct!🏆';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = 'forestgreen';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'higher📈';
    document.querySelector('.guess').value = '';
    if (score == 1) {
      document.querySelector('.let').textContent = 'You Lost!';
      document.body.style.backgroundColor = 'red';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'lower📉';
    document.querySelector('.guess').value = '';
    if (score == 1) {
      document.querySelector(h1).textContent = 'You Lost!';
      document.body.style.backgroundColor = 'red';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Number(Math.trunc(Math.random() * 20));
  score = 15;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  console.clear();
  console.log(`the secret number is ${secretNumber}, but why cheat?`);
  document.querySelector('.number').textContent = '?';
});
