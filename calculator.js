let runningTotal = 0;
let buffer = '0';
let previusOperator;
const screen = document.querySelector('.screen');


document
.querySelector('.calc-buttons')
.addEventListener('click', function(event){
    buttonClick(event.target.innerText);
});

function buttonClick(value) {
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();

}

function handleSymbol(value){
    switch (value){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            previusOperator = null;
            break;
        case '=':
            if(previusOperator === null); {
                return;
            } 
            flushOperation(parseInt(buffer));
            previusOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break; 
    }
}

function rerender(){
    screen.innerText = buffer;
}