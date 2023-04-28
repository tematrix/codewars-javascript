/*
DESCRIPTION:
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase 
letter is a person standing up. 

Rules:
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


ПЕРЕВОД:
В этом простом задании вам необходимо создать функцию, которая превратит строку в "Mexican Wave".
На вход функции будет передана строка, и вы должны вернуть эту строку в виде массива, 
где каждая заглавная буква будет означать, что человек стоит.

Правила:

Входная строка всегда будет в нижнем регистре, но может быть пустой.
Если символ в строке является пробелом, то пропустите его, как если бы это было пустым местом.

Пример:
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
    let r = [];
    for (let i = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
        r.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1));
      }
    }  
    return r;
}

console.log(wave("hello"));