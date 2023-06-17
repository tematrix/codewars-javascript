/*
DESCRIPTION:
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


ПЕРЕВОД:
Получен поток данных, который необходимо изменить на противоположный.

Каждый сегмент имеет длину 8 бит, значит, порядок этих сегментов нужно изменить на противоположный, например:

11111111 00000000 00001111 10101010
 (байт1) (байт2) (байт3) (байт4)
должно стать:

10101010 00001111 00000000 11111111
 (байт4) (байт3) (байт2) (байт1)
Общее количество битов всегда будет кратно 8.

Данные задаются в массиве в таком виде:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Примечание: В языках C и NASM вам предоставляется третий параметр, который является количеством сегментных блоков.
*/

function dataReverse(data) {
    const result = [];
    
    for (let i = 0; i < data.length; i += 8) {
      result.unshift(...data.slice(i, i + 8));
    }
    
    return result;
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));