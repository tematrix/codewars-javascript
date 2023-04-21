/*
DESCRIPTION:
Given an n x n array, return the array elements arranged from outermost elements 
to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; 
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


ПЕРЕВОД:
Дан массив размером n x n. Вернуть элементы массива, расположенные от внешних элементов 
к среднему элементу, двигаясь по часовой стрелке.

Массив:

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
Функция snail(array) должна вернуть [1,2,3,6,9,8,7,4,5].

Для лучшего понимания следуйте номерам в следующем массиве последовательно:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
Функция snail(array) должна вернуть [1,2,3,4,5,6,7,8,9].

Примечание: идея не в сортировке элементов от наименьшего значения к наибольшему; 
идея заключается в обходе двумерного массива в круговом порядке, двигаясь по часовой стрелке.

Примечание 2: пустая матрица 0x0 (empty matrix) представлена пустым массивом внутри массива [[]].
*/

function snail(arr) {
    let res = [];      
    if (arr.length <= 1) {        
        return arr[0];
    } else {
        for (let i = 0; i < arr[0].length; i++) {
            res.push(arr[0][i]);
        }
        arr.shift();
        for (let i = 0; i < arr.length; i++) {
            res.push(arr[i][arr[i].length-1]);
            arr[i].pop();
            arr[i].reverse();           
        }
        arr.reverse();
        return [...res, ...snail(arr)];
    }
}

console.log(snail([[1,2,3],[4,5,6],[7,8,9]]));