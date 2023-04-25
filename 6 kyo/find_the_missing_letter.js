/*
DESCRIPTION:
Write a method that takes an array of consecutive (increasing) 
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)


ПЕРЕВОД:
Напишите метод, который принимает на вход массив последовательных (возрастающих) 
букв и возвращает отсутствующую букву в массиве.

Вы всегда получите допустимый массив. И в нем всегда будет ровно одна отсутствующая буква. 
Длина массива всегда будет не менее 2. В массиве всегда будут буквы только в одном регистре.

Примеры:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Используйте английский алфавит с 26 буквами!)
*/

function findMissingLetter(array) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let e = 0;
    for (let i = 0; i < alpha.length; i++) {
      if (alpha[i] == array[0]) {e = i; break;}
    }
    for (let i = 0; i < array.length; i++) {
      if(array[i] !== alpha[i+e]) {return alpha[i+e];}
    }
    return 'There is no missing letter';
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));