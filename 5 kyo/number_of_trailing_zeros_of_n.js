/*
DESCRIPTION:
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


ПЕРЕВОД:
Напишите программу, которая вычислит количество нулей в факториале заданного числа.

N! = 1 * 2 * 3 * ... * N

Будьте внимательны 1000! имеет 2568 цифр...

Примеры
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 задвоенный ноль

zeros(12) = 2
# 12! = 479001600 --> 2 прицепных нуля

Подсказка: Вы не должны вычислять факториал. Найдите другой способ найти количество нулей.
*/

function zeros (n) {
    let count = 0;
    
    while (n > 0) {
      n = Math.floor(n / 5);
      count += n;
    }
    
    return count;
}

console.log(zeros(6));
console.log(zeros(12));