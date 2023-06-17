/*
DESCRIPTION:
Your task is to check wheter a given integer is a perfect power. If it is a perfect power, 
return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, 
None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, 
so (3,4) and (9,2) are valid solutions. However, the tests take care of this, 
so if a number is a perfect power, return any pair that proves it.

Examples
Test.describe("perfect powers", function(){
  Test.it("should work for some examples",function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
  });
});


ПЕРЕВОД:
Ваша задача - проверить, является ли данное целое число совершенным. Если оно является совершенным, 
верните пару m и k с mk = n в качестве доказательства. В противном случае верните Nothing, Nil, null, NULL, 
None или эквивалент вашего языка.

Примечание: Для совершенной силы может быть несколько пар. Например, 81 = 3^4 = 9^2, 
поэтому (3,4) и (9,2) являются допустимыми решениями. Однако об этом позаботятся тесты, 
поэтому если число является совершенной силой, верните любую пару, которая это доказывает.

Примеры
Test.describe("совершенные силы", function(){
  Test.it("должно работать для некоторых примеров", function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 не является совершенным числом");
  });
});
*/

const isPP = function(n) {
    for (let m = 2; m * m <= n; m++) {
      let k = Math.round(Math.log(n) / Math.log(m));
      
      if (Math.pow(m, k) === n) {return [m, k];}
    }
    
    return null;
};