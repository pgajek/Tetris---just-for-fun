const grid = document.querySelector('.grid');
function createDivs() {
  for (let i = 0; i < 200; i++) {
    const newDiv = document.createElement('div');
    grid.appendChild(newDiv);
  }
}
createDivs();
