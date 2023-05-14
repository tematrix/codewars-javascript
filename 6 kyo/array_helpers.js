/*
DESCRIPTION:
This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: 
square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array 
must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]


ПЕРЕВОД:
Это ката предназначено для проверки вашей способности расширять функциональность встроенных классов.
В данном случае мы хотим, чтобы вы расширили встроенный класс Array следующими методами:
square(), cube(), average(), sum(), even() и odd().

Объяснение:

square() должен вернуть копию массива, содержащую все значения в квадрате
cube() должен вернуть копию массива, содержащую все значения в кубе
average() должен вернуть среднее значение всех элементов массива; для пустого массива
должен возвращаться NaN (заметьте: пустой массив не тестируется в Ruby!)
sum() должен вернуть сумму всех элементов массива
even() должен вернуть массив всех четных чисел
odd() должен вернуть массив всех нечетных чисел
Примечание: исходный массив не должен изменяться в любом случае!

Пример
var numbers = [1, 2, 3, 4, 5];

numbers.square(); // должен вернуть [1, 4, 9, 16, 25]
numbers.cube(); // должен вернуть [1, 8, 27, 64, 125]
numbers.average(); // должен вернуть 3
numbers.sum(); // должен вернуть 15
numbers.even(); // должен вернуть [2, 4]
numbers.odd(); // должен вернуть [1, 3, 5]
*/