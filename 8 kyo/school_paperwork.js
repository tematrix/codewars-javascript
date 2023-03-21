/*
DESCRIPTION:
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

ПЕРЕВОД:
Ваши одноклассники попросили вас скопировать для них кое-какие документы. 
Вы знаете, что есть "n" одноклассников, а в документах есть "m" страниц.

Ваша задача - подсчитать, сколько пустых страниц вам нужно. Если n < 0 или m < 0, верните 0.

Пример:
n= 5, m=5: 25
n=-5, m=5: 0
*/

function paperwork(n, m) {
    if (n < 0) {
      n = 0;
    }
    if (m < 0) {
      m = 0;
    }
    return n*m;
}

console.log(paperwork(5,5));
console.log(paperwork(-5,5));