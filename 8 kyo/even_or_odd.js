/*
DESCRIPTION:
Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.

ПЕРЕВОД:
Создайте функцию, которая принимает целое число в качестве аргумента 
и возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел.
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }  
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(7));