/*
DESCRIPTION:
Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.

Note:
Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""


ПЕРЕВОД:
Доработайте метод так, чтобы он форматировал слова в одно значение, разделенное запятой. 
Последнее слово должно быть отделено словом "и" вместо запятой. 
Метод принимает массив строк и возвращает одну отформатированную строку.

Примечание:
Пустые строковые значения следует игнорировать.
Пустые массивы или значения null/nil/None, передаваемые в метод, должны приводить к возврату пустой строки.
Пример: (Вход --> выход)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai и ronin"
['ninja', '', 'ronin'] --> "ниндзя и ронин"
[] -->""
*/

function formatWords(words) {
    if (!words || words.length === 0) {
      return '';
    }
    
    words = words.filter(e => e !== '');
    
    return words.length === 0 ? '' : words.length === 1 ? words[0] : words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
}