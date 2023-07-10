/*
DESCRIPTION:
The depth of an integer n is defined to be how many multiples of n it is necessary 
to compute before all 10 digits have appeared at least once in some multiple.

example:
let see n=42
Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed

Looking at the above table under digits column you can find all the digits from 0 to 9, 
Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. 
Write a function named computeDepth which computes the depth of its integer argument.
Only positive numbers greater than zero will be passed as an input.


ПЕРЕВОД:
Глубина целого числа n определяется как количество кратных n, которое необходимо 
вычислять до того, как все 10 цифр хотя бы раз появятся в некотором множестве.

пример:
пусть n=42
Комментарий к цифрам кратного значения
42*1 42 2,4 
42*2 84 8 4 существовало
42*3 126 1,6 2 существовало
42*4 168 - все существовали
42*5 210 0 2,1 существовало
42*6 252 5 2 существовало
42*7 294 9 2,4 существовало
42*8 336 3 6 существовало 
42*9 378 7 3,8 существует

Если посмотреть на приведенную выше таблицу в столбце цифр, то можно найти все цифры от 0 до 9, 
Следовательно, для получения всех цифр необходимо 9 кратных 42. Таким образом, глубина 42 равна 9. 
Напишите функцию с именем computeDepth, которая вычисляет глубину своего целочисленного аргумента.
В качестве входных данных будут передаваться только положительные числа, большие нуля.
*/