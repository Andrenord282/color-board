const board = document.querySelector('#board');
const SQUARES_QUANTITY = 450;
let colors = [];


for(let i = 0; i < SQUARES_QUANTITY; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () =>{
         addColor(square);
    });
    square.addEventListener('mouseleave', () =>{
        removeColor(square);
   });
    board.append(square);
}

function addColor(element) {
    randomColor();
    element.style.backgroundColor = `rgb(${colors})`;
    element.style.boxShadow = `0 0 2px rgb(${colors}), 0 0 10px rgb(${colors})`;
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(32, 32, 32)';
    element.style.boxShadow = `0 0 2px rgb(32, 32, 32)`;
}

function randomColor() {
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);
   colors = [red, green, blue];
   return colors;
}



