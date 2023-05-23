/*
DESCRIPTION:
Write a function that takes an array of strings as an argument and returns 
a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, 
so you will not have to decide how to order multiple strings of the same length.


ПЕРЕВОД:
Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, 
содержащий те же строки, упорядоченные от самой короткой до самой длинной.

Например, если этот массив был передан в качестве аргумента:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Ваша функция вернет следующий массив:

["Eyes", "Glasses", "Monocles", "Telescopes"]

Все строки в массиве, переданном в вашу функцию, будут разной длины, 
поэтому вам не нужно будет решать, как упорядочить несколько строк одинаковой длины.
*/

function sortByLength (array) {
    return array.sort((a,b) => {
      if (a.length > b.length) {return 1;}
      if (a.length < b.length) {return -1;}
      if (a.length == b.length) {return 0;}
    });
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));