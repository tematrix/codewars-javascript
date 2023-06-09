/*
DESCRIPTION:
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. 
Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, 
using asterisk (*) characters. Trailing spaces should be removed, and every line must be 
terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, 
as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"


ПЕРЕВОД:
Джеймс попросил у вас помощи в создании алгоритма для вывода на экран ромбовидной фигуры из звездочек. 
Его девушка Джейми любит бриллианты, и хочет, чтобы Джеймс ей сделал такую фигуру. 

Вот задание:

Необходимо вернуть строку, которая будет выглядеть как ромб из звездочек, когда ее выведут на экран. 
Звездочки должны быть разделены пробелами, а каждая строка должна заканчиваться символом новой строки (\n).

Если входное число является четным или отрицательным, то нужно вернуть null/nil/None/..., 
так как невозможно создать ромб нечетного размера.
*/

function diamond(n){
    if (n % 2 === 0 || n < 1) {return null;}
    let r = [], m = Math.ceil(n/2), k = n;
    for (let i = 0; i < m; i++) {
      r.push(' '.repeat(i) + '*'.repeat(k) + '\n');
      k -= 2;
    }
    return r.length > 1 ? [...r.slice(1).reverse(), ...r].join('') : r.join('');
}

console.log(diamond(3));
console.log(diamond(5));