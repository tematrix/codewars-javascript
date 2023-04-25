/*
DESCRIPTION:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the 
same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square 
of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.


ПЕРЕВОД:
Даны два массива a и b. Напишите функцию comp(a, b) (или compSame(a, b)), которая проверяет, 
имеют ли два массива "одинаковые" элементы с одинаковыми кратностями 
(кратность элемента - это количество раз, которое он появляется). 
"Одинаковые" означает, что элементы в b являются квадратами элементов в a, независимо от порядка.

Примеры:
Valid массивы
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) возвращает true, потому что в b 121 - это квадрат 11, 14641 - это квадрат 121, 
20736 - это квадрат 144, 361 - это квадрат 19, 25921 - это квадрат 161 и так далее. 
Это становится очевидным, если записать элементы b в виде квадратов:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid массивы
Если, например, мы изменяем первое число на что-то другое, то comp больше не возвращает true:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) возвращает false, потому что в b 132 не является квадратом какого-либо числа из a.
*/