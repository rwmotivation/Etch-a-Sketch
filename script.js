const container = document.querySelector('.container');


const rainbow = document.querySelector('.rainbow');
const toggle = document.querySelector('.toggle');
let on = false;

rainbow.addEventListener('click', ()=> {
    if(toggle.textContent == 'OFF'){
        on = true;
        if(text.value == '') {
            drawDefaultGrid();
        } else {
            createGrid(text.value);
        }
        toggle.textContent = 'ON';
    } else {
        on = false;
        if(text.value == '') {
            drawDefaultGrid();
        } else {
            createGrid(text.value);
        }
        toggle.textContent = 'OFF';
    }
});

let rainbowFunction = function(grid) {

    grid.addEventListener('mouseover', () => {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);

        grid.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        grid.style.border = '1px solid rgba(0,0,0,0.5);';
    });
};

/* DRAW DEFAULT GRID AT START*/
let drawDefaultGrid = function() { 
    const DEFAULT_NO_GRID = 16;
    let totalNumberOfGrids = numberOfGrids(DEFAULT_NO_GRID);
    container.innerHTML = "";

    // DEFAULT GRID
    for(let i = 0; i < totalNumberOfGrids; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');


        let gridSide = ( 608 / DEFAULT_NO_GRID) ;
        grid.style.width = gridSide + 'px';
        grid.style.height = gridSide + 'px';

        container.appendChild(grid);

        if(on) {
            console.log('works');

            rainbowFunction(grid);
        } else {
            defaultHover(grid);
        }
    }
}

let createGrid = function(number) {

    // DELETE ALL CONTAINER CHILD NODES
    const container = document.querySelector('.container');
    container.innerHTML = "";

    for(let i = 0; i < number*number; i++) {
        let totalNumberOfGrids = numberOfGrids(number);
        let grid = document.createElement('div');
        grid.classList.add('grid');


        let gridSide = ( 608 / number) ;
        grid.style.width = gridSide + 'px';
        grid.style.height = gridSide + 'px';

        container.appendChild(grid);
        
        if(on) {
            rainbowFunction(grid);
        } else {
            defaultHover(grid);
        }

    }
}


// PAINTING
const red = 'red';

let defaultHover = function (grid) {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = red;
        grid.style.border = '1px solid rgba(0,0,0,0.5);';
    });
};

const button = document.querySelector('.submit');
const text = document.querySelector('.text');


button.addEventListener('click', () => {
    let number = text.value;
    if(number>0 && number <=64) {
        createGrid(number);
    } else {
        alert("Please enter a number between 0 and 64");
        text.value = "";
    }

});


// Total number of grids depending on n
numberOfGrids = (n) => n * n;

drawDefaultGrid();

// CLEAR BUTTON FUNCTION
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    if(text.value == '') {
        drawDefaultGrid();
    } else {
        createGrid(text.value);
    }
});

