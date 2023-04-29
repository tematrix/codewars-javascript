/*
DESCRIPTION:
Create a function taking a positive integer between 1 and 3999 (both included) as its 
parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with 
the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution(1000); // should return 'M'


ПЕРЕВОД:
Создайте функцию, которая принимает положительное целое число от 1 до 3999 (включительно)
в качестве параметра и возвращает строку, содержащую римское числовое представление этого числа.

Современные римские цифры записываются, выражая каждую цифру отдельно, начиная с самой левой цифры
и пропуская любую цифру со значением нуля.
В римских цифрах 1990 записывается как: 1000=M, 900=CM, 90=XC; в результате получается MCMXC.
2008 записывается как 2000=MM, 8=VIII; или MMVIII. 1666 использует каждый римский символ в
убывающем порядке: MDCLXVI.

Пример:
solution(1000); // должна вернуть 'M'
*/

function solution(number){
    if (number < 1 || number >= 4000) {
        return false;
    } else {
        let o = 'IVX', t = 'XLC', h = 'CDM', m = 'M';
        let n = String(number);
        switch(n.length) {
            case 1: return c(n[0],o);             
            case 2: return c(n[0],t) + c(n[1],o);
            case 3: return c(n[0],h) + c(n[1],t) + c(n[2],o);
            case 4: return c(n[0],m) + c(n[1],h) + c(n[2],t) + c(n[3],o);
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
}

console.log(solution(1000));
console.log(solution(1990));
console.log(solution(2008));