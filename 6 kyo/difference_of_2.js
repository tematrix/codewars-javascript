/*
DESCRIPTION:
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]


ПЕРЕВОД:
Задача состоит в том, чтобы вернуть все пары целых чисел из заданного массива целых чисел, у которых разница равна 2.

Массив результатов должен быть отсортирован в порядке возрастания значений.

Предполагается, что в массиве нет дублирующихся целых чисел. 
Порядок целых чисел во входном массиве не должен иметь значения.

Примеры
[1, 2, 3, 4] должно вернуть [[1, 3], [2, 4]]

[4, 1, 2, 3] также должно вернуть [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] должны возвращать [[1, 3]]

[4, 3, 1, 5, 6] следует вернуть [[1, 3], [3, 5], [4, 6]]
*/

function twosDifference(input){
    input.sort((a,b) => a - b);
    
    const pairs = [];
    
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if (input[j] - input[i] === 2) {
          pairs.push([input[i], input[j]]);
        }
      }
    }
    
    return pairs;
}