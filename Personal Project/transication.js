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
                const step = current = scenario[key];
                let result = await step.call(this.store, this.logs);

                this.store.set(step.index, result);
                this.#addLog({ ...step, result });
            }
            this.status ='success';
        
        } catch (error) {
            this.#addLog({ ...current, error });
            this.rollback(scenario, current.index);
        }

    }


    async rollback(scenario, index) {
        const reverse = [...this.store].reverse();
        const reverseStorage = new Map(reverse);
        let current;

        try {
            for (let [key] of reverseStorage) {
                const rollbackScenario = current = scenario.find((el) => el.index === key);
                const result = await rollbackScenario.restore(this.store, this.logs);
                this.store.delete(rollbackScenario.index);
                this.#addLog({ ...rollbackScenario, result });

            }

            this.status = 'rollback';

        } catch (error) {
            this.#addLog({ ...current, error });
            this.status = 'failed';
        }


    }
}

module.exports = Transaction;