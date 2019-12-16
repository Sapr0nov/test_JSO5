/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

Object.defineProperties(person, {
    'rate': {
        writable: true
//      configurable: false
//      enumerable: false
    },
    'salary': {
        configurable: true,
        get: function() {
            const now = new Date()
            const daysinMonth = 33 - new Date(now.getFullYear(), now.getMonth(), 33).getDate();

            if ( (daysinMonth - now.getMonth()) > 20) {
        
                return 'good salary'}
            else {
        
                return 'bad salary';
            }
        }
    }
});

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;
