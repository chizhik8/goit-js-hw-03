'use strict';

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате 
//         ключ: значение, используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  
};

const updateProperties = function (usersData, usersKey, usersValue) {
    const usersDataUpdate = Object.keys(usersData);
        for (const key of usersDataUpdate) {
            if (key === usersKey) { usersData[usersKey] = usersValue }
            else { usersData[usersKey] = usersValue; };
    }; 
    return usersData; 
};

// console.log(updateProperties(user, 'mood', 'happy'));
// console.log(updateProperties(user, 'hobby', 'skydiving'));
// console.log(updateProperties(user, 'premium', !user.premium));

console.log(user);


