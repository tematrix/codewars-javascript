/*
DESCRIPTION:
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.


ПЕРЕВОД:
Найти число с наибольшим количеством цифр.

Если два числа в исходном массиве имеют одинаковое количество цифр, вернуть первое из них в массиве.
*/

function findLongest(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (String(array[i]).length > String(max).length) {
        max = array[i];
      }
    }
    return max;
}

console.log(findLongest([1,123,34,5555,14,345,78]));