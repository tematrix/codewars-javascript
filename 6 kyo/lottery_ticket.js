/*
DESCRIPTION:
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, 
you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. 
Each subarray has both a string and a number within it. 
If the character code of any of the characters in the string matches the number,
you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). 
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.


ПЕРЕВОД:
Время выиграть в лотерею!

Имея лотерейный билет (билет), представленный массивом из массивов с двумя значениями, 
вы должны узнать, выиграли ли вы джекпот.

Пример билета:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ].
Для этого сначала нужно подсчитать "мини-выигрыши" в билете. 
Каждый подмассив содержит как строку, так и число. 
Если символьный код любого из символов строки совпадает с числом,
вы получаете мини-выигрыш. Обратите внимание, что в каждом подмассиве может быть только один мини-выигрыш.

После подсчета всех мини-выигрышей сравните это число с другим вводом (выигрышем). 
Если ваше общее число больше или равно (win), верните 'Winner!'. В противном случае верните "Проиграл!".

Все вводимые данные будут иметь правильный формат. Строки в билетах не всегда имеют одинаковую длину.
*/

function bingo(ticket, win){
    let count = 0;
    
    for (let i = 0; i < ticket.length; i++) {
      let str = ticket[i][0],
          num = ticket[i][1];
      
      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          count++;
          break;
        }
      }
    }
    
    return count >= win ? 'Winner!' : 'Loser!'; 
}