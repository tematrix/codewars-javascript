/*
DESCRIPTION:
Write a function called LCS that accepts two sequences and returns 
the longest subsequence common to the passed in sequences.

Subsequence
A subsequence is different from a substring. The terms of a subsequence 
need not be consecutive terms of the original sequence.

Example subsequence
Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

LCS examples
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"


ПЕРЕВОД:
Напишите функцию с названием LCS, которая принимает две последовательности и возвращает
самую длинную общую подпоследовательность переданных последовательностей.

Подпоследовательность
Подпоследовательность отличается от подстроки. Элементы подпоследовательности
не обязательно должны быть последовательными элементами исходной последовательности.

Пример подпоследовательности
Подпоследовательности "abc" = "a", "b", "c", "ab", "ac", "bc" и "abc".

Примеры работы функции LCS
LCS( "abcdef" , "abc" ) => возвращает "abc"
LCS( "abcdef" , "acf" ) => возвращает "acf"
LCS( "132535365" , "123456789" ) => возвращает "12356"
*/

function LCS(x, y) {  
    let result = [], f, s;
    
    if (x.length >= y.length) {
      f = x; s = y;
    } else {
      f = y; s = x;
    }
    
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < f.length; j++) {
        if (f[j] === s[i]) {
          result.push(s[i]);
          break;
        }
      }
    }
    
    return result.length === 0 ? "" : result.join('');
}

console.log(LCS("abcdef" , "abc"));
console.log(LCS("abcdef" , "acf"));
console.log(LCS("132535365" , "123456789"));