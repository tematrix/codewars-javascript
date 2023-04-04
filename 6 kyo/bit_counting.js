/*
DESCRIPTION:
Write a function that takes an integer as input, and returns the number of bits 
that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


ПЕРЕВОД:
Напишите функцию, которая принимает целое число в качестве входных данных и возвращает количество битов, 
равных единице в двоичном представлении этого числа. Вы можете гарантировать, что входные данные неотрицательны.

Пример: Двоичное представление 1234 равно 10011010010, поэтому в этом случае функция должна возвращать 5
*/

var countBits = function(n) {
    return n == 0 ? 0 : n.toString(2).split('').reduce((s, c) => Number(s) + Number(c));
};

console.log(countBits(1234));