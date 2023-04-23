/*
DESCRIPTION:
Write two functions that convert a roman numeral to and from an integer value. 
Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting 
with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1


ПЕРЕВОД:
Написать две функции, которые преобразуют римское число в целое число и обратно. 
Обе функции будут тестироваться на нескольких значениях римских чисел.

Современные римские числа записываются путем выражения каждой цифры отдельно, 
начиная с самой левой цифры и пропуская любую цифру со значением ноль. 
Например, число 1990 записывается как 1000=M, 900=CM, 90=XC, что дает в итоге MCMXC. 
Число 2008 записывается как 2000=MM, 8=VIII, или MMVIII. Число 1666 записывается, 
используя каждый римский символ в порядке убывания: MDCLXVI.

Диапазон входных данных: 1 <= n < 4000

В этом задании число 4 должно быть записано как IV, а не IIII (как в часах).

Примеры:
toRoman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
400 -> "CD"
90 -> "XC"
40 -> "XL"
1 -> "I"

fromRoman:
"MM" -> 2000
"MDCLXVI" -> 1666
"M" -> 1000
"CD" -> 400
"XC" -> 90
"XL" -> 40
"I" -> 1
*/

class RomanNumerals {
  static toRoman(Number) {
    if (Number < 1 || Number >= 4000) {
        return false;
    } else {
        let o = ['I', 'V', 'X'], t = ['X', 'L', 'C'], h = ['C', 'D', 'M'], m = ['M'];
        let num = String(Number);
        switch(num.length) {
            case 1: return c(num[0], o);             
            case 2: return c(num[0], t) + c(num[1], o);
            case 3: return c(num[0], h) + c(num[1], t) + c(num[2], o);
            case 4: return c(num[0], m) + c(num[1], h) + c(num[2], t) + c(num[3], o);
        }
    }    
  }

  static fromRoman(Number) {    
    let o = ['I', 'V', 'X'], t = ['X', 'L', 'C'], h = ['C', 'D', 'M'], m = ['M'];
    let mR = Number.match(/^[M]+/),
        hR = Number.match(/(?<![X])[CD]+M?/),
        tR = Number.match(/(?<![I])[LX]+C?/),
        oR = Number.match(/[IV]+X?$/);       
    return  u(mR, m)*1000 + u(hR, h)*100 + u(tR, t)*10 + u(oR, o);
  }
}

function c(n, a) {
    let r = [];
    switch(n) {
        case '1': r.push(a[0]); break;
        case '2': r.push(a[0]+a[0]); break;
        case '3': r.push(a[0]+a[0]+a[0]); break;
        case '4': r.push(a[0]+a[1]); break;
        case '5': r.push(a[1]); break;
        case '6': r.push(a[1]+a[0]); break;
        case '7': r.push(a[1]+a[0]+a[0]); break;
        case '8': r.push(a[1]+a[0]+a[0]+a[0]); break;
        case '9': r.push(a[0]+a[2]); break;
        default: r.push('');
    }
    return r.join('');
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