'use strict';

const Transaction = require("./transication.js");
const DB = require("./DB.js");

const db = new DB();
const transaction = new Transaction();

const account01 = {
    name: "Pitter Pen", 
    age: 23, 
    cvs: String(Math.floor(100 + Math.random() * 899)), 
    funds: 1500 
  };
  const account02 = {
    name: "Jane Oster", 
    age: 18, 
    cvs: String(Math.floor(100 + Math.random() * 899)), 
    funds: 100 
  };

const accountIDfrom = db.create(account01); // предварительные данные (первый лицевой счет)
const accountIDto = db.create(account02);// предварительные данные (второй лицевой счет)
const amount = 300; // сумма перевода
const percent = 0.05; // коммисия за перевод 5%
let keyFrom, keyTo; // служебные переменные для 1го и второго счета. (Секретный ключ для работы с "замороженными" счетами)

const scenario = [
    {
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {
            store.set( '' + this.index + accountIDfrom, Object.assign({},db.read(accountIDfrom)) );
            store.set( '' + this.index + accountIDto,  Object.assign({},db.read(accountIDto)) );

            if (db.read(accountIDfrom).funds < amount) {
                throw new Error (`insufficient funds`);
            }
  
            keyFrom =  db.freeze(accountIDfrom);
            keyTo =  db.freeze(accountIDto);
            
            return db.readAll();
        },
        async restore(store, logs) { 
            db.update( accountIDfrom,store.get( '' + this.index + accountIDfrom, keyFrom.id) );
            db.update( accountIDto,store.get( '' + this.index + accountIDto, keyTo.id) );
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);

            return db.readAll();
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            store.set( '' + this.index + accountIDfrom, Object.assign({},db.read(accountIDfrom)) );
            store.set( '' + this.index + accountIDto,  Object.assign({},db.read(accountIDto)) );

            const newFundsFrom = db.read(accountIDfrom).funds - amount;
            const newFundsTo = db.read(accountIDto).funds + amount;
            db.update( accountIDfrom, {funds:  newFundsFrom}, keyFrom.id );
            db.update( accountIDto, {funds:  newFundsTo}, keyTo.id );
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
//            throw new Error('test error');

            return db.readAll(); //return logs
        },
        async restore(store, logs) {
            // Логика отката шага
            db.update( accountIDfrom,store.get( '' + this.index + accountIDfrom, keyFrom.id) );
            db.update( accountIDto,store.get( '' + this.index + accountIDto, keyTo.id) );
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
//            throw new Error('test restore error');

            return db.readAll();
        },
    },
    {
        index: 3,
        meta: {
            title: 'Withdrawal of transfer fee.',
            description: 'Takes off funds from source account and unfreezes it.',
        },
        async call(store, logs) {
            store.set( '' + this.index + accountIDfrom, Object.assign({},db.read(accountIDfrom)) );
            store.set( '' + this.index + accountIDto,  Object.assign({},db.read(accountIDto)) );

            const newFundsFrom = db.read(accountIDfrom).funds - amount * percent;
            const newFundsTo = db.read(accountIDto).funds + amount;
            db.update(accountIDfrom, {funds:  newFundsFrom}, keyFrom.id);
            db.update(accountIDto, {funds:  newFundsTo}, keyTo.id);
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
//           throw new Error('test');

            return db.readAll(); //return logs
        },
        async restore(store, logs) {
            // Логика отката шага
            db.update(accountIDfrom,store.get( '' + this.index + accountIDfrom), keyFrom.id);
            db.update(accountIDto,store.get( '' + this.index + accountIDto), keyTo.id);
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
       
            return db.readAll();
        },
    }
];





(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
        console.log(store);  
        console.log(logs);   
        console.log(status); 
    } catch (error) {
 
        console.log(error);
    }

 //   console.log(db.readAll());
})();

