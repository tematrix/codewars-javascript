/*
DESCRIPTION:
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Note: The order of the permutations doesn't matter.


ПЕРЕВОД:
В этом ката вам предстоит создать все перестановки непустой входной строки и удалить дубликаты, если они есть.

Создайте как можно больше "перемешиваний"!

Примеры:

Для входной строки 'a':
Ваша функция должна вернуть: ['a']

Для входной строки 'ab':
Ваша функция должна вернуть ['ab', 'ba']

Для входной строки 'abc':
Ваша функция должна вернуть ['abc','acb','bac','bca','cab','cba']

Для входной строки 'aabb':
Ваша функция должна вернуть ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Примечание: порядок перестановок не имеет значения.
*/

function permutations(string) {
    if (string.length === 1) {return [string];}
    let r = [];
    for (let i = 0; i < string.length; i++) {
      let l = string[i],
          a = string.slice(0,i) + string.slice(i+1),
          p = permutations(a);
      for (let j = 0; j < p.length; j++) {
        r.push(l + p[j]);
      }
    }
      return [...new Set(r)].sort();
}

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('abc'));
console.log(permutations('aabb'));