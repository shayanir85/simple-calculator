const display = document.querySelector('.display');
display.innerHTML = '0';

let screenNumber = '0', part1, part2, flag = 0;

function show(val) {
    if (val === '.') {
        display.innerHTML = (convertToFloat(screenNumber)).toLocaleString() + '.';
    } else {
        display.innerHTML = (convertToFloat(screenNumber)).toLocaleString();
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

function convertToFloat(formattedNumber) {
    return parseFloat(formattedNumber.replace(/,/g, ''), '');
}

function opt(Opt) {
    part1 = (convertToFloat(screenNumber))
    screenNumber = "0";
    operation = Opt;
    display.innerHTML = (convertToFloat(screenNumber)).toLocaleString();
}

function equal() {
    part2 = convertToFloat(screenNumber)
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
    screenNumber = (+result).toLocaleString();
    screenNumber = convertToFloat(screenNumber)
    display.innerHTML = (screenNumber).toLocaleString();
    part1 = 0
    part2 = 0
}

function del() {
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (display.innerHTML == '') {
        display.innerHTML = "0"
    } else {
        screenNumber = (display.innerHTML).toLocaleString();
        screenNumber = convertToFloat(screenNumber)
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