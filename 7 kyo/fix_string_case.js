/*
DESCRIPTION:
In this Kata, you will be given a string that may have mixed uppercase and lowercase 
letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


ПЕРЕВОД:
В этом задании вам будет дана строка, которая может содержать буквы в верхнем и нижнем регистрах, 
и ваша задача - преобразовать эту строку либо только в нижний регистр, либо только 
в верхний регистр на основе следующих правил:

сделать как можно меньше изменений;
если строка содержит одинаковое количество букв в верхнем и нижнем регистрах, 
преобразовать строку в нижний регистр.

Например:

solve("coDe") = "code". Символов в нижнем регистре больше, чем символов в верхнем регистре. 
Измените только "D" на символ в нижнем регистре.
solve("CODe") = "CODE". Символов в верхнем регистре больше, чем символов в нижнем регистре. 
Измените только "e" на символ в верхнем регистре.
solve("coDE") = "code". Символов в верхнем и нижнем регистре одинаковое количество. 
Измените все буквы на символы в нижнем регистре.
*/