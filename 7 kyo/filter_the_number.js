/*
DESCRIPTION:
Oh, no! The number has been mixed up with the text. 
Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, 
you have to return all the numbers in that string in the order they occur.


ПЕРЕВОД:
О нет! Число было перемешано с текстом.
Ваша задача - извлечь число из текста. Можете ли вы вернуть число в его исходное состояние?

Задача
Вам нужно вернуть число из строки.

Детали
Вам будет дана строка, в которой числа и буквы перемешаны. 
Вам нужно вернуть все числа в том порядке, в котором они встречаются в строке.
*/

var filterString = function(value) {
    return Number(value.match(/\d/g).join(''));
};

console.log(filterString('H3ll0'));