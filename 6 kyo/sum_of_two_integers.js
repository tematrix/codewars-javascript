/*
DESCRIPTION:
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1 - Add (5,19) ==> return (24)
2 - Add (-27,18) ==> return (-9)
3 - Add (-14,-16) ==> return (-30)


ПЕРЕВОД:
Даны два целых числа a, b, найдите их сумму, НО вам не разрешается использовать операторы + и -

Примечания
Числа (a,b) могут быть положительными, отрицательными или нулями.

Возвращаемое значение будет целым числом.

Javascript: методы уменьшения массива отключены, также как eval, require и module.
Примеры ввода >> вывода
1 - Сложить (5,19) ==> возврат (24)
2 - Добавить (-27,18) ==> возврат (-9)
3 - Добавить (-14,-16) ==> возврат (-30)
*/

function add(x, y) {
    while (y != 0) {
      let z = x & y;
      x = x ^ y;
      y = z << 1;
    }
    
    return x;
}