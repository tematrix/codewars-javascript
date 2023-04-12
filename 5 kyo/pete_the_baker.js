/*
DESCRIPTION:
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, 
how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available 
ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


ПЕРЕВОД:
Пит любит печь пироги. У него есть несколько рецептов и ингредиентов. 
К сожалению, он не силен в математике. Можете ли вы помочь ему узнать, 
сколько пирожных он сможет испечь, учитывая свои рецепты?

Напишите функцию cakes(), которая принимает рецепт (объект) и имеющиеся в наличии 
ингредиенты (тоже объект) и возвращает максимальное количество пирожных, которое может испечь Пит (целое число). 
Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или 200). 
Ингредиенты, которые не присутствуют в объектах, можно считать равными 0.

Примеры:

// должно возвращаться 2
cakes({мука: 500, сахар: 200, яйца: 1}, {мука: 1200, сахар: 1200, яйца: 5, молоко: 200}); 
// должно возвращать 0
cakes({яблоки: 3, мука: 300, сахар: 150, молоко: 100, масло: 100}, {сахар: 500, мука: 2000, молоко: 2000});
*/