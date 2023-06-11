/*
DESCRIPTION:
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array 
with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#) 
(use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"


ПЕРЕВОД:
Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1 и возвращает массив 
со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего к наибольшему. 
Если число простое, возвращает строку '(целое число) простое' (null в C#). 
(используйте Either String a в Haskell и Result<Vec<u32>, String> в Rust).

Пример:
divisors(12); // должно возвращать [2,3,4,6].
divisors(25); // должно возвращать [5]
divisors(13); // должно возвращать "13 - простое".
*/

function divisors(integer) {
    let result = [];
    
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {result.push(i);}
    }
    
    return result.length === 0 ? `${integer} is prime` : result;
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));