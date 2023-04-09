/*
DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


ПЕРЕВОД:
Напишите алгоритм, который берет массив и перемещает все нули в конец, 
сохраняя порядок остальных элементов.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);      
        arr.push(0);
        n--;
        i--;
      }
    }
    return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));