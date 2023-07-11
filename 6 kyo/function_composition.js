/*
DESCRIPTION:
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. 
It is explained well here, but this is my explanation, in simple mathematical notation:

f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )

Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. 
Ruby functions will be passed, and should return, either a proc or a lambda. 
Remember that the resulting composed function may be passed multiple arguments!

compose(f , g)(x)
=> f( g( x ) )


ПЕРЕВОД:
Композиция функций - это математическая операция, которая в основном проявляется в лямбда-исчислении и вычислимости. 
Она хорошо описана здесь, но это мое объяснение в простых математических обозначениях:

f3 = compose( f1 f2 )
   Это эквивалентно...
f3(a) = f1( f2( a ) )

Ваша задача - создать функцию compose для выполнения этой задачи, которой будут переданы две функции или лямбды. 
Функции Ruby передают и должны возвращать либо proc, либо лямбду. 
Помните, что результирующей композитной функции может быть передано несколько аргументов!

compose(f , g)(x)
=> f( g( x ) )
*/

function compose(f,g) {
    return function (...arguments) {
      return f(g(...arguments));
    };
}