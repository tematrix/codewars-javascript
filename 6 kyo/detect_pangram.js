/*
DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.


ПЕРЕВОД:
Панграмма - это предложение, которое содержит каждую букву алфавита хотя бы один раз. 
Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой, 
потому что оно использует буквы A-Z хотя бы один раз (регистр не имеет значения).

Дана строка. Необходимо определить, является ли она панграммой. 
Если да, вернуть True, если нет - False. Цифры и знаки препинания не учитывать.
*/

function isPangram(string){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    string = string.toLowerCase();
    for (let e of alpha) {
        if (!string.includes(e)) {
            return false;
        }
    }
    return true;
}

console.log(isPangram('Hello world!'));
console.log(isPangram('sfsfsewwabcdefghijklmnopqrstuvwxyzsflsdnflfslfs'));