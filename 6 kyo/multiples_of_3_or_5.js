/*
DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

ПЕРЕВОД:
Если мы перечислим все натуральные числа ниже 10, кратные 3 или 5, то получим 3, 5, 6 и 9. 
Сумма этих кратных равна 23.

Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньших введенного числа. 
Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).

Примечание: Если число кратно как 3, так и 5, сосчитайте его только один раз.
*/

function solution(number){
    if (number < 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      } 
    }
    return sum;
}

console.log(solution(10));