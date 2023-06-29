/*
DESCRIPTION:
In this kata, you will sort elements in an array by decreasing frequency of elements. 
If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.


ПЕРЕВОД:
В этом ката вы будете сортировать элементы в массиве по убыванию частоты элементов. 
Если два элемента имеют одинаковую частоту, отсортируйте их по возрастанию.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- Мы сортируем по наибольшей частоте к наименьшей.
-- Если два элемента имеют одинаковую частоту, мы сортируем по возрастанию значения.
*/

function solve(arr) {
    let freq = {};
    
    for (let i = 0; i < arr.length; i++) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    
    let pairs = Object.entries(freq).sort(compare),
        result = [];
    
    for (let i = 0; i < pairs.length; i++) {
      let [num, count] = pairs[i];
      
      for (let j = 0; j < count; j++) {
        result.push(parseInt(num));
      }
    }
    
    return result;
}
  
function compare(a, b) {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    
    return b[1] - a[1];
}