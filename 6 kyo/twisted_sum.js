/*
DESCRIPTION:
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51


ПЕРЕВОД:
Найдите сумму цифр всех чисел от 1 до N (включая оба конца).

Примеры
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

function twistedSum(n) {
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
      let num = i;
      
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
    }
    
    return sum;
}