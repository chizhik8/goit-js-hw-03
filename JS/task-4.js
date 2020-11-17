'use strict';

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// у 4-ій так само 
// (не треба шукати масив, якщо достатньо перебрати об"єкт)

const countTotalSalary = function (employees) {
    let totalSalary = 0;
  for (let salary in employees) {
    totalSalary += employees[salary];
  };
    return totalSalary;

};


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400