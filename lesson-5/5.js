/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
function validateNumber(n) {
    if (typeof n !== 'number') {
        throw new Error('The argument is not a Number.');
    }
}

function isPositive(num) {
    validateNumber(num);
    const result = Boolean( num > 0 ); 

    return result;
}

isPositive(-3); // false
isPositive(3); // true

exports.isPositive = isPositive;
