/*
DESCRIPTION:
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s


ПЕРЕВОД:
Напишите функцию, которая при заданном числе >= 0 возвращает массив подмассивов возрастающей длины.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Примечание: подмассивы должны быть заполнены единицами.
*/

function pyramid(n) {
    if (n <= 0) {return [];}
    let a = [];
    for (let i = 1; i <= n; i++) {
      a.push(Array(i).fill(1));
    }
    return a;
}

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));