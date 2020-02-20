'use strict'
/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение
class DB {
    #data = new Map;
    #increment_id = 0;

    create(obj) {
        this.validateObject(obj);
        this.#data.set(++this.#increment_id, obj)
   
        return this.#increment_id;
    }

    read(id) {
        this.validateId(id);
        const result = this.#data.get(id);

        if (!result) {
            return null
        }

        result.id = id;
        return result;
    } 

    readAll() {
        this.validateArguments(arguments);

        return  [...this.#data.values()];
    }

    update(id, new_params) {
        this.validateId(id);
        this.validateObject(new_params);

        const obj = this.#data.get(id);
        Object.keys(new_params).forEach((key) => {
            if (obj.hasOwnProperty(key)) {
                   console.log(`Property ${key} added`);
                }else{
                console.log(`Property ${key} updated`);
                }
            obj[key] = new_params[key];
        })

        return id;
    }

    delete(id) {
        this.validateId(id);

        return this.#data.delete(id)
    }

    /* validate functions */
    
    validateObject(obj) {
        if (!typeof obj === 'object') {
            throw new Error(`One from parameters is not a Object.`);
        }
    }

    validateId(num) {
        if (!['string','number'].includes(typeof num) ) {
            throw new Error(`ID parameter is not valid`);
        }  

        if (!this.#data.get(num)) {
            throw new Error(`There are not any element with this ID`);
        }
    }
    
    validateArguments(args) {
        if (args.length > 0) {
            throw new Error(`ReadAll don't need to params, May be you mean read(id)?`);
        }
    }
}

// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
  };
    
const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true

