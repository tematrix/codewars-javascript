/*
DESCRIPTION:
Complete the solution so that it strips all text that follows any of a set of comment 
markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


ПЕРЕВОД:
Реализуйте функцию solution, которая удаляет весь текст, следующий за любым из заданных 
символов комментариев. Любые пробельные символы в конце строки также должны быть удалены.

Пример:

Пусть дана строка:

apples, pears # and bananas
grapes
bananas !apples

Ожидаемый вывод:

apples, pears
grapes
bananas

Функцию можно вызывать следующим образом:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// результат должен быть равен "apples, pears\ngrapes\nbananas"
*/