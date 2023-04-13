/*
DESCRIPTION:
Every book has n pages with page numbers 1 to n. The summary is made 
by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: 
The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.


ПЕРЕВОД:
В каждой книге есть n страниц с номерами от 1 до n. Сводка составляется 
путем сложения количества цифр всех номеров страниц.

Задача: Учитывая сводку, найдите количество страниц n в книге.

Пример
Если на вход подано значение summary=25, то на выходе должно получиться n=17: 
Числа от 1 до 17 содержат 25 цифр: 1234567891011121314151617.

Имейте в виду, что вы получите огромные книги, содержащие до 100.000 страниц.

Все вводимые данные будут действительными.
*/

function amountOfPages(summary){
    let book = '';
    let page = 0;
    while (book.length < summary) {
        page++;
        book += page;        
    }
    return page;  
}

console.log(amountOfPages('25'));
console.log(amountOfPages('100000'));