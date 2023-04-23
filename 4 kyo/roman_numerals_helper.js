/*
DESCRIPTION:
Write two functions that convert a roman numeral to and from an integer value. 
Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting 
with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1


ПЕРЕВОД:
Написать две функции, которые преобразуют римское число в целое число и обратно. 
Обе функции будут тестироваться на нескольких значениях римских чисел.

Современные римские числа записываются путем выражения каждой цифры отдельно, 
начиная с самой левой цифры и пропуская любую цифру со значением ноль. 
Например, число 1990 записывается как 1000=M, 900=CM, 90=XC, что дает в итоге MCMXC. 
Число 2008 записывается как 2000=MM, 8=VIII, или MMVIII. Число 1666 записывается, 
используя каждый римский символ в порядке убывания: MDCLXVI.

Диапазон входных данных: 1 <= n < 4000

В этом задании число 4 должно быть записано как IV, а не IIII (как в часах).

Примеры:
toRoman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
400 -> "CD"
90 -> "XC"
40 -> "XL"
1 -> "I"

fromRoman:
"MM" -> 2000
"MDCLXVI" -> 1666
"M" -> 1000
"CD" -> 400
"XC" -> 90
"XL" -> 40
"I" -> 1
*/