let point = 20;
let secretNumber = Math.trunc(Math.random() * point) + 1;
const logicGuess = document.querySelector('.login-guess').textContent = `(Between 1 and ${point})`;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");
    
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').className = "correct";
    
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 To High!" : "📉 To Low!");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("💥 You lost the game!")
      document.querySelector('.score').textContent = 0;
    }
  }
})

// Implementing a game playing again functionality
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  displayMessage("Start guessing...");
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').className = "";
});