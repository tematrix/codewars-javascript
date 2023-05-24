/*
DESCRIPTION:
Complete the keysAndValues function so that it takes in an object 
and returns the keys and values as separate arrays.

Example:
keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

Style Points (JS/CoffeeScript only): This kata only tests for data 
that uses object literal notation (simple objects). 
For extra style, can you get your method to check for objects that extend their prototype?


ПЕРЕВОД:
Напишите функцию keysAndValues, которая принимает объект и возвращает его ключи и значения в отдельных массивах.

Пример:
keysAndValues({a: 1, b: 2, c: 3}) // должно вернуть [['a', 'b', 'c'], [1, 2, 3]]

Стилевые рекомендации (только для JavaScript/CoffeeScript):
Эта задача тестирует только данные, которые используют литеральную нотацию объекта (простые объекты).
Для дополнительного стиля, можете ли вы сделать свою функцию проверять объекты, расширяющие свой прототип?
*/

function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));