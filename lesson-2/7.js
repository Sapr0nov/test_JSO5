/* Написать код который посчитает сумму всех парных элементов в массиве.
Использовать встроенные методы массивов - нельзя */

const array = [1, 2, 3, 4];

function sumArray(array) {
    let sum = 0;
    for (let i=0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            throw 'Error. Parameter is not Array OR One element of array is NAN'; 
        }
        if (!(array[i]%2)) {  // Под парным элементом понимается элемент, значение! которого является четным
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumArray(array));