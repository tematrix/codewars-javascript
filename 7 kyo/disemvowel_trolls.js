/*
DESCRIPTION:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


ПЕРЕВОД:
Тролли атакуют ваш раздел комментариев!

Распространенный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, 
нейтрализуя угрозу.

Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с 
удаленными всеми гласными.

Например, строка "Этот веб-сайт для неудачников, LOL!" стала бы "This wbst s fr lsrs LL!".

Примечание: в этом ката y не считается гласной.
*/

function disemvowel(str) {
    const lc = (i) => {
      return i.toLowerCase();    
    };
    
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i++) {
      if (lc(arr[i]) == 'a' || lc(arr[i]) == 'e' || lc(arr[i]) == 'i' || lc(arr[i]) == 'o' || lc(arr[i]) == 'u') {
        arr.splice(i, 1);
        i--;
      }    
    }
    
    return arr.join('');
}

console.log(disemvowel('This website is for losers LOL!'));