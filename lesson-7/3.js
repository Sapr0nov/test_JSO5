/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
validateNumStrObjArr = function(n){
    if ( !( ['number','object','string'].includes(typeof n) || Array.isArray(n) ) ) {
        throw new Error('The argument is not a Number, Object, String or Array.');
    }
}
validateNumber = function(n) {
    if (typeof n !== 'number') {
        throw new Error('The argument is not a Number.');
    }
}
createArray = function(arg1, arg2) {
    validateNumStrObjArr(arg1);
    validateNumber(arg2);

    return new Array(arg2).fill(arg1);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;