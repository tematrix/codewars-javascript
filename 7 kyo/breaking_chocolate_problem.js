/*
DESCRIPTION:
Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. 
Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it 
to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if 
we do not have any chocolate to split). Input will always be a non-negative integer.


ПЕРЕВОД:
Ваша задача - разделить шоколадку заданных размеров n x m на маленькие квадраты. 
Каждый квадрат имеет размер 1x1 и не может быть разбит. 
Напишите функцию, которая вернет минимальное количество разрывов, необходимых для этого.

Например, если у вас есть шоколадка размером 2 x 1, вы можете разделить ее на отдельные 
квадраты всего за один разрыв, но для размера 3 x 1 вам нужно сделать два разрыва.

Если входные данные недействительны, вы должны вернуть 0 (то есть, если у нас 
нет шоколада для разделения, нам не нужно делать разрывов). 
Входные данные всегда будут неотрицательным целым числом.
*/

function breakChocolate(n,m) {
    return n <= 0 || m <= 0 ? 0 : n * m  - 1;
}

console.log(breakChocolate(3,1));