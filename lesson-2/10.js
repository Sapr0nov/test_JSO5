/* С помощью цикла for и оператора if выведите на экран столбец элементов,
которые больше 3-х, но меньше 10.
Использовать встроенные методы массивов - нельзя */

const arr = [2, 5, 9, 15, 0 ,4];
// [6,5,4,3,2,1]

function showArr(array) {
    for (let i=0;i<arr.length;i++) {
        if (array[i]>3 && array[i]<10) {
            console.log(array[i]);
        }
    }
}
showArr(arr);