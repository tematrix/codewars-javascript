/*
DESCRIPTION:
This problem takes its name by arguably the most important event in 
the life of the ancient historian Josephus: according to his tale, 
he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: 
they formed a circle and proceeded to kill one man every three, until one last man was 
left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, 
you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters 
the initial array/list of items to be permuted as if they were in a circle and counted out 
every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, 
instead of the usual range 0 to n-1; k will always be >=1.

For example, with an array=[1,2,3,4,5,6,7] and k=3, the function should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

[3,6,2,7,5,1,4]


ПЕРЕВОД:
Эта проблема получила свое название от, возможно, самого важного события в 
жизни древнего историка Иосифа: согласно его рассказу, 
он и его 40 солдат были заперты в пещере римлянами во время осады.

Отказавшись сдаться врагу, они решили совершить массовое самоубийство, но с изюминкой: 
они образовали круг и продолжали убивать по одному человеку через каждые три, пока не остался последний человек. 
(и тот должен был покончить с собой, чтобы завершить акт).

Так вот, Иосиф и еще один человек были последними двумя, и, поскольку мы теперь знаем все подробности этой истории, 
вы, наверное, правильно догадались, что они не совсем следовали первоначальной идее.

Теперь вам предстоит создать функцию, которая возвращает перестановку Джозефуса, принимая в качестве параметров 
исходный массив/список элементов, которые должны быть перестановочными, как если бы они были в круге и отсчитывались 
через каждые k мест, пока не останется ни одного.

Советы и примечания: полезно начинать считать от 1 до n, 
вместо обычного диапазона от 0 до n-1; k всегда будет >=1.

Например, если массив=[1,2,3,4,5,6,7] и k=3, функция должна действовать следующим образом.

[1,2,3,4,5,6,7] - начальная последовательность
[1,2,4,5,6,7] => 3 вычисляется и переходит в результат [3]
[1,2,4,5,7] => 6 вычисляется и переходит в результат [3,6]
[1,4,5,7] => 2 засчитывается и переходит в результат [3,6,2]
[1,4,5] => 7 засчитывается и переходит в результат [3,6,2,7]
[1,4] => 5 засчитывается и переходит в результат [3,6,2,7,5]
[4] => 1 засчитывается и переходит в результат [3,6,2,7,5,1]
[] => 4 вычисляется и переходит в результат [3,6,2,7,5,1,4].
Таким образом, наш окончательный результат таков:

[3,6,2,7,5,1,4]
*/