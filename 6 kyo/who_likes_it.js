/*
DESCRIPTION:
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.


ПЕРЕВОД:
Вы, вероятно, знакомы с системой "лайков" на Facebook и других страницах. 
Люди могут "лайкать" записи в блоге, фотографии или другие элементы. 
Мы хотим создать текст, который должен отображаться рядом с таким элементом.

Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится элемент. 
Он должен возвращать отображаемый текст, как показано в примерах:

[] --> "это никому не нравится"
["Питер"] --> "Питеру это нравится"
["Джейкоб", "Алекс"] --> "Джейкобу и Алексу нравится это"
["Макс", "Джон", "Марк"] --> "Макс, Джон и Марк вот так"
["Алекс", "Джейкоб", "Марк", "Макс"] --> "Алекс, Джейкоб и еще 2 таких же"
Примечание: Для 4 или более имен число в поле "и 2 других" просто увеличивается.
*/

function likes(n) {
    switch (n.length) {
        case 0: return `no one likes this`;
        case 1: return `${n[0]} likes this`;
        case 2: return `${n[0]} and ${n[1]} like this`;
        case 3: return `${n[0]}, ${n[1]} and ${n[2]} like this`;
        default: return `${n[0]}, ${n[1]} and ${n.length-2} others like this`;
    }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));