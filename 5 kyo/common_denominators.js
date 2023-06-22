/*
DESCRIPTION:
Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 
6 years - these first translations have only irreducible fractions.

Newer translations have some reducible fractions. To be on the safe side 
it is better to do a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"


ПЕРЕВОД:
Общие знаменатели

У вас будет список рациональных чисел в форме

{ {numer_1, denom_1} , ... { numer_n, denom_n} } 
или
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
или
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
где все числа - положительные целые. Вы должны получить результат в виде:

(N_1, D) ... (N_n, D) 
или
[ [N_1, D] ... [N_n, D] ] 
или
[ (N_1', D) , ... (N_n, D) ] 
или
{{N_1, D} ... {N_n, D}} 
или
"(N_1, D) ... (N_n, D)"
в зависимости от языка (см. пример тестов), в котором D как можно меньше и

N_1/D == numer_1/denom_1 ... N_n/D == число_n,/деном_n.
Пример:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)].
Примечание:
В связи с тем, что первые переводы были написаны давно - более 
6 лет - эти первые переводы содержат только несводимые дроби.

Более новые переводы содержат некоторые сводимые дроби. Чтобы подстраховаться 
лучше проделать немного больше работы, упрощая дроби, даже если это не обязательно.

Примечание для Bash:
входные данные - это строка, например, "2,4,2,6,2,8", а выходные - "6 12 4 12 3 12".
*/

function convertFrac(lst){
    let lcm = 1;
    
    const getGcd = (a, b) => {
      while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    
    const getLcm = (a, b) => {
      return (a * b) / getGcd(a, b);
    };
    
    for (let i = 0; i < lst.length; i++) {
      lcm = getLcm(lcm, lst[i][1]);
    }
    
    let result = '';
    
    for (let i = 0; i < lst.length; i++) {
      let factor = lcm / lst[i][1],
          numerator = factor * lst[i][0];
      
      result += `(${numerator},${lcm})`;
    }
    
    return result;
}