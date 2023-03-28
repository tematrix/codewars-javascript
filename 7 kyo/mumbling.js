/*
DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


ПЕРЕВОД:
На этот раз никакой истории, никакой теории. Приведенные ниже примеры показывают вам, как написать функцию accum:

Примеры:
накопление("abcd") -> "A-Bb-Ccc-Dddd"
накопление("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Гггг"
накопление("cwAt") -> "C-Ww-Aaa-Tttt"

Параметр accum - это строка, которая включает в себя только буквы из a..z и A..Z.
*/

function accum(s) {
	const arr = s.split(''); let res = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i+1; j++) {
      if (j == 0) {
        res += arr[i].toUpperCase();
      } else {
        res += arr[i].toLowerCase();
      }      
    }
    if (i !== arr.length - 1) {
      res += '-';
    }
  }
  return res;
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));