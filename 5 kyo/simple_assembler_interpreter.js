/*
DESCRIPTION:
This is the first part of this kata series. Second part is here.

We want to create a simple interpreter of assembler which will support the following instructions:

mov x y - copies y (either a constant value or the content of a register) into register x
inc x - increases the content of the register x by one
dec x - decreases the content of the register x by one
jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, 
y can be a register or a constant), but only if x (a constant or a register) is not zero
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue 
at the previous instruction, while an offset of 2 would skip over the next instruction.

The function will take an input list with the sequence of the program instructions and will execute them. 
The program ends when there are no more instructions to execute, then it returns a dictionary 
(a table in COBOL) with the contents of the registers.

Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, 
so you don't need to worry about uninitialized registers.

Example
["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"]

visualized:

mov a 5
inc a
dec a
dec a
jnz a -1
inc a
The above code will:

set register a to 5,
increase its value by 1,
decrease its value by 2,
then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
and then increase its value by 1, leaving register a at 1
So, the function should return:

Map("a"->1)


ПЕРЕВОД:
Это первая часть данной серии ката. Вторая часть находится здесь.

Мы хотим создать простой интерпретатор ассемблера, который будет поддерживать следующие инструкции:

mov x y - копирует y (либо постоянное значение, либо содержимое регистра) в регистр x
inc x - увеличивает содержимое регистра x на единицу
dec x - уменьшает содержимое регистра x на единицу
jnz x y - переходит к инструкции, находящейся на расстоянии y шагов (положительный знак означает вперед, 
отрицательный - назад, y может быть регистром или константой), но только если x (константа или регистр) не равен нулю.
Имена регистров - алфавитные (только буквы). Константы всегда целые числа (положительные или отрицательные).

Примечание: инструкция jnz перемещает относительно самой себя. Например, смещение -1 будет продолжаться 
предыдущую инструкцию, а смещение 2 пропустит следующую инструкцию.

Функция принимает на вход список с последовательностью инструкций программы и выполняет их. 
Программа завершается, когда больше нет инструкций для выполнения, после чего возвращается словарь 
(таблица в COBOL) с содержимым регистров.

Кроме того, каждый inc/dec/jnz на регистре всегда будет предваряться mov на регистре первым, 
поэтому вам не нужно беспокоиться о неинициализированных регистрах.

Пример
["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"].

визуализирован:

mov a 5
inc a
dec a
dec a
jnz a -1
inc a
Приведенный выше код:

установит регистр a в значение 5,
увеличит его значение на 1,
уменьшит его значение на 2,
затем уменьшит его значение до нуля (jnz a -1 переходит к предыдущей инструкции, если a не равно нулю)
и затем увеличиваем его значение на 1, оставляя регистр a равным 1.
Таким образом, функция должна возвращать:

Map("a"->1)
*/

function simple_assembler(program) {
    const registers = {},
          getValue = (o) => {
            const n = parseInt(o);
            if (!isNaN(n)) {return n;}
            return registers[o] || 0;
          }
    
    let pc = 0;
    
    while (pc < program.length) {
      const [op, x, y] = program[pc].split(' ');
      
      switch (op) {
          case 'mov': registers[x] = getValue(y); break;
          case 'inc': registers[x]++; break;
          case 'dec': registers[x]--; break;
          case 'jnz':
            if (getValue(x) !== 0) {
              pc += getValue(y) - 1;
            }
            break;
      }
      pc++;
    }
    
    return registers;
}