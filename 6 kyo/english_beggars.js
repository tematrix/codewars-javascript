/*
DESCRIPTION:
Born a misinterpretation of this kata, your task here is pretty simple: 
given an array of values and an amount of beggars, you are supposed to return an array 
with the sum of what each beggar brings home, assuming they all take regular turns, 
from the first to the last.

For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], 
as the first one takes [1,3,5], the second collects [2,4].

The same array with 3 beggars would have in turn have produced a better out come 
for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

Also note that not all beggars have to take the same amount of "offers", meaning that 
the length of the array is not necessarily a multiple of n; length can be even shorter, 
in which case the last beggars will of course take nothing (0).

Note: in case you don't get why this kata is about English beggars, then you are 
not familiar on how religiously queues are taken in the kingdom ;)

Note 2: do not modify the input array.


ПЕРЕВОД:
Родилась неправильная интерпретация этого ката, ваша задача здесь довольно проста: 
задав массив значений и количество нищих, вы должны вернуть массив 
с суммой того, что каждый нищий принесет домой, предполагая, что все они ходят по очереди, 
от первого до последнего.

Например: [1,2,3,4,5] для 2 нищих вернет результат [9,6], 
так как первый берет [1,3,5], а второй - [2,4].

Тот же массив с 3 нищими, в свою очередь, дал бы лучший результат 
для второго нищего: [5,7,3], так как они соответственно возьмут [1,4], [2,5] и [3].

Также обратите внимание, что не все попрошайки должны принимать одинаковое количество "предложений", что означает, что 
длина массива не обязательно кратна n; длина может быть еще меньше, 
в этом случае последние попрошайки, конечно, ничего не возьмут (0).

Примечание: если вы не поняли, почему в этой ката речь идет об английских попрошайках, значит вы 
не знакомы с тем, как религиозно относятся к очередям в королевстве ;)

Примечание 2: не изменяйте входной массив.
*/