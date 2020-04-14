"use strict";

let money,time;

function start() {
     money = +prompt( "Ваш бюджет на месяц?", "");
     time = prompt( "Введите дату в формате YYYY-MM-DD" );

     while(isNaN(money) || money == "" || money == null) {
          money = +prompt( "Ваш бюджет на месяц?", "");   
     }
}
start();


let appData = {
    budgetData : money,
    expenses:{},
    timeData : time,
    optionalExpenses : {},
    income : [],
    saving : true,
    chooseExpenses : function() {
          for (let i = 0; i < 2; i++){
                    let question = prompt("Введите обязательную статью расходов в этом месяце",""),
                    moneyQuestion = +prompt("Во сколько обойдется?","");
               if (typeof(question)==='string' && typeof(question) != null && typeof(moneyQuestion) != null 
                    && question != "" && moneyQuestion != ""
                    && question.length<50) {
                    appData.expenses[question]=moneyQuestion;
               } else {
                    i=i-1;
               }   
          }
     },
     detectDayBudget: function() {
          appData.moneyPerDay = +(appData.budgetData/30).toFixed();
          alert ("Бюджет на 1 день"+appData.moneyPerDay);      
     },
     detectLevel: function() {
          if (appData.moneyPerDay<100) {
               console.log("Маленький уровень достатка");
           } else if (appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
               console.log("Средний уровень достатка");
           } else if (appData.moneyPerDay>2000) {
               console.log("Высокий уровень достатка");
           } else {
                console.log("Ошибка");
           }
     },
     checkSavings : function() {
          if (appData.saving==true) {
               let save = +prompt("Какова сумма накоплений","");
               let procent = +prompt("Какой проценит","");
               appData.monthIncome = save/100/12*procent;
               alert("Доход в месц с дипозита" + appData.monthIncome);
          }
     },
     chooseOptExpenses : function() {
          for (let i=0;i<3;i++){
               appData.optionalExpenses[i]=prompt("Статья необязательных расходов");
               console.log(i);
          }
     },
     chooseIncome : function() {
          
          for (let i=0;i<1;i++){
               let items = prompt ("Что принесет доп доход (через запятую)","");
               if (typeof(items)==='string' && items!="" && items!=null){
                    appData.income = items.split(', ');
                    appData.income.push(prompt("Что-тог еще"));
                    appData.income.sort();
               } else {
                    i = i-1;
               }
          }

          appData.income.forEach(function(items,i) {
               console.log(i+" Способы доп. заработка: " + items+".");
          })          
     }
};

for (let i in appData) {
     console.log("Наша программа включает в себя данные:" + i);
}


