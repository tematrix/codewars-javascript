/*
DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its 
multiplicative persistence, which is the number of times you must multiply the digits 
in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)


ПЕРЕВОД:
Напишите функцию persistence, которая принимает положительный параметр num и возвращает 
его мультипликативную настойчивость, которая представляет собой количество раз, которое 
вы должны умножить цифры в num, пока не достигнете единственной цифры.

Например (Ввод --> Вывод):

39 --> 3 (потому что 3*9 = 27, 2*7 = 14, 1*4 = 4 и у 4 есть только одна цифра)
999 --> 4 (потому что 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, и, наконец, 1*2 = 2)
4 --> 0 (потому что 4 уже является однозначным числом)
*/

function persistence(num) {
    if (num < 10) {
      return 0;
    } else {
      let a = String(num).split('');
      num = 1;
      for (let i of a) {
        num *= Number(i);
      }
      return 1 + persistence(num);
    }
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));