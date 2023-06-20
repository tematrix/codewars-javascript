/*
DESCRIPTION:
You have a positive number n consisting of digits. 
You can do at most one operation: Choosing the index of a digit in the number, 
remove this digit at that index and insert it back to another or at the same place 
in the number in order to find the smallest number you can get.

Task:
Return an array or a tuple or a string depending on the language (see "Sample Tests") with

the smallest number you got
the index i of the digit d you took, i as small as possible
the index j (as small as possible) where you insert this digit d to have the smallest number.
Examples:
smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1] or ...

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 
which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6] or ...

Note
Have a look at "Sample Tests" to see the input and output in each language


ПЕРЕВОД:
У вас есть положительное число n, состоящее из цифр. 
Вы можете выполнить не более одной операции: Выбрать индекс цифры в числе, 
удалить эту цифру по этому индексу и вставить ее обратно в другое или в то же самое место 
в числе, чтобы найти наименьшее число, которое вы можете получить.

Задача:
Верните массив или кортеж или строку в зависимости от языка (см. "Примеры тестов") с

наименьшее полученное число
индекс i цифры d, которую вы взяли, i как можно меньше
индекс j (как можно меньший), в который вы вставили эту цифру d, чтобы получить наименьшее число.
Примеры:
smallest(261235) --> [126235, 2, 0] или (126235, 2, 0) или "126235, 2, 0".
126235 - наименьшее число, полученное путем взятия 1 с индексом 2 и помещения ее в индекс 0.

smallest(209917) --> [29917, 0, 1] или ...

[29917, 1, 0] тоже могло бы быть решением, но индекс `i` в [29917, 1, 0] больше, чем 
индекс `i` в [29917, 0, 1].
29917 - наименьшее число, полученное, если взять 2 с индексом 0 и поставить ее на индекс 1. 
что дало 029917, которое и есть число 29917.

smallest(1000000) --> [1, 0, 6] или ...

Примечание
Посмотрите "Примеры тестов", чтобы увидеть входные и выходные данные на каждом языке
*/

function smallest(n) {
    const digits = [...n.toString()];  
    let min = Number.MAX_SAFE_INTEGER, fromIndex, toIndex;
    
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length; j++) {   
        const tempDigits = [...digits],
              [digit] = tempDigits.splice(i, 1);
        
        tempDigits.splice(j, 0, digit);
        
        const number = parseInt(tempDigits.join(''), 10);
        
        if (number < min) {
          min = number;
          fromIndex = i;
          toIndex = j;
        }
      }
    }
    
    return [min, fromIndex, toIndex];
}