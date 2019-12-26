/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

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

const forEach = function(arr, func) {
    validateArray(arr);
    validateFunction(func);
    const arrLength = arr.length;

    for (let i=0; i < arrLength; i++) {
        func(arr[i], i, arr);
    }
    return void 0;
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
