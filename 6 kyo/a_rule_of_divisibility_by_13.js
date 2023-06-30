/*
DESCRIPTION:
From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer 
is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 
by 13 is the same as the remainder of 87 by 13 ( i.e 9).

Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). 
thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48


ПЕРЕВОД:
Из Википедии:

"Правило делимости - это сокращённый способ определения делимости данного целого числа 
делится ли данное целое число на фиксированный делитель без выполнения деления, обычно путем изучения его цифр".

При делении последовательных чисел, равных 10, на 13 получаются следующие остатки от деления целых чисел:

1, 10, 9, 12, 3, 4, потому что:

10 ^ 0 -> 1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 -> 9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 -> 3 (mod 13)
10 ^ 5 -> 4 (mod 13)
(Для "mod" вы можете посмотреть: https://en.wikipedia.org/wiki/Modulo_operation).

Затем вся схема повторяется. Отсюда следующий метод:

Умножить

правую старшую цифру числа с левой старшей цифрой в последовательности, показанной выше,
вторую правую старшую цифру числа со второй левой старшей цифрой числа в этой последовательности.
Цикл продолжается, и вы суммируете все эти произведения. Повторяйте этот процесс до тех пор, 
пока последовательность сумм не станет стационарной.

Пример:
Какой остаток получается при делении числа 1234567 на 13?

7 6 5 4 3 2 1 (цифры числа 1234567 справа)
× × × × × × (умножение)
1 10 9 12 3 4 1 (повторяющаяся последовательность)
Таким образом, следуя методу, получаем:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

Повторяем процесс с числом 178:

8x1 + 7x10 + 1x9 = 87

и снова с числом 87:

7x1 + 8x10 = 87

С этого момента последовательность является стационарной (мы всегда получаем 87), а остаток от 1234567 
на 13 такой же, как и остаток от 87 на 13 (т.е. 9).

Задача:
Вызовите функцию thirt, которая обрабатывает эту последовательность операций над целым числом n (>=0). 
thirt вернет стационарное число.

thirt(1234567) вычисляет 178, затем 87, затем 87 и возвращает 87.

thirt(321) вычисляет 48, 48, 48 и возвращает 48
*/

function thirt(n) {
    const pattern = [1, 10, 9, 12, 3, 4];
    let sum = n, lastSum = 0;
  
    while (sum !== lastSum) {
      lastSum = sum;
      sum = sum
        .toString()
        .split("")
        .reverse()
        .reduce((acc, digit, i) => acc + digit * pattern[i % pattern.length], 0);
    }
  
    return sum;
}