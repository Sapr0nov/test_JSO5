/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
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

function isEven(num) {
    validateNumber(num);
    const result = num%2 === 0; 

    return result;
}

isEven(3); // false
isEven(4); // true

exports.isEven = isEven;
