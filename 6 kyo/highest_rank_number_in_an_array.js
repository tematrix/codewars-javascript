/*
DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


ПЕРЕВОД:
Завершите метод, который возвращает число, которое чаще всего встречается в данном массиве.
Если есть несколько чисел с одинаковой наибольшей частотой, верните наибольшее из них.

Примечание: пустые массивы не будут переданы.

Примеры:
[12, 10, 8, 12, 7, 6, 4, 10, 12] --> 12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10] --> 12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] --> 3
*/

function highestRank(arr){
    let o = {};
    for (let e of arr) {o.hasOwnProperty(e) ? o[e]++ : o[e] = 1;}
    
    let a = Object.entries(o),
        b = a.sort((x,y) => y[1] - x[1])
             .filter(i => i[1] === a[0][1])
             .sort((x,y) => y[0] - x[0]);
    
    return Number(b[0][0]);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));