/*
DESCRIPTION:
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) 
of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency


ПЕРЕВОД:
Рассмотрим последовательность u, где u определяется следующим образом:

Первое число u(0) = 1 является первым числом в u.
Для каждого числа x в u, числа y = 2 * x + 1 и z = 3 * x + 1 также должны быть включены в u.
Других чисел в u нет.
Например, u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 даёт 3 и 4, затем 3 даёт 7 и 10, 4 даёт 9 и 13, затем 7 даёт 15 и 22 и так далее...

Задача:
Для заданного параметра n функция dbl_linear (или dblLinear...) должна вернуть элемент u(n)
упорядоченной (по возрастанию) последовательности u (таким образом, в последовательности 
нет повторяющихся элементов).

Пример:
dbl_linear(10) должна вернуть 22

Примечание:
Уделите внимание эффективности решения.
*/

function dblLinear(n) {
    let u = [1], a = 0, b = 0;
    for (let i = 0; i < n; i++) {
      let nextA = 2 * u[a] + 1,
          nextB = 3 * u[b] + 1;
      if (nextA <= nextB) {
        u.push(nextA);
        a++;
        if (nextA === nextB) {b++;}
      } else {
        u.push(nextB);
        b++;
      }
    }
    return u[n];
}

console.log(dblLinear(10));