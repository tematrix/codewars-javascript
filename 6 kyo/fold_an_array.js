/*
DESCRIPTION:
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point 
is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be 
a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.


ПЕРЕВОД:
В этом ката вы должны написать метод, который складывает заданный массив целых чисел по середине в x раз.

Пример говорит больше, чем тысячи слов:

Сложить 1-кратно:
[1,2,3,4,5] -> [6,6,3]

Небольшая визуализация (не для алгоритма, а для идеи складывания):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Сложите 2 раза:
[1,2,3,4,5] -> [9,6]
Как видите, если счет чисел нечетный, то среднее число останется. В противном случае точка сгиба 
находится между средними числами, поэтому все числа будут складываться.

Массив всегда будет содержать числа и никогда не будет нулевым. Параметр runs всегда будет 
положительное целое число больше 0 и определяет, сколько прогонов складывания должен сделать ваш метод.

Если складывается массив с одним элементом, то он остается тем же массивом.
*/