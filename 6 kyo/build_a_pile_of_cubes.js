/*
DESCRIPTION:
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of the cube above will have volume of 
and so on until the top which will have a volume of 

You are given the total volume m of the building. Being given m can you find 
the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer 
m and you have to return the integer n such as m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1


ПЕРЕВОД:
Ваша задача - построить здание, которое будет представлять собой кучу из n кубиков. 
Объем куба внизу будет равен объему куба вверху, объем куба вверху будет равен 
и так далее до самого верха, объем которого будет равен 

Вам дан общий объем m здания. Имея m, можете ли вы найти 
количество n кубов, которые вам придется построить?

Параметром функции findNb (find_nb, find-nb, findNb, ...) будет целое число 
m, а вы должны вернуть целое число n, такое как m, если такое n существует, или -1, если такого n нет.

Примеры:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
*/

function findNb(m) {
    let n = 0, sum = 0;
    
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    
    return sum === m ? n : -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));