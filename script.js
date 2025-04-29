const generalWrapper = document.querySelector('.generalWrapper');

const gridСreationButton = document.createElement('button');
gridСreationButton.classList.add('gridButton');
gridСreationButton.textContent = 'Create a new grid';
generalWrapper.appendChild(gridСreationButton);

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
generalWrapper.appendChild(gridContainer);

function createGrid(size) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.style.width = `calc(100% / ${size})`;
        gridCell.addEventListener('mouseenter', () => {
            gridCell.classList.add('coloredTrail');
        });
        gridContainer.appendChild(gridCell);
    }
}

createGrid(16);

gridСreationButton.addEventListener('click', () => {
    let input = prompt('Enter the grid size from 1 to 100:');
    let size = parseInt(input);
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Incorrect input! Please enter a number from 1 to 100!');
        return;
    }
    createGrid(size);
});
