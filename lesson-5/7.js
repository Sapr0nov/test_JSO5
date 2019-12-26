/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение
function validateNumber(n) {
    if (typeof n !== 'number') {
        throw new Error('The argument is not a Number.');
    }
}
function validatePositive(n) {
    if (n < 0) {
        throw new Error('The argument less than 0.');
    }
}
function getDivisors(num) {
    validateNumber(num);
    validatePositive(num);
    const result = [];

    for (let i=1; i<=num; i++) {
        if ( num%i === 0 ) {
             result.push(i); 
        }
    }

    return result;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
