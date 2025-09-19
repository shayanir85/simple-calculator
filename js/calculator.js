const showval = document.getElementById("display"); // showval = show value
const showRem = document.getElementById("reminder"); // showrem = show reminder
const warn = document.getElementById('alert');
const darkMode = document.getElementById('whole-calculator');
const darkModeBtn = document.getElementById('calculator');

let screenNumber = "0", partA, partB, opT, values = [], flag = 0; //opT = operator Type
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

function Del_cache() {
    screenNumber = '0';
    showval.innerHTML = screenNumber;
    showRem.innerHTML = '';
    values = [];
    flag = 0;
    showRem.style.display = 'none';
    setTimeout(alert(), 200);
}

function operate(op) { // op is equal to operation 
    showRem.style.display = 'inline-block';
    showRem.innerHTML = screenNumber + " " + op; // show the operation in reminder
    partA = screenNumber;
    opT = op;
    values.push(partA, opT); // store the values in an array
    screenNumber = '0';
    showval.innerHTML = '';
    flag++;
    if (flag > 1) {
        equal();
    }
    if (op === '=') {
        equal_B();
    } else {
        showRem.innerHTML = values.join(' ');
    }
}
function minus() {
    screenNumber = (+screenNumber) * -1;
    showval.innerHTML = screenNumber;
}
function equal() {
    expression = values.join('');
    expression = expression.slice(0, -1);
    console.log(expression);
    result = eval(expression);
    showval.innerHTML = result;
    showRem.innerHTML = '';
    showRem.innerHTML = expression;
}
function equal_B() {
    values.push(screenNumber);
    expression = values.join('');
    console.log(expression);
    result = eval(expression);
    screenNumber = '';
    showval.innerHTML = result;
    showRem.innerHTML = '';
    showRem.innerHTML = expression;
}


//code ezafe
function alert() {
    warn.classList.remove('hide');
    warn.classList.add('alert');
    setTimeout(() => {
        warn.classList.remove('alert');
        warn.classList.add('hide');
    }, 1500);
}
function darkModeToggle() {
    darkMode.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('dark-mode-btn');
    if (darkMode.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}


