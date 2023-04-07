/*
DESCRIPTION:
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing 
the last 3 (instead of 2) numbers of the sequence to generate the next. 
And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as 
a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead 
of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted 
to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function 
that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, 
then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)


ПЕРЕВОД:
Хорошо познакомился со старшим братом Фибоначчи, он ЖЕ Tribonacci.

Как уже может быть понятно из названия, он работает в основном как Фибоначчи, но суммирует 
последние 3 (вместо 2) числа последовательности, чтобы сгенерировать следующее. 
Что еще хуже, к сожалению, я не услышу, как люди, не являющиеся носителями итальянского языка, пытаются это произнести

Итак, если мы хотим начать нашу последовательность Tribacci с [1, 1, 1] в качестве начальных 
входных данных (она же сигнатура), у нас есть эта последовательность:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
Но что, если мы начнем с [0, 0, 1] в качестве подписи? Поскольку начало с [0, 1] вместо [1, 1] в основном 
сдвигает общую последовательность Фибоначчи на одно место, у вас может возникнуть соблазн подумать, 
что мы получим ту же последовательность, сдвинутую на 2 места, но это не так, и мы получим:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Что ж, возможно, вы уже догадались об этом, но для ясности: вам нужно создать функцию Фибоначчи, которая, 
учитывая массив сигнатур / список, возвращает первые n элементов - сигнатур, включенных в последовательность so seeded.

Подпись всегда будет содержать 3 числа; n всегда будет неотрицательным числом; если n == 0, 
то верните пустой массив (за исключением того, что в C return NULL) 
и будьте готовы ко всему остальному, что четко не указано
*/

function tribonacci(s,n){
    if (n < 4) {
      s.splice(n, 3-n);
      return s;
    }
    for (let i = 0; i < n-3; i++) {
      s.push(s[i]+s[i+1]+s[i+2]);
    }
    return s;
}

console.log(tribonacci([1, 1 ,1],10));
console.log(tribonacci([0, 0 ,1],10));