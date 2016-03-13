'use strict';

const remote = require('remote');
const electron = remote.getCurrentWindow();
let opNumber = null;
let currentNumber = '0';
let operator = null;

window.onload=function(e){
    init();
    bindEvents();
}

function init(){
    electron.setResizable(false);
}

function bindEvents(){
    const controls = document.querySelector('.appControls');
    const actions = document.querySelector('.actionField');
    const numbers = document.querySelector('.numberField');
    const operators = document.querySelector('.operatorFeild');
    controls.addEventListener(
        'click',
        controlHandler
    );
    controls.addEventListener(
        'mousedown',
        dragControlHandler
    );
    actions.addEventListener(
        'click',
        actionHandler
    );
    numbers.addEventListener(
        'click',
        numberHandler
    );
    operators.addEventListener(
        'click',
        operatorHandler
    );
}

function dragControlHandler(el){
    if(el.target.className != 'appControls'){
        return;
    }
    el.srcElement.setAttribute('draggable', true);
}

function controlHandler(el){
    switch (el.target.className) {
        case 'close':
            electron.close();
            break;
        case 'hide':
            electron.minimize();
            break;
    }
}

function actionHandler(el){

}

function numberHandler(el){
    switch (el.target.className) {
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
        default:
            //ayylmaoo
    }
}

function updateNumber(number){
    if(currentNumber.length == 20){
        return;
    }
    if(number == '.' && currentNumber.includes('.')){
        return;
    }
    if(currentNumber == '0' && number != '.'){
        currentNumber = number;
        document.querySelector('.outputField').innerHTML = currentNumber;
        return;
    }
    if(currentNumber == '0' && number == '.'){
        currentNumber = '0.';
        document.querySelector('.outputField').innerHTML = currentNumber;
        return;
    }
    currentNumber = `${currentNumber}${number}`;
    let output = document.querySelector('.outputField');

    switch (currentNumber.length) {
        case 4:
            output.style.fontSize = '6em'
            break;
        case 7:
            output.style.fontSize = '4em'
            break;
        case 11:
            output.style.fontSize = '3em'
            break
        case 14:
            output.style.fontSize = '2em'
            break
        default:
            //stay
    }

    output.innerHTML = currentNumber;
}

function operatorHandler(el){

}
