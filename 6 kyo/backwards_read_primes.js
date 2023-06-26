/*
DESCRIPTION:
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. 
(This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), 
the second one always being greater than or equal to the first one. 
The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Examples (in general form):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => 
[9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []


ПЕРЕВОД:
Простые числа с обратным прочтением - это простые числа, которые при обратном прочтении 
по основанию 10 (справа налево) оказываются другими простыми числами. 
(Это исключает простые, которые являются палиндромами).

Примеры:
13 17 31 37 71 73 - простые числа с обратным чтением.
13 является таким, потому что оно простое, а при чтении справа налево получается 31, 
которое тоже простое. То же самое для остальных.

Задание
Найдите все простые числа с обратным чтением между двумя положительными данными числами (оба включительно), 
причем второе всегда больше или равно первому. 
Полученный массив или результирующая строка будут упорядочены в соответствии с естественным порядком простых чисел.

Примеры (в общем виде):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) =>. 
[9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []
*/