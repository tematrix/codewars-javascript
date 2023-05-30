/*
DESCRIPTION:
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 
The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives


ПЕРЕВОД:
Нам нужна помощь в сложении больших чисел.

Напишите функцию, которая возвращает сумму двух чисел. 
Входные числа представлены строками, а функция должна возвращать строку.

Пример:
add("123", "321"); -> "444"
add("11", "99"); -> "110"

Примечания:
Входные числа большие.
Вход - строка, содержащая только цифры.
Числа положительные.
*/

function add(a, b) {
    let result = '', over = 0, d = (x, l) => l >= 0 ? parseInt(x[l]) : 0;
    
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
      const sum = d(a, i) + d(b, j) + over;
      
      if (sum > 9) {
        result = (sum - 10) + result;
        over = 1;
      } else {
        result = sum + result;
        over = 0;
      }
    }
    
    if (over > 0) {result = over + result;}
    
    return result;
}

console.log(add('123', '321'));
console.log(add('11','99'));