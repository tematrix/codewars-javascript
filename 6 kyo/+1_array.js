/*
DESCRIPTION:
Given an array of integers of any length, 
return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer


ПЕРЕВОД:
Дан массив целых чисел произвольной длины. Необходимо вернуть массив, в котором к значению, 
представленному в исходном массиве, добавлена 1.

Условия:

Массив не может быть пустым.
В массиве могут быть только неотрицательные целые числа, состоящие из одной цифры.
Для недопустимых входных данных вернуть nil (или эквивалент вашего языка программирования).

Примеры:
Допустимые массивы:

[4, 3, 2, 5] должен вернуть [4, 3, 2, 6]
[1, 2, 3, 9] должен вернуть [1, 2, 4, 0]
[9, 9, 9, 9] должен вернуть [1, 0, 0, 0, 0]
[0, 1, 3, 7] должен вернуть [0, 1, 3, 8]
*/

function upArray(arr) {
    if (arr.length === 0 || arr.some(e => e < 0 || e > 9)) {return null;}
    
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== 9) {
        arr[i]++; break;
      } else {
        arr[i] = 0;
        if (i === 0) {
          arr.unshift(1); break;
        }
      }
    }
    
    return arr;
}

console.log(upArray([4, 3, 2, 5]));
console.log(upArray([1, 2, 3, 9]));
console.log(upArray([9, 9, 9, 9]));
console.log(upArray([0, 1, 3, 7]));
console.log(upArray([1, -9]));
console.log(upArray([1, 2, 33]));