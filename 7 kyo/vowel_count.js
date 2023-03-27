/*
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


ПЕРЕВОД:
Возвращает количество гласных в данной строке.

Мы будем рассматривать a, e, i, o, u как гласные для этого ката (но не y).

Входная строка будет состоять только из строчных букв и/или пробелов.
*/

function getCount(str) {
    let count = 0;
    const arr = str.split('');
    arr.forEach(i => {
      if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
        count++;
      }    
    });
    return count;
}

console.log(getCount('long string'));