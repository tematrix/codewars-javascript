/*
DESCRIPTION:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'


ПЕРЕВОД:
Вам дано секретное сообщение, которое нужно расшифровать. Вот что вам нужно знать, чтобы расшифровать его:

Для каждого слова

вторая и последняя буквы меняются местами (например, Hello становится Holle)
первая буква заменяется кодом символа (например, H становится 72).
Примечание: не используются специальные символы, только буквы и пробелы.

Примеры

decipherThis('72olle 103doo 100ya'); // 'Здравствуйте, добрый день'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
    const words = str.split(' '),
          decodedWords = words.map(word => {
            const charCode = parseInt(word),
                  rest = word.slice(String(charCode).length);
  
            let newWord = String.fromCharCode(charCode);
  
            if (rest.length > 1) {
              newWord += rest[rest.length - 1] + rest.slice(1, -1) + rest[0];
            } else {
              newWord += rest;
            }
  
            return newWord;
          });
  
    return decodedWords.join(' ');
}