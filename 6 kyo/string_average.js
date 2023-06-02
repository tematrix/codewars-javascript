/*
DESCRIPTION:
You are given a string of numbers between 0-9. 
Find the average of these numbers and return it as a floored whole 
number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"


ПЕРЕВОД:
Вам дана строка чисел от 0 до 9.
Найдите среднее значение этих чисел и верните его как округленное 
целое число (без десятичных знаков), записанное строкой. Например:

"zero nine five two" -> "four"

Если строка пуста или содержит число больше 9, верните "n/a".
*/

function averageString(str) {
    const result = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
          s = str.split(' '),
          num = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 
                 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    
    let sum = 0;
    for (let e of s) {
      if (num.hasOwnProperty(e)) {
        sum += num[e];
      } else {
        return 'n/a';
      }
    }
    
    return result[Math.floor(sum/s.length)];
}

console.log(averageString("zero nine five two"));