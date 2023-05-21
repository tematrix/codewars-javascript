/*
DESCRIPTION:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


ПЕРЕВОД:
Предположим, что символ "#" в строке действует как клавиша "Backspace" на клавиатуре. 
Это означает, что строка "a#bc#d" фактически будет выглядеть как "bd".

Ваша задача - обработать строку, содержащую символы "#".

Примеры:
"abc#d##c" ==> "ac"
"abc##d######" ==> ""
"#######" ==> ""
"" ==> ""
*/

function cleanString(s) {
    let result = [];
    for (let e of s) {e === '#' ? result.pop() : result.push(e);}
    return result.join('');
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc##d######"));
console.log(cleanString("#######"));
console.log(cleanString(""));