/*
DESCRIPTION:
Winter is coming, you must prepare your ski holidays. 
The objective of this kata is to determine the number of pair of gloves 
you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of 
pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)


ПЕРЕВОД:
Приближается зима, нужно готовиться к лыжному отдыху. 
Цель этого ката - определить количество пар перчаток. 
которые вы можете составить из имеющихся у вас в ящике перчаток.

Учитывая массив, описывающий цвет каждой перчатки, верните количество пар, 
которые вы можете составить, предполагая, что только перчатки одного цвета могут образовывать пары.

Примеры:
input = ["красный", "зеленый", "красный", "синий", "синий"].
результат = 2 (1 красная пара + 1 синяя пара)

вход = ["красный", "красный", "красный", "красный", "красный", "красный"].
результат = 3 (3 красные пары)
*/

function numberOfPairs(gloves) {
    let pairs = 0, colors = {};
    
    for (let i = 0; i < gloves.length; i++) {
      let color = gloves[i];
      
      if (colors[color]) {
        pairs++;
        colors[color] = colors[color] - 1;
      } else {
        colors[color] = (colors[color] || 0) + 1;
      }
    }
    
    return pairs;
}