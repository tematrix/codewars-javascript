/*
DESCRIPTION:
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"


ПЕРЕВОД:
Возвращает век введенного года. Вводимая строка всегда будет состоять из 4 цифр, поэтому нет необходимости в проверке.

Примеры
"1999" --> "20-й"
"2011" --> "21-й"
"2154" --> "22-й"
"2259" --> "23-й"
"1124" --> "12-й"
"2000" --> "20-й"
*/

function whatCentury(year) {
    let century = Math.ceil(parseInt(year) / 100),
        suffix = '';
    
    if (century % 10 === 1 && century !== 11) {
      suffix = 'st';
    } else if (century % 10 === 2 && century !== 12) {
      suffix = 'nd';
    } else if (century % 10 === 3 && century !== 13) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    
    return century + suffix;
}