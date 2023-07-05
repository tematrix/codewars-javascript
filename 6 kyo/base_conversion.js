/*
DESCRIPTION:
In this kata you have to implement a base converter, which converts positive integers 
between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

The function convert() should take an input (string), the source alphabet (string) 
and the target alphabet (string). You can assume that the input value always consists 
of characters from the source alphabet. You don't need to validate it.

Examples
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. 
In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers


ПЕРЕВОД:
В этом ката вы должны реализовать конвертер оснований, который преобразует целые положительные числа 
между произвольными базами / алфавитами. Здесь приведены некоторые предопределенные алфавиты:

var Alphabet = {
  БИНАРНЫЙ: '01',
  ВОСЬМЕРИЧНАЯ: '01234567',
  ДЕСЯТИЧНАЯ: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

Функция convert() должна принимать входные данные (строка), исходный алфавит (строка) 
и целевой алфавит (строка). Можно предположить, что входное значение всегда состоит 
из символов исходного алфавита. Вам не нужно его проверять.

Примеры
// преобразование между системами счисления
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // должно вернуться "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // должно возвращаться "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // должно вернуться "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // должно вернуться "a"

// другие основания
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // должно вернуться "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // должно вернуться "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // должно вернуться "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // должно вернуться "SAME"
Дополнительные примечания:

Максимальное входное значение всегда может быть закодировано в число без потери точности в JavaScript. 
В Haskell промежуточные результаты, вероятно, будут слишком большими для Int.
Функция должна работать для любых произвольных алфавитов, а не только для предопределенных.
Не нужно учитывать отрицательные числа
*/

function convert(input, source, target) {
    let sourceBase = source.length,
        targetBase = target.length,
        decimal = 0,
        factor = 1;
  
    for (let i = input.length - 1; i >= 0; i--) {
      let index = source.indexOf(input[i]);
      
      decimal += index * factor;
      factor *= sourceBase;
    }
  
    let result = '';
    
    while (decimal > 0) {
      let index = decimal % targetBase;
      
      result = target[index] + result;
      decimal = Math.floor(decimal / targetBase);
    }
  
    if (input === '0') {return target[0];}
  
    return result;
}