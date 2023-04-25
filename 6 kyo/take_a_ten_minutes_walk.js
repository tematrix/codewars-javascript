/*
DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take 
the opportunity to go for a short walk. The city provides its citizens with 
a Walk Generating App on their phones -- everytime you press the button it sends you 
an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes 
you one minute to traverse one city block, so create a function that will return true 
if the walk the app gives you will take you exactly ten minutes (you don't want to be 
early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction 
letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
(that's not a walk, that's standing still!).


ПЕРЕВОД:
Вы живете в городе Картеcия, где все дороги проложены по идеальной сетке.
Вы пришли на встречу на десять минут раньше, поэтому решили воспользоваться
возможностью сделать короткую прогулку. Город предоставляет своим жителям
приложение для генерации прогулок на их телефонах - каждый раз, когда вы нажимаете
кнопку, оно отправляет вам массив из однобуквенных строк, представляющих направления
для прогулки (например, ['n', 's', 'w', 'e']). Вы всегда ходите только один квартал
для каждой буквы (направления), и вы знаете, что вам требуется одна минута, чтобы
пройти один городской квартал, поэтому создайте функцию, которая вернет true,
если прогулка, которую дает вам приложение, займет ровно десять минут (вы не хотите
быть раньше или позже!) и, конечно же, вернет вас на точку старта.
В противном случае верните false.

Примечание: вы всегда получите действительный массив, содержащий случайную комбинацию
букв направлений ('n', 's', 'e' или 'w' только). Он никогда не даст вам пустой массив
(это не прогулка, это стояние на месте!).
*/

function isValidWalk(walk) {  
    if (walk.length !== 10) {
      return false;
    } else {
      let n = 0, s = 0, e = 0, w = 0;
      for (let i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case 'n': n++; break;
            case 's': s++; break;
            case 'e': e++; break;
            case 'w': w++; break;
        }      
      }
      return n === s && e === w;
    }
}

console.log(isValidWalk(['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's']));