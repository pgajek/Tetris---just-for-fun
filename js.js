const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score');
const startBtn = document.querySelector('.start__button');
const width = 10;
for (let i = 0; i < 200; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('grid__item');
  grid.appendChild(newDiv);
}
for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('taken');
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
let currentRotation = 0;
let currentPosition = 4;
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

function moveDown() {
  undrawPuzzle();
  currentPosition += width;
  drawPuzzle();
}
