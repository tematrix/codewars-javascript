/*
DESCRIPTION:
Middle Earth is about to go to war. 
The forces of good will have many battles with the forces of evil. 
Different races will certainly be involved. 
Each race has a certain worth when battling against others. 
On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Although weather, location, supplies and valor play a part in any battle, 
if you add up the worth of the side of good and compare it with the worth of the side of evil, 
the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, 
followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. 
The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, 
"Battle Result: Evil eradicates all trace of Good" if evil wins, 
or "Battle Result: No victor on this battle field" if it ends in a tie.


ПЕРЕВОД:
Средиземье готовится к войне. 
Силы добра будут сражаться с силами зла. 
В этой войне будут задействованы различные расы, 
каждая из которых имеет свою ценность в битве против других. 
На стороне добра борются следующие расы, с их соответствующей ценностью:

Хоббиты: 1
Люди: 2
Эльфы: 3
Гномы: 3
Орлы: 4
Волшебники: 10
На стороне зла борются:

Орки: 1
Люди: 2
Варги: 2
Гоблины: 2
Урук-хаи: 3
Тролли: 5
Волшебники: 10

Хотя погода, местоположение, запасы и отвага играют немаловажную роль в любой битве, 
если сложить ценность стороны добра и сравнить ее с ценностью стороны зла, 
то сторона с большей ценностью склонна к победе.

Таким образом, имея количество каждой из рас на стороне добра, 
а затем количество каждой из рас на стороне зла, необходимо определить, какая сторона победит.

Ввод:
Функция получит два параметра. Каждый параметр будет строкой из нескольких целых чисел, 
разделенных одиночным пробелом. Каждая строка будет содержать количество каждой расы на стороне добра и зла.

Первый параметр будет содержать количество каждой расы на стороне добра в следующем порядке:

Хоббиты, Люди, Эльфы, Гномы, Орлы, Волшебники.
Второй параметр будет содержать количество каждой расы на стороне зла в следующем порядке:

Орки, Люди, Варги, Гоблины, Урук-хаи, Тролли, Волшебники.
Все значения являются неотрицательными целыми числами. 
Сумма ценности каждой стороны не превышает 32-битного целого числа.

Вывод:
Вернуть "Battle Result: Good triumphs over Evil", если побеждает добро, 
"Battle Result: Evil eradicates all trace of Good", если побеждает зло, 
или "Battle Result: No victor on this battle field", если битва заканчивается вничью.
*/