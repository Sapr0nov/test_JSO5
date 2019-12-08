/* У вас есть массив с элементами в виде положительных чисел. найдите сумму таких элементов массива.
Использовать встроенные методы массивов - нельзя */

const array = [2, -1, -3, 15, 0 ,4];
// [6,5,4,3,2,1]

function calcArr(array) {
    let i = sum = 0;

    for (i; true; i++) {
        if (array[i]!==undefined) {
            if (array[i]>0) {
                sum += array[i];
            }
        } else break;
    }
    return sum;
}
console.log(calcArr(array));