/*
DESCRIPTION:
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.


ПЕРЕВОД:
Вы получаете массив массивов.
Если отсортировать массивы по их длине, вы увидите, что значения их длин являются последовательными.
Но один массив отсутствует!

Вам нужно написать метод, который вернет длину отсутствующего массива.

Пример:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

Если массив массивов равен null/nil или пустой, метод должен вернуть 0.

Если массив в массиве равен null или пустой, метод также должен вернуть 0!
Всегда будет отсутствовать один элемент, и его длина всегда будет между заданными массивами.
*/

function getLengthOfMissingArray(a) {
    if (!a || a.length === 0 || a.some(e => !e || e.length === 0)) {return 0;}
    let l = a.map(e => e.length).sort((a,b) => a - b);
    for (let i = 1; i < l.length; i++) {
      if (l[i] - l[i-1] !== 1) {
        return l[i] - 1;
      }
    }
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));