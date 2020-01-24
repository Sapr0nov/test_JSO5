'use strict'
/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение
const  validateNotArray = function(n,text) {
    if (Array.isArray(n)) {
        throw new Error(`The argument ${n} is a Array. (${text}) Must be object.`);
    }
}
const  validateFunction = function(n,text) {
    if (typeof n !== 'function') {
        throw new Error(`The argument ${n} (${text}) is not a Function.`);
    }
}
const  validateObject = function(n) {
    if  (typeof n !== 'object'){
        throw new Error(`The argument ${n} (${text}) is not a Object.`);
    }
}

const bind = function(func, thisObj, ...rest) {
    validateFunction(func,'finction bind, first argument');
    validateNotArray(thisObj,'finction bind, second argument'); 
    validateObject(thisObj,'finction bind, second argument');

    return ()=> func.apply(thisObj, rest);
}

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;
