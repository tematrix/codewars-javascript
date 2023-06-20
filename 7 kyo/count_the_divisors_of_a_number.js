/*
DESCRIPTION:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. 
The numbers between parentheses are shown only for you to see which numbers are counted in each case.


ПЕРЕВОД:
Подсчитайте количество делителей целого положительного числа n.

Случайные тесты проводятся до n = 500000.

Примеры (вход --> выход)
4 --> 3 // у нас есть 3 делителя - 1, 2 и 4
5 --> 2 // у нас есть 2 делителя - 1 и 5
12 --> 6 // у нас есть 6 делителей - 1, 2, 3, 4, 6 и 12
30 --> 8 // у нас есть 8 делителей - 1, 2, 3, 5, 6, 10, 15 и 30

Обратите внимание, что вы должны вернуть только число - количество делителей. 
Числа между скобками показаны только для того, чтобы вы видели, какие числа подсчитываются в каждом конкретном случае.
*/

function getDivisorsCnt(n){
    let count = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count++;
        
        if (n / i !== i) {
          count++;
        }
      }
    }
    
    return count;
}