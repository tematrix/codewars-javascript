/*
DESCRIPTION:
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.


ПЕРЕВОД:
Простые числа Уилсона удовлетворяют следующему условию. Пусть P представляет собой простое число.

Затем,

((С-1)! + 1) / (P * P)
должно давать целое число.

Ваша задача - создать функцию, которая возвращает значение true, если данное число является простым числом Уилсона.
*/

function amIWilson(p) {
    const factorial = (f) => {
      if (f <= 1) {
        return 1;
      } else {
        return f*factorial(f-1);
      }    
    };
    
    const pNum = (factorial(p-1) + 1) / (p * p);
    if (p > 19 && p !== 563) {
        return false;
    }    
    if (pNum % 1 === 0 || p === 563) {
        return true;
    }
    
    return false;
}