/*
DESCRIPTION:
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


ПЕРЕВОД:
Вам будет дан массив чисел. 
Вы должны отсортировать нечетные числа по возрастанию, а четные оставить на прежних местах.

Примеры
[7, 1] => [1, 7]
[5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    let sub = [], result = [];
    array.forEach(e => {
      if (e % 2 != 0) {
        sub.push(e);
      }
    });
    sub.sort((a, b) => {return b - a});  
    array.forEach(e => {
      e % 2 != 0 ? result.push(sub.pop()) : result.push(e);       
    });  
    return result;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));