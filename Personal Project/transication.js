'use strict';

class Transaction {
    store = new Map();
    logs = [];
    status = null;

    #addLog = (data) => {
        const { index, meta, result, error } = data;
  
        this.logs.push({
            index,
            meta,
            stepResult: result || null,
            error: error || null
        })
    }

    async dispatch(scenario) {
        let current;

        try {
            for (let key in scenario) {
                current = scenario[key];
                let result = await current.call(this.store, this.logs);

                this.#addLog({ ...current, result });
            }
            this.status ='success';
        
        } catch (error) {
            this.#addLog({ ...current, error });
            this.rollback(scenario, current.index);
            this.status = 'rollback';
        }

    }


    async rollback(scenario, index) {
        let current;
        
        try {          
            while (scenario.length > 0 ) { 
                current = scenario.pop();
                if ( current.index > index) continue; 

                await current.restore(this.store, this.logs);
            }

        } catch (error) {
            this.#addLog({ ...current, error });
            this.status = 'failed';
        }


    }
}

module.exports = Transaction;