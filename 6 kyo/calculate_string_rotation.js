/*
DESCRIPTION:
Write a function that receives two strings and returns n, 
where n is equal to the number of characters we should shift the first string forward to match the second. 
The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". 
In this case, the first string has been rotated 5 characters forward to produce the second string, 
so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1


ПЕРЕВОД:
Напишите функцию, которая получает две строки и возвращает n, 
где n равно количеству символов, на которое мы должны сдвинуть первую строку вперед, чтобы она совпала со второй. 
Проверка должна быть чувствительна к регистру.

Например, возьмем строки "fatigue" и "tiguefa". 
В этом случае первая строка была сдвинута на 5 символов вперед, чтобы получить вторую строку, 
поэтому будет возвращено 5.

Если вторая строка не является действительным вращением первой строки, метод возвращает -1.
Примеры:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"лось", "лось" => -1
"isn't", "'tisn" => 2
"эшам", "эшам" => 0
"собака", "бог" => -1
*/

function shiftedDiff(first, second) {
    if (first.length !== second.length) {
      return -1;
    }
    
    for (let i = 0; i < second.length; i++) {
      if (second.slice(i) + second.slice(0, i) === first) {
        return i;
      }
    }
    
    return -1;
}