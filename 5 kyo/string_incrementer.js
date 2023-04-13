/*
DESCRIPTION:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


ПЕРЕВОД:
Ваша задача - написать функцию, которая увеличивает строку, чтобы создать новую строку.

Если строка уже заканчивается числом, то это число должно быть увеличено на 1.
Если строка не заканчивается числом, то к новой строке должно быть добавлено число 1.
Примеры:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Внимание: Если в числе есть ведущие нули, необходимо учитывать количество цифр.
*/

function incrementString (t) {
    if (t == '') {return '1';}
    let num = t.match(/[0-9]/gi),
        ltr = t.match(/[A-Z]/gi);        
    if (num == null) {return t + '1';}
    if (ltr == null) {ltr = [];}
    let len = num.length; 
    num = +(num.join('')) + 1;
    let n = len - String(num).length;
    if (n < 0) {n = 0;}
    return ltr.join('') + '0'.repeat(n) + num;
}

console.log(incrementString('foo'));
console.log(incrementString('foobar23'));
console.log(incrementString('foo0042'));
console.log(incrementString('foo9'));
console.log(incrementString('foo099'));