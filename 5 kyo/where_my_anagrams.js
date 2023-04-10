/*
DESCRIPTION:
What is an anagram? Well, two words are anagrams of each other 
if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


ПЕРЕВОД:
Что такое анаграмма? Два слова являются анаграммами друг друга, 
если они содержат одинаковые буквы. Например:

'abba' & 'baab' == true

'abba' & 'bbaa' == истина

'abba' & 'abbba' == false

'abba' & 'abca' == false
Напишите функцию, которая будет находить все анаграммы слова из списка. 
Вам будут даны два входных параметра - слово и массив со словами. 
Вы должны вернуть массив со всеми анаграммами или пустой массив, если их нет. Например:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa'].

анаграммы('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer'].

анаграммы('laser', ['lazing', 'lazy', 'lacer']) => []
*/