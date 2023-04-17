/*
DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members 
which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether 
the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


ПЕРЕВОД:
Крокет-клуб "Западные Пригороды" имеет две категории членства: Старший и Открытый.
Они хотели бы вашей помощи в создании формы заявки, которая будет сообщать потенциальным членам,
в какую категорию они будут отнесены.

Чтобы быть старшим, участник должен быть не моложе 55 лет и иметь гандикап больше 7.
В этом крокет-клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем ниже его гандикап.

Входные данные
Входные данные будут представлены списком пар. Каждая пара содержит информацию для одного потенциального члена.
Информация состоит из целого числа для возраста человека и целого числа для его гандикапа.

Выходные данные
Выходные данные будут представлены списком строковых значений (в Haskell и C: Открытый или Старший),
указывающих, должен ли соответствующий участник быть размещен в категории Старших или Открытых.

Пример
Входные данные: [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
Выходные данные: ["Открытый", "Открытый", "Старший", "Открытый", "Открытый", "Старший"]
*/

function openOrSenior(data){
    let a = [];
    data.forEach(e => {
      e[0] >= 55 && e[1] > 7 ? a.push('Senior') : a.push('Open');     
    });
    return a;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));