/*
DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"


ПЕРЕВОД:
Дезоксирибонуклеиновая кислота (ДНК) - это химическое соединение, которое находится 
в ядре клеток и несет "инструкции" для развития и функционирования живых организмов.

В строках ДНК символы "A" и "T" являются комплементарными друг другу, как и "C" и "G".
Ваша функция получает на вход одну сторону ДНК (строку, за исключением Haskell);
вам нужно вернуть другую комплементарную сторону.
Строка ДНК никогда не будет пустой или не содержать ДНК (опять же, за исключением Haskell).

Пример: (ввод --> вывод)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna){
    let a = dna.split('');
    for (let i = 0; i < a.length; i++) {
      switch(a[i]) {
          case 'A': a[i] = 'T'; break;
          case 'T': a[i] = 'A'; break;
          case 'G': a[i] = 'C'; break;
          case 'C': a[i] = 'G'; break;
      }
    }
    return a.join('');
}

console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));