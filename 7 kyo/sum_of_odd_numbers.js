/*
DESCRIPTION:
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of 
this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


ПЕРЕВОД:
Дан треугольник из последовательных нечетных чисел:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Вычислите сумму чисел в строке с номером n этого треугольника 
(начиная с индекса 1), например: (Входные данные --> Выходные данные)

1 --> 1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	let odd = 1, a = [];
  for (let i = 0; i <= n; i++) {    
    a.push([]);
    for (let j = 0; j <= i; j++) {
      a[i].push(odd);
      odd += 2;      
    }
  }
  return a[n-1].reduce((s,e)=>s+e, 0);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));