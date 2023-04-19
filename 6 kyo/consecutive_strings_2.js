/*
DESCRIPTION:
You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting 
of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) 
--> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" 
(return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption


ПЕРЕВОД:
У вас есть массив (список) строк strarr и целое число k.
Ваша задача - вернуть первую самую длинную строку, состоящую
из k последовательных строк, взятых из массива.

Примеры:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Соединив последовательные строки strarr по 2, мы получим:

treefoling (длина 10) объединение strarr[0] и strarr[1]
folingtrashy (" 12) объединение strarr[1] и strarr[2]
trashyblue (" 10) объединение strarr[2] и strarr[3]
blueabcdef (" 10) объединение strarr[3] и strarr[4]
abcdefuvwxyz (" 12) объединение strarr[4] и strarr[5]

Две строки являются самыми длинными: "folingtrashy" и "abcdefuvwxyz".
Первой из них является "folingtrashy", поэтому
longest_consec(strarr, 2) должна вернуть "folingtrashy".

Аналогично:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
--> "abigailtheta"

Если длина массива равна 0 или k > n или k <= 0, вернуть ""
(вернуть Nothing в Elm, "nothing" в Erlang).

Примечание:
последовательные строки: следуют одна за другой без прерываний.
*/