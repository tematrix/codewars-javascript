/*
DESCRIPTION:
The first input array is the key to the correct answers to an exam, 
like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. 
Return the score for this array of answers, giving +4 for each correct answer, 
-1 for each incorrect answer, and +0 for each blank answer, 
represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


ПЕРЕВОД:
Первый входной массив представляет собой ключ к правильным ответам на экзамене, 
например, ["a", "a", "b", "d"]. Второй массив содержит ответы, представленные студентом.

Оба массива не пусты и имеют одинаковую длину. 
Верните балл за этот массив ответов, давая +4 за каждый правильный ответ, 
-1 за каждый неправильный ответ и +0 за каждый пропущенный ответ, 
представленный пустой строкой (в C используется символ пробела).

Если балл меньше 0, верните 0.

Например:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0
*/