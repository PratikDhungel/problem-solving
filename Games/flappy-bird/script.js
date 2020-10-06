const bird = document.querySelector('.bird');
const gameContainer = document.querySelector('.game-container');
const ground = document.querySelector('.ground');

let isGameOver = false;
let birdLeft = 200;
let birdBottom = 100;
let gravity = 2;
let thrust = 40;
let obstacleMoveSpeed = 2;
let obstacleGap = 450;

function startGame() {
  birdBottom -= gravity;
  bird.style.left = birdLeft + 'px';
  bird.style.bottom = birdBottom + 'px';
}

let gameTimer = setInterval(startGame, 20);
// startGame();

// clearInterval(gameTimer);

function keyControl(e) {
  if (e.keyCode === 32) {
    jump();
  }
}

function jump() {
  if (birdBottom < 450) {
    birdBottom += thrust;
  }
  bird.style.bottom = birdBottom + 'px';
}

document.addEventListener('keyup', keyControl);

function generateObstacles() {
  let obstacleLeft = 500;
  let randomHeight = Math.random() * 80;
  let obstacleBottom = randomHeight;

  const obstacle = document.createElement('div');
  const topObstacle = document.createElement('div');

  if (!isGameOver) {
    obstacle.classList.add('obstacle');
    topObstacle.classList.add('topObstacle');
  }

  gameContainer.appendChild(obstacle);
  gameContainer.appendChild(topObstacle);

  obstacle.style.left = obstacleLeft + 'px';
  obstacle.style.bottom = obstacleBottom + 'px';

  topObstacle.style.left = obstacleLeft + 'px';
  topObstacle.style.bottom = obstacleBottom + obstacleGap + 'px';

  function moveObstacle() {
    obstacleLeft -= obstacleMoveSpeed;
    obstacle.style.left = obstacleLeft + 'px';
    topObstacle.style.left = obstacleLeft + 'px';

    if (obstacleLeft === -60) {
      clearInterval(obstacleTimer);
      gameContainer.removeChild(obstacle);
      gameContainer.removeChild(topObstacle);
    }

    console.log(birdBottom);
    console.log(obstacleBottom + obstacleGap);

    if (
      (obstacleLeft > 142 &&
        obstacleLeft < 260 &&
        (birdBottom < obstacleBottom + 100 || birdBottom > obstacleBottom + obstacleGap - 248)) ||
      birdBottom === 0
    ) {
      clearInterval(obstacleTimer);
      gameOver();
    }
  }

  let obstacleTimer = setInterval(moveObstacle, 10);

  if (!isGameOver) {
    setTimeout(generateObstacles, 3000);
  }
}
// setInterval(generateObstacles, 3000);

generateObstacles();

function gameOver() {
  clearInterval(gameTimer);
  isGameOver = true;
  document.removeEventListener('keyup', keyControl);
}
