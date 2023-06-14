/*
DESCRIPTION:
Given a list of integers and a single sum value, return the first two values 
(parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second 
element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. 
Be sure your code doesn't time out.


ПЕРЕВОД:
Учитывая список целых чисел и одно значение суммы, верните первые два значения 
(разбор слева, пожалуйста) в порядке появления, которые складываются в сумму.

Если существует две или более пар с требуемой суммой, то та пара, 
второй элемент которой имеет наименьший индекс, является решением. 
элемент имеет наименьший индекс, является решением.

sum_pairs([11, 3, 7, 5], 10)
# ^--^ 3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4], 6)
# ^-----^ 4 + 2 = 6, индексы: 0, 2 *
# ^-----^ 3 + 3 = 6, индексы: 1, 3
# ^-----^ 2 + 4 = 6, индексы: 2, 4
# * правильным ответом будет пара, второе значение которой имеет наименьший индекс.
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
# Не существует пар значений, которые можно сложить, чтобы получить 2.
== None/nil/undefined (в зависимости от языка)

sum_pairs([10, 5, 2, 3, 7, 5], 10)
# ^-----------^ 5 + 5 = 10, индексы: 1, 5
# ^--^ 3 + 7 = 10, индексы: 3, 4 *
# * правильным ответом является пара, второе значение которой имеет наименьший индекс
== [3, 7]
Могут встречаться и будут встречаться отрицательные числа и дубликаты.

ПРИМЕЧАНИЕ: Также будут тестироваться списки длиной до 10 000 000 элементов. 
Убедитесь, что ваш код не затянется.
*/

function sumPairs(ints, s) {
    const a = new Set();
    
    for (let i = 0; i < ints.length; i++) {
      const c = s - ints[i];
      
      if (a.has(c)) {
        return [c, ints[i]];
      }
      
      a.add(ints[i]);
    }
}

console.log(sumPairs([11, 3, 7, 5], 10));
console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));