'use strict'
/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение

const  validateFunctions = function(arr) {
    arr.forEach(func => {
        if (typeof func !== 'function') {
            throw new Error(`The argument ${n} (${typeof n}) is not a Function.`);
        }
    })
}
const  validateUndefined = function(n) {
    if (typeof n === 'undefined') {
        throw new Error(`Function returned undefined.`);
    }
}

const compose = (...rest) => {
    validateFunctions(rest);

    return (arg='') => 
    {
        let result=arg;

        rest.reverse().forEach(func => {
            result = func(result);
            validateUndefined(result);
        })

        return result;
    }
}


const result1 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
)('h');
const result2 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

exports.compose = compose;
