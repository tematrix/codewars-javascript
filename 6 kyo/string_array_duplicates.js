/*
DESCRIPTION:
In this Kata, you will be given an array of strings and your task is to 
remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.


ПЕРЕВОД:
В этом Ката вам будет дан массив строк, и ваша задача состоит в том, чтобы 
удалить все последовательные дубликаты букв из каждой строки в массиве.

Например:

dup(["abracadabra", "allottee", "assessee"]) = ["abracadabra", "alote", "asese"].

dup(["kelless", "keenness"]) = ["keles", "kenes"].

Строки будут только в нижнем регистре, без пробелов. Дополнительные примеры см. в тестовых примерах.
*/

function dup(s) {
    return s.map(e => {
      let result = '';
      
      for (let i = 0; i < e.length; i++) {
        if (e[i] !== e[i+1]) {
          result += e[i];
        }
      }
      
      return result;
    });
}