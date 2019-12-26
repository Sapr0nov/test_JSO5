/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */
const  validateArray = function(n) {
    if (!Array.isArray(n)) {
        throw new Error('The argument is not a Array.');
    }
}
const  isString = function(n) {
    return  (typeof n === 'string'); 
}

const inspect = function(array) {
    validateArray(array);
    const pre_result = array.filter(element => isString(element) );
    const result = pre_result.map(element => {
        
        return element.length 
    });

    return result;
}

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

// Решение

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
