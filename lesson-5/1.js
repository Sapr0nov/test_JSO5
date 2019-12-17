/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function validateNumber(n) {
    if (typeof n !== 'number') {
        throw new Error('The argument is not a Number.');
    }
}

function f(num) {
    validateNumber(num);
    const result = num ** 3;

    return result;
}

console.log(f(2)); // 8

exports.f = f;
