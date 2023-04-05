/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


ПЕРЕВОД:
Цель этого упражнения - преобразовать строку в новую строку, где каждый символ 
в новой строке равен "(", если этот символ появляется только один раз в исходной строке, 
или ")", если этот символ появляется более одного раза в исходной строке. 
Игнорируйте заглавные буквы при определении того, является ли символ дубликатом.

Примеры
"din" => "((("
"отступать" => "()()()"
"Успех" => ")())())"
"(( @" => "))(("
Записи
В сообщениях с утверждениями может быть неясно, что они отображают на некоторых языках. 
Если вы прочтете"...Он должен кодировать XXX", "XXX" - это ожидаемый результат, а не входные данные!
*/

function duplicateEncode(word){
    let r = '', a = word.toLowerCase().split('');
    for (let i of a) {
      a.filter(e => e === i).length > 1 ? r += ')' : r += '(';
    }
    return r;
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));