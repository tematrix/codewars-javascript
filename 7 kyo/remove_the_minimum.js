/*
DESCRIPTION:
The museum of incredible dull things wants to get rid of some exhibitions. 
Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, 
so she asks you to write a program that tells her the ratings of the items after 
one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]


ПЕРЕВОД:
Музей невероятно скучных вещей хочет избавиться от некоторых экспонатов. 
Мириам, интерьерный архитектор, придумала план, как удалить самые скучные экспозиции. 
Она оценила каждую экспозицию и удаляет ту, у которой наименьшая оценка.

Однако, как только она закончила оценку всех экспонатов, она уезжает на важную ярмарку и просит 
вас написать программу, которая сообщит ей оценки экспонатов после удаления наименьшего.

Задача
Дан массив целых чисел. Удалите наименьшее значение, не изменяя исходный массив/список. 
Если есть несколько элементов с одинаковым значением, удалите тот, у которого меньший индекс. 
Если вы получили пустой массив/список, верните пустой массив/список.

Не меняйте порядок элементов, которые остались.

Примеры:
Вход: [1,2,3,4,5], выход: [2,3,4,5]
Вход: [5,3,2,1,4], выход: [5,3,2,4]
Вход: [2,2,1,2,1], выход: [2,2,2,1]
*/

function removeSmallest(numbers) {
    if (!numbers) {
      return [];
    } else {
      let i = numbers.indexOf(Math.min(...numbers));
      return numbers.slice(0, i).concat(numbers.slice(i+1));
    }
}

console.log(removeSmallest([1,2,3,4,5]));
console.log(removeSmallest([5,3,2,1,4]));
console.log(removeSmallest([2,2,1,2,1]));