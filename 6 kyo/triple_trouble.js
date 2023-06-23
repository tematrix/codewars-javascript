/*
DESCRIPTION:
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number 
at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1


ПЕРЕВОД:
Напишите функцию

tripledouble(num1,num2)
которая принимает числа num1 и num2 и возвращает 1, если существует прямая тройка числа 
в любом месте числа num1, а также прямая двойка того же числа в числе num2.

Если это не так, возвращается 0.

Примеры
tripledouble(451999277, 41177722899) == 1 // num1 имеет прямую тройку 999 и 
                                          // num2 имеет прямые двойные 99

tripledouble(1222345, 12345) == 0 // num1 имеет прямые тройные 2, а num2 - только одинарные 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/