/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


ПЕРЕВОД:
Доработайте метод/функцию так, чтобы она преобразовывала слова, разделенные тире/андерскором, в верблюжий регистр. 
Первое слово в выводе должно быть заглавным только в том случае, если исходное слово было заглавным 
(так называемый верхний верблюжий регистр, также часто называемый регистром Паскаля). 
Следующие слова всегда должны быть заглавными.

Примеры
"the-stealth-warrior" преобразуется в "theStealthWarrior"

"The_Stealth_Warrior" преобразуется в "TheStealthWarrior"

"The_Stealth-Warrior" преобразуется в "TheStealthWarrior".
*/

function toCamelCase(str){
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ' || str[i] == '-' || str[i] == '_') {
        str.splice(i, 1);
        str[i] = str[i].toUpperCase();      
        i--;
      }
    }
    return str.join('');
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('The_Stealth-Warrior'));