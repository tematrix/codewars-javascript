/*
DESCRIPTION:
In this Kata, you will implement the Luhn Algorithm, 
which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, 
return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it is: if there are an even number of digits, 
double every other digit starting with the first; 
if there are an odd number of digits, double every other digit starting with the second:

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]
If a resulting number is greater than 9, replace it with the sum of its own digits 
(which is the same as subtracting 9 from it):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Sum all of the final digits:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, 
the original credit card number is valid.

18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number


ПЕРЕВОД:
В этом Ката вы реализуете алгоритм Luhn Algorithm, 
который используется для проверки номеров кредитных карт.

Дано целое положительное число до 16 цифр, 
верните true, если это действительный номер кредитной карты, и false, если нет.

Вот алгоритм:

Удваивать каждую вторую цифру, сканируя справа налево, начиная со второй цифры (справа).

Другой вариант: если цифр четное количество, 
удваивайте каждую вторую цифру, начиная с первой; 
если цифр нечетное количество, удваивайте каждую вторую цифру, начиная со второй:

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]
Если полученное число больше 9, замените его суммой собственных цифр 
(это то же самое, что вычесть из него 9):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

или:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Суммируйте все последние цифры:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Наконец, возьмите эту сумму и разделите ее на 10. Если остаток равен нулю, 
первоначальный номер кредитной карты действителен.

18 (по модулю) 10 ==> 8 , что не равно 0, поэтому это не действительный номер кредитной карты
*/

function validate(n){
    const digits = n.toString().split('').map(Number);
  
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      
      if (digits[i] > 9) {
        digits[i] -= 9;
      }
    }
  
    const sum = digits.reduce((s, e) => s + e, 0);
  
    return sum % 10 === 0;
}