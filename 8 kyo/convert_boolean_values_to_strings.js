/*
DESCRIPTION:
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


ПЕРЕВОД:
Завершите метод, который принимает логическое значение и возвращает строку "Да" для true или строку "Нет" для false.
*/

function boolToWord(bool){
    if (bool === true) {
      return "Yes";
    } else {
      return "No";
    }
}

console.log(boolToWord(true));
console.log(boolToWord(false));