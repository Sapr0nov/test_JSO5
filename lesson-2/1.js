/* Перепишите код, заменив оператор if на тернарный оператор ?
const a = 2;
const b = 1;
let result = null;

if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log(result);
*/

const a = 2;
const b = 1;
let result = null;

(a + b < 4) ? result = true : result = false;

//result = a + b < 4;

console.log(result);