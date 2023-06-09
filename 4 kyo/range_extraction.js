/*
DESCRIPTION:
A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
The range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns 
a correctly formatted string in the range format.

Example:
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


ПЕРЕВОД:
Формат для представления упорядоченного списка целых чисел - это список, разделенный запятыми, состоящий из:

- отдельных целых чисел; 
- или диапазона целых чисел, обозначенного начальным числом, разделенным от конечного числа диапазона дефисом, "-". 
Диапазон включает все целые числа в интервале, включая оба конца. Диапазон не считается диапазоном, 
если он содержит менее трех чисел. Например: "12,13,15-17".
Завершите решение таким образом, чтобы оно принимало список целых чисел в порядке возрастания 
и возвращало правильно отформатированную строку в формате диапазона.

Пример:
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// вернет "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    let result = [], start = list[0], end = '';
    for (let i = 0; i < list.length; i++) {
      if (list[i+1]-list[i] === 1) {
        end = list[i+1];
      } else if (end !== '' && end - start !== 1) {
        result.push(`${start}-${end}`);
        start = list[i+1];
        end = '';
      } else if (end !== '') {
        result.push(`${start},${end}`);
        start = list[i+1];
        end = '';
      } else {
        result.push(`${start}`);
        start = list[i+1];
      }
    }
    return result.join(',');  
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));