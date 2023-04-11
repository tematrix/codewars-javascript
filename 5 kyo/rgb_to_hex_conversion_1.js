/*
DESCRIPTION:
The rgb function is incomplete. Complete it so that passing in RGB decimal values 
will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


ПЕРЕВОД:
Функция rgb является неполной. Доработайте ее так, чтобы при передаче десятичных значений RGB 
приводила к возврату шестнадцатеричного представления. 
Допустимые десятичные значения для RGB - 0 - 255. 
Любые значения, выходящие за пределы этого диапазона, должны быть округлены до ближайшего допустимого значения.

Примечание: Ваш ответ всегда должен быть длиной 6 символов, сокращение с 3 здесь не подходит.

Ниже приведены примеры ожидаемых выходных значений:

rgb(255, 255, 255) // возвращает FFFFFF
rgb(255, 255, 300) // возвращает FFFFFF
rgb(0,0,0) // возвращает 000000
rgb(148, 0, 211) // возвращает 9400D3
*/

function rgb(r, g, b){
    const val = (n) => {
      n < 0 ? n = 0 : n;
      n > 255 ? n = 255 : n;
      return n;
    };
    
    const hex = (v) => {
      if (v.toString(16).length < 2) {
        return '0' + v.toString(16).toUpperCase();
      } else {
        return v.toString(16).toUpperCase();
      }
    };
    
    return hex(val(r)) + hex(val(g)) + hex(val(b));
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0,0,0));
console.log(rgb(148, 0, 211));