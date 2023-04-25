/*
DESCRIPTION:
Your task in order to complete this Kata is to write a function which formats a duration, 
given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. 
In general, a positive integer and one of the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, 
which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated 
units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function 
should not return 61 seconds, but 1 minute and 1 second instead. 
Formally, the duration specified by of a component must not be greater 
than any valid more significant unit of time.


ПЕРЕВОД:
Ваша задача состоит в написании функции, которая форматирует продолжительность,
выраженную в секундах, в удобочитаемый формат.

Функция должна принимать неотрицательное целое число. Если оно равно нулю, функция
должна возвращать "now". В противном случае продолжительность выражается в годах,
днях, часах, минутах и секундах.

Это легче понять на примере:

Для seconds = 62, ваша функция должна вернуть "1 минута и 2 секунды"
Для seconds = 3662, ваша функция должна вернуть "1 час, 1 минута и 2 секунды"
Для целей этой задачи год составляет 365 дней, а день - 24 часа.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из компонентов, таких как 4 секунды, 1 год и т.д.
В общем случае это положительное целое число и одна из допустимых единиц времени,
разделенных пробелом. Единица времени используется во множественном числе, если целое
число больше 1.

Компоненты разделяются запятой и пробелом (", "). За исключением последнего
компонента, который разделяется "and", как это было бы записано на английском языке.

Более значимые единицы времени будут использоваться раньше, чем менее значимые.
Поэтому "1 second and 1 year" неверно, но "1 year and 1 second" - верно.

Различные компоненты имеют разные единицы времени. Таким образом, не должно быть
повторяющихся единиц времени, например "5 seconds and 1 second".

Компонент не должен вообще появляться, если его значение равно нулю.
Таким образом, "1 minute and 0 seconds" недопустимо, но должно быть просто "1 minute".

Единица времени должна использоваться "насколько это возможно". Это означает, что
функция не должна возвращать 61 секунду, а должна вернуть "1 минута и 1 секунда".
Формально продолжительность, указанная для компонента, не должна быть больше любой
допустимой более значимой единицы времени.
*/

function formatDuration (s) {
    let a = [], r = '';
    if (s == 0) {return 'now';}
    if (s < 60) {
        return label(s, `second`);
    } else {
        if (s >= 32850000) {a.push(label(Math.floor(s / 31536000), `year`)); s = s % 31536000;}
        if (s >= 86400) {a.push(label(Math.floor(s / 86400), `day`)); s = s % 86400;}
        if (s >= 3600) {a.push(label(Math.floor(s / 3600), `hour`)); s = s % 3600;}
        if (s >= 60) {a.push(label(Math.floor(s / 60), `minute`)); s = s % 60;}
        if (s > 0) {a.push(label(s, `second`));}
        if (a.length == 1) {
            r = a[0];
        } else {
            for (let i = 0; i < a.length; i++) {
                if (i == a.length-1) {
                    r += `and ${a[i]}`;
                } else if (i == a.length-2) {
                    r += `${a[i]} `;
                } else {
                    r += `${a[i]}, `;
                }
            }              
            
        }
        return r;
    }
}
 
function label(n, name) {
    if (n == 0) {return '';}
    return n == 1 ? `${n} ${name}` : `${n} ${name}s`;
}

console.log(formatDuration(100000));