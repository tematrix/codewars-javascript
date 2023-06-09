/*
DESCRIPTION:
In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 
50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: 
if the parameter percent is 2 you have to convert it to 0.02.


ПЕРЕВОД:
В небольшом городе население в начале года составляет p0 = 1000 человек.
Население регулярно увеличивается на 2 процента в год, и кроме того,
каждый год в город приезжают 50 новых жителей.
Сколько лет понадобится городу, чтобы увидеть свое население больше или равное p = 1200 жителей?

В конце первого года население составит:
1000 + 1000 * 0.02 + 50 => 1070 человек

В конце второго года население составит:
1070 + 1070 * 0.02 + 50 => 1141 человек (** количество жителей - целое число **)

В конце третьего года население составит:
1141 + 1141 * 0.02 + 50 => 1213

Понадобится 3 года целиком.
В более общем виде, учитывая параметры:

p0, процент, aug (жители, прибывающие или уезжающие каждый год), 
p (население, которого нужно достичь или превысить)

функция nb_year должна вернуть число n полных лет, 
необходимых для достижения населения больше или равного p.

aug - целое число, процент - положительное или нулевое число с плавающей запятой, 
p0 и p - положительные целые числа (> 0)

Примеры:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Примечание:
Не забудьте преобразовать параметр процент в процентном выражении в теле функции:
если параметр процент равен 2, вы должны преобразовать его в 0,02.
*/