/*
DESCRIPTION:
Write a function partlist that gives all the ways to divide a list (an array) 
of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages 
without tuples or a structin C - C: see Examples test Cases - )

Each part will be in a string
Elements of a pair must be in the same order as in the original array.

Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], 
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

or

a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, 
{"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), 
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or 

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), 
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)
(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

Note
You can see other examples for each language in "Your test cases"


ПЕРЕВОД:
Напишите функцию partlist, которая дает все способы разделения списка (массива) из
по крайней мере двух элементов на две непустые части.

Каждая пара непустых частей будет в виде пары (или массива для языков без кортежей
или структур в C - см. примеры тестовых заданий - )

Каждая часть будет в виде строки.
Элементы пары должны быть в том же порядке, что и в исходном массиве.

Примеры возврата для разных языков:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"],
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

или

a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"},
{"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

или

a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

или

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

или

a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)
(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

Примечание
Вы можете увидеть другие примеры для каждого языка в "Ваших тестовых случаях".
*/

function partlist(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
      result.push([arr.slice(0,i).join(' '),arr.slice(i).join(' ')]);
    }
    return result;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));