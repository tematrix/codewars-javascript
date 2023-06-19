/*
DESCRIPTION:
Complete the function that accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2


ПЕРЕВОД:
Выполните функцию, которая принимает два целочисленных массива одинаковой длины
сравнивает значение каждого члена одного массива с соответствующим членом другого массива
возводит в квадрат разность абсолютных значений между этими двумя значениями
и возвращает среднее значение этой квадратичной разности абсолютных значений между каждой парой членов.

Примеры
[1, 2, 3], [4, 5, 6] --> 9, так как (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2] --> 16,5, потому что (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1] --> 1, потому что (1 + 1) / 2
*/

const solution = (firstArray, secondArray) => {
    return firstArray.reduce((s, e, i) => s + Math.pow(Math.abs(e - secondArray[i]), 2), 0) / firstArray.length;  
};

console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
console.log(solution([-1, 0], [0, -1]));