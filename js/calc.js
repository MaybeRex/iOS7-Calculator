'use strict';

const remote = require('remote');
const electron = remote.getCurrentWindow();
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

}

function operatorHandler(el){

}
