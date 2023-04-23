/*
DESCRIPTION:
In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore


ПЕРЕВОД:
В этом примере вам нужно проверить, является ли пользовательский ввод строкой, 
содержащей буквы и цифры (алфанумерической). Данная строка не является nil/null/NULL/None, 
поэтому эту проверку выполнять не нужно.

Строка должна соответствовать следующим условиям, чтобы быть алфанумерической:

Содержать хотя бы один символ ("" не является допустимым)
Допустимы заглавные и строчные буквы латинского алфавита и цифры от 0 до 9
Не допускаются пробелы и символ подчеркивания
*/

function alphanumeric(string){
    return string.length < 1 || /[_]+/g.test(string) ? false : !/\W+/g.test(string);
}

console.log(alphanumeric("hello123"));
console.log(alphanumeric("hello world"));
console.log(alphanumeric("hello_world"));
console.log(alphanumeric(""));