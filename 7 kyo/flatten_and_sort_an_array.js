/*
DESCRIPTION:
Given a two-dimensional array of integers, return the flattened version 
of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


ПЕРЕВОД:
Дан двухмерный массив целых чисел. Необходимо вернуть "сплющенную" (одномерную) версию массива, 
содержащую все целые числа в отсортированном (возрастающем) порядке.

Пример:
Дан массив [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]. Ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

const flattenAndSort = (a) => a.flat().sort((a,b) => a - b);

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));