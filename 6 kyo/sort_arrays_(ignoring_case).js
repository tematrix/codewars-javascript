/*
DESCRIPTION:
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]


ПЕРЕВОД:
Отсортируйте данный массив строк в алфавитном порядке без учета регистра. Например:

["Hello", "there", "I'm", "fine"] --> ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"]) --> ["a", "B", "C", "d"]
*/

const sortme = (n) => {return n.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));}

console.log(sortme(["Hello", "there", "I'm", "fine"]));
console.log(sortme(["C", "d", "a", "B"]));