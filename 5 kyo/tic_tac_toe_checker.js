/*
DESCRIPTION:
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state 
is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


ПЕРЕВОД:
Если бы мы хотели настроить игру в крестики-нолики, нам бы хотелось знать, решена ли текущая 
ситуация на доске, не так ли? Наша задача - создать функцию, которая будет проверять это!

Предположим, что доска представлена в виде массива 3x3, где значение 0, если место пустое,
1, если это "X", или 2, если это "O", как в примере:

[[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]
Мы хотим, чтобы наша функция возвращала:

-1, если доска еще не закончена И никто не выиграл еще (есть пустые места),
1, если выиграл "X",
2, если выиграл "O",
0, если это ничья.
Можно предположить, что доска, переданная в функцию, является корректной в контексте игры в крестики-нолики.
*/

function isSolved(board) {
    const check = (b, a) => {
      if (b[0].every(e => e === a) ||
          b[1].every(e => e === a) ||
          b[2].every(e => e === a) ||
          b[0][0] === a && b[1][0] === a && b[2][0] === a ||
          b[0][1] === a && b[1][1] === a && b[2][1] === a ||
          b[0][2] === a && b[1][2] === a && b[2][2] === a ||
          b[0][0] === a && b[1][1] === a && b[2][2] === a ||
          b[0][2] === a && b[1][1] === a && b[2][0] === a) {
        return true;
      } else {
        return false;
      }
    };
    return check(board, 1) ? 1 : check(board, 2) ? 2 : board.some(e => e.includes(0)) ? -1 : 0;  
}

console.log(isSolved([[0, 0, 1],[0, 1, 2],[2, 1, 0]]));