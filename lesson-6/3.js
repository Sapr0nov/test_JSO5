/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

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

const every = function(arr, func) {
    validateArray(arr);
    validateFunction(func);
    const arrLength = arr.length;

    for (let i=0; i < arrLength; i++) {
        if (!func(arr[i],i,arr)) {

            return false;
        }
    }

    return true;
}


const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
