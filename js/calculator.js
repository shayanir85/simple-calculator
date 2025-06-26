const showval = document.getElementById("display"); // showval = show value
const showRem = document.getElementById("reminder"); // showrem = show reminder
let screenNumber = "0", partA, partB, opT , values = []; //opT = operator Type
showval.innerHTML = screenNumber;
showRem.style.display = 'none';

function printscreen(val) {
    if (val === '.') {
        showval.innerHTML = (+screenNumber).toLocaleString() + '.';
    } else {
        showval.innerHTML = (+screenNumber).toLocaleString();
    }
}

function display(val) {
    if (screenNumber === '0') {
        screenNumber = '';
    }
    screenNumber = screenNumber + val;
    printscreen(val);
}

function Del() {
    showval.innerHTML = showval.innerHTML.slice(0, -1);
    screenNumber = (+showval.innerHTML).toLocaleString();
}

function operate(op) { // op is equal to operation 
    showRem.style.display = 'inline-block';
    showRem.innerHTML = screenNumber +" "+ op;
    partA = screenNumber;
    opT = op;
    screenNumber = '0';
    showval.innerHTML = '';

}

function equal() {
    partB = screenNumber;
    showval.innerHTML = '';
    if (opT === '*') {
        result = (+partA) * (+partB);
    } else if (opT === '/') {
        result = (+partA) / (+partB);
    } else if (opT === '+') {
        result = (+partA) + (+partB);
    } else if (opT === '-') {
        result = (+partA) - (+partB);
    }
    showval.innerHTML = result;
    showRem.innerHTML = '';    
    showRem.style.display = 'none';    
}