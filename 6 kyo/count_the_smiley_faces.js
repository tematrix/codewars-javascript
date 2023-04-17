/*
DESCRIPTION:
Given an array (arr) as an argument complete the function countSmileys that 
should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note
In case of an empty array return 0. You will not be tested with invalid input 
(input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


ПЕРЕВОД:
Дан массив (arr) в качестве аргумента. Напишите функцию countSmileys, 
которая должна возвращать общее количество улыбающихся лиц.

Правила для улыбающегося лица:

Каждое улыбающееся лицо должно содержать правильную пару глаз. Глаза могут быть обозначены как : или ;
У улыбающегося лица может быть нос, но это не обязательно. Допустимыми символами для носа являются - или ~
У каждого улыбающегося лица должен быть улыбающийся рот, который должен быть обозначен как ) или D
Дополнительные символы не допускаются, за исключением упомянутых.

Примеры:
countSmileys([':)', ';(', ';}', ':-D']); // должно вернуть 2;
countSmileys([';D', ':-(', ':-)', ';~)']); // должно вернуть 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // должно вернуть 1;

Примечание:
Если массив пустой, верните 0. Входные данные всегда будут допустимыми (входной массив всегда будет существовать). 
Порядок элементов глаз, носа и рта будет всегда один и тот же.
*/