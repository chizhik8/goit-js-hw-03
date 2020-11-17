'use strict';

// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и 
// возвращает имя самого продуктивного
// (который выполнил больше всех задач).

// Сотрудники и кол - во выполненых задач содержатся как 
// свойства объекта в формате "имя": "кол-во задач".

// у 3-ій краще замість for використати for in 
// (не помилка, але порада, спрощує виконання задачі)

const findBestEmployee = function(employees) {
    const employeesValues = Object.values(employees);
    const employeesKey = Object.keys(employees);

    let maxLevel = 0;
    let bestEmployee;
    for (let i in employeesValues) {
        if (maxLevel < employeesValues[i]) {
            maxLevel = employeesValues[i];
            bestEmployee = employeesKey[i];
        };  
    };
    return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux