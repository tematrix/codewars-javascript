/*
DESCRIPTION:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... 
(a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, 
such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


ПЕРЕВОД:
Некоторые числа обладают забавными свойствами. Например:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Для заданного положительного целого числа n, записанного в виде abcd...
(a, b, c, d... - цифры) и положительного целого числа p, 
мы хотим найти положительное целое число k, если оно существует, 
такое что сумма цифр числа n, возведенных в последовательные степени p, равна k * n.

Другими словами:

Существует ли целое число k такое, что (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

Если такое число k существует, мы вернем его, если нет, то вернем -1.

Примечание: n и p всегда будут заданы как строго положительные целые числа.

digPow(89, 1) должна вернуть 1, потому что 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) должна вернуть -1, потому что невозможно найти k такое, что 9¹ + 2² равно 92 * k
digPow(695, 2) должна вернуть 2, потому что 6² + 9³ + 5⁴ = 1390 = 695 * 2
digPow(46288, 3) должна вернуть 51, потому что 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p){
    let sum = 0, num = String(n).split(''), y = p, k;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])**y;
        y++;
    }
    k = sum / n;
    return k === Math.floor(k) ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));