/*
DESCRIPTION:
Given a List [] of n integers , find minimum number to be inserted in a list, 
so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples
1 - minimumNumber ({3,1,2}) ==> return (1)

Explanation:
Since , the sum of the list's elements equal to (6), 
the minimum number to be inserted to transform the sum to prime number is (1), 
which will make the sum of the List equal the closest prime number (7).

2 -  minimumNumber ({2,12,8,4,6}) ==> return (5)

Explanation:
Since , the sum of the list's elements equal to (32), 
the minimum number to be inserted to transform the sum to prime number is (5), 
which will make the sum of the List equal the closest prime number (37) .

3 - minimumNumber ({50,39,49,6,17,28}) ==> return (2)

Explanation:
Since , the sum of the list's elements equal to (189), 
the minimum number to be inserted to transform the sum to prime number is (2), 
which will make the sum of the List equal the closest prime number (191).


ПЕРЕВОД:
Дан список [] из n целых чисел, найдите минимальное число, которое нужно вставить в список, 
так, чтобы сумма всех элементов списка была равна ближайшему простому числу.

Примечания
Размер списка не менее 2.

Числа в списке будут только положительными (n > 0).

Возможно повторение чисел в списке.

Сумма более новых элементов списка должна быть равна ближайшему простому числу .

Примеры ввода >> вывода
1 - minimumNumber ({3,1,2}) ==> return (1)

Пояснение:
Поскольку , сумма элементов списка равна (6), 
минимальное число, которое необходимо вставить для преобразования суммы в простое число, равно (1), 
что сделает сумму списка равной ближайшему простому числу (7).

2 - minimumNumber ({2,12,8,4,6}) ==> return (5)

Объяснение:
Поскольку , сумма элементов списка равна (32), 
то минимальное число, которое нужно вставить для преобразования суммы в простое число, равно (5), 
что сделает сумму списка равной ближайшему простому числу (37).

3 - minimumNumber ({50,39,49,6,17,28}) ==> return (2)

Объяснение:
Поскольку , сумма элементов списка равна (189), 
то минимальное число, которое необходимо вставить для преобразования суммы в простое число, равно (2), 
что сделает сумму списка равной ближайшему простому числу (191).
*/