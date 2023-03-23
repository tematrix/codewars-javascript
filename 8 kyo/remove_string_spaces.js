/*
DESCRIPTION:
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"


ПЕРЕВОД:
Напишите функцию, которая удаляет пробелы из строки, затем возвращает результирующую строку.

Примеры:

Ввод -> Вывод
"8 j 8 mBliB8g imjB8B8 jl B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r " -> "8aaaaaddddr"
*/

function noSpace(x){
    let arr = x.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr.join('');
}

console.log(noSpace("8 j 8      mBliB8g  imjB8B8 jl B"));
console.log(noSpace("8  8  Bi  fk8h B 8 BB8B B B B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r      "));