/*
DESCRIPTION:
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false


ПЕРЕВОД:
Напишите функцию, которая принимает строку и возвращает true, если она представляет собой номер телефона.
Предполагается, что любое целое число от 0 до 9 в любом из мест будет допустимым номером телефона.

Беспокойтесь только о следующем формате:
(123) 456-7890 (не забудьте пробел после закрывающей скобки)

Примеры:

"(123) 456-7890" => true
"(1111)555 2345" => false
"(098) 123 4567" => false
*/

function validPhoneNumber(phoneNumber){
    return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111)555 2345"));
console.log(validPhoneNumber("(098) 123 4567"));