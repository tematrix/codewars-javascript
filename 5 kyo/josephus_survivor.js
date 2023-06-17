/*
DESCRIPTION:
In this kata you have to correctly return who is the "survivor", 
ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle 
and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!

The above link about the "base" kata description will give you a more 
thorough insight about the origin of this kind of permutation, but 
basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, 
but as much larger numbers will be used, using an array/list to compute the number of 
the survivor may be too slow; you may assume that both n and k will always be >=1.


ПЕРЕВОД:
В этом ката вы должны правильно вернуть того, кто является "выжившим", 
т.е. последний элемент перестановки Джозефуса.

В основном, вы должны предположить, что n человек помещены в круг 
и что они выбывают с шагом в k элементов, например, так:

n=7, k=3 => значит, в круге 7 человек.
каждый третий исключается, пока не останется один
[1,2,3,4,5,6,7] - начальная последовательность
[1,2,4,5,6,7] => 3 выбывает
[1,2,4,5,7] => выбывает 6
[1,4,5,7] => 2 засчитывается
[1,4,5] => 7 засчитывается
[1,4] => 5 засчитано
[4] => 1 засчитывается, 4 - последний элемент - выживший!

Приведенная выше ссылка об описании "базового" ката даст вам более 
более глубокое представление о происхождении этого вида перестановки, но 
в принципе, это все, что нужно знать для решения этой ката.

Примечания и советы: использование решения других ката для проверки вашей функции может оказаться полезным, 
но поскольку будут использоваться гораздо большие числа, использование массива/списка для вычисления числа 
выживших может оказаться слишком медленным; вы можете предположить, что и n, и k всегда будут >=1.
*/