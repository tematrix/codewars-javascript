/*
DESCRIPTION:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


ПЕРЕВОД:
Вам предоставляется массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. 
Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением
единственного целого N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот "выброс" N.

Примеры
[2, 4, 0, 100, 4, 11, 2602, 36]
Должно вернуться: 11 (единственное нечетное число)

[160, 3, 1719, 19, 11, 13, -21]
Должно вернуться: 160 (единственное четное число)
*/

function findOutlier(ints){
    let a = [];  
    for (let i of ints) {
      if (i % 2 === 0) {
        a.push(i);
      }
    }  
    if (a.length === 1) {
      return a[0];
    }  
    for (let i of ints) {
      if (i % 2 !== 0) {
        return i;
      }
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));