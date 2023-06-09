/*
DESCRIPTION:
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.


ПЕРЕВОД:
Развернуть каждое второе слово в заданной строке и вернуть полученную строку. 
Удалить все начальные и конечные пробелы, обеспечив при этом наличие ровно одного 
пробела между каждым словом. Знаки препинания должны рассматриваться как часть слова в этой задаче.

Пример:
"hello world" -> "hello dlrow"
"hello to the world" -> "hello ot eht dlrow"
*/

function reverse(str){
    let a = str.trim().replace(/\s{2,}/g, ' ').split(' ');
    for (let i = 1; i < a.length; i += 2) {
      a[i] = a[i].split('').reverse().join('');
    }
    return a.join(' ');
}

console.log(reverse("hello world"));
console.log(reverse("hello to the world"));