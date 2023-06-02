/*
DESCRIPTION:
You need to create a function that will validate if 
given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". 
The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. 
Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following 
symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:
-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3

And some invalid ones:
23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324


ПЕРЕВОД:
Вы должны создать функцию, которая будет проверять, 
являются ли заданные параметры действительными географическими координатами.

Допустимые координаты выглядят так: "23.32353342, -32.543534534".
Возвращаемое значение должно быть либо true, либо false.

Широта (первое число с плавающей запятой) может быть 
от 0 до 90, положительной или отрицательной.
Долгота (второе число с плавающей запятой) может быть 
от 0 до 180, положительной или отрицательной.

Координаты могут содержать только цифры или один из следующих 
символов (включая пробел после запятой): __ -, . __

Между знаком минус "-" и следующей за ним цифрой не должно быть пробела.

Вот некоторые допустимые координаты:
-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3

А вот некоторые недопустимые:
23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324
*/