/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function validateNumbers(args) {
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new Error(`One from parameters is not a Number. [${arg}]`);
        }  
    }
}

function validateNotZero(param) {
    if (!param) {
            throw new Error(`One from parameters is not a Zero. [${param}]`);
    }  
}


function f(a, b, c) {
    validateNumbers(arguments);
    validateNotZero(c);
    const result = ( a - b ) / c;

    return result;
}

console.log(f(9, 3 ,2)); // 3

exports.f = f;
