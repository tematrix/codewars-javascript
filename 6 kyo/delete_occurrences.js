/*
DESCRIPTION:
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, 
since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers 
such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].


ПЕРЕВОД:
"Достаточно уже! Алиса и Боб были в отпуске. Оба сделали много фотографий в местах, которые они посетили, 
и теперь они хотят показать Чарли свою коллекцию. Однако Чарли не любит эти сессии, так как мотив часто повторяется. 
Ему не нравится видеть Эйфелеву башню 40 раз. Он говорит им, что будет смотреть на фотографии только в том случае, 
если они покажут каждый мотив не более N раз. К счастью, Алиса и Боб могут закодировать мотив как число. 
Можете ли вы помочь им удалить числа таким образом, чтобы их список содержал каждое число не более N раз, не изменяя порядок?"

Задание
Дан список чисел и число N. Создайте новый список, который содержит каждое число из списка 
не более N раз в том же порядке, без изменения порядка элементов.
Например, если входное число равно 2, а входной список - [1,2,3,1,2,1,2,3], то вы берете [1,2,3,1,2], 
отбрасываете следующие [1,2], так как это приведет к тому, что число 1 и 2 будут в результате появляться 3 раза, 
и затем берете 3, что приводит к [1,2,3,1,2,3].
Для списка [20,37,20,21] и числа 1 результатом будет [20,37,21].
*/

function deleteNth(a,n){
    for (let i = a.length-1; i >= 0; i--) {
      let e = a[i], s = a.filter(j => j == e);
      if (s.length > n) {
        a.splice(i, 1);
      }
    }
    return a;
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2));
console.log(deleteNth([20,37,20,21], 1));