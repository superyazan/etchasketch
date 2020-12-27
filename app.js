// adding the grid
const gridSize = document.getElementById('grid');
function grid(n){
    let gridIn = '';
    for (let i = 0 ; i < n*n ; i++){
        gridIn += `<div class="grid-item"></div>` 
    }
    gridSize.innerHTML = `${gridIn}`;
    gridSize.style.gridTemplateColumns= `repeat(${n},1fr)`;

}
grid(64);

// adding the start drawing functionality
const startBtn = document.getElementById('start');
function paint(e) {
    e.target.style.cssText = "background-color:red";
}
function start(){
        gridSize.addEventListener('mouseover',paint);
    }
startBtn.addEventListener('click',start)

// adding the stop drawing functionality

const stopbtn = document.getElementById('not');
function stop(){
    gridSize.removeEventListener('mouseover',paint);
}
stopbtn.addEventListener('click',stop)

// adding an eraser functionality
function erase(){
    function paintErase(e) {
        e.target.style.cssText = "background-color:white; cursor:cell";
    }
    gridSize.addEventListener('mouseover',paintErase);
}
document.getElementById('erase').addEventListener('click', erase);

// adding the ability to choose the size of the grid
function clear(){
    const m = document.getElementById('gridsize');

    if(m.value <100 && m.value > 0){
        gridSize.innerHTML = '';
        grid(m.value);
    }
    else {
        document.getElementById('hun').innerHTML = `<p>choose a number between 0 and 100</p>`;

    }

}
document.getElementById('clear').addEventListener('click',clear);

