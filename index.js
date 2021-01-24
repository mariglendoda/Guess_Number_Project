let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(`The secret number is (${secretNumber})`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = "⛔ No number!"
    
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('body').className = "correct";
    document.querySelector('.message').textContent = "🎉 Correct Number!"
    document.querySelector('.number').textContent = secretNumber;
    
    // When guess to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "📈 To High!"
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "💥 You lost the game!";
      document.querySelector('.score').textContent = 0;
    }
    
    // When guess to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "📉 To Low!"
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "💥 You lost the game!";
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  document.querySelector('.message').textContent = "Start guessing"
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').className = "";
});