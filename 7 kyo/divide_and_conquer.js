/*
DESCRIPTION:
Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.

Return as a number.


ПЕРЕВОД:
Дан массив, содержащий числа и строковые представления целых чисел. 
Необходимо сложить все целочисленные элементы массива и вычесть из этой суммы 
сумму всех строковых представлений целых чисел. Результатом должно быть число.
*/

function divCon(x){
    let result = 0;
    for (let e of x) {
      if (typeof e === 'number') {result += e;}
      if (typeof e === 'string') {result -= +e;}
    }
    return result;
}

console.log(divCon([1, "2", 3, "4", "5"]));
console.log(divCon([1, "2", 3.5, "4", 5]));