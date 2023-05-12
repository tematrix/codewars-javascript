/*
DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns 
the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.


ПЕРЕВОД:
Напишите функцию с названием sumDigits, которая принимает число в качестве входного 
параметра и возвращает сумму абсолютных значений каждой десятичной цифры числа.

Например: (Входные данные --> Выходные данные)

10 --> 1
99 --> 18
-32 --> 5

Предполагается, что все числа во входных данных будут целыми значениями.
*/

function sumDigits(number) {
    let n = String(number).match(/\d+/)[0].split('');
    return n.reduce((s,e) => +e+s, 0);
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));