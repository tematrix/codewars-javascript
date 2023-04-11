/*
DESCRIPTION:
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));


ПЕРЕВОД:
На этот раз мы хотим написать вычисления с помощью функций и получить результаты. 
Давайте рассмотрим несколько примеров:

seven(times(five())); // должно вернуть 35
four(plus(nine())); // должно вернуть 13
eight(minus(three())); // должно вернуться 5
six(dividedBy(two())); // должно возвращать 3
Требования:

Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять").
Должна быть функция для каждой из следующих математических операций: плюс, минус, раз, dividedBy.
Каждое вычисление состоит ровно из одной операции и двух чисел
Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
Деление должно быть целочисленным. Например, это должно вернуть 2, а не 2.666666...:
eight(dividedBy(three()));
*/

'use strict';

function zero() {
    return zero.arguments.length > 0 ? Math.floor(eval(`0${arguments[0]}`)) : 0;
  }
  function one() {
    return one.arguments.length > 0 ? Math.floor(eval(`1${arguments[0]}`)) : 1;
  }
  function two() {
    return two.arguments.length > 0 ? Math.floor(eval(`2${arguments[0]}`)) : 2;
  }
  function three() {
    return three.arguments.length > 0 ? Math.floor(eval(`3${arguments[0]}`)) : 3;
  }
  function four() {
    return four.arguments.length > 0 ? Math.floor(eval(`4${arguments[0]}`)) : 4;
  }
  function five() {
    return five.arguments.length > 0 ? Math.floor(eval(`5${arguments[0]}`)) : 5;
  }
  function six() {
    return six.arguments.length > 0 ? Math.floor(eval(`6${arguments[0]}`)) : 6;
  }
  function seven() {
    return seven.arguments.length > 0 ? Math.floor(eval(`7${arguments[0]}`)) : 7;
  }
  function eight() {
    return eight.arguments.length > 0 ? Math.floor(eval(`8${arguments[0]}`)) : 8;
  }
  function nine() {
    return nine.arguments.length > 0 ? Math.floor(eval(`9${arguments[0]}`)) : 9;
  }
  
  function plus() {
    return `+${arguments[0]}`;
  }
  function minus() {
    return `-${arguments[0]}`;
  }
  function times() {
    return `*${arguments[0]}`;
  }
  function dividedBy() {
    return `/${arguments[0]}`;
  }

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));