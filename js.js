const grid = document.querySelector('.grid');
function createDivs() {
  for (let i = 0; i < 200; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid__item');
    grid.appendChild(newDiv);
  }
}
createDivs();
