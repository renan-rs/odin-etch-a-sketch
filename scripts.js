const container = document.querySelector("#container");
const btn = document.querySelector("#btn-set-size");
const boardSizeSelect = document.querySelector('#board-size');
const h1 = document.querySelector("h1");
const checkboxColored = document.querySelector('#colored');
let containerWidth = boardSizeSelect.value;
let squareSize = 16;

container.style.width = containerWidth+'px';

boardSizeSelect.addEventListener("change", (e) => {
    containerWidth = e.target.value;
    container.style.width = containerWidth+'px';
    updateContainerGrid(containerWidth);
})

btn.addEventListener("click", () => {
    while(true){
        squareSize = Number(prompt('Enter an integer number from 0 to 100.'));
        if(typeof squareSize === 'number' && squareSize === Math.floor(squareSize) &&
            !isNaN(squareSize) && squareSize <= 100){
            h1.textContent = `${squareSize}x${squareSize}`
            createGrid(squareSize);
            break;
        } else {
            alert('Not a valid number! Try again!');
        }
    }
});
document.addEventListener("keypress", (e) => {
    if(e.code === 'KeyC'){
        createGrid(squareSize);
    }
});
container.addEventListener("mouseover", (e) => {
    let target = e.target;
    if(e.ctrlKey && e.target.classList.contains('square')){
        if(checkboxColored.checked){
            target.style.backgroundColor = getRandomRGBA();
        } else {
            target.style.backgroundColor = 'black';
        }
    } else if(e.shiftKey && e.target.classList.contains('square')){
        target.style.backgroundColor = 'transparent';
    }
});

function createGrid(squareSize){
    container.textContent = '';
    for (let i = 0; i < squareSize*squareSize; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `${containerWidth/squareSize}px`;
        square.style.height = `${containerWidth/squareSize}px`;
        square.style.border = '1px solid #e9e9e9';

        container.appendChild(square);
    }
}

function updateContainerGrid(containerSize){
    const containerChildren = container.children;
    for (let i = 0; i < containerChildren.length; i++) {
        const square = containerChildren[i];
        square.style.width = `${containerSize/squareSize}px`;
        square.style.height = `${containerSize/squareSize}px`;
    }
}

function getRandomRGBA() {
    //return Math.random() * (max - min) + min;
    const round = Math.round;
    const mRandom = Math.random;
    return 'rgba(' + round(mRandom()*255) + 
                ',' + round(mRandom()*255) + 
                ',' + round(mRandom()*255) + ',' + '1)';
}

createGrid(squareSize);