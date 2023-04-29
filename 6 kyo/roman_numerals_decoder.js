/*
DESCRIPTION:
Create a function that takes a Roman numeral as its argument and returns its value 
as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number 
to be encoded separately, starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" 
(2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
solution('XXI'); // should return 21


ПЕРЕВОД:
Создайте функцию, которая принимает римское число в качестве аргумента и возвращает его значение
в виде числового десятичного целого числа. Вам не нужно проверять правильность формы римского числа.

Современные римские цифры записываются, выражая каждую десятичную цифру числа отдельно,
начиная с самой левой цифры и пропуская любые 0. Так, 1990 записывается как "MCMXC" (1000 = M, 900 = CM, 90 = XC),
а 2008 записывается как "MMVIII" (2000 = MM, 8 = VIII). Римское число 1666, "MDCLXVI", использует каждую букву в
убывающем порядке.

Пример:
solution('XXI'); // должна вернуть 21
*/

function solution (roman) {
    let o = 'IVX', t = 'XLC', h = 'CDM', m = 'M';
    let mR = roman.match(/^[M]+/),
        hR = roman.match(/(?<![X])[CD]+M?/),
        tR = roman.match(/(?<![I])[LX]+C?/),
        oR = roman.match(/[IV]+X?$/);
    return  u(mR, m)*1000 + u(hR, h)*100 + u(tR, t)*10 + u(oR, o);
}

function u(n, a) {
    if (n) {        
        switch(n[0]) {
            case a[0]: return 1;
            case a[0]+a[0]: return 2;
            case a[0]+a[0]+a[0]: return 3;
            case a[0]+a[1]: return 4;
            case a[1]: return 5;
            case a[1]+a[0]: return 6;
            case a[1]+a[0]+a[0]: return 7;
            case a[1]+a[0]+a[0]+a[0]: return 8;
            case a[0]+a[2]: return 9;
            default: return 0;
        }
    } else {
        return 0;
    }
}

console.log(solution('XXI'));
console.log(solution('MCMXC'));
console.log(solution('MDCLXVI'));