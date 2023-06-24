/*
DESCRIPTION:
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0


ПЕРЕВОД:
Найдите длину самой длинной подстроки в заданной строке s, которая совпадает с ней в обратном порядке.

В качестве примера, если вводимая строка была "Мне нравятся гоночные автомобили, 
которые ездят быстро", длина подстроки (гоночный автомобиль) будет равна 7.

Если длина входной строки равна 0, возвращаемое значение должно быть равно 0.

Пример:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function longestPalindrome(s) {
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        const substring = s.slice(i, j);
        
        if (isPalindrome(substring) && substring.length > maxLength) {
          maxLength = substring.length;
        }
      }
    }
  
    return maxLength;
}
  
  function isPalindrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
}