const container = document.querySelector('.container');
const doodler = document.createElement('div');
let doodlerLeft = 50;
let startingPoint = 150;
let doodlerBottom = startingPoint;
let isGameOver = false;
let platformCount = 5;
let platforms = [];
let upTimerId, downTimerId;
let isJumping = true;
let isGoingLeft = false;
let isGoingRight = false;
let leftTimerId, rightTimerId;
let score = 0;

const createDoodler = () => {
  container.appendChild(doodler);
  doodler.classList.add('doodler');

  doodlerLeft = platforms[0].left;
  doodler.style.left = doodlerLeft + 'px';
  doodler.style.bottom = doodlerBottom + 'px';
};

class Platform {
  constructor(newPlatformBottom) {
    this.bottom = newPlatformBottom;
    this.left = Math.random() * 305; // Container width is 400 and each platform width is 95
    this.visual = document.createElement('div');

    const visual = this.visual;
    visual.classList.add('platform');
    visual.style.left = this.left + 'px';
    visual.style.bottom = this.bottom + 'px';
    container.appendChild(visual);
  }
}

const createPlatforms = () => {
  for (let i = 0; i < platformCount; i++) {
    let platformGap = 600 / platformCount; // 600 is the container height
    let newPlatformBottom = 100 + i * platformGap;
    let newPlatform = new Platform(newPlatformBottom);
    platforms.push(newPlatform);
  }
};

const movePlatforms = () => {
  if (doodlerBottom > 200) {
    platforms.forEach((platform) => {
      platform.bottom -= 4;
      let visual = platform.visual;
      visual.style.bottom = platform.bottom + 'px';

      if (platform.bottom < 10) {
        score++;
        let firstPlatform = platforms[0].visual;
        firstPlatform.classList.remove('platform');
        platforms.shift();

        let newPlatform = new Platform(600); // Add platform at the top of the container
        platforms.push(newPlatform);
      }
    });
  }
};

const jump = () => {
  isJumping = true;
  clearInterval(downTimerId);
  upTimerId = setInterval(() => {
    doodlerBottom += 20;
    doodler.style.bottom = doodlerBottom + 'px';
    if (doodlerBottom > startingPoint + 200) {
      down();
    }
  }, 30);
};

const down = () => {
  isJumping = false;
  clearInterval(upTimerId);
  downTimerId = setInterval(() => {
    doodlerBottom -= 5;
    doodler.style.bottom = doodlerBottom + 'px';
    if (doodlerBottom <= 0) {
      gameOver();
    }
    platforms.forEach((platform) => {
      if (
        doodlerBottom >= platform.bottom &&
        doodlerBottom <= platform.bottom + 15 && // 15 is the width of each platform
        doodlerLeft + 80 >= platform.left && // 60 us the width of the doodler
        doodlerLeft <= platform.left + 95 && // 95 is the length of each platform
        !isJumping
      ) {
        startingPoint = doodlerBottom;
        console.log('LANDED');
        jump();
      }
    });
  }, 30);
};

const controlDoodler = (e) => {
  if (e.key === 'ArrowLeft') {
    moveLeft();
  } else if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowUp') {
    moveStraight();
  }
};

const moveLeft = () => {
  if (isGoingRight) {
    clearInterval(rightTimerId);
    isGoingRight = false;
  }
  isGoingLeft = true;
  leftTimerId = setInterval(() => {
    if (doodlerLeft >= 20) {
      doodlerLeft -= 5;
      doodler.style.left = doodlerLeft + 'px';
    } else {
      moveRight();
    }
  }, 30);
};

const moveRight = () => {
  if (isGoingLeft) {
    clearInterval(leftTimerId);
    isGoingLeft = false;
  }
  isGoingRight = true;
  rightTimerId = setInterval(() => {
    if (doodlerLeft <= 340) {
      doodlerLeft += 5;
      doodler.style.left = doodlerLeft + 'px';
    } else {
      moveLeft();
    }
  }, 30);
};

const moveStraight = () => {
  isGoingLeft = false;
  isGoingRight = false;
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
};

const gameOver = () => {
  isGameOver = true;
  clearInterval(downTimerId);
  clearInterval(upTimerId);
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
  container.innerHTML = score;
};

const start = () => {
  if (!isGameOver) {
    createPlatforms();
    createDoodler();
    setInterval(movePlatforms, 30);
    jump();
    document.addEventListener('keyup', controlDoodler);
  }
};

start();
