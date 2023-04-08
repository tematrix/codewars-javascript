/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


ПЕРЕВОД:
Доработайте решение так, чтобы оно разбивало строку на пары из двух символов. 
Если строка содержит нечетное количество символов, то замените недостающий 
второй символ последней пары знаком подчеркивания ('_').

Примеры:

* 'abc' => ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'].
*/

function solution(str){
    let res = []; str = str.split('');
    if (str.length % 2 != 0) {
      str.push('_');
    }
    for (let i = 0; i < str.length; i+=2) {
      res.push(`${str[i]}${str[i+1]}`);
    }
    return res;
}

console.log(solution('abc'));
console.log(solution('abcdef'));