/*
DESCRIPTION:
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.


ПЕРЕВОД:
Принимая целое число n (n >= 0) и цифру d (0 <= d <= 9) в качестве целого числа, 
возводим в квадрат все числа k (0 <= k <= n) от 0 до n, 
считаем количество цифр d, используемых при записи всех k**2.

Реализуйте функцию, принимающую n и d в качестве параметров и возвращающую это количество.

Примеры:
n = 10, d = 1
k*k равны 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
Мы используем цифру 1 в: 1, 16, 81, 100. Всего количество равно 4.

Функция, когда n = 25 и d = 1 в качестве аргумента, должна возвращать 11, 
так как k*k, содержащие цифру 1, равны:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
Таким образом, для квадратов чисел от 0 до 25 есть 11 цифр 1.

Обратите внимание, что в числе 121 цифра 1 встречается дважды.
*/

function nbDig(n, d) {
    let a = '', s = 0;
    for (let i = 0; i <= n; i++) {
      a += String(i**2);
    }
    for (let j = 0; j < a.length; j++) {
      if (+a[j] == d) {
        s++;
      }
    }
    return s;
}

console.log(nbDig(10, 1));
console.log(nbDig(25, 1));