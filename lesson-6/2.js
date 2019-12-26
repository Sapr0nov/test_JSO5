/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const validateArray = function(n) {
    if (!Array.isArray(n)) {
        throw new Error('The argument is not a Array.');
    }
}
const validateFunction = function(n) {
    if (typeof n !== 'function') {
        throw new Error('The argument is not a Function.');
    }
}

const filter = function(arr, func) {
    validateArray(arr);
    validateFunction(func);
    const arrLength = arr.length;
    const result = [];

    for (let i=0; i < arrLength; i++) {
        if (func(arr[i],i,arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
