/*
DESCRIPTION:
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));


ПЕРЕВОД:
На этот раз мы хотим написать вычисления с помощью функций и получить результаты. 
Давайте рассмотрим несколько примеров:

seven(times(five())); // должно вернуть 35
four(plus(nine())); // должно вернуть 13
eight(minus(three())); // должно вернуться 5
six(dividedBy(two())); // должно возвращать 3
Требования:

Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять").
Должна быть функция для каждой из следующих математических операций: плюс, минус, раз, dividedBy.
Каждое вычисление состоит ровно из одной операции и двух чисел
Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
Деление должно быть целочисленным. Например, это должно вернуть 2, а не 2.666666...:
eight(dividedBy(three()));
*/