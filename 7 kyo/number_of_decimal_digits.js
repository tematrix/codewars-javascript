/*
DESCRIPTION:
Determine the total number of digits in the integer (n>=0) given as input to the function. 
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. 
Be careful to avoid overflows/underflows.

All inputs will be valid.


ПЕРЕВОД:
Определите общее количество цифр в целом числе (n>=0), данном в качестве входных данных для функции.
Например, число 9 имеет одну цифру, число 66 имеет 2 цифры, а число 128685 имеет 6 цифр.
Будьте внимательны, чтобы избежать переполнения/недостатка памяти.

Все входные данные будут допустимы.
*/

function digits(n) {
    return String(n).length;
}

console.log(digits(9));
console.log(digits(66));
console.log(digits(128685));