/* 
DESCRIPTION:
Fix My Phone Numbers
Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone 
numbers to annoy them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, 
whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' 
and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected 
phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".


ПЕРЕВОД:
Исправьте мои телефонные номера
О, слава богу, ты здесь! Последний стажер полностью все испортил!

Все телефонные номера наших клиентов были зашифрованы, и нам нужны эти телефонные номера, 
чтобы раздражать их бесконечными звонками по продажам!

Формат
Телефонные номера хранятся в виде строк и состоят из 11 цифр, например '02078834982', и всегда должны начинаться с 0.

Однако произошло нечто странное, и теперь все телефонные номера содержат множество случайных символов, пробелов, 
а некоторые вообще не являются телефонными номерами!

Например, '02078834982' каким-то образом превратился в 'efRFS:)0207ERGQREG88349F82!' 
и есть еще много строк, которые нам нужно проверить.

Задача
Учитывая строку, вы должны решить, содержит ли она действительный номер телефона или нет. 
Если это произойдет, верните исправленный номер телефона в виде строки, т.е. '02078834982' 
без пробелов или специальных символов, иначе верните "Не номер телефона".
*/

function phoneNumbers(number) {
    let result = number.match(/\d*/g).join('');
    return result[0] == '0' && result.length == 11 ? result : 'Not a phone number';
}

console.log(phoneNumbers('efRFS:)0207ERGQREG83649F82!'));
console.log(phoneNumbers('efRFS:)0207E5GQREр8G83649F82!'));