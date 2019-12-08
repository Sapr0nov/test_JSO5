/* Отсортируйте массив по убыванию
Использовать встроенные методы массивов - нельзя */

const arr = [1, 2, 3, 4, 5 ,6];
// [6,5,4,3,2,1]

function sortArr(array) {
    let i = 1;
    let tmpEl = 0;
    let endSort = false;
    while (!endSort) {
        i=1;
        endSort = true;
        while (array[i]!==undefined) {
            if (array[i] > array[i-1]) {
                tmpEl = array[i-1];
                array[i-1] = array[i];
                array[i] = tmpEl;
                endSort = false;
            }
            i++;
        }
    }
    return array;
}
console.log(sortArr(arr));