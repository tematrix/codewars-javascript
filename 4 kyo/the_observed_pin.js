/*
DESCRIPTION:
Alright, detective, one of our colleagues successfully observed our target person, 
Robby the robber. We followed him to a secret warehouse, where we assume to find all 
the stolen stuff. The door to this warehouse is secured by an electronic combination 
lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw 
could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
E.g. instead of the 1 it could also be the 2 or 4. 
And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited 
amount of wrong PINs, they never finally lock the system or sound the alarm. 
That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and 
all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, 
that returns an array (or a list in Java/Kotlin and C#) of all variations for an 
observed PIN with a length of 1 to 8 digits. We could name the function getPINs 
(get_pins in python, GetPINs in C#). But please note that all PINs, the observed one 
and also the results, must be strings, because of potentially leading '0's. 
We already prepared some test cases for you.

Detective, we are counting on you!


ПЕРЕВОД:
Хорошо, детектив, один из наших коллег успешно наблюдал за нашей целью - грабителем Робби. 
Мы следовали за ним в секретный склад, где, как мы предполагаем, находятся все украденные вещи. 
Дверь в этот склад защищена электронным замком сочетания. 
К сожалению, наш шпион не уверен в PIN-коде, который он увидел, когда Робби вводил его.

Клавиатура имеет следующую раскладку:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

Он записал PIN-код 1357, но он также сказал, что каждая из цифр, которые он видел, 
может быть другой смежной цифрой (горизонтально или вертикально, но не по диагонали). 
Например, вместо 1 может быть 2 или 4. И вместо 5 могут быть 2, 4, 6 или 8.

Он также упомянул, что знает такие замки. Вы можете вводить неограниченное количество 
неправильных PIN-кодов, они никогда не заблокируют систему или не вызовут сигнал тревоги. 
Поэтому мы можем попробовать все возможные (*) варианты.

Возможно в том смысле, что это наблюдаемый PIN-код и все варианты, учитывая смежные цифры.
Можете ли вы помочь нам найти все эти варианты? Было бы здорово иметь функцию, 
которая возвращает массив (или список в Java/Kotlin и C#) всех возможных вариантов PIN-кода, 
наблюдаемого нашим шпионом, длиной от 1 до 8 цифр. Мы могли бы назвать функцию getPINs 
(get_pins в Python, GetPINs в C#). Но обратите внимание, что все PIN-коды, как наблюдаемый код, 
так и полученные варианты, должны быть представлены в виде строк из-за возможных ведущих нулей. 
У нас уже есть некоторые тестовые случаи для проверки функции.
*/