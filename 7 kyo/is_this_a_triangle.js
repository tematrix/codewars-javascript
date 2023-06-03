/*
DESCRIPTION:
Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with 
the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


ПЕРЕВОД:
Реализуйте функцию, которая принимает 3 целых числа a, b, c.
Функция должна возвращать true, если можно построить треугольник с длинами сторон,
равными заданным значениям, и false в любом другом случае.

(В этом случае все треугольники должны иметь площадь больше 0, чтобы быть принятыми).
*/

function isTriangle(a,b,c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(2,3,4));