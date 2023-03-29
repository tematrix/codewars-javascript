/*
DESCRIPTION:
In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


ПЕРЕВОД:
В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел 
и строк и возвращает новый список с отфильтрованными строками.

Пример
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filterList(l) {
    let a = [];
    l.forEach(i => {if(typeof i == 'number') {a.push(i);}});
    return a; 
}

console.log(filterList([1,2,'a','b']));
console.log(filterList([1,'a','b',0,15]));
console.log(filterList([1,2,'aasf','1','123',123]));