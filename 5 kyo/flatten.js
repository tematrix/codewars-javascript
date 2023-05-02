/*
DESCRIPTION:
For this exercise you will create a global flatten method. 
The method takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array 
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']


ПЕРЕВОД:
Для этого упражнения вы создадите глобальный метод flatten. 
Метод принимает любое количество аргументов и сглаживает их в один массив. 
Если какие-либо переданные аргументы являются массивом, то отдельные объекты внутри массива 
будут сглажены, чтобы они существовали на том же уровне, что и другие аргументы. 
Любые вложенные массивы, как бы глубоко они ни были вложены, должны быть сглажены в один результирующий массив.

Приведены примеры того, как будет использоваться этот метод и каковы будут ожидаемые результаты:

flatten(1, [2, 3], 4, 5, [6, [7]]) // возвращает [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // возвращает ['a', 'b', 2, 3, null, 4, 'c']
*/

function flatten(...a) {
    let f = [].concat(...a);
    return f.some(Array.isArray) ? flatten(...f) : f;
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));