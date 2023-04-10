/*
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input 
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


ПЕРЕВОД:
Напишите функцию, которая принимает на вход целое неотрицательное число (секунды) 
и возвращает время в человекочитаемом формате (HH:MM:SS).

HH = часы, с разбивкой на 2 цифры, диапазон: 00 - 99
MM = минуты, дополненные до 2 цифр, диапазон: 00 - 59
SS = секунды, дополненные до 2 цифр, диапазон: 00 - 59
Максимальное время никогда не превышает 359999 (99:59:59).

Некоторые примеры вы можете найти в тестовых приспособлениях.
*/

function humanReadable (seconds) {
    const cnt = (n) => {
      let i = 0;
      while (n >= 60) {
        n = n - 60;
        i++;
      }
      return [i, n];
    };
    
    let s = cnt(seconds)[1],
        m = cnt(seconds)[0],
        h = cnt(m)[0];
    
    m = cnt(m)[1];
      
    const twn = (v) => {
      return v < 10 ? `0${v}` : `${v}`;
    };
    
    return `${twn(h)}:${twn(m)}:${twn(s)}`;  
}

console.log(humanReadable(2000000));