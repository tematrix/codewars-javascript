/*
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.


ПЕРЕВОД:
В массиве есть некоторые числа. Все числа равны, кроме одного. Попробуйте найти его!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

Гарантируется, что в массиве есть как минимум 3 числа.

Тесты содержат очень большие массивы, поэтому учитывайте производительность.
*/

function findUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (i == arr.length-1) {return arr[arr.length-1];}
        if (arr[i] != arr[i-1]) {
            return arr[i] != arr[i+1] ? arr[i] : arr[i-1];
        }
    }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));