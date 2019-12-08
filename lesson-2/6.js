/* Написать код который посчитает сумму всех элементов в массиве.
Использовать встроенные методы массивов - нельзя */

const array = [1, 2, 3, 4];

function sumArray(array) {
    let i = 0;
    let sum = 0;
    while (array[i]!==undefined) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }else { throw 'Error. Parameter is not Array OR One element of array is NAN'; }
        i++;
    }
    return sum;
}
console.log(sumArray(array));