/*
DESCRIPTION:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same 
string with all even indexed characters in each word upper cased, and all odd indexed characters 
in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


ПЕРЕВОД:
Напишите функцию toWeirdCase (weirdcase в Ruby), которая принимает строку и возвращает ту же строку,
в которой все символы строки с четными индексами в каждом слове будут в верхнем регистре,
а все символы строки с нечетными индексами в каждом слове будут в нижнем регистре.
Индексация начинается с нуля, так что символ с индексом ноль считается четным,
следовательно, этот символ должен быть в верхнем регистре, и для каждого слова процесс начинается заново.

Переданная строка будет содержать только буквенные символы и пробелы (' ').
Пробелы будут присутствовать только в случае, если в строке есть несколько слов.
Слова будут разделены одним пробелом (' ').

Примеры:
toWeirdCase( "String" );//=> возвращает "StRiNg"
toWeirdCase( "Weird string case" );//=> возвращает "WeIrD StRiNg CaSe"
*/