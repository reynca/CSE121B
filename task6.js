function add(number1, number2) {
    return number1 + number2;
}
const subtract = function (number1, number2) {
    return number1 - number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}

function findSlope() {
    let SlopeX1 = parseInt(document.querySelector('#SlopeX1').value);
    let SlopeY1 = parseInt(document.querySelector('#SlopeY1').value);
    let SlopeX2 = parseInt(document.querySelector('#SlopeX2').value);
    let SlopeY2 = parseInt(document.querySelector('#SlopeY2').value);
    document.querySelector('#slope').value = divide(subtract(SlopeY2, SlopeY1), subtract(SlopeX2, SlopeX1));
}

function findDistance() {
    let DisX1 = parseInt(document.querySelector('#DisX1').value);
    let DisY1 = parseInt(document.querySelector('#DisY1').value);
    let DisX2 = parseInt(document.querySelector('#DisX2').value);
    let DisY2 = parseInt(document.querySelector('#DisY2').value);
    document.querySelector('#Distance').value = Math.sqrt((DisX1 - DisX2)**2 + (DisY1 - DisY2)**2)
}

function findHypotenuse() {
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);
    document.querySelector('#hypotenuse').value = Math.sqrt(a**2 + b**2)
}

function findUnknownLength() {
    let x = parseInt(document.querySelector('#x').value);
    let hypo = parseInt(document.querySelector('#hypo').value);
    document.querySelector('#sideLength').value = Math.sqrt(hypo**2 - x**2)
}

document.querySelector('#findSlope').addEventListener('click', findSlope);
document.querySelector('#findDistance').addEventListener('click', findDistance);
document.querySelector('#findHypotenuse').addEventListener('click', findHypotenuse);
document.querySelector('#findLength').addEventListener('click', findUnknownLength);

const d = new Date().getFullYear();
document.querySelector('#year').innerHTML = d