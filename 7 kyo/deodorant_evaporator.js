/*
DESCRIPTION:
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas 
lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which 
the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29

Note:
Content is in fact not necessary in the body of the function "evaporator", 
you can use it or not use it, as you wish. Some people might prefer to reason with content, 
some other with percentages only. It's up to you but you must keep it as a parameter because 
the tests have it as an argument.


ПЕРЕВОД:
Эта программа тестирует жизненный цикл испарителя, содержащего газ.

Известно содержимое испарителя (в мл), процент потерь пены или газа каждый день (evap_per_day) 
и пороговое значение (threshold) в процентах, после которого испаритель более не пригоден 
для использования. Все числа строго положительные.

Программа сообщает n-й день (в виде целого числа), 
когда испаритель перестанет быть пригодным для использования.

Пример:
evaporator(10, 10, 5) -> 29

Примечание:
Содержимое на самом деле не является необходимым в теле функции "evaporator",
вы можете использовать его или не использовать, как вам удобно. 
Некоторые люди могут предпочесть рассуждать с содержимым, другие только с процентами. 
Это на ваше усмотрение, но вы должны сохранить его в качестве параметра, 
потому что он присутствует в тестах в качестве аргумента.
*/