/*
DESCRIPTION:
For a given chemical formula represented by a string, count the number of atoms of 
each element contained in the molecule and return an object (associative array in PHP, 
Dictionary<string, int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

As you can see, some formulas have brackets in them. 
The index outside the brackets tells you that you have to multiply 
count of each atom inside the bracket on this index. 
For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.


ПЕРЕВОД:
Для заданной химической формулы, представленной строкой, подсчитать количество атомов 
каждого элемента, содержащегося в молекуле, и вернуть объект (ассоциативный массив в PHP, 
Dictionary<string, int> в C#, Map<String,Integer> в Java).

Например:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

Как вы видите, в некоторых формулах есть скобки. 
Индекс вне скобок говорит вам, что вы должны умножить 
количество каждого атома внутри скобки на этот индекс. 
Например, в Fe(NO3)2 один атом железа, два атома азота и шесть атомов кислорода.

Обратите внимание, что скобки могут быть круглыми, квадратными или фигурными, 
а также могут быть вложенными. Индекс после скобок необязателен.
*/

function parseMolecule(formula) {
    const stack = [{}];
  
    const parseFormula = () => {
      while (index < formula.length) {
        if (formula[index] === '(' || formula[index] === '[' || formula[index] === '{') {
          stack.push({});
          index++;
          parseFormula();
        }
        else if (formula[index] === ')' || formula[index] === ']' || formula[index] === '}') {
          const subFormula = stack.pop();
          index++;
          let num = "";
          while (index < formula.length && /[0-9]/.test(formula[index])) {
            num += formula[index];
            index++;
          }
          num = num ? parseInt(num) : 1;
          for (const atom in subFormula) {
            stack[stack.length - 1][atom] = (stack[stack.length - 1][atom] || 0) + subFormula[atom] * num;
          }
          return;
        }
        else {
          let atom = "";
          atom += formula[index++];
          while (index < formula.length && /[a-z]/.test(formula[index])) {
            atom += formula[index++];
          }
          let num = "";
          while (index < formula.length && /[0-9]/.test(formula[index])) {
            num += formula[index++];
          }
          num = num ? parseInt(num) : 1;
          stack[stack.length - 1][atom] = (stack[stack.length - 1][atom] || 0) + num;
        }
      }
    };
  
    let index = 0;
    parseFormula();
  
    return stack[0];
}