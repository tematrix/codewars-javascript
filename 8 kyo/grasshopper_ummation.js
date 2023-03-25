/*
DESCRIPTION:
Summation
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


ПЕРЕВОД:
Суммирование
Напишите программу, которая находит суммирование каждого числа от 1 до num. 
Число всегда будет целым положительным числом, большим 0.

Например (Ввод -> Вывод):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
    if (num === 1) {
      return 1;
    } else {
      return num + summation(--num);
    }
};

console.log(summation(2));
console.log(summation(8));