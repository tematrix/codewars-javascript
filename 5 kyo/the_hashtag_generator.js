/*
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false


ПЕРЕВОД:
Маркетологи тратят слишком много времени на введение хэштегов.
Давайте поможем им с помощью нашего собственного генератора хэштегов!

Вот что нужно сделать:

Все слова должны начинаться с хэштега (#).
Все слова должны быть написаны с заглавной буквы.
Если конечный результат длиннее 140 символов, он должен вернуть false.
Если входные данные или результат - пустая строка, то он должен возвращать false.
Примеры
" Здравствуйте, спасибо, что попробовали мое ката" => "#HelloThereThanksForTryingMyKata"
"    Hello World" => "#HelloWorld"
"" => false
*/

function generateHashtag (str) {  
    if (str.trim().length == 0) {return false;}  
    let text = str.trim().split('');
    text[0] = text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] == ' ') {
        text.splice(i, 1);
        text[i] = text[i].toUpperCase();
        i--;
      }
    }
    if (text.length > 139) {return false;}
    return `#${text.join('')}`;
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log(generateHashtag(''));