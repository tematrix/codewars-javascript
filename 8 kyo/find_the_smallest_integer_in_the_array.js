/*
DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


ПЕРЕВОД:
Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

Например:
Учитывая [34, 15, 88, 2], ваше решение вернет 2
Учитывая [34, -345, -1, 100], ваше решение вернет -345
Вы можете предположить, для целей этого ката, что предоставленный массив не будет пустым.
*/

function  findSmallestInt(args) {
    let small = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < small) {
          small = args[i]
        }
    }
    return small;
}

console.log(findSmallestInt([34,15,88,2]));
console.log(findSmallestInt([34,-345,-1,100]));