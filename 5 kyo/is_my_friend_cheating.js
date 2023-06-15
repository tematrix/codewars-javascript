/*
DESCRIPTION:
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of 
all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) 
and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array 
(or an empty string) if no possible numbers are found which will prove that my friend has not 
told the truth! (Go: in this case return nil).

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"


ПЕРЕВОД:
Мой друг берет последовательность всех чисел от 1 до n (где n > 0).
В этой последовательности он выбирает два числа, a и b.
Он говорит, что произведение a и b должно быть равно сумме 
всех чисел в последовательности, исключая a и b.
Учитывая число n, скажите, какие числа он исключил из последовательности?
Функция принимает параметр: n (n всегда строго больше 0) 
и возвращает массив или строку (в зависимости от языка) вида:

[(a, b), ...] или [[a, b], ...] или {{a, b}, ...} или или [{a, b}, ...]
со всеми (a, b), которые являются возможными удаленными числами в последовательности от 1 до n.

[(a, b), ...] или [[a, b], ...] или {{a, b}, ...} или ... будут отсортированы в порядке возрастания "a".

Бывает, что существует несколько возможных (a, b). Функция возвращает пустой массив 
(или пустую строку), если не найдено ни одного возможного числа, что докажет, что мой друг не 
сказал правду! (Вперед: в этом случае возвращается nil).

Примеры:
removNb(26) должна вернуть [(15, 21), (21, 15)].
или
removNb(26) должен вернуть { {15, 21}, {21, 15} }
или
removeNb(26) должен возвращать [[15, 21], [21, 15]]
или
removeNb(26) должен возвращать [ { {15, 21}, {21, 15} }
или
removeNb(26) должен вернуть "15 21, 21 15"
*/