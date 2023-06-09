/*
DESCRIPTION:
Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. 
Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18"


ПЕРЕВОД:
Получив массив arr строк, выполните функцию, вычислив общий периметр всех островов. 
Каждый участок суши будет обозначен символом "X", а водные поля - символом "O". 
Считайте, что каждая плитка - это идеальный участок суши размером 1 x 1. Некоторые примеры для лучшей визуализации:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
что представляет:

должно вернуться: "Общий периметр земли: 24".

Следующий ввод:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
что представляет:

должно возвращаться: "Общий периметр земли: 18"
*/

function landPerimeter(arr) {
    let perimeter = 0;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 'X') {
          perimeter += 4;
          
          if (i > 0 && arr[i - 1][j] === 'X') {
            perimeter -= 2;
          }
          
          if (j > 0 && arr[i][j - 1] === 'X') {
            perimeter -= 2;
          }
        }
      }
    }
    
    return `Total land perimeter: ${perimeter}`;
}