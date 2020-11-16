const grid = document.querySelector('.grid');
const startButton = document.querySelector('#start');
const score = document.querySelector('#score');
let squares = [];

function createGrid() {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');

        square.classList.add('square');

        grid.appendChild(square);

        squares.push(square);
    }
    console.log(squares);
}

createGrid();