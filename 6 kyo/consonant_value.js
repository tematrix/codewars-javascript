/*
DESCRIPTION:
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" 
and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" 
with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

For C: do not mutate input.


ПЕРЕВОД:
Дана строка в нижнем регистре, содержащая только алфавитные символы без пробелов, 
возвращает наибольшее значение согласных подстрок. 
Согласными считаются любые буквы алфавита, кроме "aeiou".

Присвоим следующие значения: a = 1, b = 2, c = 3, .... z = 26.

Например, для слова "зодиаки" вычеркнем гласные. Получаем: "z o d ia cs"

-- Согласные подстроки это: "z", "d" и "cs". 
и значения: z = 26, d = 4 и cs = 3 + 19 = 22. Наибольшее значение - 26.
solve("zodiacs") = 26

Для слова "сила" solve("сила") = 57
-- Подстроками согласных являются: "str" и "ngth" 
со значениями "str" = 19 + 20 + 18 = 57 и "ngth" = 14 + 7 + 20 + 8 = 49. Наибольшее значение равно 57.

Для C: не мутируйте входные данные.
*/

function solve(s) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let maxVal = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (consonants.includes(s[i])) {
        let val = 0;
        for (let j = i; j < s.length; j++) {
          if (!consonants.includes(s[j])) {
            break;
          }
          val += s.charCodeAt(j) - 96;
        }
        if (val > maxVal) {
          maxVal = val;
        }
      }
    }
  
    return maxVal;
}