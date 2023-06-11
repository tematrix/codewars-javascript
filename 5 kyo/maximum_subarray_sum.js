/*
DESCRIPTION:
The maximum sum subarray problem consists in finding the maximum sum 
of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum 
is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. 
Note that the empty list or array is also a valid sublist/subarray.


ПЕРЕВОД:
Задача о максимальной сумме подмассива состоит в нахождении максимальной суммы 
непрерывной подпоследовательности в массиве или списке целых чисел:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// должно быть 6: [4, -1, 2, 1].

Простой случай - когда список состоит только из положительных чисел, а максимальная сумма 
является суммой всего массива. Если список состоит только из отрицательных чисел, вместо этого возвращается 0.

Считается, что пустой список имеет нулевую наибольшую сумму. 
Обратите внимание, что пустой список или массив также является допустимым подсписком/подмассивом.
*/

const maxSequence = function(arr){
    let max = 0, cur = 0;
    
    for (let i = 0; i < arr.length; i++) {
      cur += arr[i];
      
      if (cur > max) {
        max = cur;
      } else if (cur < 0) {
        cur = 0;
      }
    }
    
    return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));