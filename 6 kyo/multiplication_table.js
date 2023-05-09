/*
DESCRIPTION:
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]


ПЕРЕВОД:
Ваша задача состоит в том, чтобы создать таблицу умножения размером N × N, где N - число, заданное в параметре.

Например, при заданном размере 3:

1 2 3
2 4 6
3 6 9

Для данного примера возвращаемое значение должно быть:

[[1,2,3],[2,4,6],[3,6,9]]
*/

const multiplicationTable = function(size) {
    let a = Array(size).fill([]);
    
    for (let i = 0; i < size; i++) {
      a[0].push(i+1);
    }
    
    for (let j = 1; j <= size; j++) {
      a[j-1] = a[j-1].map(c => c*j)
    }
    
    return a;
};

console.log(multiplicationTable(3));