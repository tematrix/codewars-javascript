/*
DESCRIPTION:
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
capitals('CodEWaRs'), [0,3,4,6];


ПЕРЕВОД:
Напишите функцию, которая принимает в качестве аргумента одну строку (слово).
Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.

Пример:
capitals('CodEWaRs') должна вернуть [0,3,4,6].
*/

const capitals = (word) => {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {result.push(i);}
    }
    return result;
};

console.log(capitals('CodEWarS'));