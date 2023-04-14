/*
DESCRIPTION:
You are given an array. Complete the function that returns the number of 
ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.


ПЕРЕВОД:
Дан массив. Необходимо завершить функцию, которая возвращает количество 
всех элементов в массиве, включая любые вложенные массивы.

Примеры:
[] --> 0
[1, 2, 3] --> 3
["x", "y", ["z"]] --> 4
[1, 2, [3, 4, [5]]] --> 7

Входной параметр всегда будет массивом.
*/

function deepCount(a){
    let c = 0;
    for (let e of a) {
        if (Array.isArray(e)) {
            c += 1 + deepCount(e);
        } else {
            c++;
        }
    }
    return c;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));