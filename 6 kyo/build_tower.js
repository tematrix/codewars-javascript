/*
DESCRIPTION:
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


ПЕРЕВОД:
Постройте башню в форме пирамиды в виде массива/списка строк, заданного целым положительным числом этажей. 
Блок башни представлен символом "*".

Например, башня с 3 этажами выглядит следующим образом:

[
  "  * ",
  " *** ", 
  "*****"
]
А башня с 6 этажами выглядит следующим образом:

[
  "     * ", 
  "    *** ", 
  "   ***** ", 
  "  ******* ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(n) {
    const sps = (c) => {
      return c <= 1 ? `` : ` ` + sps(c-1);    
    };
    const sts = (c) => {
      return c <= 1 ? `*` : `**` + sts(c-1);
    };
    
    let r = [];
    
    for (let i = 0; i < n; i++) {
      r[i] = `${sps(n-i)}${sts(i+1)}${sps(n-i)}`;
    }
    
    return r;  
}

console.log(towerBuilder(3));
console.log(towerBuilder(6));