/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

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

const reduce = function(arr, func, start) {
    validateArray(arr);
    validateFunction(func);
    const arrLength = arr.length;
    let i = 0;
    let result;

    if (arguments.length > 2) {
        result = start;
     }else{
         result = arr[0];
         i = 1;
     };

    for (i; i < arrLength; i++) {
        result = func(result,arr[i],i,arr);
    }

    return result;
}


const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
