/*
DESCRIPTION:
There is a war...between alphabets!
There are two groups of hostile letters. The tension between left side letters and right side 
letters was too high and the war began. The letters called airstrike to help them in war - dashes 
and dots are spread throughout the battlefield. Who will win?

Task
Write a function that accepts a fight string which consists of only small letters and * which 
represents a bomb drop place. Return who wins the fight after bombs are exploded. 
When the left side wins return Left side wins!, and when the right side wins return Right side wins!. 
In other cases, return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!


ПЕРЕВОД:
Идет война... между алфавитами!
Есть две группы враждебных букв. Напряжение между левосторонними и правосторонними буквами 
буквами стало слишком высоким, и началась война. Буквы призвали на помощь в войне авиацию - тире 
и точки разбросаны по всему полю битвы. Кто победит?

Задание
Напишите функцию, которая принимает строку fight, состоящую только из маленьких букв и *, которая 
обозначает место сброса бомбы. После взрыва бомб возвращает, кто победил в бою. 
Если побеждает левая сторона, верните "Левая сторона победила!", а если правая сторона, 
верните "Правая сторона победила!". В других случаях верните "Давай сразимся снова!".

Буквы левой стороны и их сила:

 w - 4
 p - 3 
 b - 2
 s - 1
Правые буквы и их сила:

 m - 4
 q - 3 
 d - 2
 z - 1
Остальные буквы не обладают силой и являются лишь жертвами.
Бомбы * убивают соседние буквы (например, aa*aa => a___a, **aa** => ______ );

Пример
alphabetWar("s*zz"); //=> Правая сторона побеждает!
alphabetWar("*zd*qm*wp*bs*"); //=> Давайте сразимся снова!
alphabetWar("zzzz*s*"); //=> Правая сторона побеждает!
alphabetWar("www*www****z"); //=> Левая сторона побеждает!
*/