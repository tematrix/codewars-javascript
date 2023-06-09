/*
DESCRIPTION:
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.


ПЕРЕВОД:
Вы получите число, и вам нужно вернуть его в виде строки в расширенной форме. Например:

expandedForm(12); // Должно вернуть '10 + 2'
expandedForm(42); // Должно вернуть '40 + 2'
expandedForm(70304); // Должно вернуть '70000 + 300 + 4'

Примечание: Все числа будут целыми числами, большими 0.
*/

function expandedForm(num) {
    num = `${num}`.split(''); let z = '';
    for (let i = num.length-1; i >= 0; i--) {
      num[i] = num[i] + z;
      z += '0';
    }
    for (let i = 0; i < num.length; i++) {
      if (+num[i] == 0) {
        num.splice(i, 1);
        i--;
      }
    }
    return num.join(' + '); 
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));