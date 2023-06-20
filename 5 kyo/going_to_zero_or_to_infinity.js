/*
DESCRIPTION:
Consider the following numbers (where n! is factorial(n)):

u1 = (1 / 1!) * (1!)
u2 = (1 / 2!) * (1! + 2!)
u3 = (1 / 3!) * (1! + 2! + 3!)
...
un = (1 / n!) * (1! + 2! + 3! + ... + n!)
Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials or to another number?

Task
Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:

1.0000989217538616 will be truncated to 1.000098
1.2125000000000001 will be truncated to 1.2125

Remark
Keep in mind that factorials grow rather rapidly, and you need to handle large inputs.

Hint
You could try to simplify the expression.


ПЕРЕВОД:
Рассмотрим следующие числа (где n! - факториал(n)):

u1 = (1 / 1!) * (1!)
u2 = (1 / 2!) * (1! + 2!)
u3 = (1 / 3!) * (1! + 2! + 3!)
...
un = (1 / n!) * (1! + 2! + 3! + ... + n!)
Что победит: 1 / n! или (1! + 2! + 3! + ... + n!)?

Обратятся ли эти числа в 0 из-за 1/n! или в бесконечность из-за суммы факториалов или другого числа?

Задание
Вычислите (1 / n!) * (1! + 2! + 3! + ... + n!) для заданного n, где n - целое число, большее или равное 1.

Чтобы избежать дискуссий об округлении, верните результат, усеченный до 6 знаков после запятой, например:

1.0000989217538616 будет усечено до 1.000098
1.2125000000000001 будет усечено до 1.2125

Примечание
Имейте в виду, что факториал растет довольно быстро, и вам нужно обрабатывать большие входные данные.

Подсказка
Вы можете попытаться упростить выражение.
*/