/*
DESCRIPTION:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string 
would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, 
one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. 
aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer 
as a string representing a rational whose numerator is the number of errors and the denominator the length 
of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"


ПЕРЕВОД:
В фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета,
которые для упрощения обозначаются буквами от a до m.

Цвета, используемые принтером, записываются в строку управления. Например, «хорошая» строка управления
будет aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b,
один раз цвет h, затем один раз цвет a...

Иногда возникают проблемы: нехватка цветов, технические неисправности и создается «плохая» строка управления,
например aaaxbbbbyyhwawiwjjjwwm с буквами, не относящимися к a и m.

Вам нужно написать функцию printer_error, которая по заданной строке вернет частоту ошибок принтера
в виде строки, представляющей рациональное число, числитель которого - это количество ошибок,
а знаменатель - длина строки управления. Не упрощайте дробь до более простого выражения.

Строка имеет длину, большую или равную одному, и содержит только буквы от a до z.

Примеры:
s = "aaabbbbhaijjjm"
printer_error(s) => "0/14"

s = "aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/