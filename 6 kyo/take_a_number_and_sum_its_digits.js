/*
DESCRIPTION:
We need a function to collect these numbers, that may receive two integers a, b 
that defines the range [a,b] (inclusive) and outputs a list of the sorted 
numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a,b] the function should output an empty list.

90, 100 --> []


ПЕРЕВОД:
Нам нужна функция, которая соберет числа, удовлетворяющие описанному выше свойству, 
и которая может получать два целых числа a и b, определяющих диапазон [a, b] (включительно), 
и возвращает список отсортированных чисел в диапазоне.

Примеры:
Давайте рассмотрим несколько случаев (ввод -> вывод):

1, 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

Если в диапазоне [a, b] нет чисел, удовлетворяющих этому свойству, функция должна выводить пустой список.

90, 100 --> []
*/

function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
      let s = String(i).split(''), l = 0;
      for (let j = 0; j < s.length; j++) {
        l += Number(s[j])**(j+1); 
      }
      if (i === l) {
        result.push(i);
      }
    }
    return result;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));