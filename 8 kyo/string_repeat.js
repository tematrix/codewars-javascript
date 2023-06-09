/*
DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


ПЕРЕВОД:
Напишите функцию, которая принимает целое число n и строки в качестве параметров 
и возвращает строку из s, повторяющуюся ровно n раз.

Примеры (ввод -> вывод)
6, "I" -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    if (n <= 1) {
      return s;
    } else {
      return s+repeatStr(--n, s);
    }
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));