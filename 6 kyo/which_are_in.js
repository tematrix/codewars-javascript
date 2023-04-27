/*
DESCRIPTION:
Given two arrays of strings a1 and a2 return a sorted array r in 
lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.


ПЕРЕВОД:
Даны два массива строк a1 и a2. Необходимо вернуть отсортированный массив r, 
содержащий все строки из a1, которые являются подстроками строк из a2, в лексикографическом порядке.

Пример 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
возвращает ["arp", "live", "strong"]

Пример 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
возвращает []

Примечания:

Массивы записываются в общей нотации. Смотрите "Your Test Cases" для примеров на вашем языке.
В Shell bash a1 и a2 являются строками. Результат представляет собой строку, в которой слова разделены запятыми.
Обратите внимание, что в некоторых языках r должен быть без дубликатов.
*/