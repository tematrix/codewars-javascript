/*
DESCRIPTION:
Given a list of digits, return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


ПЕРЕВОД:
Дан список цифр. Необходимо вернуть наименьшее число, которое можно составить из этих цифр, 
используя каждую цифру только один раз и игнорируя дубликаты.

Примечания:
Функция принимает только положительные целые числа (>0), без отрицательных чисел и нулей.

Примеры ввода и вывода:

minValue ({1, 3, 1}) ==> вернуть (13)
Объяснение: (13) - минимальное число, которое можно составить из {1, 3, 1} без дубликатов.

minValue({5, 7, 5, 9, 7}) ==> вернуть (579)
Объяснение: (579) - минимальное число, которое можно составить из {5, 7, 5, 9, 7} без дубликатов.

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) ==> вернуть (134679)
Объяснение: (134679) - минимальное число, 
которое можно составить из {1, 9, 3, 1, 7, 4, 6, 6, 7} без дубликатов.
*/