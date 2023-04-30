/*
DESCRIPTION:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all 
the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.


ПЕРЕВОД:
Реализуйте псевдо-алгоритм шифрования, который принимает строку S и целое число N,
конкатенирует все символы строки S с нечетными индексами и все символы строки S с четными индексами,
этот процесс должен быть повторен N раз.

Примеры:
encrypt("012345", 1) => "135024"
encrypt("012345", 2) => "135024" -> "304152"
encrypt("012345", 3) => "135024" -> "304152" -> "012345"

encrypt("01234", 1) => "13024"
encrypt("01234", 2) => "13024" -> "32104"
encrypt("01234", 3) => "13024" -> "32104" -> "20314"

Вместе с функцией шифрования вы также должны реализовать функцию дешифрования, которая обратит этот процесс.

Если строка S является пустым значением или целое число N не является положительным, 
вернуть первый аргумент без изменений.
*/

function encrypt(text, n) {
    if (n <= 0 || text == '' || text == null) {return text;}
    for (let i = 1; i <= n; i++) {
      let o = '', e = '';
      for (let j = 0; j < text.length; j++) {
        if (j % 2 === 0) {
          e += text[j];
        } else {
          o += text[j];
        }
      }
      text = o + e;
    }
    return text;
}
  
  function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText == '' || encryptedText == null) {return encryptedText;}
    let l = encryptedText.length, m = Math.floor(l / 2);
    for (let i = 1; i <= n; i++) {
      let d = '';
      for (let j = 0; j < m; j++) {
        d += encryptedText[m + j] + encryptedText[j];
      }
      if (l % 2 === 1) {
        d += encryptedText[l - 1];
      }
      encryptedText = d;
    }
    return encryptedText;  
}

console.log(encrypt("012345", 1));
console.log(encrypt("012345", 2));
console.log(encrypt("012345", 3));

console.log(encrypt("01234", 1));
console.log(encrypt("01234", 2));
console.log(encrypt("01234", 3));