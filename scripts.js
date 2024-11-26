const container = document.querySelector("#container");
const btn = document.querySelector("#btn-set-size");
const h1 = document.querySelector("h1");
const containerWidth = 580;
let shiftPressed = false;

container.style.width = containerWidth+'px';

btn.addEventListener("click", () => {
    let userSize = 0;
    while(true){
        userSize = Number(prompt('Enter an integer number from 0 to 100.'));
        console.log(`userSize = ${userSize}`);
        console.log(`userSize type = ${typeof userSize}`);
        console.log(typeof userSize === 'number');
        console.log(userSize === Math.floor(userSize));
        console.log(userSize !== NaN);
        if(typeof userSize === 'number' && userSize === Math.floor(userSize) &&
            userSize !== NaN && userSize <= 100){
            h1.textContent = `Grid size: ${userSize}x${userSize}`
            createGrid(userSize);
            break;
        } else {
            alert('Not a valid number! Try again!');
        }
    }
});
document.addEventListener("keydown", (e) => {
    if(e.shiftKey){
        shiftPressed = true;
    }
});
document.addEventListener("keyup", (e) => {
    shiftPressed = false;
});
/* document.addEventListener("keypress", (e) => {
    if(e.cKey){
        createGrid();
    }
}); */
container.addEventListener("mouseover", (e) => {
    if(shiftPressed){
        let target = e.target;
        target.style.backgroundColor = 'black';
    }
});

function createGrid(userSize){
    container.textContent = '';
    for (let i = 0; i < userSize*userSize; i++) {
        const square = document.createElement("div");
        square.style.width = `${containerWidth/userSize}px`;
        square.style.height = `${containerWidth/userSize}px`;
        square.style.border = '1px solid #e9e9e9';

        container.appendChild(square);
    }
}

createGrid(16);