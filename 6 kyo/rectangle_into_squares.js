/*
DESCRIPTION:
The drawing below gives an idea of how to cut a given "true" rectangle into squares 
("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, 
PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)

sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1]
  
You can see examples for your language in **"SAMPLE TESTS".**


ПЕРЕВОД:
Приведенный ниже рисунок дает представление о том, как разрезать заданный 
"истинный" прямоугольник на квадраты ("истинный" прямоугольник означает, что два измерения различны).

альтернативный текст

Можете ли вы перевести этот рисунок в алгоритм?

Вам будут даны два измерения

целое положительное число длины
целое положительное число ширины.
Вы вернете коллекцию или строку (в зависимости от языка; Shell bash, 
PowerShell, Pascal и Fortran возвращают строку) с размером каждого из квадратов.

Примеры в общем виде:
(в зависимости от языка)

sqInRect(5, 3) должен возвращать [3, 2, 1, 1]
sqInRect(3, 5) должен возвращать [3, 2, 1, 1].
  
Вы можете посмотреть примеры для вашего языка в **"SAMPLE TESTS".**.

Переведено с помощью www.DeepL.com/Translator (бесплатная версия)
*/

function sqInRect(lng, wdth){
    if (lng === wdth) {return null;}
    const result = [];
    while (lng > 0 && wdth > 0) {
      const s = Math.min(lng, wdth);
      result.push(s);
      lng > wdth ? lng -= s : wdth -= s;
    }
    return result;
}

console.log(sqInRect(5, 3));
console.log(sqInRect(3, 5));