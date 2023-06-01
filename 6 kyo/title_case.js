/*
DESCRIPTION:
A string is considered to be in title case if each word in the string is either (a) 
capitalised (that is, only the first letter of the word is in upper case) or (b) 
considered to be an exception and put entirely into lower case unless 
it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list 
of exceptions (minor words). The list of minor words will be given as a string with 
each word separated by a space. Your function should ignore the case of the minor words 
string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except 
for the first word in the string.
Second argument: the original string to be converted.

Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be 
lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will 
pass undefined when this argument is unused.

Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


ПЕРЕВОД:
Строка считается в заглавной букве, если каждое слово в строке либо (a) написано в верхнем 
регистре только для первой буквы слова, либо (b) считается исключением и полностью написано 
в нижнем регистре, за исключением первого слова, которое всегда пишется с заглавной буквы.

Напишите функцию, которая будет преобразовывать строку в заглавную букву, учитывая 
необязательный список исключений (незначительных слов). Список незначительных слов будет 
представлен в виде строки, в которой каждое слово разделено пробелом. Функция должна 
игнорировать регистр строки с незначительными словами - она должна работать так же, 
даже если регистр строки с незначительными словами изменится.

Аргументы (Haskell):
Первый аргумент: список незначительных слов, разделенных пробелами, которые всегда должны 
быть в нижнем регистре, за исключением первого слова в строке.
Второй аргумент: исходная строка, которую нужно преобразовать.

Аргументы (для других языков программирования):
Первый аргумент (обязательный): исходная строка, которую нужно преобразовать.
Второй аргумент (необязательный): список незначительных слов, разделенных пробелами, 
которые всегда должны быть в нижнем регистре, за исключением первого слова в строке. 
В тестах на JavaScript/CoffeeScript аргумент будет принимать значение undefined, если он не используется.

Примеры:
titleCase('a clash of KINGS', 'a an the of') // должно вернуть: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // должно вернуть: 'The Wind in the Willows'
titleCase('the quick brown fox') // должно вернуть: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
    if (!title) {return '';}
    
    let m = [];
    if (minorWords) {m = minorWords.toLowerCase().split(' ');}
    
    return title.toLowerCase().split(' ').map((e,i) => {
      if (i === 0 || !m.includes(e)) {
        return e[0].toUpperCase() + e.slice(1);
      }
      return e;
    }).join(' ');  
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));