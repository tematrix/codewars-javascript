/*
DESCRIPTION:
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. 
The directions were "NORTH", "SOUTH", "WEST", "EAST". 
Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. 
Since this is the wild west, with dreadful weather and not much water, 
it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, 
better stay to the same place! So the task is to give to the man a simplified version of the plan. 
A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" 
is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, 
therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite 
but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path 
is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings 
with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. 
"NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other 
and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.


ПЕРЕВОД:
Однажды на пути через старый дикий горный запад...
...человеку дали указания, как пройти из одной точки в другую. 
Направления были следующие: "север", "юг", "запад", "восток". 
Ясно, что "СЕВЕР" и "ЮГ" противоположны, "ЗАПАД" и "ВОСТОК" тоже.

Идти в одну сторону и сразу же возвращаться в противоположную - это ненужные усилия. 
Поскольку это дикий запад, с ужасной погодой и небольшим количеством воды, 
важно сэкономить силы, иначе можно умереть от жажды!

Как я пересек горную пустыню умным путем.
Указания, данные человеку, могут быть, например, следующими (в зависимости от языка):

["СЕВЕР", "ЮГ", "ЮГ", "ВОСТОК", "ЗАПАД", "СЕВЕР", "ЗАПАД"].
или
{ "СЕВЕР", "ЮГ", "ЮГ", "ВОСТОК", "ЗАПАД", "СЕВЕР", "ЗАПАД" };
или
[север, юг, юг, восток, запад, север, запад].
Сразу видно, что идти "на север" и тут же "на юг" нецелесообразно, 
лучше оставаться на том же месте! Поэтому задача состоит в том, чтобы дать человеку упрощенный вариант плана. 
Лучший план в данном случае - это просто:

["ЗАПАД"].
или
["ЗАПАД"]
или
[West].
Другие примеры:
В ["NORTH", "SOUTH", "EAST", "WEST"], направление "NORTH" + "SOUTH" 
это идти на север и сразу же вернуться обратно.

Путь становится ["EAST", "WEST"], теперь "EAST" и "WEST" аннигилируют друг друга, 
поэтому конечным результатом будет [] (nil в Clojure).

В ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" и "SOUTH" не являются прямо противоположными. 
но они становятся прямо противоположными после сокращения "ВОСТОКА" и "ЗАПАДА", так что весь путь 
сводится к ["ЗАПАД", "ЗАПАД"].

Задание
Напишите функцию dirReduc, которая принимает массив строк и возвращает массив строк 
с удаленными ненужными направлениями (W<->E или S<->N рядом).

Версия на языке Haskell принимает список направлений с данными Direction = North | East | West | South.
Версия Clojure возвращает nil, когда путь сводится к нулю.
Версия Rust принимает фрагмент enum Direction {North, East, West, South}.
Дополнительные примеры смотрите в разделе "Примеры тестов:".
Примечания
Не все пути могут быть упрощены. Путь ["NORTH", "WEST", "SOUTH", "EAST"] не является сводимым. 
"СЕВЕР" и "ЗАПАД", "ЗАПАД" и "ЮГ", "ЮГ" и "ВОСТОК" не являются прямыми противоположностями друг друга 
и не могут стать таковыми. Следовательно, путь результата сам по себе является ["NORTH", "WEST", "SOUTH", "EAST"].
если вы хотите перевести, пожалуйста, спросите перед переводом.
*/

function dirReduc(arr){
    let changes = false;  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "NORTH" && arr[i+1]  == "SOUTH" ||
          arr[i] == "SOUTH" && arr[i+1]  == "NORTH" ||
          arr[i] == "EAST" && arr[i+1]  == "WEST" ||
          arr[i] == "WEST" && arr[i+1]  == "EAST") {
        arr.splice(i, 2);
        changes = true;
        i--;      
      }
    }  
    return changes ? dirReduc(arr) : arr;  
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));