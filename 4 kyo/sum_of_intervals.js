/*
DESCRIPTION:
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, 
and returns the sum of all the interval lengths. 
Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, 
we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030

Tests with large intervals
Your algorithm should be able to handle large intervals. 
All tested intervals are subsets of the range [-1000000000, 1000000000].


ПЕРЕВОД:
Напишите функцию под названием sumIntervals/sum_intervals, 
которая принимает массив интервалов и возвращает сумму длин всех интервалов. 
Пересекающиеся интервалы должны учитываться только один раз.

Интервалы
Интервалы представлены парой целых чисел в форме массива. 
Первое значение интервала всегда будет меньше второго значения. 
Пример интервала: [1, 5] - интервал от 1 до 5. Длина этого интервала равна 4.

Пересекающиеся интервалы
Список, содержащий пересекающиеся интервалы:

[
[1, 4],
[7, 10],
[3, 5]
]

Сумма длин этих интервалов равна 7. Поскольку [1, 4] и [3, 5] пересекаются, 
мы можем рассматривать интервал как [1, 5], у которого длина равна 4.
*/