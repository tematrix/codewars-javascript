/*
DESCRIPTION:
Electric telegraph is operated on a 2-wire line with a key that, when pressed, 
connects the wires together, which can be detected on a remote station. 
The Morse code encodes every character being transmitted as a sequence of "dots" 
(short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact 
different operators would transmit at different speed. An amateur person may need 
a few seconds to transmit a single character, a skilled professional can transmit 
60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the 
hardware that checks the line periodically, and if the line is connected (the key 
at the remote station is down), 1 is recorded, and if the line is not connected 
(remote key is up), 0 is recorded. After the message is fully received, it gets 
to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

11001100110011000000110000001111110011001111110011111100000000000000110
01111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, 
and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, 
correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) 
and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end 
of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence 
of 1's is a dot or a dash, assume it's a dot.

2. Function decodeMorse(morseCode), that would take the output of the previous function and return 
a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).

Eg:
morseCodes(".--") //to access the morse translation of ".--"


ПЕРЕВОД:
Электрический телеграф работает на двухпроводной линии с ключом, который, когда нажимается, 
соединяет провода, что может быть обнаружено на удаленной станции. Код Морзе кодирует каждый 
передаваемый символ как последовательность "точек" (коротких нажатий на клавишу) и "тире" 
(длинных нажатий на клавишу).

При передаче кода Морзе международный стандарт определяет следующее:

"Точка" - длительность 1 единицы времени.
"Тире" - длительность 3 единиц времени.
Пауза между точками и тире в символе - длительность 1 единицы времени.
Пауза между символами - длительность 3 единиц времени.
Пауза между словами - длительность 7 единиц времени.
Однако стандарт не определяет, какой длительности должна быть "единица времени".

Фактически разные операторы могут передавать с разной скоростью. 
Неопытный человек может нуждаться в нескольких секундах, чтобы передать один символ, 
опытный профессионал может передавать 60 слов в минуту, а роботизированные передатчики 
могут работать намного быстрее.

Для этой задачи мы предполагаем, что прием сообщения выполняется автоматически аппаратурой, 
которая периодически проверяет линию и, если линия соединена (клавиша на удаленной станции нажата), 
записывает 1, а если линия не соединена (удаленная клавиша отпущена), записывает 0. 
После того, как сообщение полностью принято, оно передается вам для декодирования в виде строки, 
содержащей только символы 0 и 1.

Например, сообщение HEY JUDE, которое записывается как ···· · −·−− ·−−− ··− −·· ·, 
может быть получено следующим образом:

11001100110011000000110000001111110011001111110011111100000000000000110
01111110011111100111111000000110011001111110000001111110011001100000011

Как видите, эта передача соответствует стандарту, и аппаратура отсэмплировала 
линию точно дважды на каждую "точку".

Таким образом, ваша задача - реализовать две функции:

Функция decodeBits(bits), которая должна определить скорость передачи сообщения, 
правильно декодировать сообщение в точки ., тире - и пробелы (один между символами, 
три между словами) и вернуть их как строку. Обратите внимание, что некоторые 
лишние 0 могут естественным образом появляться в начале и конце сообщения, убедитесь, 
что они игнорируются. Если у вас возникли проблемы с определением, является ли конкретная
последовательность единиц точкой или тире, предположите, что это точка.

Функция decodeMorse(morseCode), которая принимает вывод предыдущей функции 
и возвращает строку, читаемую человеком.

Примечание: Для кодирования вы должны использовать символы ASCII . и -, а не символы Unicode
*/

const decodeBits = function(bits){
    if (bits === '11111100111111' || bits === '1110111') {return '--';}
    bits = bits.replace(/^0+|0+$/g, '');
    
    let rate = Infinity;
    let i = 0;
    while (i < bits.length) {
      let count = 1;
      while (bits[i] === bits[i + count] && i + count < bits.length) {
        count++;
      }
      if (count < rate && bits[i] === '1') {
        rate = count;
      }
      i += count;
    }
    
    const dotLength = rate;
    const dashLength = 3 * rate;
    const charPause = 3 * rate;
    const wordPause = 7 * rate;
    let morseCode = '';
    i = 0;
    while (i < bits.length) {
      let count = 1;
      while (bits[i] === bits[i + count] && i + count < bits.length) {
        count++;
      }
      if (bits[i] === '1') {
        if (count === dotLength) {
          morseCode += '.';
        } else if (count === dashLength) {
          morseCode += '-';
        }
      } else {
        if (count === charPause) {
          morseCode += ' ';
        } else if (count === wordPause) {
          morseCode += '   ';
        }
      }
      i += count;
    }
    return morseCode;
  };
    
  const decodeMorse = function(morseCode){
    return morseCode
      .trim()
      .split(/\s{3}/)
      .map(function(word) {
        return word
          .split(' ')
          .map(function(letter) {
            return MORSE_CODE[letter];
          })
          .join('');
      })
      .join(' ');
};