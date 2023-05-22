/*
DESCRIPTION:
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).


ПЕРЕВОД:
На этот раз входные данные - это последовательность идентификаторов курсов, 
отформатированных следующим образом:

название-ггмм
Возвращаемое значение функции должно быть отсортировано сначала по ггмм, 
а затем по названию (которое может иметь разную длину).
*/

const sortme = function(courses) {
    let a = [];
    for (let e of courses) {a.push(e.split('-'));}
    return a.sort((x,y) => x[1] - y[1]).sort((x,y) => {
      if (x[1] === y[1]) {
        if (x[0] > y[0]) {return 1;}
        if (x[0] < y[0]) {return -1;}
        if (x[0] === y[0]) {return 0;}
      }
    }).map(e => `${e[0]}-${e[1]}`);
};