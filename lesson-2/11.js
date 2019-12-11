/* У вас есть массив с элементами в виде положительных чисел. найдите сумму таких элементов массива.
Использовать встроенные методы массивов - нельзя */

const array = [2, -1, -3, 15, 0 ,4];
// [6,5,4,3,2,1]

function calcArr(array) {
    let sum = 0;
    for (let i=0;i<array.length;i++) {
        if (array[i]>0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(calcArr(array));