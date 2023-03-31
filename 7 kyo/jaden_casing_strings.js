/*
DESCRIPTION:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


ПЕРЕВОД:
жейден Смит, сын Уилла Смита, является звездой таких фильмов, как "Малыш-каратист" (2010) и "После Земли" (2013). 
Джейден также известен некоторыми из своих философских идей, которые он излагает через Twitter. 
Когда он пишет в Twitter, он известен тем, что почти всегда использует заглавные буквы в каждом слове. 
Для простоты вам придется писать каждое слово с заглавной буквы, посмотрите, 
какими должны быть сокращения в примере ниже.

Ваша задача - преобразовать строки так, как они были бы написаны Джейденом Смитом. 
Строки являются настоящими цитатами Джейдена Смита, но они написаны не с заглавной буквы так, 
как он изначально их набрал.

Пример:

Не в стиле Джейден: "Как зеркала могут быть настоящими, если наши глаза ненастоящие"
Джейден Кейсед: "Как зеркала могут быть реальными, Если наши Глаза ненастоящие"
*/

function toJadenCase(string) {
    let a = string.split('');
    a[0] = a[0].toUpperCase();
    for (let i = 1; i < a.length; i++) {
      if (a[i-1] === ' ') {
        a[i] = a[i].toUpperCase();
      }    
    }
    return a.join('');
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));