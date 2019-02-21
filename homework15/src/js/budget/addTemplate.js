import { Budget } from './budget';
import { income, expenses} from './../view/setElements';

export class Template {
    constructor() {
        this.income = income;
        this.expenses = expenses;
    }

    /**
    * @name _addIncomeTemplate
    * @function
    * The function  that adds template for profit
    *
    */
    addIncomeTemplate() {
        const addTemplate = this.createIncomeTemplate();
        this.income.insertAdjacentHTML("afterbegin", addTemplate);
    }

    /**
     * @name _createIncomeTemplate
     * @function
     * The function  that creates template for profit
     *
     */
    createIncomeTemplate() {
        return `
        <div class="item clearfix" id="income-0">
            <div class="item__description">${Budget.descriptionField}</div>
            <div class="right clearfix">
                <div class="item__value">+${Budget.valueField}</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
        `
    }

    /**
     * @name _addExpensesTemplate
     * @function
     * The function  that adds template for expense
     *
     */
    addExpensesTemplate() {
        const expensesTemplate = this.createExpensesTemplate();
        this.expenses.insertAdjacentHTML("afterbegin", expensesTemplate);
    }

    /**
     * @name _createExpensesTemplate
     * @function
     * The function  that creates template for expense
     *
     */
    createExpensesTemplate() {
        return `
        <div class="item clearfix" id="expense-0">
            <div class="item__description">${Budget.descriptionField}</div>
            <div class="right clearfix">
                <div class="item__value">-${Budget.valueField}</div>
                <div class="item__percentage">21%</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
        `
    }
}