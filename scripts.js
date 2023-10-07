//creates grid of size size, and returns an array of the divs created
function createGrid(size){
    gridArr = [];
    const gridBox = document.querySelector('.grid-box');
    for (i=0; i<size; i++){
        let row = document.createElement('div')
        row.setAttribute('class', 'row row'+i);
        for (j=0; j<size; j++){
            let gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'grid-element');
            gridArr.push(gridElement);

            //update size of gridElements while respecting the 500x500 pixel grid size. 
            elementSize = 500/(size*2);
            gridElement.style.padding = elementSize+'px';
            
            row.appendChild(gridElement);
        }
        gridBox.appendChild(row);
    }
    return gridArr;
}

//deletes grid row by row
function removeGrid(size){
    for (i=0; i<size; i++){
        let rowToDelete = document.querySelector('.row'+i)
        rowToDelete.remove();
    }
}

//init
let size = 16;
//array of the individual divs of the grid, -> gridElements
let gridElements = createGrid(size);

//when mouse is hovering inside the gridbox. Take each div from array and change its style
const insideGridBox = document.querySelector('.grid-box');
insideGridBox.addEventListener('mouseenter', function(){
    gridElements.forEach(element => {
        element.addEventListener('mouseover', function(){
            element.style.backgroundColor = 'black';
        }); 
    });
});

//when change size button is pressed, remove grid and create grid of new size & new array.
const gridSizeBtn = document.querySelector('#size');
gridSizeBtn.addEventListener('click', function(){
    removeGrid(size);
    size = prompt('enter grid size');
    while (size>100) size = prompt('enter grid size');
    gridElements = createGrid(size);
});

//when clear button pressed, remove grid and create new grid w/ same size, same array
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', function(){
    removeGrid(size);
    gridElements = createGrid(size);
});
