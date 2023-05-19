/*
DESCRIPTION:
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'


ПЕРЕВОД:
Дана переменная n.
Если n - целое число, вернуть строку с дефисными знаками '-' перед и после каждого нечетного целого числа, 
но не начинать и не заканчивать строку дефисом. Если n отрицательное, то знак минус должен быть удален.

Если n не является целым числом, вернуть строку "NaN".

Пример:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
    if (num === 0) {return '0';}
    if (/\./.test(String(num)) || !num) {return 'NaN';}
    if (num < 0) {num *= -1;}
    if (String(num).length === 1) {return `${num}`;}
    
    return String(num).replace(/[1,3,5,7,9]/g, '-$&-')
                      .replace(/^-/, '')
                      .replace(/-$/, '')
                      .replace(/-{2,}/g, '-');
}

console.log(dashatize(274));
console.log(dashatize(6815));