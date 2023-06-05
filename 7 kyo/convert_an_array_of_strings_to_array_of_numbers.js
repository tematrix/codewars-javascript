/*
DESCRIPTION:
Some really funny web dev gave you a sequence of numbers 
from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence 
of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.


ПЕРЕВОД:
В этой задаче нам нужно написать функцию, которая принимает в качестве 
параметра последовательность чисел, представленных в виде строк, 
и возвращает последовательность чисел того же типа.

Другими словами, мы должны преобразовать каждый элемент входного массива, 
чтобы он имел правильный тип данных. Если элемент представляет собой целое число, 
мы должны преобразовать его в тип number. Если элемент представляет собой число с 
плавающей точкой, мы должны преобразовать его в тип float.
*/

function toNumberArray(stringarray){
    return stringarray.map(e => +e);
}

console.log(toNumberArray(["1", "2", "3"]));