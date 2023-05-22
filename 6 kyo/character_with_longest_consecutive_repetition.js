/*
DESCRIPTION:
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]

where l (or L) is the length of the repetition. 
If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]


ПЕРЕВОД:
Для данной строки s найдите символ c (или C) с наибольшим количеством 
последовательных повторений и верните:

[c, l]

где l (или L) - длина повторения.
Если есть два или более символа с одинаковой l, верните первый символ в порядке появления.

Для пустой строки верните:
["", 0]
*/

function longestRepetition(s) {
    if (!s) {return ["",0];}
    let c = s[0], max = 1, cur = 1;
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i-1]) {
        cur++;      
        if (cur > max) {
          c = s[i];
          max = cur;
        }
      } else {
        cur = 1;
      }
    }  
    return [c, max];
}

console.log(longestRepetition('Hello'));