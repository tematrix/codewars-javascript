/*
DESCRIPTION:
As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


ПЕРЕВОД:
В рамках этой задачи вам нужно создать функцию, которая, получив на вход три числа, 
вернет индекс числа, которое лежит между двумя другими числами.

На вход функции будет подан массив из трех различных чисел (в Haskell - кортеж).

Например:

gimme([2, 3, 1]) => 0
2 - это число, которое находится между 1 и 3, а индекс 2 во входном массиве равен 0.

Другой пример (чтобы убедиться, что все понятно):

gimme([5, 10, 14]) => 1
10 - это число, которое находится между 5 и 14, а индекс 10 во входном массиве равен 1.
*/

function gimme (triplet) {
    const sorted = [...triplet].sort((a,b)=>a-b);
    return triplet.indexOf(sorted[1]);
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));