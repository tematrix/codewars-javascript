/*
DESCRIPTION:
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord


ПЕРЕВОД:
Напишите простой метод .camelCase (функцию camel_case в PHP, CamelCase в C# или camelCase в Java) для строк.
Все слова должны начинаться с заглавной буквы без пробелов.

Например:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function() {
    if (this == '') {return '';}
    let a = this.split(/\W/), r = [];
    for (let e of a) {
      r.push(e[0].toUpperCase() + e.slice(1));
    }
    return r.join('');
};

console.log("hello case".camelCase());
console.log("camel case word".camelCase());