/*
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false


ПЕРЕВОД:
Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных 
друг за другом. Реализуйте функцию, которая определяет, является ли строка, содержащая только 
буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорируйте регистр букв.

Пример: (Ввод --> Вывод)

"Дерматоглифы" -> истинное "aba" -> ложное "moOse" -> ложное (игнорировать регистр букв)

Изограмма "Дерматоглифика" = истинная
Изограмма "лось" = ложная
Изограмма "аба" = ложная
*/

function isIsogram(str){
    let arr = str.toLowerCase().split('').sort();
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i-1]) {
        return false;
      }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moose'));
console.log(isIsogram('aba'));