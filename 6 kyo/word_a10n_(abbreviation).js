/*
DESCRIPTION:
The word i18n is a common abbreviation of internationalization in the developer community, 
used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is 
an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that 
string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character 
like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words 
(eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed 
characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"


ПЕРЕВОД:
Слово i18n является распространенным сокращением интернационализации в сообществе разработчиков, 
используется вместо того, чтобы набирать слово целиком и пытаться правильно его написать. 
Аналогично, a11y - это аббревиатура доступности.

Напишите функцию, которая принимает строку и превращает любые и все "слова" (см. ниже) в этой строке 
длиной 4 или больше в "слова" в аббревиатуру, следуя этим правилам:

"слово" - это последовательность символов алфавита. Согласно этому определению, любой другой символ 
например, пробел или дефис (например, "elephant-ride") разделит серию букв на два слова 
(например, "слон" и "поездка").
Сокращенный вариант слова должен содержать первую букву, затем количество удаленных 
количество удаленных символов, затем последняя буква (например, "elephant ride" => "e6t r2e").

Пример
abbreviate("elephant-rides are really fun!")
// ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// слова (^):   "слон" "аттракционы" "это" "действительно" "весело"
// 123456 123 1 1234 1
// игнорировать короткие слова:               X X

// сокращать:    "e6t" "r3s" "are" "r4y" "fun"
// все несловные символы (*) остаются на месте.
// "-" " " " " " " "!"
=== "e6t-r3s are r4y fun!"
*/

function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(word) {
      let first = word.charAt(0),
          last = word.charAt(word.length - 1),
          middle = word.length - 2;
      
      return first + middle + last;
    });
}