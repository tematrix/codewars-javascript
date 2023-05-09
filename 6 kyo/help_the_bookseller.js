/*
DESCRIPTION:
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
Each book has a code c of 3, 4, 5 or more characters. 
The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive 
integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category 
of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string 
(in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 
114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to 
category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).


ПЕРЕВОД:
У книготорговца много книг, которые классифицированы в 26 категорий, обозначенных буквами A, B, ... Z.
Каждая книга имеет код c из 3, 4, 5 или более символов.
Первый символ кода - это заглавная буква, которая определяет категорию книги.

В запасах книжного магазина каждый код c следует за пробелом и положительным
целым числом n (int n >= 0), которое указывает количество книг этого кода в запасе.

Например, выписка из списка запасов может выглядеть так:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
или
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] или ....
Вам будет предоставлен список запасов (например: L) и список категорий в заглавных буквах, например:

M = {"A", "B", "C", "W"}
или
M = ["A", "B", "C", "W"] или ...
и ваша задача заключается в том, чтобы найти все книги из L с кодами, относящимися к каждой категории 
из M, и суммировать их количество для каждой категории.

Для списков L и M из примера вы должны вернуть строку
(в Haskell/Clojure/Racket/Prolog список пар):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
где A, B, C, W - это категории, 20 - это сумма уникальной книги категории A,
114 - сумма, соответствующая "BKWRK" и "BTSQZ", 50 - соответствующая "CDXEF", 0 -
категории 'W', так как нет кодов, начинающихся с W.

Если L или M пусты, то возвращаемая строка - "" (в Clojure/Racket/Prolog следует возвращать пустой массив/список).
*/