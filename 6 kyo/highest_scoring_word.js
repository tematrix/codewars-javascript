/*
DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


ПЕРЕВОД:
Дана строка слов, вам нужно найти слово с наибольшим баллом.

Каждая буква слова оценивается определенным количеством очков в соответствии 
с ее позицией в алфавите: a = 1, b = 2, c = 3 и так далее.

Например, балл слова abad равен 8 (1 + 2 + 1 + 4).

Вам нужно вернуть слово с наибольшим баллом в виде строки.

Если два слова получают одинаковый балл, верните слово, которое появляется раньше в исходной строке.

Все буквы будут в нижнем регистре, а все входные данные будут допустимыми.
*/

function high(x){
    const a = ' abcdefghijklmnopqrstuvwxyz';
    let h = '', b = [];
    
    x = x.toLowerCase().split(' ');
  
    for (let e of x) {
      let c = 0;
      for (let i of e) {
        c += a.indexOf(i);
      }
      b.push([e,c]);
    }
    
    h = b[0];
    for (let i = 1; i < b.length; i++) {
       if (b[i][1] > h[1]) {
          h = b[i];
       }
    }
 
    return h[0]; 
}

console.log(high('You need to return the highest scoring word as a string.'));