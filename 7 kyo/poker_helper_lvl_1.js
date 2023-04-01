/*
DESCRIPTION:
This Kata for guys who loves poker
We need help understanding what combinations we got in a game.

You got:
Hand - That's 2 cards: What you have in your hand

Flop - 3 card: What you see on the board

Cards are like this:

{   val: 'Ace',   suit: 'Hearts' }

You need implement 3 functions:

First is isPair(): You need check if you get 2 cards with the same value but different suits in this game.

Second is isTwoPair(): Same as isPair() but you need check for two pairs in your game.

Third is isSet(): You need to check if you have three cards with the same value but different suits in your game.

You must return true or false.

Example:
in your hand you got : [ {val: 'Ace', suit: 'Pikes'}, {val: '9', suit: 'Hearts'} ] 
and in your flop you got : [{val: '9', suit: 'Tiles'}, {val: 'Jack', suit: 'Hearts'}, {val: '10', suit: 'Clovers'}]

So if you see we got pair of 9 and this is the expected return values by your functions:

isPair - must return true.

isTwoPair - must return false.

isSet - must return false.

PS: If this kata be interesting I create next level with next combinations


ПЕРЕВОД:
Это ката для парней, которые любят покер
Нам нужна помощь в понимании того, какие комбинации мы получили в игре.

Ты получил:
Раздача - Это 2 карты: То, что у вас есть в руке

Флоп - 3 карты: что вы видите на доске

Карточки такие:

{ вал: "Туз", масть: "Червы" }

Вам нужно реализовать 3 функции:

Первый - это isPair(): Вам нужно проверить, достались ли вам в этой игре 2 карты одинакового достоинства, 
но разных мастей.

Второй - isTwoPair(): то же, что и isPair(), но вам нужно проверить наличие двух пар в вашей игре.

Третье - isSet(): Вам нужно проверить, есть ли у вас в игре три карты одинакового достоинства, но разных мастей.

Вы должны вернуть значение true или false.

Пример:
в вашей раздаче у вас : [ {val: 'Туз', масть: 'Пики'}, {val: '9', масть: 'Червы'} ] 
а на флопе у вас: [{val: '9', масть: 'Фишки'}, {val: 'Валет', масть: 'Черви'}, {значение: '10', масть: 'Клевер'}]

Итак, если вы видите, что мы получили пару из 9, и это ожидаемые возвращаемые значения вашими функциями:

isPair - должен возвращать значение true.

isTwoPair - должен возвращать значение false.

isSet - должен возвращать значение false.

PS: Если эта ката будет интересной, я создам следующий уровень со следующими комбинациями
*/