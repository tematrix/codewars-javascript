/*
DESCRIPTION:
You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.


ПЕРЕВОД:
Дан массив и значение лимита. 
Необходимо проверить, что все значения в массиве меньше или равны лимиту. 
Если все значения меньше или равны лимиту, вернуть true, иначе - false.

Можно предположить, что все значения в массиве являются числами.
*/

function smallEnough(a, limit){
    return a.every(e => e <= limit);
}

console.log(smallEnough([1,2,3,4], 4));
console.log(smallEnough([1,2,3,4], 2));