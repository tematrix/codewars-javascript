/*
DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


ПЕРЕВОД:
Проверьте, содержит ли строка одинаковое количество "x" и "o". 
Метод должен возвращать логическое значение и быть нечувствительным к регистру. 
Строка может содержать любой символ.

Примеры ввода/вывода:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // при отсутствии 'x' и 'o' должно возвращаться значение true
XO("zzoo") => false
*/

function XO(str) {
    const fun = (a, i) => {return a.filter(item => item === i);}, arr = str.toLowerCase().split('');
    if (fun(arr, 'x').length === fun(arr, 'o').length) {
        return true;
    }
    return false;   
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));