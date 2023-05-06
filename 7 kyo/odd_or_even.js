/*
DESCRIPTION:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"


ПЕРЕВОД:
Дан список целых чисел. Определите, является ли сумма его элементов четной или нечетной.

Верните строку "even" (четная) или "odd" (нечетная).

Если входной массив пустой, то его нужно считать равным [0] (содержит один элемент равный нулю).

Примеры:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

function oddOrEven(array) {
    if (!array) {return 'even';}
    let sum = 0;
    for (let e of array) {
      sum += e;
    }
    return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));