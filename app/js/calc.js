'use strict';

let opNumber = null;
let currentNumber = '0';
let operator = null;
let freshNumber = false;


window.addEventListener(
    'DOMContentLoaded',
    bindEvents
);

function bindEvents(){
    const numbers = document.body.querySelector('.numberField');
    const operators = document.body.querySelector('.operatorField');

    numbers.addEventListener(
        'click',
        numberHandler
    );
    operators.addEventListener(
        'click',
        operatorHandler
    );
}

function numberHandler(el){
    const output = document.body.querySelector('.outputField');
    if(freshNumber === true){
        freshNumber = false;
        currentNumber = '0';
        resizeOutput();
    }
    switch (el.target.id) {
        case 'one':
            updateNumber('1');
            break;
        case 'two':
            updateNumber('2');
            break;
        case 'three':
            updateNumber('3');
            break;
        case 'four':
            updateNumber('4');
            break;
        case 'five':
            updateNumber('5');
            break;
        case 'six':
            updateNumber('6');
            break;
        case 'seven':
            updateNumber('7');
            break;
        case 'eight':
            updateNumber('8');
            break;
        case 'nine':
            updateNumber('9');
            break;
        case 'zero':
            if(currentNumber == '0'){
                return;
            }
            updateNumber('0');
            break;
        case 'decimal':
            updateNumber('.');
            break;
        case 'clear':
            if(currentNumber == '0'){
                currentNumber = '0';
                opNumber = null;
                operator = null;
                CtoAC();
            }else{
                currentNumber = '0';
            }
            output.style.fontSize = '12em';
            output.innerHTML = currentNumber;
            break;
        case 'signChange':
            if(currentNumber == '0'){
                return;
            }
            currentNumber.includes('-')?
                currentNumber = currentNumber.replace('-', ''):
                currentNumber = `-${currentNumber}`;
            output.innerHTML = currentNumber;
            break;
        default:
            //ayylmaoo
    }
    return;
}

function updateNumber(number){
    const output = document.body.querySelector('.outputField');
    if(currentNumber.length == 20){
        return;
    }
    if(number == '.' && currentNumber.includes('.')){
        return;
    }
    if(currentNumber == '0' && number != '.'){
        currentNumber = number;
        output.innerHTML = currentNumber;
        ACtoC();
        return;
    }
    if(currentNumber == '0' && number == '.'){
        currentNumber = '0.';
        output.innerHTML = currentNumber;
        ACtoC();
        return;
    }
    currentNumber = `${currentNumber}${number}`;
    resizeOutput();
    ACtoC();
    output.innerHTML = currentNumber;
}

function resizeOutput(){
    const output = document.body.querySelector('.outputField');
    switch (true) {
        case currentNumber.length >= 4 && currentNumber.length < 7:
            output.style.fontSize = '6em';
            break;
        case currentNumber.length >= 7 && currentNumber.length < 11:
            output.style.fontSize = '4em';
            break;
        case currentNumber.length >= 11 && currentNumber.length < 14:
            output.style.fontSize = '3em';
            break
        case currentNumber.length >= 14:
            output.style.fontSize = '2em';
            break
        default:
            output.style.fontSize = '12em';
    }
}

function operatorHandler(el){
    if(el.target.id == 'equals'){
        solve();
        return;
    }

    opNumber = currentNumber;
    currentNumber = '0'
    zero();

    switch (el.target.id) {
        case 'divide':
            operator = 'divide';
            break;
        case 'multiply':
            operator = 'multiply';
            break;
        case 'subtract':
            operator = 'subtract';
            break;
        case 'add':
            operator = 'add';
            break;
        default:
            //pupper
    }
}

function solve(){
    if(operator == null){
        return;
    }

    let output = '';

    switch (operator) {
        case 'divide':
            output = opNumber / currentNumber;
            break;
        case 'multiply':
            output = opNumber * currentNumber;
            break;
        case 'subtract':
            output = opNumber - currentNumber;
            break;
        case 'add':
            output = Number(opNumber) + Number(currentNumber);
            break;
        default:
            //doggo
    }

    currentNumber = `${output}`;
    document.body.querySelector('.outputField').innerHTML = currentNumber;
    resizeOutput();
    opNumber = null;
    freshNumber = true;
}

function zero(){
    document.body.querySelector('.outputField').innerHTML = '0';
}

function ACtoC(){
    document.body.querySelector('.clear').innerHTML = 'C';
}

function CtoAC(){
    document.body.querySelector('.clear').innerHTML = 'AC';
}
