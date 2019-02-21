//const template = new Template();
import { Template } from './addTemplate';
import { inputDescription, inputValue, incomeResult, expensesResult, description, value, budgetValue, right, option } from './../view/setElements';
const template = new Template();
export class Budget {
    constructor() {
        this.inputDescription = inputDescription;
        this.inputValue = inputValue;
        this.incomeResult = incomeResult;
        this.expensesResult = expensesResult;
    }

    /**
     * @name _setElements
     * @function
     * The function that sets elements
     *
     */
    _setElements() {
        this.description = description;
        this.value = value;
        this.budgetValue = budgetValue;
        this.right = right;
        this.option = option;
    }

    /**
     * @name _startValue
     * @function
     * The function that sets initial values
     *
     */
    _startValue() {
        for (let i = 0; i < this.right.length; i++) {
            this.right[i].textContent = 0;
        }
        this.budgetValue.textContent = null;
    }

    /**
     * @name _select
     * @function
     * The function that adds a class when toggles select
     *
     */
    _select() {
        for (let i = 0; i < this.option.length; i++) {
            if (this.option[i].value === "expense") {
                this.description.classList.toggle("red-focus");
                this.value.classList.toggle("red-focus");
            }
        }
    }

    /**
    * @name _checkSelect
    * @function
    * The function that checks changing of select
    *
    */
    _checkSelect() {
        if (!this.description.classList.contains("red-focus")) {
            this._addIncome();
        } else {
            this._addExpenses();
        }
    }

    /**
     * @name _getData
     * @function
     * The function that receives the data entered in the fields
     *
     */
    _getData() {
        this.inputDescription = this.description.value;
        this.inputValue = this.value.value;
        this.massData = [this.inputDescription, this.inputValue];
        return this.massData;
    }

    /**
     * @name _addIncome
     * @function
     * The function  that counts total result including profit
     *
     */
    _addIncome() {
        this._getData();
        for (let i = 0; i < this.massData.length; i++) {
            Budget.descriptionField = this.descriptionField = this.massData[0];
            Budget.valueField = this.valueField = this.massData[1];
        }
        this._getIncomeResult();
        template.addIncomeTemplate();
        this.budgetValue.textContent = Number(this.budgetValue.textContent) + Number(this.valueField);
    }

    /**
     * @name _getIncomeResult
     * @function
     * The function  that counts profit
     *
     */
    _getIncomeResult() {
        this.incomeResult += Number(this.valueField);
        for (let i = 0; i < this.right.length; i++) {
            this.right[0].textContent = this.incomeResult;
        }
        return this.incomeResult;
    }

    /**
     * @name _addExpenses
     * @function
     * The function  that counts total result including expense
     *
     */
    _addExpenses() {
        this._getData();
        for (let i = 0; i < this.massData.length; i++) {
            Budget.descriptionField = this.descriptionField = this.massData[0];
            Budget.valueField = this.valueField = this.massData[1];
        }
        this._getExpensesResult();
        this.budgetValue.textContent = Number(this.budgetValue.textContent) - Number(this.valueField);
        template.addExpensesTemplate();
    }

    /**
     * @name _getExpensesResult
     * @function
     * The function  that counts expense
     *
     */
    _getExpensesResult() {
        this.expensesResult -= Number(this.valueField);
        for (let i = 0; i < this.right.length; i++) {
            this.right[1].textContent = this.expensesResult;
        }
        return this.expensesResult;
    }

    /**
    * @name _clearInput
    * @function
    * The function  that clears fields after adding values
    *
    */
    _clearInput() {
        this.description.value = null;
        this.value.value = null;
    }

    /**
    * @name _deleatValue
    * @function
    * The function that deletes field after click on the delete button
    * @param {event} e 
    * Event that occurs when click delete button
    *
    */
    _deleatValue(e) {
        let event = e.currentTarget;
        this.deleteValue = event.querySelector(".item__value");
        let str = this.deleteValue.textContent;
        let number = str.slice(1);
        if (str[0] === '+') {
            this.budgetValue.textContent -= Number(number);
            this.incomeResult -= Number(number);
            this.right[0].textContent = this.incomeResult;
        } else if (str[0] === '-') {
            this.budgetValue.textContent -= Number(number) * -1;
            this.expensesResult -= Number(number) * -1;
            this.right[1].textContent = this.expensesResult;
        }
    }
}

