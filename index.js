let operator = '';
let currentValue = '';
let lastValue = '';
let equation = '';
let solution = '';
let calcOutput = document.querySelector('#calc-output');

document.addEventListener('DOMContentLoaded', () => {
    const equals = document.querySelector('#equals');
    const allClear = document.querySelector('#clear');
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    
    
    numbers.forEach((num) => num.addEventListener('click', function(e){
        handleCurrentValue(e.target.textContent)
        updateEquation();
    }));

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
        updateEquation();
    }))

    allClear.addEventListener('click', () => {
        clearCalcScreen();
    })

    equals.addEventListener('click', () => {
        getSolution();
    })
    })



    function handleCurrentValue(num){
        if (currentValue.length < 10){
            currentValue += num;
            equation += num;
        }
    }

    function handleOperator(op){
        if (operator.length < 2){
            operator += op;
            lastValue = currentValue
            currentValue = ''
            equation += ' ' + operator + ' '; 
        }
    }

    function updateEquation(){
        calcOutput.textContent = equation
    }

    function clearCalcScreen(){
        currentValue = '';
        lastValue = '';
        operator = '';
        equation = '';
        calcOutput.textContent = equation;
    }

    function getSolution(){
        lastValue = Number(lastValue);
        currentValue = Number(currentValue);

        if (operator === '+'){
            solution = lastValue + currentValue;
        } else if (operator === '-'){
            solution = lastValue - currentValue;
        } else if (operator === 'x'){
            solution = lastValue * currentValue;
        } else {
            solution = lastValue / currentValue;
        }
        calcOutput.textContent = solution;
    }
    
//Each number and operation button on the calculator
/*const zero = document.querySelector('#zero').addEventListener('click', () => {
    numValue = 0;
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const one = document.querySelector('#one').addEventListener('click', () => {
    numValue = 1
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${numValue}`
});
const two = document.querySelector('#two').addEventListener('click', () => {
    numValue = 2
    calcEquation.push(numValue);
    console.log(calcEquation);
    calcOutput.innerHTML = `${calcEquation}`
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
});*/
/*const add = document.querySelector('#add').addEventListener('click', () => {
    
});
const subtract = document.querySelector('#subtract').addEventListener('click', () => {
    
});
const multiply = document.querySelector('#multiply').addEventListener('click', () => {
    
});
const divide = document.querySelector('#divide').addEventListener('click', () => {
    
});*/
