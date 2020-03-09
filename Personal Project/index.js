'use strict';

const Transaction = require("./transication.js");
const DB = require("./DB.js");

const db = new DB();
const transaction = new Transaction();

const account01 = {
    name: "Pitter Pen", 
    age: 23, 
    cvs: String(Math.floor(Math.random(100) * 999)), 
    funds: 1500 
  };
  const account02 = {
    name: "Jane Oster", 
    age: 18, 
    cvs: String(Math.floor(Math.random(100) * 999)), 
    funds: 100 
  };

const accountIDfrom = db.create(account01);
const accountIDto = db.create(account02);
const amount = 300;
let keyFrom, keyTo;

const scenario = [
    {
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {
            if (db.read(accountIDfrom).funds < amount) {
                throw new Error (`insufficient funds`);
            }

            store.set(accountIDfrom, db.read(accountIDfrom));
            store.set(accountIDto, db.read(accountIDto));
            keyFrom =  db.freeze(accountIDfrom);
            keyTo =  db.freeze(accountIDto);
            
            return true; // return logs
        },
        async restore(store, logs) { 
            store.delete(accountIDfrom, db.read(accountIDfrom));
            store.delete(accountIDto, db.read(accountIDto));
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
            return false; // return logs
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            store.set(accountIDfrom, db.read(accountIDfrom));
            store.set(accountIDto, db.read(accountIDto));

            const newFundsFrom = db.read(accountIDfrom).funds - amount;
            const newFundsTo = db.read(accountIDto).funds + amount;
            db.update(accountIDfrom, {funds:  newFundsFrom}, keyFrom.id);
            db.update(accountIDto, {funds:  newFundsTo}, keyTo.id);
            db.unfreeze(accountIDfrom);
            db.unfreeze(accountIDto);
            console.log(db.readAll());

            return true; //return logs
        },
        async restore(store, logs) {
            // Логика отката шага
            let b = store.size;

            // throw new Error('Error');
            return b;
            //
        },
    }
];





(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
 //       console.log(store);  //log
        console.log(logs);   //log
 //       console.log(status); //log
    } catch (error) {
        // Send email about broken transaction

        console.log(error);
    }
})();