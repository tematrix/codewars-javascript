/*
DESCRIPTION:
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]


ПЕРЕВОД:
Напишите простой парсер, который будет разбирать и выполнять код на языке Deadfish.

Язык Deadfish имеет 4 команды, каждая из которых имеет длину 1 символ:

i увеличивает значение на 1 (изначально равно 0)
d уменьшает значение на 1
s возводит значение в квадрат
o выводит значение в массив результатов
Недопустимые символы должны игнорироваться.

parse("iiisdoso") => [ 8, 64 ]
*/