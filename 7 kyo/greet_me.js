/*
DESCRIPTION:
Write a method that takes one argument as name and then greets that name, 
capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"


ПЕРЕВОД:
Напишите метод, который принимает один аргумент в качестве имени, а затем приветствует это имя, 
написанное с заглавной буквы и заканчивающееся восклицательным знаком.

Пример:

"riley" --> "Привет, Райли!"
"JACK" --> "Привет, Джек!"
*/

const greet = function(name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

console.log(greet("riley"));
console.log(greet("JACK"));