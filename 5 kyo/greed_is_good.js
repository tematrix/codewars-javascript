/*
DESCRIPTION:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, 
is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet 
(contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. 
If you mutate the input, you will not be able to pass all the tests.


ПЕРЕВОД:
Игра в Greed (жадность) играется пятью шестигранными костями. Ваша миссия, если вы ее примете,
набрать очки в соответствии с этими правилами. Вам всегда будет дан массив со значениями пяти шестигранных костей.

Три 1 => 1000 очков
Три 6 => 600 очков
Три 5 => 500 очков
Три 4 => 400 очков
Три 3 => 300 очков
Три 2 => 200 очков
Одна 1 => 100 очков
Одна 5 => 50 очков

Каждая кость может быть учтена только один раз в каждом броске. Например, данное значение "5" может учитываться 
только как часть тройки (вкладываясь в 500 очков) или как одиночные 50 очков, но не одновременно в одном броске.

Примеры подсчета очков:

Бросок    Очки
5 1 3 4 1 250: 50 (за 5) + 2 * 100 (за 1)
1 1 1 3 1 1100: 1000 (за три 1) + 100 (за оставшуюся 1)
2 4 4 5 4 450: 400 (за три 4) + 50 (за 5)

В некоторых языках программирования допускается изменять входные данные функции. Это не должно делаться. 
Если вы измените входные данные, вы не сможете пройти все тесты.
*/