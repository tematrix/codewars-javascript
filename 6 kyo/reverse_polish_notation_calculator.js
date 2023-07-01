/*
DESCRIPTION:
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 
in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).


ПЕРЕВОД:
Ваша задача - создать калькулятор, который оценивает выражения в обратной польской нотации.

Например, выражение 5 1 2 + 4 * + 3 - (которое эквивалентно 5 + ((1 + 2) * 4) - 3 
в обычной системе счисления) должно быть равно 14.

Для удобства ввод отформатирован таким образом, что между каждой лексемой ставится пробел.

Пустое выражение должно иметь значение 0.

Допустимыми операциями являются +, -, *, /.

Вы можете предположить, что исключительных ситуаций (таких как переполнение стека или деление на ноль) не будет.
*/

function calc(expr) {
    let stack = [];
  
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  
    for (let token of expr.split(' ')) {
      if (token in operations) {
        let b = stack.pop();
        let a = stack.pop();
        stack.push(operations[token](a, b));
      } else {
        stack.push(parseFloat(token));
      }
    }
  
    return stack.pop() || 0;
}