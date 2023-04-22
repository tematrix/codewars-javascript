/*
DESCRIPTION:
Create a function that takes a positive integer and returns the next bigger number 
that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1


ПЕРЕВОД:
Создайте функцию, которая принимает положительное целое число и возвращает следующее большее число, 
которое может быть получено перестановкой его цифр. Например:

12 ==> 21
513 ==> 531
2017 ==> 2071

Если цифры не могут быть переставлены так, чтобы получить большее число, 
верните -1 (или nil в Swift, None в Rust):

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n){
    let s = String(n).split('');
    let l = [], r = [], e = false, t = '';

    for (let i = s.length-1; i > 0; i--) {
        if (s[i] > s[i-1]) {
            e = s[i-1];            
            l = s.slice(0, i-1);
            r = s.slice(i, s.length);
            break;                        
        }
    }

    if (!e) {
        return -1;
    }

    for (let i = r.length-1; i >= 0; i--) {
        if (e < r[i]) {
            t = r[i];
            r.splice(i, 1, e);
            break;            
        }
    }

    r.sort((a,b) => a-b);

    return Number([...l, t ,...r].join(''));
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));