/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение
const validateObject = function(obj) {
    if (typeof obj !== 'object') {
        throw new Error(`It's not Object: ${obj}`);
    }
}

const shallowMerge = function(user, userData) {
    validateObject(user);
    validateObject(userData);
    let result = {};

    const keysUserData = Object.getOwnPropertyNames(userData);
    keysUserData.forEach(key => 
    {
        Object.defineProperty(result, key, 
        {
            value: userData[key],
            configurable: Object.getOwnPropertyDescriptor(userData, key).configurable,
            writable: Object.getOwnPropertyDescriptor(userData, key).writable,
            enumerable: Object.getOwnPropertyDescriptor(userData, key).enumerable
        });
    });

    const keysUser = Object.getOwnPropertyNames(user);
    keysUser.forEach(key => 
    {
        if (result[key]) {

            return;
        }
            Object.defineProperty(result, key, 
            {
                value: user[key],
                configurable: Object.getOwnPropertyDescriptor(user, key).configurable,
                writable: Object.getOwnPropertyDescriptor(user, key).writable,
                enumerable: Object.getOwnPropertyDescriptor(user, key).enumerable
            });
    });

    return result;
}


const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
