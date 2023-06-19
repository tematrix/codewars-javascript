/*
DESCRIPTION:
At a job interview, you are challenged to write an algorithm to check if a given string, s, 
can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears


ПЕРЕВОД:
На собеседовании вас попросили написать алгоритм для проверки того, может ли данная строка, s, 
может быть сформирована из двух других строк, part1 и part2.

Ограничение состоит в том, что символы в part1 и part2 должны располагаться в том же порядке, что и в s.

Интервьюер дает вам следующий пример и просит выяснить остальное из приведенных тестовых примеров.

Например:

'codewars' - это объединение 'cdw' и 'oears':

    s: c o d e w a r s = codewars
часть1: c d w = cdw
часть2: o e a r s = oears
*/

function isMerge(s, part1, part2) {
    if (s.length !== part1.length + part2.length) {return false;}
    
    let table = new Array(part2.length + 1);
    
    for (let i = 0; i <= part2.length; i++) {
      table[i] = new Array(part1.length + 1);
      
      for (let j = 0; j <= part1.length; j++) {
        if (i === 0 && j === 0) {
          table[i][j] = true;
        } else if (i === 0) {
          table[i][j] = (s[j - 1] === part1[j - 1] && table[i][j - 1]);
        } else if (j === 0) {
          table[i][j] = (s[i - 1] === part2[i - 1] && table[i - 1][j]);
        } else if (s[i + j - 1] === part1[j - 1] && table[i][j - 1]) {
          table[i][j] = true;
        } else if (s[i + j - 1] === part2[i - 1] && table[i - 1][j]) {
          table[i][j] = true;
        } else {
          table[i][j] = false;
        }
      }
    }
    
    return table[part2.length][part1.length];
}

console.log(isMerge('codewars','cdw','oears'));