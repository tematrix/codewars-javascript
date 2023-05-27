/*
DESCRIPTION:
Write a function called calculate that takes 3 values. The first and third values are numbers. 
The second value is a character. If the character is "+" , "-", "*", or "/", the function 
will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null 
(throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null

Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, 
return null (throw an ArgumentException in C#)/(None in Python).


ПЕРЕВОД:
Напишите функцию с именем calculate, которая принимает 3 значения. Первое и третье значения - числа.
Второе значение - символ. Если символ является "+", "-", "*", или "/", функция
вернет результат соответствующей математической операции над двумя числами.
Если строка не является одним из указанных символов, функция должна вернуть null
(выбросить ArgumentException в C#).

calculate(2, "+", 4); // должно вернуть 6
calculate(6, "-", 1.5); // должно вернуть 4.5
calculate(-4, "*", 8); // должно вернуть -32
calculate(49, "/", -7); // должно вернуть -7
calculate(8, "m", 2); // должно вернуть null
calculate(4, "/", 0); // должно вернуть null

Учитывайте, что на ноль делить нельзя. Если производится попытка деления на ноль,
функция должна вернуть null (выбросить ArgumentException в C#)/(None в Python).
*/