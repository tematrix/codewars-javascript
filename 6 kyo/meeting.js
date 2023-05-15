/*
DESCRIPTION:
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.


ПЕРЕВОД:
Джон пригласил несколько друзей. Его список выглядит так:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Можете ли вы создать программу, которая:

Приводит эту строку к верхнему регистру.
Сортирует список в алфавитном порядке по фамилии.
При одинаковых фамилиях, сортирует их по имени.
Фамилия и имя гостя выводятся в результате в скобках, разделенные запятой.
Таким образом, результат функции meeting(s) будет выглядеть так:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

Может случиться, что в двух разных семьях с одинаковой фамилией два человека также имеют одно и то же имя.
*/

function meeting(s) {
    let a = s.split(';').map(e => e.toLowerCase().split(':').reverse()).sort(),
        result = '';
    for (let e of a) {
      result += `(${e[0].toUpperCase()}, ${e[1].toUpperCase()})`;
    }
    return result;
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));