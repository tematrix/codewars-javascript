/*
DESCRIPTION:
JavaScript Arrays support a filter function (starting in JavaScript 1.6). 
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]


ПЕРЕВОД:
В JavaScript для массивов доступна функция filter (начиная с JavaScript 1.6).
Используйте функциональность filter для выполнения данной функции.

Решение будет работать следующим образом:

getEvenNumbers([2,4,5,6]) // должно быть равно [2,4,6]
*/

function getEvenNumbers(numbersArray){
    return numbersArray.filter(e => e % 2 === 0);
}

console.log(getEvenNumbers([2,4,5,6]));