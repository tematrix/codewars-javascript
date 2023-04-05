/*
DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. The input string can be 
assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


ПЕРЕВОД:
Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество различных буквенных символов без учета регистра 
и цифровых цифр, которые встречаются во входной строке более одного раза. Можно предположить, 
что входная строка содержит только алфавиты (как прописные, так и строчные) и цифровые цифры.

Пример
"abcde" -> 0 # ни один символ не повторяется более одного раза
"aabbcde" -> 2 # 'a' и 'b'
"aabBcde" -> 2 # 'a' встречается дважды, а 'b' дважды (`b` и `Bb`)
"неделимость" -> 1 # "i" встречается шесть раз
"Неделимости" -> 2 # "i" встречается семь раз, а "s" - дважды
"aA11" -> 2 # 'a' и '1'
"ABBA" -> 2 # 'A' и 'B' встречаются дважды
*/