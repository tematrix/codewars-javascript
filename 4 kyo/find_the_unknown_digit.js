/*
DESCRIPTION:
To give credit where credit is due: This problem was taken from the ACMICPC-Northwest 
Regional Programming Contest. Thank you problem writers.

You are helping an archaeologist decipher some runes. He knows that this ancient society 
used a Base 10 system, and that they never start a number with a leading zero. 
He's figured out most of the digits as well as a few operators, 
but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form

[number][op][number]=[number]
He has converted all of the runes he knows into digits. 
The only operators he knows are addition (+),subtraction(-), and multiplication (*), 
so those are the only ones that will appear. Each number will be in the range 
from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, 
and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that 
the professor doesn't know (never an operator, and never a leading -). 
All of the ?s in an expression will represent the same digit (0-9), 
and it won't be one of the other given digits in the expression. 
No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. 
If more than one digit works, give the lowest one. If no digit works, well, that's bad 
news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. 
The method takes a string as a paramater repressenting the expression and will return 
an int value representing the unknown rune or -1 if no such rune exists.


ПЕРЕВОД:
Вы помогаете археологу расшифровать некоторые руны. Он знает, что эта древняя цивилизация 
использовала систему счисления с основанием 10 и что они никогда не начинали число с ведущего нуля. 
Он разгадал большинство цифр, а также несколько операторов, но ему нужна ваша помощь, 
чтобы разгадать остальные.

Профессор даст вам простое математическое выражение в формате

[число][оператор][число]=[число]

Он преобразовал все известные ему руны в цифры. Единственные операторы, 
которые он знает, - это сложение (+), вычитание (-) и умножение (*), поэтому они будут единственными, 
которые появятся. Каждое число будет в диапазоне от -1000000 до 1000000 и будет состоять только 
из цифр от 0 до 9, возможно с ведущим знаком минус и, возможно, несколькими знаками вопроса "?". 
Если в выражении есть знаки "?" , они представляют собой цифровую руну, которую профессор не знает 
(никогда не оператор и никогда не ведущий знак "-"). Все знаки "?" в выражении будут представлять 
одну и ту же цифру (от 0 до 9), и это не будет одна из других заданных цифр в выражении. 
Никакое число не начнется с 0, если только само число не равно 0, поэтому 00 не будет допустимым числом.

Для заданного выражения определите значение руны, представленной знаком вопроса. 
Если подходит несколько цифр, выведите наименьшую. Если ни одна цифра не подходит, 
это плохие новости для профессора - это означает, что некоторые из его рун ошибочны. 
В этом случае выведите -1.

Завершите метод для решения выражения и определения значения неизвестной руны. 
Метод принимает строку в качестве параметра, представляющую выражение, и возвращает целочисленное 
значение, представляющее неизвестную руну или -1, если такой руны не существует.
*/