/*
DESCRIPTION:
John and Mary want to travel between a few towns A, B, C ... 
Mary has on a sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary 
that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of 
the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],
[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and 
the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) 
will take as parameters t (maximum sum of distances, integer >= 0), 
k (number of towns to visit, k >= 1) and ls (list of distances, 
all distances are positive or zero integers and this list has at least one element). 
The function returns the "best" sum ie the biggest possible sum of k distances less 
than or equal to the given limit t, if that sum exists, or otherwise nil, null,
None, Nothing, depending on the language. In that case with C, C++, D, Dart, 
Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, 
Reason, Rust, Scala, Shell, Swift return -1.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil 
(or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Notes:
try not to modify the input list of distances ls
in some languages this "list" is in fact a string (see the Sample Tests).


ПЕРЕВОД:
Джон и Мэри хотят проехать между несколькими городами A, B, C... 
У Мэри на листе бумаги есть список расстояний между этими городами. 
ls = [50, 55, 57, 58, 60]. Джону надоело ездить на машине, и он говорит Мэри. 
что он не хочет проехать больше t = 174 миль и посетит только 3 города.

Какие расстояния, а значит и города, они выберут так, чтобы сумма 
расстояний была наибольшей, чтобы угодить Мэри и Джону?

Пример:
Имея список ls и 3 города, которые нужно посетить, они могут сделать выбор между: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],
[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

Суммы расстояний составляют: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

Наибольшая возможная сумма с учетом ограничения 174 равна 173 и 
расстояния между 3 соответствующими городами составляют [55, 58, 60].

Функция chooseBestSum (или choose_best_sum или ... в зависимости от языка) 
будет принимать в качестве параметров t (максимальная сумма расстояний, целое число >= 0), 
k (количество городов для посещения, k >= 1) и ls (список расстояний, 
все расстояния являются целыми положительными или нулевыми числами и этот список имеет 
хотя бы один элемент). Функция возвращает "наилучшую" сумму, т.е. наибольшую возможную 
сумму k расстояний, меньшую или равную заданному пределу t. чем или равна заданному пределу t, 
если такая сумма существует, или иначе nil, null, None, Nothing, Nothing, в зависимости от языка. 
В этом случае с C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, 
Reason, Rust, Scala, Shell, Swift возвращается -1.

Примеры:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil 
(или null или ... или -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Примечания:
старайтесь не модифицировать входной список расстояний ls
в некоторых языках этот "список" на самом деле является строкой (см. Тесты примеров).
*/

function chooseBestSum(t, k, ls) {
    let bestSum = null;
    
    const chooseTowns = (startIndex, townsVisited, currentSum) => {
      if (townsVisited === k) {
        if (currentSum <= t && (bestSum === null || currentSum > bestSum)) {
          bestSum = currentSum;
        }
        return;
      }
      
      for (let i = startIndex; i < ls.length; i++) {
        chooseTowns(i + 1, townsVisited + 1, currentSum + ls[i]);
      }
    }
    
    chooseTowns(0, 0, 0);
    
    return bestSum;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));