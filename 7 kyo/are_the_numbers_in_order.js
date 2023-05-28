/*
DESCRIPTION:
In this Kata, your function receives an array of integers as input. 
Your task is to determine whether the numbers are in ascending order. 
An array is said to be in ascending order if there are no two adjacent 
integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, 
i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be 
sorted in ascending order since all (zero) adjacent pairs of integers satisfy 
the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at 
the random tests, make sure you aren't mutating the input array.


ПЕРЕВОД:
В этом задании ваша функция получает на вход массив целых чисел. Ваша задача - определить, 
являются ли числа в массиве упорядоченными по возрастанию. 
Массив считается упорядоченным по возрастанию, если нет двух смежных целых чисел, 
где левое число превышает правое число.

Для этого Ката можно предположить, что все входные данные являются допустимыми, 
т.е. массивы, содержащие только целые числа.

Обратите внимание, что массив из 0 или 1 целого числа автоматически считается 
упорядоченным по возрастанию, так как все (нулевые) смежные пары целых чисел 
удовлетворяют условию, что левое число не превышает правое число по значению.

Например:

inAscOrder([1,2,4,7,19]); // возвращает true
inAscOrder([1,2,3,4,5]); // возвращает true
inAscOrder([1,6,10,18,2,4,20]); // возвращает false
inAscOrder([9,8,7,6,5,4,3,2,1]); // возвращает false, 
потому что числа упорядочены в порядке УБЫВАНИЯ.

Примечание. Если ваше решение проходит все тесты, но не проходит 
случайные тесты, убедитесь, что вы не изменяете входной массив.
*/