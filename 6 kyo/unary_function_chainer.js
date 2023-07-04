/*
DESCRIPTION:
Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))


ПЕРЕВОД:
Ваша задача - написать функцию высшего порядка для объединения в цепочку списка унарных функций. 
Другими словами, она должна возвращать функцию, которая выполняет левую складку для заданных функций.

chained([a,b,c,d])(input)
Должно дать тот же результат, что и

d(c(b(a(input))))
*/