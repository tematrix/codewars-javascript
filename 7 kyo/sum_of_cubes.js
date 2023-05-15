/*
DESCRIPTION:
Write a function that takes a positive integer n, 
sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


ПЕРЕВОД:
Напишите функцию, которая принимает положительное целое число n в качестве аргумента, 
суммирует кубы всех чисел от 1 до n (включительно) и возвращает эту сумму.

Предполагается, что ввод n всегда будет положительным целым числом.

Примеры: (ввод --> вывод)

2 --> 9 (сумма кубов 1 и 2 равна 1 + 8)
3 --> 36 (сумма кубов 1, 2 и 3 равна 1 + 8 + 27)
*/

function sumCubes(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i**3;
    }
    return sum;
}

console.log(sumCubes(2));
console.log(sumCubes(3));