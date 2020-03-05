'use strict'
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
        this.verified = (obj.verified) ? true : false;
        this.#items.push(obj);
    }
    *[Symbol.iterator]() {
        for (let i=0; i<=this.#items.length; i++) {
            if (this.#items[i] && this.#items[i].verified) {

                yield this.#items[i];;
            }
        }
     };
};


// Пример использования
const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }