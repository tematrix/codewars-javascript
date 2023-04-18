/*
DESCRIPTION:
Define a function that takes an integer argument and returns a logical value 
true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater 
than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. 
Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

Example
is_prime(1)  false
is_prime(2)  true 
is_prime(-1) false


ПЕРЕВОД:
Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или false 
в зависимости от того, является ли целое число простым.

Согласно Википедии, простое число (или простое) - это натуральное число больше 1, 
которое не имеет положительных делителей, отличных от 1 и самого себя.

Требования:
Вы можете предположить, что вам будет дан целочисленный ввод.
Вы не можете предполагать, что целое число будет только положительным. Вам также могут дать отрицательные числа (или 0).
Примечание по производительности: нет необходимости использовать сложные оптимизации, 
но самые простые решения могут превысить лимит времени. 
Числа могут достигать 2^31 (или аналогичного значения, в зависимости от языка). 
Полный перебор до n или n/2 будет слишком медленным.

Пример:
is_prime(1) false
is_prime(2) true
is_prime(-1) false
*/