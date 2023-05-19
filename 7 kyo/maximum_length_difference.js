/*
DESCRIPTION:
You are given two arrays a1 and a2 of strings. 
Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:
input : 2 strings with substrings separated by ,
output: number as a string


ПЕРЕВОД:
У вас есть два массива строк a1 и a2.
Каждая строка состоит из букв от a до z.
Пусть x - любая строка из первого массива, а y - любая строка из второго массива.

Найдите max(abs(length(x) − length(y)))

Если a1 и/или a2 пустые, вернуть -1 на каждом языке, кроме Haskell (F#), где нужно вернуть Nothing (None).

Пример:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Примечание для Bash:
ввод: 2 строки со строковыми подстроками, разделенными запятой,
вывод: число в виде строки.
*/