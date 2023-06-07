/*
DESCRIPTION:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


ПЕРЕВОД:
Ваша задача - создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - операцию (строка / символ), значение1 (число) и значение2 (число).
Функция должна возвращать результат чисел после применения выбранной операции.

Примеры (оператор, значение1, значение2) -> вывод
('+', 4, 7) -> 11
('-', 15, 18) -> -3
('*', 5, 5) -> 25
('/', 49, 7) -> 7
*/

function basicOp(operation, value1, value2) {
    switch(operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value2 !== 0 ? value1 / value2 : 'error';
        default: return 'error';
    }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));