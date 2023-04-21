/*
DESCRIPTION:
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.


ПЕРЕВОД:
Числа Фибоначчи - это числа в следующей последовательности целых чисел (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

такие, как

F(n) = F(n-1) + F(n-2) с F(0) = 0 и F(1) = 1.

Дано число prod (для произведения), мы ищем два числа Фибоначчи F(n) и F(n+1), удовлетворяющих условию:

F(n) * F(n+1) = prod.

Ваша функция productFib принимает целое число (prod) и возвращает массив:

[F(n), F(n+1), true] или {F(n), F(n+1), 1} или (F(n), F(n+1), True)
в зависимости от языка, если F(n) * F(n+1) = prod.

Если вы не найдете два последовательных числа F(n), удовлетворяющих условию F(n) * F(n+1) = prod, вы вернете

[F(n), F(n+1), false] или {F(n), F(n+1), 0} или (F(n), F(n+1), False)
где F(n) - наименьшее из них, такое что F(n) * F(n+1) > prod.
*/

function productFib(prod){
    let last = 0, next = 1, sum = 0, b = false;
    while (last * next < prod) {
      sum = last + next;
      last = next;
      next = sum;    
    }
    if (last * next == prod) {b = true;}
    return [last, next, b];
}

console.log(productFib(233));
console.log(productFib(15));
console.log(productFib(35));
console.log(productFib(40));