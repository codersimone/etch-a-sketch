const gridSize = 16;
const totalCells = gridSize * gridSize;

const container = document.querySelector('#container');

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}
