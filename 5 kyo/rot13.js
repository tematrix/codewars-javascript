/*
DESCRIPTION:
ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should 
be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".


ПЕРЕВОД:
ROT13 - это простой шифр подстановки букв, который заменяет букву на букву, 
идущую на 13 позиций после неё в алфавите. ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает зашифрованную с помощью ROT13 строку. 
Если в строке присутствуют цифры или специальные символы, они должны быть возвращены без изменений. 
Только буквы латинского/английского алфавита должны быть сдвинуты, как в оригинальной реализации ROT13.
*/

function rot13(message){
    const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'.split(''),
          upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
          rot13 = {};
    function makeRot13(alpha) {
        for (let i = 0; i < 13; i++) {
            rot13[alpha[i]] = alpha[i+13];
            rot13[alpha[i+13]] = alpha[i];  
        }
    }
    makeRot13(lowerAlpha); makeRot13(upperAlpha);

    let text = message.split('');
    for (let i = 0; i < text.length; i++) {
        if (rot13.hasOwnProperty(text[i])) {
            text[i] = rot13[text[i]];
        }
    }
    return text.join('');
}

console.log(rot13('Hello world'));