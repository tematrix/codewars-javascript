/*
DESCRIPTION:
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

ПЕРЕВОД:
Основная идея заключается в подсчете всех встречающихся символов в строке.
Если у вас есть строка, например, "aba", то результат должен быть {'a': 2, 'b': 1}.

Что, если строка пуста? Тогда результатом должен быть пустой объект, {} (пустой литерал объекта).
*/

function count(string) {
    let result = {};
    for (let e of string) {
      if (result[e]) {
        result[e]++;
      } else {
        result[e] = 1;
      }
    }
    return result;
}

console.log(count('Hello'));