/*
DESCRIPTION:
You are given a list/array which contains only integers (positive and negative). 
Your job is to sum only the numbers that are the same and consecutive. 
The result should be one list.

Extra credit if you solve it in one line. 
You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]


ПЕРЕВОД:
Вам дан список/массив, который содержит только целые числа (положительные и отрицательные). 
Ваша задача - сложить только числа, которые являются одинаковыми и идут подряд. 
Результат должен быть представлен в виде списка/массива.

Бонусное задание: решите задачу в одну строку. 
Вы можете предположить, что никогда не будет пустого списка/массива, 
и всегда будет хотя бы одно целое число.

Примеры:

[1, 4, 4, 4, 0, 4, 3, 3, 1] # должен вернуть [1, 12, 0, 4, 6, 1]

"Как видите, сумма последовательных единиц равна 1,
сумма трех последовательных четверок равна 12,
сумма нулей равна 0 и сумма двух последовательных троек равна 6..."

[1, 1, 7, 7, 3] # должен вернуть [2, 14, 3]
[-5, -5, 7, 7, 12, 0] # должен вернуть [-10, 14, 12, 0]
*/

function sumConsecutives(s) {
    let p = s[0];
    for (let i = 1; i < s.length; i++) {
      if (s[i] === p) {
        s[i-1] = s[i-1] + p;
        s.splice(i,1); i--;
      } else {
        p = s[i];
      }
    }
    return s;
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]));
console.log(sumConsecutives([1, 1, 7, 7, 3]));
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]));