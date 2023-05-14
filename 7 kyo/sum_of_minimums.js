/*
DESCRIPTION:
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, 
your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.


ПЕРЕВОД:
Дана двумерная (вложенная) матрица (список, массив и т. д.) размером m * n.
Ваша задача - найти сумму минимальных значений в каждой строке.

Например:

[ [ 1, 2, 3, 4, 5 ] # минимальное значение в строке - 1
, [ 5, 6, 7, 8, 9 ] # минимальное значение в строке - 5
, [ 20, 21, 34, 56, 100 ] # минимальное значение в строке - 20
]
Функция должна вернуть 26, потому что сумма минимумов равна 1 + 5 + 20 = 26.

Примечание: Вам всегда будет дан не пустой список, содержащий положительные значения.
*/

function sumOfMinimums(arr) {
    let result = 0;
    for (let a of arr) {
      let min = a[0];
      for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {min = a[i];}
      }
      result += min;
    }
    return result;
}

console.log(sumOfMinimums([[ 1, 2, 3, 4, 5 ],[ 5, 6, 7, 8, 9 ],[ 20, 21, 34, 56, 100 ]]));