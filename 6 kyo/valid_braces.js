/*
DESCRIPTION:
Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], 
and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False


ПЕРЕВОД:
Напишите функцию, которая принимает строку со скобками и определяет, является ли порядок скобок правильным. 
Она должна возвращать true, если строка является правильной, и false, если она неправильная.

Эта задача похожа на задачу Valid Parentheses, но включает новые символы: квадратные скобки [] 
и фигурные скобки {}. Благодаря @arnedag за идею!

Все входные строки будут непустыми и будут состоять только из скобок: ()[]{}.

Что считается правильным?
Строка со скобками считается правильной, если все скобки совпадают с правильной скобкой.

Примеры:
"(){}[]" => True
"([{}])" => True
"(}" => False
"[(])" => False
"[({})](]" => False
*/