/*
DESCRIPTION:
I always thought that my old friend John was rather richer than he looked, 
but I never knew exactly how much money he actually had. 
One day (as I was plying him with questions) he said:

"Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
"If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
"And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
Could you tell me in each possible case:

how much money f he could possibly have ?
the cost c of a car?
the cost b of a boat?
So, I will have a better idea about his fortune. Note that if m-n is big enough, 
you might have a lot of possible answers.

Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers 
as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

Examples:
howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]
Explanation of the results for howmuch(1, 100):

In the first answer his possible fortune is 37:
so he can buy 7 boats each worth 5: 37 - 7 * 5 = 2
or he can buy 9 cars worth 4 each: 37 - 9 * 4 = 1
The second possible answer is 100:
he can buy 7 boats each worth 14: 100 - 7 * 14 = 2
or he can buy 9 cars worth 11: 100 - 9 * 11 = 1


ПЕРЕВОД:
Я всегда думал, что мой старый друг Джон богаче, чем кажется, 
но я никогда не знал, сколько у него на самом деле денег. 
Однажды (когда я приставал к нему с вопросами) он сказал:

"Представь, что у меня есть от m до n злотых..." (или он сказал "кетцаль"? не помню!).
"Если я куплю 9 автомобилей стоимостью c каждый, то у меня останется только 1 злотый (или метикал?)".
"А если бы я купил 7 лодок по цене b каждая, то у меня осталось бы 2 ринггита (или злотых?)".
Не могли бы вы сказать мне в каждом из возможных случаев:

сколько у него может быть денег f ?
стоимость c автомобиля?
стоимость b лодки?
Таким образом, я буду иметь лучшее представление о его состоянии. Обратите внимание, что если m-n достаточно велико, 
у вас может быть много возможных ответов.

Каждый ответ должен быть представлен в виде ["M: f", "B: b", "C: c"], а все ответы 
как [ ["M: f", "B: b", "C: c"], ... ]. "M" означает деньги, "B" - лодки, "C" - автомобили.

Примечание: m, n, f, b, c - целые положительные числа, где 0 <= m <= n или m >= n >= 0. m и n - включительно.

Примеры:
howmuch(1, 100) => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]].
howmuch(1000, 1100) => [["M: 1045", "B: 149", "C: 116"]]
howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
howmuch(0, 200) => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]].
Объяснение результатов для howmuch(1, 100):

В первом ответе его возможное состояние равно 37:
поэтому он может купить 7 лодок стоимостью 5: 37 - 7 * 5 = 2
или он может купить 9 автомобилей стоимостью 4 каждый: 37 - 9 * 4 = 1
Второй возможный ответ - 100:
он может купить 7 лодок стоимостью 14 каждая: 100 - 7 * 14 = 2
или он может купить 9 автомобилей стоимостью 11: 100 - 9 * 11 = 1
*/

function howMuch(m, n) {
    const result = [];
    
    if (m > n) {
      const temp = m;
      m = n;
      n = temp;
    }
    
    for (let i = m; i <= n; i++) {
      if (i % 9 === 1 && i % 7 === 2) {
        const c = Math.floor(i / 9),
              b = Math.floor(i / 7);
        
        result.push(['M: ' + i, 'B: ' + b, 'C: ' + c]);
      }
    }
    
    return result;
}