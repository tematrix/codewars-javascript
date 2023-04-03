/*
DESCRIPTION:
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


ПЕРЕВОД:
Ваша цель в этом ката - реализовать разностную функцию, 
которая вычитает один список из другого и возвращает результат.

Он должен удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.

разница в массиве([1,2],[1]) == [2]
Если значение присутствует в b, все его вхождения должны быть удалены из другого:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    for (let j of b) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] === j) {
          a.splice(i, 1);
          i--;
        }
      }
    }
    return a;
}

console.log(arrayDiff([1,2,2,2,3],[2]));