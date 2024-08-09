document.addEventListener('DOMContentLoaded', () => {

})
let numValue
let calcEquation = [];
let calcOutput = document.querySelector('#calc-output');
let zero = document.querySelector('#zero').addEventListener('click', () => {
    numValue = 0;
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
let one = document.querySelector('#one').addEventListener('click', () => {
    numValue = 1
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const two = document.querySelector('#two').addEventListener('click', () => {
    numValue = 2
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const three = document.querySelector('#three').addEventListener('click', () => {
    numValue = 3
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const four = document.querySelector('#four').addEventListener('click', () => {
    numValue = 4
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const five = document.querySelector('#five').addEventListener('click', () => {
    numValue = 5
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const six = document.querySelector('#six').addEventListener('click', () => {
    numValue = 6
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const seven = document.querySelector('#seven').addEventListener('click', () => {
    numValue = 7
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const eight = document.querySelector('#eight').addEventListener('click', () => {
    numValue = 8
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const nine = document.querySelector('#nine').addEventListener('click', () => {
    numValue = 9
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const add = document.querySelector('#add').addEventListener('click', () => {
    
});
const subtract = document.querySelector('#subtract').addEventListener('click', () => {
    
});
const multiply = document.querySelector('#multiply').addEventListener('click', () => {
    
});
const divide = document.querySelector('#divide').addEventListener('click', () => {
    
});
const equals = document.querySelector('#equals').addEventListener('click', () => {
    
    
});
const allClear = document.querySelector('#clear').addEventListener('click', () => {
    calcEquation = [];
    calcOutput.innerHTML = "";
});
