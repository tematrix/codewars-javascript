/*
DESCRIPTION:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all 
the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.


ПЕРЕВОД:
Реализуйте псевдо-алгоритм шифрования, который принимает строку S и целое число N,
конкатенирует все символы строки S с нечетными индексами и все символы строки S с четными индексами,
этот процесс должен быть повторен N раз.

Примеры:
encrypt("012345", 1) => "135024"
encrypt("012345", 2) => "135024" -> "304152"
encrypt("012345", 3) => "135024" -> "304152" -> "012345"

encrypt("01234", 1) => "13024"
encrypt("01234", 2) => "13024" -> "32104"
encrypt("01234", 3) => "13024" -> "32104" -> "20314"

Вместе с функцией шифрования вы также должны реализовать функцию дешифрования, которая обратит этот процесс.

Если строка S является пустым значением или целое число N не является положительным, вернуть первый аргумент без изменений.
*/