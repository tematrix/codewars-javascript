/*
DESCRIPTION:
In this kata, you should calculate type of triangle 
with three given sides a, b and c (given in any order).

If all angles are less than 90°, 
this triangle is acute and function should return 1.

If one angle is strictly 90°, 
this triangle is right and function should return 2.

If one angle more than 90°, 
this triangle is obtuse and function should return 3.

If three sides cannot form triangle, 
or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. 
All input values are non-negative floating point or integer numbers (or both).

Examples:
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)


ПЕРЕВОД:
В этой задаче вам нужно определить тип треугольника 
по трем заданным сторонам a, b и c (заданным в любом порядке).

Если все углы меньше 90°, то треугольник 
является остроугольным, и функция должна вернуть 1.

Если один угол строго равен 90°, то треугольник 
прямоугольный, и функция должна вернуть 2.

Если один угол больше 90°, то треугольник 
тупоугольный, и функция должна вернуть 3.

Если три стороны не могут образовать треугольник, 
или один угол равен 180° (что превращает треугольник в отрезок), функция должна вернуть 0.

Входными параметрами являются стороны заданного треугольника. 
Все входные значения - это неотрицательные числа с плавающей запятой или целые числа (или оба).

Примеры:
triangleType(2, 4, 6); // вернет 0 (не является треугольником)
triangleType(8, 5, 7); // вернет 1 (остроугольный треугольник, углы приблизительно 82°, 38° и 60°)
triangleType(3, 4, 5); // вернет 2 (прямоугольный треугольник, углы приблизительно 37°, 53° и точно 90°)
triangleType(7, 12, 8); // вернет 3 (тупоугольный треугольник, углы приблизительно 34°, 106° и 40°)
*/