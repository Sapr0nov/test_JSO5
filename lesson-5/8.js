/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
function validateArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The argument is not an Array.');
    }
}
function validateArrayNull(arr) {
    if (arr.length === 0) {
        throw new Error('The argument less than 0.');
    }
}

function f(arr) {
    validateArray(arr);
    validateArrayNull(arr);
    let result = arr.pop();

    if (arr.length > 0) {
        f(arr);
    }

    console.log(result);
}


f([1, 2, 3]);
// 1
// 2
// 3


exports.f = f;
