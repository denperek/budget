'use strict'

let startBtn = document.querySelector('#start');

let budgetValue =  document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');

let expensesItems = document.querySelectorAll('.expenses-item');

let buttons = document.getElementsByTagName('button');
let expensesItemBtn = buttons[0];
let optionalexpensesBtn = buttons[1];
let countBudgetBtn = buttons[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('#income');
let checksavings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

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

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', );
            let b = prompt('Во сколько обойдется?', );

            if (typeof (a) === 'string' && typeof (a) != null &&
                typeof (b) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                console.log("done");
            } else {
                console.log("invalid input, please try again");
                i = i - 1;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш бюджет на день: ' + appData.moneyPerDay + 'р.');
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100) {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function () {
        while (true) { //бесконечный цикл, пока юзер не введет сроку
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (String(+items) == 'NaN' && typeof (items) != null && items != '') { //проверяем что это не цифры, не "отмена" и не пустая строка
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();

                let optExpMsg = ''; // переменная для вывода "Способы доп. заработка: " в одном сообщении
                appData.income.forEach((item, index) => {
                optExpMsg += `${index+1} способ - ${item}; `
                });
                alert(`Способы доп. заработка: ${optExpMsg}`);
                
                break; //если все верно и юзер ввел строку, выходим из цикла
            }
            alert('Вы ввели не строку, попробуйте еще раз!');
            //console.log('Вы ввели не строку, попробуйте еще раз!');
        }
    },
}


    for (let key in appData) {
          console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
        }
