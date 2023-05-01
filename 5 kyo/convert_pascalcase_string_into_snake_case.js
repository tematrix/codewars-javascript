/*
DESCRIPTION:
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. 
Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"


ПЕРЕВОД:
Завершите функцию/метод таким образом, чтобы она принимала строку в формате PascalCase и возвращала строку 
в нотации snake_case. Строчные символы могут быть числами. Если метод получает на вход число, он должен вернуть строку.

Примеры:
"TestController" --> "test_controller"
"MoviesAndBooks" --> "movies_and_books"
"App7Test" --> "app7_test"
1 --> "1"
*/

function toUnderscore(string) {
    return typeof(string) === 'number' ? String(string) : string.replace(/(?<!^)[A-Z]/g, '_$&').toLowerCase(); 
}

console.log(toUnderscore("TestController"));
console.log(toUnderscore("MoviesAndBooks"));
console.log(toUnderscore("App7Test"));
console.log(toUnderscore(1));