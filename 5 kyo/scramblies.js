/*
DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False


ПЕРЕВОД:
Реализуйте функцию scramble(str1, str2), которая возвращает true, если часть символов из str1 
может быть переставлена так, чтобы получить str2, в противном случае возвращает false.

Примечания:

Входные строки содержат только символы в нижнем регистре (a-z). Никаких знаков препинания или цифр не будет.
Необходимо учитывать производительность.

Примеры:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
    let c = {}, k = 0;
    for (let i = 0; i < str2.length; i++) {
      if (!c[str2[i]]) {
        c[str2[i]] = 0;
        k++;
      }
      c[str2[i]]++;
    }
    for (let i = 0; i < str1.length; i++) {
      if (!c[str1[i]]) {continue;}
      if (!--c[str1[i]] && !--k) {return true;}
    }
    return false;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));