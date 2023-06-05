/*
DESCRIPTION:
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum 
of the integers to the left of N is equal to the sum of the integers 
to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position 
of the array, the sum of left side of the index ({1,2,3}) and the sum 
of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, 
the sum of left side of the index ({1}) and the sum of 
the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting 
languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. 
The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. 
If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.


ПЕРЕВОД:
Вам будет дан массив целых чисел. Ваша задача - найти индекс N,
где сумма целых чисел слева от N равна сумме целых чисел справа от N.
Если такого индекса не существует, вернуть -1.

Например:

Предположим, что вам дан массив {1,2,3,4,3,2,1}:
Ваша функция вернет индекс 3, потому что на 3-й позиции массива сумма 
левой части индекса ({1,2,3}) и сумма правой части индекса ({3,2,1}) равны 6.

Рассмотрим еще один пример.
Вам дан массив {1,100,50,-51,1,1}:
Ваша функция вернет индекс 1, потому что на 1-й позиции массива сумма левой 
части индекса ({1}) и сумма правой части индекса ({50,-51,1,1}) равны 1.

Еще один пример:
Вам дан массив {20,10,-80,10,10,15,35}
На индексе 0 левая часть пустая {}
Правая часть - {10,-80,10,10,15,35}
Они обе равны 0 при сложении. (Пустые массивы в этой задаче равны 0)
Индекс 0 - это место, где левая и правая части равны.

Примечание: Пожалуйста, помните, что в большинстве языков 
программирования индекс массива начинается с 0.

Входные данные:
Массив целых чисел длиной 0 < arr < 1000.
Числа в массиве могут быть любыми целыми числами, положительными или отрицательными.

Выходные данные:
Наименьший индекс N, где сумма чисел слева от N равна сумме чисел справа от N.
Если вы не найдете индекс, который соответствует этим правилам, то вернете -1.

Примечание:
Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.
*/