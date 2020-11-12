const gridSize = document.getElementById('grid');
function grid(n){
    let gridIn = '';
    for (let i = 0 ; i < n*n ; i++){
        gridIn += `<div class="grid-item"></div>` 
    }
    gridSize.innerHTML = `${gridIn}`;
    gridSize.style.gridTemplateColumns= `repeat(${n},1fr)`;

}
grid(16);

function paint(e) {
    e.target.style.cssText = "background-color:red";
}
gridSize.addEventListener('mouseover',paint);

function clear(){
    let m = prompt('How many squares per side to make the new grid?');
    if(m <100 && m > 0){
        grid(m);
    }
    else {
        document.getElementById('hun').innerHTML = `<p>choose a number between 0 and 100</p>`;

    }

}
document.getElementById('clear').addEventListener('click',clear);

