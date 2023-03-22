/*
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


ПЕРЕВОД:
Завершите решение так, чтобы оно изменило переданную в него строку на противоположную.

'мир' => 'рим'
'слово' => 'оволс'
*/

function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution('world'));
console.log(solution('word'));