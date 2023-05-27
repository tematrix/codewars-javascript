/*
DESCRIPTION:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.


ПЕРЕВОД:
Даны две строковые записи целых чисел. Вернуть строковую запись суммы этих чисел.

Например:

sumStrings('1','2') // => '3'

Строковая запись целого числа не содержит символов, кроме десяти цифр "0"-"9".

В Java нельзя использовать BigInteger и BigDecimal.

В Python ваше решение должно работать с огромными числами (около миллиона цифр), 
преобразование в int не будет работать.
*/

function sumStrings(a,b) {
    let r = "",
        c = 0,
        i = a.length - 1,
        j = b.length - 1;
    
    while (i >= 0 || j >= 0 || c > 0) {
      let s = c;
      if (i >= 0) {s += parseInt(a[i]);}
      if (j >= 0) {s += parseInt(b[j]);}
      c = Math.floor(s / 10);
      r = (s % 10) + r;
      i--;
      j--;
    }
  
    while (r[0] === "0" && r.length > 1) {
      r = r.slice(1);
    }
    
    return r;
}

console.log(sumStrings('1','2'));