/*
DESCRIPTION:
Write a function that, given a string of text (possibly with punctuation and line-breaks), 
returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
or an empty array if a text contains no words.

Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]


ПЕРЕВОД:
Напишите функцию, которая принимает строку текста (возможно, с пунктуацией и переносами строк) 
и возвращает массив из трех наиболее часто встречающихся слов в порядке убывания количества вхождений.

Предположения:
Слово - это строка из букв (от A до Z), дополнительно может содержать один или несколько апострофов (') в ASCII.
Апострофы могут появляться в начале, середине или конце слова ('abc, abc', 'abc', ab'c - все корректные формы)
Любые другие символы (например, #, , /, ...) не являются частью слова и должны быть обработаны как пробелы.
Совпадения должны рассматриваться без учета регистра, и слова в результате должны быть приведены к нижнему регистру.
В случае ничьи между словами, выбирайте произвольно.
Если в тексте меньше трех уникальных слов, то должны быть возвращены топ-2 или топ-1 слова, или пустой массив, 
если в тексте нет слов.

Примеры:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")

=> ["a", "of", "on"]
top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")

=> ["e", "ddd", "aa"]
top_3_words(" //wont won't won't")

=> ["won't", "wont"]
*/

function topThreeWords(text) {
    let mid = text.replace(/[.,\-!;:"_\\\/]/g, '').toLowerCase().trim(),
        set = mid.replace(/\s{2,}|\n/g, ' ').split(' ');
    let obj = {};
    
    for (let e of set) {
      if (obj.hasOwnProperty(e)) {
        obj[e]++;
      } else {
        obj[e] = 1;
      }
    }
    
    let arr = Object.entries(obj);
    
    arr.sort(function(a,b) {
      if (a[1] > b[1]) {return -1;}
      if (a[1] < b[1]) {return 1;}
      if (a[1] == b[1]) {return 0;}
    });
    
    if (arr.length > 2) {
      return [arr[0][0], arr[1][0], arr[2][0]];
    } else if (arr.length == 2) {
      return [arr[0][0], arr[1][0]];
    } else if (arr.length == 1 && /[a-z]+/i.test(arr[0][0])) {
      return [arr[0][0]];
    } else {
      return [];
    }
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."));
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(topThreeWords(" //wont won't won't"));