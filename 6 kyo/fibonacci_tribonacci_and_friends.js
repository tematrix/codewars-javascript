/*
DESCRIPTION:
If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci 
has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature 
of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well 
Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) 
with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and 
remember each next element is the sum of the last X elements - and returns the first n elements of 
the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence


ПЕРЕВОД:
Если вы прошли ката последовательности Трибоначчи, то уже знаете, что мистер Фибоначчи 
по крайней мере, имеет старшего брата. Если нет, посмотрите на него, чтобы понять, как все устроено.

Что ж, пора еще немного расширить семейство: представьте себе Квадрибоначчи, начинающийся с подписи 
из 4 элементов и каждый следующий элемент является суммой 4 предыдущих, Пятибоначчи (ну 
Чинквебоначчи, возможно, звучит немного более по-итальянски, но это также звучит действительно ужасно) 
с сигнатурой из 5 элементов и каждый следующий элемент является суммой 5 предыдущих, и так далее.

Ну, угадайте что? Вы должны построить функцию Xbonacci, которая принимает сигнатуру из X элементов - и 
помните, что каждый следующий элемент является суммой последних X элементов - и возвращает первые n элементов 
такой последовательности.

xbonacci {1,1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,0,1} 10 = {0,0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} дает последовательность Фибоначчи
*/

function Xbonacci(signature, n) {
    let len = signature.length,
        arr = [...signature];
  
    while (arr.length < n) {
      let sum = arr.slice(-len).reduce((a, b) => a + b);
      arr.push(sum);
    }
  
    return arr.slice(0, n);
}