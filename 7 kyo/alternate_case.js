/*
DESCRIPTION:
Write function alternateCase which switch every letter in string from upper to 
lower and from lower to upper. E.g: Hello World -> hELLO wORLD


ПЕРЕВОД:
Напишите функцию alternateCase, которая меняет регистр каждой буквы в строке: 
если буква была в верхнем регистре, она становится в нижнем, а если была 
в нижнем - в верхнем. Например, строка "Hello World" превращается в "hELLO wORLD".
*/

function alternateCase(s) {
    return s.split('').map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
}

console.log(alternateCase('Hello World'));