/*
DESCRIPTION:
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


ПЕРЕВОД:
Даны две строки s1 и s2, содержащие только буквы от a до z. 
Необходимо вернуть новую отсортированную строку, максимально длинную, содержащую уникальные буквы - 
каждая буква должна встречаться только один раз - из s1 или s2.

Примеры:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let t = s1 + s2, a = [];
    t = t.split('').sort();
    let set = new Set(t);
    set.forEach(e => {
       a.push(e);
    });
    return a.join('');    
}

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));