/*
DESCRIPTION:
Implement the function unique_in_order which takes as argument a sequence and returns 
a list of items without any elements with the same value next to each other 
and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]


ПЕРЕВОД:
Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность 
и возвращает список элементов без каких-либо элементов с одинаковым значением 
рядом друг с другом и сохранением исходного порядка элементов.

Например:

уникальный по порядку('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
Уникальный по порядку('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
Уникальный порядок([1,2,2,3,3]) == [1,2,3]
*/

var uniqueInOrder=function(iterable){
    if (typeof iterable == 'string') {
      iterable = iterable.split('');
    }
    if (iterable.length <= 0) {
      return iterable;
    }
    let result = [];
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i-1]) {
        result.push(iterable[i-1]);
      }
    }
    result.push(iterable[iterable.length-1]);
    return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));