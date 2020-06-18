const grid = document.querySelector('.grid');
const miniGrid = document.querySelector('.miniGrid');
const scoreDisplay = document.querySelector('.score');
const startBtn = document.querySelector('.start__button');

const width = 10;
let currentRotation = 0;
let currentPosition = 4;
let nextRandom = 0;

for (let i = 0; i < 200; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('grid__item');
  grid.appendChild(newDiv);
}
for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('taken');
  newDiv.classList.add('grid__item');
  grid.appendChild(newDiv);
}
for (let i = 0; i < 16; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('miniGrid__item');
  grid.appendChild(newDiv);
}
let squares = [...document.querySelectorAll('.grid__item')];
const lPuzzle = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
];
const zPuzzle = [
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
];

const tPuzzle = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1],
];

const oPuzzle = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

const iPuzzle = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
];
const puzzles = [lPuzzle, zPuzzle, oPuzzle, iPuzzle, tPuzzle];

let random = Math.floor(Math.random() * puzzles.length);
let current = puzzles[random][currentRotation];

function drawPuzzle() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.add('puzzle');
  });
}

function undrawPuzzle() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.remove('puzzle');
  });
}
let timerid = setInterval(moveDown, 1000);
//

function control(e) {
  if (e.keyCode === 37) {
    moveLeft();
  } else if (e.keyCode === 38) {
    rotate();
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
}
document.addEventListener('keydown', control);
function moveDown() {
  undrawPuzzle();
  currentPosition += width;
  drawPuzzle();
  freeze();
}
function freeze() {
  if (
    current.some((index) =>
      squares[currentPosition + index + width].classList.contains('taken')
    )
  ) {
    current.forEach((index) =>
      squares[currentPosition + index].classList.add('taken')
    );
    random = Math.floor(Math.random() * puzzles.length);
    current = puzzles[random][currentRotation];
    currentPosition = 4;
    drawPuzzle();
  }
}

//moving
function moveLeft() {
  undrawPuzzle();
  const isAtLeftEdge = current.some(
    (index) => (currentPosition + index) % width === 0
  );
  if (!isAtLeftEdge) currentPosition -= 1;
  if (
    current.some((index) =>
      squares[currentPosition + index].classList.contains('taken')
    )
  ) {
    currentPosition += 1;
  }
  drawPuzzle();
}
function moveRight() {
  undrawPuzzle();
  const isAtRightEdge = current.some(
    (index) => (currentPosition + index) % width === width - 1
  );
  if (!isAtRightEdge) currentPosition += 1;
  if (
    current.some((index) =>
      squares[currentPosition + index].classList.contains('taken')
    )
  ) {
    currentPosition -= 1;
  }
  drawPuzzle();
}
function rotate() {
  undrawPuzzle();
  currentRotation++;
  if (currentRotation === current.length) {
    currentRotation = 0;
  }
  current = puzzles[random][currentRotation];

  drawPuzzle();
}

//

const displaySquares = document.querySelectorAll('.miniGrid__item');
const displayWidth = 4;
let displayIndex = 0;

const upNextPuzzles = [
  [1, width + 1, width * 2 + 1, 2],
  [0, width, width + 1, width * 2 + 1],
  [1, width, width + 1, width + 2],
  [0, 1, width, width + 1],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
];

function displayShape() {
  displaySquares.forEach((square) => {
    square.classList.remove('puzzle');
  });
  upNextPuzzles[nextRandom];
}
