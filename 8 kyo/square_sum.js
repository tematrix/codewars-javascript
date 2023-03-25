/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2+2^2+2^2=9

ПЕРЕВОД:
Завершите функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное в нее число, а затем суммировала результаты.

Например, для [1, 2, 2] он должен возвращать 9
1^2+2^2+2^2=9
*/

function squareSum(numbers){
    if (numbers) {
      let r = 0;
      for (let i = 0; i < numbers.length; i++) {
        r += numbers[i]**2;
      }
      return r;
    } else {
      return 0;
    }
}

console.log(squareSum([1,2,2]));