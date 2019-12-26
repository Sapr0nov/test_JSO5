/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function validateNumbers(args) {
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new Error(`One from parameters is not a Number. ${arg}`);
        }  
    }
}

function f() {
    validateNumbers(arguments);
    let result = 0;
    
    for (const arg of arguments) {
        result += arg;
    }

    return result;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
