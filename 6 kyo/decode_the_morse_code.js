/*
DESCRIPTION:
In this kata you have to write a simple Morse code decoder. 
While the Morse code is now mostly superseded by voice and digital 
data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". 
For example, the letter A is coded as ·−, letter Q is coded as −−·−, 
and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, 
traditionally capital letters are used. When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words. 
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, 
the most notorious of those is the international distress signal 
SOS (that was first issued by Titanic), that is coded as ···−−−···. 
These special codes are treated as single special characters, 
and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input 
and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"


ПЕРЕВОД:
В этом ката вам нужно написать простой декодер азбуки Морзе.
Хотя азбука Морзе сейчас в основном заменена голосовыми и цифровыми
коммуникационными каналами, она все еще используется в некоторых приложениях
во всем мире. Азбука Морзе кодирует каждый символ как последовательность "точек" и "тире".
Например, буква A кодируется как ·−, буква Q кодируется как −−·−,
а цифра 1 кодируется как ·−−−−. Азбука Морзе нечувствительна к регистру,
традиционно используются заглавные буквы. Когда сообщение записывается
в азбуке Морзе, для разделения кодов символов используется один пробел,
а для разделения слов используются 3 пробела. Например, сообщение HEY JUDE
в азбуке Морзе записывается как ···· · −·−− ·−−− ··− −·· ·.

Примечание: дополнительные пробелы перед или после кода не имеют значения и должны игнорироваться.

Кроме букв, цифр и некоторых знаков препинания, есть некоторые специальные
сервисные коды, наиболее печально известным из которых является международный
сигнал бедствия SOS (впервые использованный на "Титанике"), который кодируется как ···−−−···.
Эти специальные коды рассматриваются как отдельные специальные символы и обычно передаются
как отдельные слова.

Ваша задача - реализовать функцию, которая принимает входные данные в виде кода Морзе
и возвращает расшифрованную человеком строку.

Например:

decodeMorse('.... . -.-- .--- ..- -.. .')
// должно вернуть "HEY JUDE"
*/