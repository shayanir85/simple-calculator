const display = document.querySelector('.display');
display.innerHTML = '0';

let screenNumber = '0', part1, part2, flag = 0;

function show(val) {
    if (val === '.') {
        display.innerHTML = (+screenNumber).toLocaleString() + '.';
    } else {
        display.innerHTML = (+screenNumber).toLocaleString();
    }
}

function printOnScreen(val) {
    console.log(val)
    if (screenNumber === '0') {
        screenNumber = '';
    }
    screenNumber += val;
    show(val)
}

function convertToInt(formattedNumber) {
    return parseInt(formattedNumber.replace(/,/g, ''), 10);
}

function opt(Opt) {
    part1 = (+screenNumber)
    screenNumber = "0";
    operation = Opt;
    display.innerHTML = (+screenNumber).toLocaleString();
}

function equal() {
    part2 = convertToInt(screenNumber)
    screenNumber = 0;
    switch (operation) {
        case "+":
            result = part1 + part2;
            break;
        case "-":
            result = part1 - part2;
            break;
        case "*":
            result = part1 * part2;
            break;
        case "/":
            result = part1 / part2;
            break;
        default:
            result = part1 + part2;
            break;
    }
    parseInt(screenNumber);
    screenNumber = (+result).toLocaleString();
    display.innerHTML = (screenNumber).toLocaleString();
}

function del() {
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (display.innerHTML == '') {
        display.innerHTML = "0"
    } else {
        screenNumber = (display.innerHTML).toLocaleString();
        screenNumber = convertToInt(screenNumber)
        display.innerHTML = (screenNumber).toLocaleString();
    }

}

function del_All() {
    screenNumber = "0";
    part1 = 0;
    part2 = 0;
    flag = 0;
    display.innerHTML = '0';
}