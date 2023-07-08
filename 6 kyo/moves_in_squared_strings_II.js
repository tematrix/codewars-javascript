/*
DESCRIPTION:
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string 
obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) 
to better show the rotation when printed.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
Notes:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Forthcoming katas will study other tranformations.

Bash Note:
The input strings are separated by , instead of \n. 
The ouput strings should be separated by \r instead of \n. See "Sample Tests".


ПЕРЕВОД:
Вам дана строка из n строк, каждая из которых состоит из n символов: Например:

s = "abcd\nefgh\nijkl\nmnop".

Мы изучим некоторые преобразования этого квадрата строк.

Поворот часов на 180 градусов: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (или selfieAndRot или selfie-and-rot) Это исходная строка + строка 
полученная путем поворота часов на 180 градусов с точками, перемежающимися для того, чтобы (надеемся) 
чтобы лучше показать вращение при печати.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
или напечатано:
|rotation |selfie_and_rot
|abcd --> ponm |abcd --> abcd....
|efgh lkji |efgh efgh....
|ijkl hgfe |ijkl ijkl....   
|mnop dcba |mnop mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Обратите внимание, что количество точек соответствует общей длине "abcd", "efgh", "ijkl", "mnop".

Задание:
Напишите эти две функции rotand selfie_and_rot
и

функцию высокого порядка oper(fct, s), где

fct - функция одной переменной f, которую нужно применить к строке s (fct будет одной из rot, selfie_and_rot).

Примеры:
s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
Примечания:
Форма параметра fct в oper меняется в зависимости от языка. 
Вы можете увидеть каждую форму в зависимости от языка в разделе "Ваши тестовые примеры".
Можно было бы упростить эти ката от номера (I) до номера (IV).
В последующих катах будут изучены другие транформации.

Примечание Bash:
Входные строки разделяются символом , вместо \n. 
Выходные строки должны быть разделены \r вместо \n. См. "Примеры тестов".
*/