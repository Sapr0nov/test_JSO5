'use strict'
/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
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

  
  readAll() {
    this.validateArguments(arguments);

    return  [...this.#data.values()];
  }

  find(query) {
    this.validateObject(query);
    const result = this.#data;

    Object.keys(query).forEach((key) => {
     
      if (typeof(query[key]) === 'object') {
      
        const min = (query[key].min) ? query[key].min : -Infinity;
        const max = (query[key].max) ? query[key].max : Infinity;

        result.forEach((element,index)=> {
          if (!element[key] || element[key] < min || (element[key] > max)) {
            result.delete(index);
          }
        })
      }
      
      else
      
      {
        result.forEach((element,index)=> {
          if (element[key] !== query[key]) {
            result.delete(index);
          }
        })
      }

    })

    return   [...result.values()];;
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
const query = {
  country: "ua",
  age: {
    min: 21
  },
  salary: {
    min: 300,
    max: 600
  }
};

const customers = db.find(query); // массив пользователей