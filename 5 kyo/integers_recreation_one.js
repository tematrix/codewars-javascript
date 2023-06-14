/*
DESCRIPTION:
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. 
Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) 
such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. 
The subarrays (or tuples or Pairs) will have two elements: first the number the squared 
divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]


ПЕРЕВОД:
1, 246, 2, 123, 3, 82, 6, 41 - делители числа 246. 
Возведя эти делители в квадрат, получим: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
Сумма этих квадратов равна 84100, что равно 290 * 290.

Задача
Найдите все целые числа от m до n (m и n целые числа с 1 <= m <= n) 
таких, что сумма их квадратов делителей сама является квадратом.

Мы вернем массив подмассивов или кортежей (в C массив Pair) или строку. 
Подмассивы (или кортежи, или пары) будут состоять из двух элементов: сначала число, квадрат 
делители которого являются квадратом, а затем сумма квадратов делителей.

Пример:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]].
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/