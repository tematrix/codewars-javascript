/*
DESCRIPTION:
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring 
of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".


ПЕРЕВОД:
На вход подается строка str из цифр. Разрежьте строку на фрагменты (фрагмент здесь - это подстрока 
исходной строки) размером sz (игнорируйте последний кусок, если его размер меньше sz).

Если кусок представляет собой целое число, такое, что сумма кубов его цифр делится на 2, 
переверните этот кусок; в противном случае поверните его влево на одну позицию. 
Соберите вместе эти измененные куски и верните результат в виде строки.

Если
sz <= 0 или если str пуста, верните "".
Если sz больше (>) длины строки str, то невозможно взять кусок размером sz, поэтому возвращается "".

Примеры:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Пример строки, повернутой влево на одну позицию:
s = "123456" дает "234561".
*/

function revrot(str, sz) {
    if (sz <= 0 || str.length === 0 || sz > str.length) {return "";}
  
    let elements = [];
  
    for (let i = 0; i < str.length; i += sz) {
      let element = str.slice(i, i + sz);
  
      if (element.length === sz) {
        let sum = element.split("").reduce((s, e) => s + Math.pow(parseInt(e), 3), 0);
  
        if (sum % 2 === 0) {
          elements.push(element.split("").reverse().join(""));
        } else {
          elements.push(element.slice(1) + element[0]);
        }
      }
    }
  
    return elements.join("");
}

console.log(revrot("123456987654", 6));
console.log(revrot("123456987653", 6));
console.log(revrot("66443875", 4));
console.log(revrot("66443875", 8));
console.log(revrot("664438769", 8));
console.log(revrot("123456779", 8));
console.log(revrot("", 8));
console.log(revrot("123456779", 0));
console.log(revrot("563000655734469485", 4));