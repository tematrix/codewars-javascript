/*
DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


ПЕРЕВОД:
Цифровой корень - это рекурсивная сумма всех цифр в числе.

Учитывая n, возьмите сумму цифр n. Если это значение содержит более одной цифры, 
продолжайте уменьшать таким образом до тех пор, пока не будет получено однозначное число. 
Входным значением будет неотрицательное целое число.

Примеры
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2
*/

function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    let a = String(n).split(''), s = 0;
    for (let i of a) {
      s += Number(i);
    }
    return digitalRoot(s);
  }
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));