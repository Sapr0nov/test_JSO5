'use strict'

class DB {
    #data = new Map;
    #increment_id = 0;
    #freeze = new Set;
    #sessions =new Map;

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
  
    update(id, new_params, key) {
        this.validateId(id);
        this.validateFreeze(id, key);
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
  
    delete(id, key) {
        this.validateId(id);
        this.validateFreeze(id, key);
  
        return this.#data.delete(id)
    }
  
    freeze(id) {
        this.validateId(id);
        this.#freeze.add(id);
        const key = Math.floor(Math.random() * 999);
        this.#sessions.set(id, key);
        return key;
    } 

    unfreeze(id) {
        this.#freeze.delete(id);
        this.#sessions.delete(id);

        return this.#freeze;
    } 
  
    
    readAll() {
      this.validateArguments(arguments);
  
      return  [...this.#data.values()];
    }
  
    /* validate functions */
    validateFreeze(id, key) {

        if ( this.#freeze.has(id) && (this.#sessions.id !== key) ) {
            throw new Error(`You try do something with freezen Object.`);
        }
    }
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

  module.exports = DB;