const generalWrapper = document.querySelector('.generalWrapper');

const gridСreationButton = document.createElement('button');
gridСreationButton.classList.add('gridButton');
gridСreationButton.textContent = 'Create a new grid';
generalWrapper.appendChild(gridСreationButton);

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
generalWrapper.appendChild(gridContainer);

function getRandomRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
    };
}

function createGrid(size) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.style.width = `calc(100% / ${size})`;

        gridCell.dataset.opacity = '1';
        gridCell.dataset.colorSet = 'false';
        gridCell.dataset.direction = 'down';

        gridCell.addEventListener('mouseenter', () => {
            let currentOpacity = parseFloat(gridCell.dataset.opacity);
            let direction = gridCell.dataset.direction;

            if (gridCell.dataset.colorSet === 'false') {
                const randomRGB = getRandomRGB();
                gridCell.dataset.rgb = `${randomRGB.r},${randomRGB.g},${randomRGB.b}`;
                gridCell.style.backgroundColor = `rgba(${randomRGB.r}, ${randomRGB.g}, ${randomRGB.b}, ${currentOpacity})`;
                gridCell.dataset.colorSet = 'true';
            }

            if (gridCell.dataset.colorSet === 'true') {
                if (direction === 'down') {
                    currentOpacity -= 0.1;
                    if (currentOpacity <= 0) {
                        currentOpacity = 0;
                        gridCell.dataset.direction = 'up';
                    }
                }

                if (direction === 'up') {
                    currentOpacity += 0.1;
                    if (currentOpacity >= 1) {
                        currentOpacity = 1;
                        gridCell.dataset.direction = 'down';
                    }
                }

                gridCell.dataset.opacity = currentOpacity.toFixed(2);

                const [r, g, b] = gridCell.dataset.rgb.split(',');
                gridCell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
            }
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
