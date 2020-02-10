'use strict'
/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function validateNumber(args) {
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new Error(`One from parameters is not a Number. ${arg}`);
        }  
    }
}

let postpone;
(function() {
    let currDelay = 0;

    postpone = function(start, end, delay) {
        validateNumber(arguments);
        
        const direction = (end - start) / Math.abs(end - start);
        const interval = Math.abs(end-start);
        
        for (let j=0; j<=interval; j++) {
            currDelay = currDelay + delay;
            
            setTimeout(
                function() {
                    console.log(start + j*direction);
                }, 
                currDelay
                );
            }
        }
})();

        
postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
