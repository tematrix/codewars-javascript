/*
DESCRIPTION:
Given a string made up of letters a, b, and/or c, switch the position 
of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'


ПЕРЕВОД:
Дана строка, состоящая из букв a, b и/или c. 
Поменяйте местами буквы a и b (замените a на b и наоборот). 
Оставьте все вхождения c нетронутыми.

Пример:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
    let a = x.split(''), r = [];
    for (let e of a) {
      e === 'a' ? r.push('b') : e === 'b' ? r.push('a') : r.push('c');
    }
    return r.join('');
}

console.log(switcheroo('acb'));
console.log(switcheroo('aabacbaa'));