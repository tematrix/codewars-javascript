/*
DESCRIPTION:
My friend John and I are members of the "Fat to Fit Club (FFC)". 
John is worried because each month a list with the weights of members is published 
and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, 
I will modify the order of the list". It was decided to attribute a "weight" to numbers. 
The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string 
ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were 
strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.


ПЕРЕВОД:
Мой друг Джон и я являемся членами "Клуба Fat to Fit (FFC)". 
Джон беспокоится, потому что каждый месяц публикуется список с весом членов клуба. 
и каждый месяц он оказывается последним в списке, что означает, что он самый тяжелый.

Я тот, кто составляет этот список, поэтому я сказал ему: "Не волнуйся больше, 
Я изменю порядок списка". Было решено приписать числам "вес". 
Отныне вес числа будет равен сумме его цифр.

Например, 99 будет иметь "вес" 18, 100 будет иметь "вес" 1, поэтому в списке 100 будет стоять перед 99.

Дана строка с весами членов FFC в обычном порядке, можете ли вы дать эту строку 
упорядоченную по "весу" этих чисел?

Пример:
"56 65 74 100 99 68 86 180 90", упорядоченная по весам чисел, становится: 

"100 180 90 56 65 74 68 86 99"
Когда два числа имеют одинаковый "вес", давайте классифицировать их так, как если бы они были 
строки (алфавитный порядок), а не числа:

180 стоит перед 90, так как, имея одинаковый "вес" (9), оно стоит перед строкой.

Все числа в списке - положительные числа, и список может быть пустым.
*/