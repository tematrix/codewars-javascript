/*
DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


ПЕРЕВОД:
Перенесите первую букву каждого слова в его конец, затем добавьте "ay" в конец слова. 
Знаки препинания оставьте нетронутыми.

Примеры
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world!'); // elloHay orldway!
*/

function pigIt(str){
    let arr = str.split(' '), res = [];
    for (let e of arr) {
      if (e !== '!' && e !== '.' && e !== ',' && e !== '?') {
        let s = e.split('');
        s.push(`${s[0]}ay`);
        s.shift();
        res.push(s.join(''));
      } else {
        res.push(e);
      }   
    }
    return res.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));