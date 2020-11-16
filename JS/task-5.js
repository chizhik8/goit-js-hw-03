'use strict';

// Напиши функцию getAllPropValues(arr, prop), которая получает 
// массив объектов и имя свойства.Возвращает массив значений определенного 
// свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];



const getAllPropValues = function (arr, prop) {
    let allPropValues = [];
    for (const obj of arr) {
        if (obj.name === obj[prop]) {
            allPropValues.push(obj.name);
        }
        else if (obj.quantity === obj[prop]) {
            allPropValues.push(obj.quantity);
        }
        else if (obj.price === obj[prop]) {
            allPropValues.push(obj.price);
        }
        else { allPropValues};
    };
    return allPropValues;
};



console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []