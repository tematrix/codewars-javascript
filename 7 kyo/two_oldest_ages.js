/*
DESCRIPTION:
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return 
the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. 
The array will always include at least 2 items. 
If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0] --> [3, 10]


ПЕРЕВОД:
Функция/метод "two oldest ages" должен быть завершен. 
Он должен принимать массив чисел в качестве аргумента и 
возвращать два наибольших числа внутри массива. 
Возвращаемое значение должно быть массивом в формате 
[второй по возрасту возраст, наибольший возраст].

Порядок чисел во входном массиве может быть любым. 
Массив всегда будет содержать по крайней мере 2 элемента. 
Если есть два или более наибольших возраста, то вернуть оба в формате массива.

Например (Ввод --> Вывод):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0] --> [3, 10]
*/

function twoOldestAges(ages) {
    const sorted = [...ages].sort((a,b)=>b-a);
    return [sorted[1], sorted[0]];
}

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([1, 3, 10, 0]));