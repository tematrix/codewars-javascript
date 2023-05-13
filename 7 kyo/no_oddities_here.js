/*
DESCRIPTION:
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.


ПЕРЕВОД:
Напишите небольшую функцию, которая возвращает значения массива, которые не являются нечетными.

Все значения в массиве будут целыми числами. Верните хорошие значения в том порядке, в котором они даны.
*/

function noOdds(values){
    return values.filter(e => e % 2 === 0);
}

console.log(noOdds([1,2,3,4,5,6,7,8,9]));