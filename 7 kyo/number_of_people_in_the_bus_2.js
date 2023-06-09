/*
DESCRIPTION:
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. 
Elements of each pair represent the number of people that get on the bus (the first item) 
and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop 
(after the last array). Even though it is the last bus stop, the bus might not be empty 
and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


ПЕРЕВОД:
В городе ездит автобус, который подбирает и высаживает людей на каждой автобусной остановке.

Вам предоставляется список (или массив) пар целых чисел.
Элементы каждой пары представляют количество людей, которые садятся на автобус (первый элемент),
и количество людей, которые выходят из автобуса (второй элемент) на автобусной остановке.

Ваша задача - вернуть количество людей, которые все еще находятся в автобусе после последней остановки
(после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус может быть не пустым,
и некоторые люди могут все еще находиться внутри автобуса, они, возможно, там спят :D

Ознакомьтесь с тестовыми примерами.

Пожалуйста, имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0.
Поэтому возвращаемое целое число не может быть отрицательным.

Второе значение в первой паре в массиве равно 0, так как автобус пуст на первой автобусной остановке.
*/

var number = (busStops) => busStops.reduce((p,c) => p + c[0] - c[1], 0);

console.log(number([[15, 5], [20, 4], [8, 10]]));