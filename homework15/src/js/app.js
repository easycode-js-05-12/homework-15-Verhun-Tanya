import { Budget } from './budget/budget';
import {check, select, divDeleteIncome, divDeleteExpenses} from './view/setElements';
import './../css/style.css';
const budget = new Budget();

/**
* @name start
* @function
* The function that sets initial values
*
*/
function start() {
    budget._setElements();
    budget._startValue();
}

/**
* @name onChange
* @function
* The function that changes the select
*
*/
function onChange() {
    budget._select();
}

/**
* @name onClick
* @function
* The function that checks changing of select and clears fields after adding to the table
*
*/
function onClick() {
    budget._checkSelect();
    budget._clearInput();
}

/**
* @name deleteBut
* @function
* The function that deletes field after click on the delete button
* @param {event} e 
* Event that occurs when click delete button
*/
function deleteBut(e) {
    budget._deleatValue(e);
    let event = e.currentTarget;
    event.firstElementChild.remove();
}


window.addEventListener('load', start);
select.addEventListener('change', onChange);
check.addEventListener('click', onClick);
divDeleteIncome.addEventListener('click', deleteBut);
divDeleteExpenses.addEventListener('click', deleteBut);

