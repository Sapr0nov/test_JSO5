'use strict'
const {performance} = require('perf_hooks');
/** 
# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
*/

// Решение
  
class Customers {
    #items = [];

    add(obj) {
        if (!obj.name) {
            throw new Error('You need to pass an object with the attribute `name`');
        }
        this.#items.push(obj);
    }
    *[Symbol.iterator]() {
        // 9558
/*
        const filtered = this.#items.filter( item => item.verified);
        const length = filtered.length;
        for (let i = 0; i <= length; i++) {
            yield filtered[i];
        }
 */
        // 5838
        for (let i = 0; i <= this.#items.length; i++) {
            if (this.#items[i] && this.#items[i].verified) {

                yield this.#items[i];
            }
        }
        
     };
};


// Пример использования
const customers = new Customers();
var time = performance.now();

for (let i=0; i<4000000; i++) {

    customers.add({name: 'Alex'});
    customers.add({name: 'Victor'});
    customers.add({name: 'Marcus'});
    customers.add({name: 'Andrii', verified: true});
    customers.add({name: 'Marco', verified: true});
    customers.add({name: 'Oliver'});
    customers.add({name: 'Lisa', verified: true});
    customers.add({name: 'John'});
    customers.add({name: 'Ivan', verified: true});
}

for (const customer of customers) {
    customer;
//    console.log(customer);
}

// некий код
time = performance.now() - time;
console.log(time);
// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }