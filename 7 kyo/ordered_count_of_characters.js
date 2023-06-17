/*
DESCRIPTION:
Count the number of occurrences of each character and return it 
as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


ПЕРЕВОД:
Подсчитайте количество вхождений каждого символа и верните его 
в виде (списка кортежей) в порядке появления. Для пустого вывода возвращается (пустой список).

Точную реализацию структуры данных в зависимости от языка можно узнать из комплекта решения.

Пример:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]].
*/

function orderedCount(text) {
    const list = new Map();
  
    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      list.set(letter, (list.get(letter) || 0) + 1);
    }
  
    const result = [];
    list.forEach((count, letter) => {
      result.push([letter, count]);
    });
  
    return result;
}

console.log(orderedCount("abracadabra"));