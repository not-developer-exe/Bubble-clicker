let main = document.querySelector('#main');
let score = document.querySelector('.score');
let target = document.querySelector('.target');
let timer = document.querySelector('.timer');

let intervalId; /

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
      resetGame(); 
    }
  }, 1000);
}

function resetGame() {
  clearInterval(intervalId); 
  score.innerHTML = 0; 
  nextTarget(); 
  shuffleBubbles(); 
  startTimer(); 
}

function createBubbles() {
  for (let i = 0; i < 50; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerHTML = Math.floor(Math.random() * 9 + 1); 
    main.appendChild(bubble);
  }
}

function shuffleBubbles() {
  let bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(function (bubble) {
    bubble.innerHTML = Math.floor(Math.random() * 9 + 1); 
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
      shuffleBubbles(); 
    });
  });
}


score.innerHTML = 0;
nextTarget();
createBubbles();
startTimer();
startGame();
