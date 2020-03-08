'use strict'

let startBtn = document.querySelector('#start');

let budgetValue =  document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItems = document.querySelectorAll('.expenses-item');
let incomeItem = document.querySelector('.choose-income');
let expensesButtons = document.getElementsByTagName('button');
let expensesItemBtn = expensesButtons[0];
let optionalExpensesBtn = expensesButtons[1];
let countBudgetBtn = expensesButtons[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('#income');
let checksavings = document.querySelector('#savings');
let sumValue = document.querySelector('#sum');
let percentValue = document.querySelector('#percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');



let money, time;

startBtn.addEventListener('click', function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2000-01-01');
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null &&
            typeof (b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            console.log("done");
        } else {
            console.log("invalid input, please try again");
            i = i - 1;
        }

    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});


countBudgetBtn.addEventListener('click', function() {
if(appData.budget != undefined){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
} else {
    daybudgetValue.textContent = 'Произошла ошибка';
}
});

incomeItem.addEventListener('input', function(){  //try to use change
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checksavings.addEventListener('click', function() {
if(appData.savings == true) {
    appData.savings = false;
    console.log('false');
} else {
    appData.savings = true;
    console.log('true');
}
});

sumValue.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    }



