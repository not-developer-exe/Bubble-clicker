let main = document.querySelector('#main');
let score = document.querySelector('.score');
let target = document.querySelector('.target');
let timer = document.querySelector('.timer');

let intervalId; // Store the timer ID

function nextTarget() {
  target.innerHTML = `Next Target: ${Math.floor(Math.random() * 9 + 1)}`;
}

function startTimer() {
  let time = 60;
  timer.innerHTML = `Time: ${time}`;
  
  intervalId = setInterval(function () {
    time--;
    timer.innerHTML = `Time: ${time}`;
    
    if (time === 0) {
      clearInterval(intervalId);
      alert("Your Score is " + score.innerHTML);
      resetGame(); // Reset the game properly
    }
  }, 1000);
}

function resetGame() {
  clearInterval(intervalId); // Stop any running timer
  score.innerHTML = 0; // Reset score
  nextTarget(); // Set a new target
  shuffleBubbles(); // Shuffle bubbles at the start
  startTimer(); // Restart the timer
}

function createBubbles() {
  for (let i = 0; i < 50; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerHTML = Math.floor(Math.random() * 9 + 1); // Assign initial random number
    main.appendChild(bubble);
  }
}

function shuffleBubbles() {
  let bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(function (bubble) {
    bubble.innerHTML = Math.floor(Math.random() * 9 + 1); // Shuffle the number
  });
}

function startGame() {
  let bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(function (bubble) {
    bubble.addEventListener('click', function () {
      if (parseInt(bubble.innerHTML) === parseInt(target.innerHTML.split(': ')[1])) {
        score.innerHTML = parseInt(score.innerHTML) + 10;
        nextTarget();
      }
      shuffleBubbles(); // Shuffle numbers after each move
    });
  });
}

// Initialize the game
score.innerHTML = 0;
nextTarget();
createBubbles();
startTimer();
startGame();
