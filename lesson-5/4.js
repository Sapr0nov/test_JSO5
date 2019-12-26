/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение
function validateNumber(n) {
    if (typeof n !== 'number') {
        throw new Error('The argument is not a Number.');
    }
}

function validateInterval(param,start,stop) {
    if (param < start || param > stop) {
            throw new Error(`Argument [${param}] is not in interval from ${start} to ${stop}`);
    }  
}


function f(num) {
    validateNumber(num);
    validateInterval(num,1,7);
    const days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    num--;
    const result = days[num];

    return result;
}

f(1); // Воскресенье
f(4); // Среда

exports.f = f;
