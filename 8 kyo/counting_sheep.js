/*
DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined


ПЕРЕВОД:
Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своем месте.
Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствует).

Например,

[правда, правда, правда, ложь,
правда, правда, правда, правда ,
правда, ложь, истина, ложь,
истинные, ложные, ложного, правда ,
правда, правда, правда, правда ,
ложь, ложь, правда, правда]
Правильным ответом было бы 17.

Подсказка: Не забудьте проверить наличие неверных значений, таких как null/undefined
*/

function countSheeps(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i]) {
        s++;
      }
    }
    return s;
}

let arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

console.log(countSheeps(arr));