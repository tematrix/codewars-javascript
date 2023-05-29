/*
DESCRIPTION:
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]


ПЕРЕВОД:
Вернуть массив, содержащий числа от 1 до N, где N - это заданное значение параметра.

Заменить некоторые значения, если выполняется любое из следующих условий:

Если значение является кратным 3: использовать значение "Fizz" вместо него
Если значение является кратным 5: использовать значение "Buzz" вместо него
Если значение является кратным 3 и 5: использовать значение "FizzBuzz" вместо него
N никогда не будет меньше 1.

Пример вызова метода:

fizzbuzz(3) --> [1, 2, "Fizz"]
*/

function fizzbuzz(n) {
    const a = [];
    for (let i = 1; i <= n; i++) {
      let s = '';
      if (i % 3 === 0) {s += 'Fizz';}
      if (i % 5 === 0) {s += 'Buzz';}
      s ? a.push(s) : a.push(i);
    }
    return a;
}

console.log(fizzbuzz(3));