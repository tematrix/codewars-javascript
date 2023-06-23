/*
DESCRIPTION:
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. 
Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. 
How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) 
and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, 
minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, 
Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"


ПЕРЕВОД:
Две черепахи по имени A и B должны пробежать дистанцию. А стартует со средней скоростью 720 футов в час. 
Юная Б знает, что бежит быстрее А, и, кроме того, она еще не доела свою капусту.

Когда она, наконец, стартует, то видит, что А опережает Б на 70 футов, но скорость Б составляет 850 футов в час. 
Сколько времени потребуется B, чтобы догнать A?

В более общем случае: даны две скорости v1 (скорость A, целое число > 0) и v2 (скорость B, целое число > 0) 
и преимущество g (целое число > 0), сколько времени потребуется B, чтобы догнать A?

Результатом будет массив [hour, min, sec], который представляет собой время, необходимое в часах, 
минутах и секундах (округлите до ближайшей секунды) или строка в некоторых языках.

Если v1 >= v2, то верните nil, nothing, null, None или {-1, -1, -1} для C++, C, Go, Nim, 
Pascal, COBOL, Erlang, [-1, -1, -1] для Perl,[] для Kotlin или "-1 -1 -1" для других языков.

Примеры:
(форма результата зависит от языка)

race(720, 850, 70) => [0, 32, 18] или "0 32 18"
race(80, 91, 37) => [3, 21, 49] или "3 21 49"
*/