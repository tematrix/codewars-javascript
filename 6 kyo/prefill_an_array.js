/*
DESCRIPTION:
Create the function prefill that returns an array of n elements that all have the same value v. 
See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError

When throwing a TypeError, the message should be n is invalid, 
where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"


ПЕРЕВОД:
Создайте функцию prefill, которая возвращает массив из n элементов, имеющих одинаковое значение v. 
Попробуйте сделать это без использования цикла.

Необходимо подтвердить правильность вводимых данных:

v может быть любым (примитивным или иным)
если v опускается, заполнить массив значением undefined
если n равно 0, возвращается пустой массив
если n не является целым числом или строкой в формате целого числа (например, '123'), которая >=0, 
выдать ошибку типа TypeError

При выдаче ошибки TypeError сообщение должно иметь вид n is invalid, 
где n заменяется на фактическое значение, переданное в функцию.

Примеры кода

    prefill(3,1) --> [1,1,1]
    
    prefill(2, "abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> выбрасывает TypeError с сообщением "xyz is invalid".
*/