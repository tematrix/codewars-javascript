/*
DESCRIPTION:
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. 
A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied 
by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. 
When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.


ПЕРЕВОД:
Для участия в розыгрыше призов каждый называет свою фамилию.

Каждая буква имени имеет значение, которое является ее рангом в английском алфавите. 
A и a имеют ранг 1, B и b - ранг 2 и так далее.

Длина фамилии складывается с суммой этих рангов, таким образом, получается число сом.

Массив случайных весов связан с именами, и каждое som умножается 
на соответствующий вес, чтобы получить так называемое выигрышное число.

Пример:
имена: "COLIN, AMANDBA, AMANDAB, CAROL, PauL, JOSEPH".
веса: [1, 4, 4, 5, 2, 1]

PauL -> som = длина имени + 16 + 1 + 21 + 12 = 4 + 50 -> 54
*Вес*, связанный с PauL, равен 2, поэтому *выигрышное число* PauL равно 54 * 2 = 108.
Теперь можно отсортировать фамилии в порядке убывания выигрышных номеров. 
Если два человека имеют одинаковые выигрышные номера, отсортируйте их в алфавитном порядке по фамилиям.

Задача:
параметры: st - строка фамилий, we - массив весов, n - ранг.

return: фамилия участника, чей ранг равен n (ранги нумеруются от 1).

Пример:
имена: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH".
веса: [1, 4, 4, 5, 2, 1]
n: 4

Функция должна вернуть: "PauL"
Примечания:
Массив весов по крайней мере такой же длины, как количество имен, он может быть длиннее.

Если st пуст, то возвращается "Нет участников".

Если n больше числа участников, то возвращается "Недостаточно участников".

Дополнительные примеры см. в разделе Примеры тестовых примеров.
*/