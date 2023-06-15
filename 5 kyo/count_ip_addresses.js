/*
DESCRIPTION:
Implement a function that receives two IPv4 addresses, and returns the number 
of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246


ПЕРЕВОД:
Реализуйте функцию, которая получает два адреса IPv4 и возвращает количество 
адресов между ними (включая первый и исключая последний).

Все входные данные будут действительными адресами IPv4 в виде строк. 
Последний адрес всегда будет больше первого.

Примеры
* С входными данными "10.0.0.0", "10.0.0.50" => return 50 
* При вводе "10.0.0.0", "10.0.1.0" => return 256 
* С вводом "20.0.0.10", "20.0.1.0" => return 246
*/

function ipsBetween(start, end){
    let startArr = start.split('.'),
        endArr = end.split('.'),
        result = 0;
    
    for (let i = 0; i < 4; i++) {
      result += (parseInt(endArr[i]) - parseInt(startArr[i])) * Math.pow(256, 3 - i);
    }
    
    return result;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));