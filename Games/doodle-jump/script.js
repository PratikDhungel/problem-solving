const container = document.querySelector('.container');
const doodler = document.createElement('div');
let doodlerLeft = 50;
let doodlerBottom = 250;
let isGameOver = false;
let platformCount = 5;
let platforms = [];

const createDoodler = () => {
  container.appendChild(doodler);
  doodler.classList.add('doodler');

  doodler.style.left = doodlerLeft + 'px';
  doodler.style.bottom = doodlerBottom + 'px';
};

class Platform {
  constructor(newPlatformBottom) {
    this.bottom = newPlatformBottom;
    this.left = Math.random() * 315; // Container width is 400 and each platform width is 85
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
    });
  }
};

const start = () => {
  if (!isGameOver) {
    createDoodler();
    createPlatforms();
    setInterval(movePlatforms, 30);
    // movePlatforms();
  }
};

start();
