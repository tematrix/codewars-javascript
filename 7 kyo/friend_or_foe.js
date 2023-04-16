/*
DESCRIPTION:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.


ПЕРЕВОД:
Напишите программу, которая фильтрует список строк и возвращает список только с именами ваших друзей.

Если имя содержит ровно 4 буквы, то вы можете быть уверены, что это ваш друг! 
В противном случае, можно быть уверенным, что это не ваш друг...

Например, на входе списка ["Ryan", "Kieran", "Jason", "Yous"] программа должна вернуть ["Ryan", "Yous"].

То есть, friend ["Ryan", "Kieran", "Mark"] shouldBe ["Ryan", "Mark"]
Примечание: сохраняйте исходный порядок имен в выходном списке.
*/

function friend(friends){
    let result = [];
    friends.forEach(e => {
      e.length == 4 ? result.push(e) : e;
    });
    return result;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Ryan", "Kieran", "Mark"]));