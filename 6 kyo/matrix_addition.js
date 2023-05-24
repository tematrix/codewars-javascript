/*
DESCRIPTION:
Write a function that accepts two square matrices (N x N two dimensional arrays), 
and return the sum of the two. Both matrices being passed into the function will 
be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell 
from the second matrix. This will be cell [n][m] of the solution matrix.

Visualization:

|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

Example

matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )

// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]


ПЕРЕВОД:
апишите функцию, которая принимает две квадратные матрицы (N x N двумерные массивы) 
и возвращает их сумму. Обе матрицы, переданные в функцию, 
будут размером N x N (квадратные) и будут содержать только целые числа.

Как сложить две матрицы:

Возьмите каждую ячейку [n][m] из первой матрицы и добавьте ее к той же ячейке [n][m] 
из второй матрицы. Это будет ячейка [n][m] результирующей матрицы.

Визуализация:

|1 2 3| |2 2 1| |1+2 2+2 3+1| |3 4 4|
|3 2 1| + |3 2 3| = |3+3 2+2 1+3| = |6 4 4|
|1 1 1| |1 1 3| |1+1 1+1 1+3| |2 2 4|

Пример
Функция matrixAddition принимает два аргумента - две квадратные матрицы 
одинакового размера и возвращает их сумму в виде квадратной матрицы того же размера.
*/