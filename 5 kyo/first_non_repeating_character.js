/*
DESCRIPTION:
Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty 
string ("") or None -- see sample tests.


ПЕРЕВОД:
Напишите функцию с именем first_non_repeating_letter, которая принимает на вход строку, 
и возвращает первый символ, который не повторяется нигде в строке.

Например, если на вход подана строка 'stress', функция должна вернуть 't', 
поскольку буква t встречается в строке только один раз и стоит первой в строке.

В качестве дополнительной трудности можно отметить, что прописные и строчные буквы считаются 
одним и тем же символом, но функция должна вернуть правильный регистр для начальной буквы. 
Например, ввод 'sTreSS' должен вернуть 'T'.

Если строка содержит все повторяющиеся символы, она должна возвращать пустую 
строку ("") или None - см. примеры тестов.
*/

function firstNonRepeatingLetter(s) {
    let a = s.split('');
    for (let i of a) {
      if (a.filter(e => e.toLowerCase() == i.toLowerCase()).length == 1) {
        return i;
      }    
    }
    return '';      
}

console.log(firstNonRepeatingLetter('sTreSS'));