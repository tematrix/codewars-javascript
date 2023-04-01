/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


ПЕРЕВОД:
Просто, учитывая строку слов, верните длину самого короткого слова(ов).

Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
*/

function findShort(s){
    const a = s.split(' ');
    let min = Infinity;
    a.forEach(e => {
      if (e.length < min) {
        min = e.length;
      }
    }); 
    return min;
}

console.log(findShort('Simple, given a string of words, return the length of the shortest word'));
console.log(findShort('String will never be empty and you do not need to account for different data types'));