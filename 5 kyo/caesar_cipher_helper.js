/*
DESCRIPTION:
Write a class that, when given a string, will return an uppercase string with each letter 
shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'

If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].


ПЕРЕВОД:
Напишите класс, который, получив строку, возвращает строку в верхнем регистре с каждой буквой. 
сдвинутой вперед в алфавите на столько мест, на сколько был инициализирован шифр.

Например:

var c = new CaesarCipher(5); // создается CipherHelper со сдвигом на пять мест
c.encode('Codewars'); // возвращает 'HTIJBFWX'
c.decode('BFKKQJX'); // возвращает 'WAFFLES'

Если что-то в строке не входит в алфавит (например, знаки препинания, пробелы), просто оставьте все как есть.
Сдвиг всегда будет в диапазоне [1, 26].
*/

class CaesarCipher {
    constructor(shift) {
      this.shift = shift;
    }
    
    encode(str) {
      let result = '';
      
      for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(((charCode - 65 + this.shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          result += String.fromCharCode(((charCode - 97 + this.shift) % 26) + 97);
        } else {
          result += str[i];
        }
      }
      
      return result.toUpperCase();
    }
    
    decode(str) {
      let result = '';
      
      for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(((charCode - 65 - this.shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          result += String.fromCharCode(((charCode - 97 - this.shift + 26) % 26) + 65);
        } else {
          result += str[i];
        }
      }
      
      return result.toUpperCase();
    }
}