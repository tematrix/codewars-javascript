/*
DESCRIPTION:
Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5


ПЕРЕВОД:
Создайте функцию, которая проверяет, делится ли число n на два числа x И y. 
Все входные данные представляют собой положительные, ненулевые числа.

Примеры:
1) n = 3, x = 1, y = 3 => верно, потому что 3 делится на 1 и 3
2) n = 12, x = 2, y = 6 => верно, потому что 12 делится на 2 и 6
3) n = 100, x = 5, y = 3 => ложно, потому что 100 не делится на 3
4) n = 12, x = 7, y = 5 => ложно, потому что 12 не делится ни на 7, ни на 5
*/

function isDivisible(n, x, y) {
    if (Math.floor(n/x)-(n/x) == 0 && Math.floor(n/y)-(n/y) == 0) {
      return true;
    } else {
      return false;
    }
}

console.log(isDivisible(3,1,3));
console.log(isDivisible(12,2,6));
console.log(isDivisible(100,5,3));
console.log(isDivisible(12,7,5));