/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
function validateArray(n) {
    if (!Array.isArray(n)) {
        throw new Error('The argument is not a Array.');
    }
}
function validateFunction(n) {
    if (typeof n !== 'function') {
        throw new Error('The argument is not a Function.');
    }
}

function some(arr, func) {
    validateArray(arr);
    validateFunction(func);
    const arrLength = arr.length;

    for (let i=0; i < arrLength; i++) {
        if (func(arr[i],i,arr)) {

            return true;
        }
    }

    return false;
}


const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
