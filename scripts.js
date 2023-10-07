
let size = 16;
createGrid(size);



function createGrid(size){
    const gridBox = document.querySelector('.grid-box');
    for (i=0; i<size; i++){
        let row = document.createElement('div')
        row.setAttribute('class', 'row row'+i);
        row.setAttribute('style', 'display: flex;');
        for (j=0; j<size; j++){
           let gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'grid-element');
            gridElement.setAttribute('style', 'border-right: grey solid;border-bottom: grey solid;padding: 16px ;flex: 1;')

            gridElement.addEventListener('mouseover', function(){
                console.log(gridElement.className);
                gridElement.style.backgroundColor = 'blue';
            })

            row.appendChild(gridElement);
        }
        gridBox.appendChild(row);
    }

}

const gridSize = document.querySelector('#size');
gridSize.addEventListener('click', function(){
    removeGrid(size);
    size = prompt('enter grid size');
    while (size>100) size = prompt('enter grid size');
    
    createGrid(size);
    //256 items -> 
});



function removeGrid(size){
    for (i=0; i<size; i++){
        let rowToDelete = document.querySelector('.row'+i)
        rowToDelete.remove();
    }
}


