/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение
const  validateArray = function(n) {
    if (!Array.isArray(n)) {
        throw new Error('The argument is not a Array.');
    }
}
const  validateArrayNumber = function(n) {
    if (! (typeof n === 'number' || Array.isArray(n) ) ) {
        throw new Error('The argument is not a Number or Array.');
    }
}


const reducer = function(acc, curr) {
    validateArrayNumber(curr);
    if (Array.isArray(curr) ) {
        return acc.concat(flat(curr));
    }
    return acc.concat(curr);
}

const summer = function (acc, curr) {
    validateArrayNumber(curr);
    const result = acc + curr;

    return result;
}

const flat = function (arr) {
    const pre_result = arr.reduce(reducer, []);
    let result = 0;
    if (pre_result.length > 0) {
      result  = pre_result.reduce(summer);
    }

    return result;
}


const collect = function(array) {
    validateArray(array);
    const result = flat(array);
 
    return result;

}

/* Вариант до рефакторинга */
/*
const collect = function(array) {
    let result = 0;
    validateArray(array);

    const reducer = (prev, curr) => {
        let res = 0;
        validateArrayNumber(prev);
        validateArrayNumber(curr);

        if (Array.isArray(prev)) {
            res = collect(prev); 
        }else{
            res = prev;
        }
        if (Array.isArray(curr)) {
            res += collect(curr); 
        }else{
            res += curr;
        }

        return res;
    }

    if (array.length>1) {
        
        return result = array.reduce(reducer);
    }

    if (array.length===0) {
    
        return result += 0;
    }

    if (Array.isArray(array) ) {

        return result = collect([0, ...array]);
    }else {

        return result = array;
    }
}
*/
const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
