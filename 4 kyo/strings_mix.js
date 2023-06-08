/*
DESCRIPTION:
Given two strings s1 and s2, we want to visualize how different the two strings are. 
We will only take into account the lowercase letters (a to z). 
First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. 
In the following we will not consider letters when the maximum 
of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: 
"1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. 
In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears 
as many times as its maximum if this maximum is strictly greater than 1; 
these letters will be prefixed by the number of the string where they appear with 
their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) 
will be in decreasing order of their length and when they have the same length sorted 
in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); 
the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"


ПЕРЕВОД:
Даны две строки s1 и s2. Нам нужно визуализировать, насколько различаются две строки. 
Мы будем учитывать только строчные буквы (от a до z). 
Сначала мы подсчитаем частоту каждой строчной буквы в s1 и s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 содержит 4 'a', 2 'b', 1 'c'

s2 содержит 3 'a', 3 'b', 1 'c', 1 'd'

Таким образом, максимальное количество 'a' в s1 и s2 равно 4 из s1; максимальное 
количество 'b' равно 3 из s2.В дальнейшем мы не будем учитывать буквы, 
у которых максимальное количество вхождений меньше или равно 1.

Мы можем описать различия между s1 и s2 в следующей строке: "1:aaaa/2:bbb", 
где 1 в 1:aaaa означает строку s1, а aaaa - потому что максимальное количество a равно 4. 
Аналогично, 2:bbb означает строку s2 и bbb, потому что максимальное количество b равно 3.

Задача состоит в том, чтобы создать строку, в которой каждая строчная буква s1 или s2 
появляется столько раз, сколько раз она встречается максимальное количество раз, 
если это максимальное количество строго больше 1; эти буквы будут предварены номером строки, 
где они появляются, со своим максимальным значением и двоеточием. 
Если максимум находится как в s1, так и в s2, то префикс =:.

В результате подстроки (подстрока - это, например, 2:nnnnn или 1:hhh; она содержит префикс) 
будут расположены в порядке убывания их длины, и когда они имеют одинаковую длину, 
они сортируются в лексикографическом порядке (буквы и цифры - более точно, 
сортируются по кодовой точке); различные группы разделяются символом '/'. 
Смотрите примеры и "Примеры тестов".

Надеюсь, что другие примеры смогут прояснить это.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "Are the kids at home? aaaaa fffff"
s2 = "Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

Примечание для Swift, R, PowerShell
Префикс =: заменяется на E:.

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
*/

function mix(s1,s2) {
    const countLetters = (s) => {
      const counts = {},
            regex = /[a-z]/g,
            letters = s.match(regex);
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
      }
      return counts;
    };
    
    const counts1 = countLetters(s1),
          counts2 = countLetters(s2),
          maxStrings = [];
    
    const addLetters = (a, b) => {
      for (let letter of Object.keys(b)) {
        if (a[letter]) {
          continue;
        } else {
          a[letter] = 1;
        }
      }
    }
    
    addLetters(counts1, counts2);
    addLetters(counts2, counts1);
  
    for (let letter of Object.keys(counts1)) {
      if (counts1[letter] <= 1 && counts2[letter] <= 1) {
        continue;
      }
      if (counts1[letter] === counts2[letter]) {
        maxStrings.push(`3:${letter.repeat(counts1[letter])}`);
      } else if (counts1[letter] > counts2[letter]) {
        maxStrings.push(`1:${letter.repeat(counts1[letter])}`);
      } else {
        maxStrings.push(`2:${letter.repeat(counts2[letter])}`);
      }
    }
    
    maxStrings.sort((a,b) => {
      return a.length !== b.length ? b.length - a.length : a.localeCompare(b);
    });
    
    return maxStrings.filter(e => e.length > 2).join('/').replace(/3/g,'=');
}

let s1 = "my&friend&Paul has heavy hats! &";
let s2 = "my friend John has many many friends &";
console.log(mix(s1, s2));

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &";
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&";
console.log(mix(s1, s2));

s1 = "Are the kids at home? aaaaa fffff";
s2 = "Yes they are here! aaaaa fffff";
console.log(mix(s1, s2));


s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &";
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&";
console.log(mix(s1, s2));