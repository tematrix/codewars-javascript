/*
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


ПЕРЕВОД:
Напишите функцию, которая складывает два числа и возвращает их сумму в двоичной форме.
Преобразование может быть выполнено до или после сложения.

Возвращаемое двоичное число должно быть строкой.

Примеры:(Ввод1, Ввод2 --> Вывод (объяснение)))

1, 1 --> "10" (1 + 1 = 2 в десятичной системе или 10 в двоичной системе)
5, 9 --> "1110" (5 + 9 = 14 в десятичной системе или 1110 в двоичной системе)
*/

function addBinary(a,b) {
    return (a + b).toString(2);
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));