/*
DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. 
Negative zeros make no mathematical sense.


ПЕРЕВОД:
В этом простом задании вам дается число, и вы должны сделать его отрицательным. 
Но, может быть, число уже отрицательное?

Примеры:
Макенегатив(1); // возвращают -1
Макенегатив(-5); // возвращают -5
Макенегатив(0); // возвращают 0
Макенегатив(0,12); // возвращают -0,12

Записи:
Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
Ноль (0) не проверяется на наличие какого-либо определенного знака. 
Отрицательные нули не имеют никакого математического смысла.
*/

function makeNegative(num) {
    if (num > 0) {
      num *= -1;
    }
    return num;
}

console.log(makeNegative(5));
console.log(makeNegative(-10));