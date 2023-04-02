/*
DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"


ПЕРЕВОД:
Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, 
но со всеми пятью или более буквенными словами наоборот (точно так же, как название этого ката). 
Передаваемые строки будут состоять только из букв и пробелов. 
Пробелы будут включены только в том случае, если присутствует более одного слова.

Примеры:

spin Words( "Эй, товарищи воины" ) => возвращает "Эй, воллеф сроиррау"
spinWords("Это тест") => возвращает "Это тест"
spinWords("Это еще один тест" )=> возвращает "Это тест рехтона"
*/

function spinWords(string){
    let a = string.split(' '), b = [], j = 0;  
    for (let i of a) {
      if (i.length > 4) {      
        i = i.split('').reverse().join('');      
      }
      b[j] = i;
      j++;
    }  
    return b.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));