/*
DESCRIPTION:
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
It's easy to see that the sum of the perimeters of these squares is : 
4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle 
when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

The function perimeter has for parameter n where n + 1 is the number of squares 
(they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216


ПЕРЕВОД:
На рисунке изображены 6 квадратов, стороны которых имеют длину 1, 1, 2, 3, 5, 8. 
Легко видеть, что сумма периметров этих квадратов равна : 
4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Назовите сумму периметров всех квадратов прямоугольника 
если в нем n + 1 квадратов, расположенных так же, как на рисунке:

альтернативный текст

Подсказка:
См. последовательность Фибоначчи

Функция периметра имеет параметр n, где n + 1 - количество квадратов. 
(они нумеруются от 0 до n) и возвращает общий периметр всех квадратов.

периметр(5) должен возвращать 80
периметр(7) должен возвращать 216
*/

function perimeter(n) {
    if (n === 0) {return 4;}
    
    let fib = [1, 1];
    
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return 4 * fib.reduce((s,e) => s + e, 0);
}

console.log(perimeter(5));
console.log(perimeter(7));