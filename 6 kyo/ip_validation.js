/*
DESCRIPTION:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string


ПЕРЕВОД:
Напишем алгоритм для определения корректных IPv4-адресов в десятично-точечном формате. 
Адреса будут считаться корректными, если они состоят из четырех октетов со значениями от 0 до 255 включительно.

Примеры корректных адресов:
1.2.3.4
123.45.67.89

Примеры некорректных адресов:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Примечания:
Ведущие нули (например, 01.02.03.04) считаются некорректными
Входные данные гарантированно являются одной строкой.
*/

function isValidIP(str) {
    const ip = str.split('.'),
          match = (i) => i.length === 1 ? true : i.length > 1 && i[0] !== '0' ? true : false; 
    return (ip.length === 4 && ip.every(e => match(e) && !/\D/.test(e) && +e <= 255 && +e >= 0)) ? true : false;
}

console.log(isValidIP('1.2.3.4'));
console.log(isValidIP('123.45.67.89'));
console.log(isValidIP('1.2.3'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('123.456.78.90'));
console.log(isValidIP('123.045.067.089'));