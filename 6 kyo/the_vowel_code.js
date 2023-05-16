/*
DESCRIPTION:
Step 1: Create a function called encode() to replace all the lowercase vowels 
in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". 
There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back 
into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers 
passed into the function will correspond to vowels.


ПЕРЕВОД:
Шаг 1: Создайте функцию с названием encode(), которая заменит все строчные гласные 
в заданной строке цифрами в соответствии с следующим шаблоном:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
Например, encode("hello") вернет "h2ll4". 
В этом ката нет необходимости заботиться о заглавных гласных.

Шаг 2: Теперь создайте функцию с названием decode(), чтобы преобразовать цифры 
обратно в гласные в соответствии с тем же шаблоном, показанным выше.

Например, decode("h3 th2r2") вернет "hi there".

Для простоты можно предположить, что любые цифры, переданные в функцию, 
будут соответствовать гласным.
*/

function encode(string) {
    let a = string.split('');
    for (let i = 0; i < a.length; i++) {
      switch(a[i]) {
          case 'a': a[i] = '1'; break;
          case 'e': a[i] = '2'; break;
          case 'i': a[i] = '3'; break;
          case 'o': a[i] = '4'; break;
          case 'u': a[i] = '5'; break;
      }
    }
    return a.join('');
}
  
  function decode(string) {
    let a = string.split('');
    for (let i = 0; i < a.length; i++) {
      switch(a[i]) {
          case '1': a[i] = 'a'; break;
          case '2': a[i] = 'e'; break;
          case '3': a[i] = 'i'; break;
          case '4': a[i] = 'o'; break;
          case '5': a[i] = 'u'; break;
      }
    }
    return a.join('');
}

console.log(encode("hello"));
console.log(decode("h3 th2r2"));