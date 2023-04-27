/*
DESCRIPTION:
In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""
Your function must deal with invalid input as shown, though it will only be passed strings. 
Furthermore, all valid identifiers will be lowercase except when necessary, 
in other words on word boundaries in camelCase.


ПЕРЕВОД:
В этой ката необходимо написать функцию, которая преобразует строку 
из стиля "camelCase" в "snake_case" или "kebab-case" и наоборот.

Необходимо написать функцию, которая преобразует строку в заданный стиль. 
Она должна уметь обрабатывать все три типа стилей:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""

Ваша функция должна обрабатывать некорректный ввод, как показано в примерах, 
хотя ей будут передаваться только строки. Кроме того, все допустимые идентификаторы 
будут записаны в нижнем регистре, за исключением необходимых мест, где используется "camelCase".
*/

function changeCase(t, c){
    if (c !== "snake" && c !== 'camel' && c !== 'kebab') {return undefined;}
    if (t.includes('-') && t.includes('_')) {return undefined;}
    if (t.includes('-') && /[A-Z]/.test(t)) {return undefined;}
    if (t.includes('_') && /[A-Z]/.test(t)) {return undefined;}

    if (t.includes('-') && c === 'snake') {return t.split('-').join('_');}
    if (t.includes('_') && c === 'kebab') {return t.split('_').join('-');}
    
    if (c === 'camel' && t != '') {
        let a = t.split('');
        a[0] = a[0].toLowerCase();
        for (let i = 0; i < a.length; i++) {
            if (a[i] === '-' || a[i] === '_') {
                a[i+1] = a[i+1].toUpperCase();
                a.splice(i, 1);
            }
        }
        return a.join('');
    }

    if (c === 'snake') {return t.replace(/([A-Z])/g, '_$&').toLowerCase();}
    if (c === 'kebab') {return t.replace(/([A-Z])/g, '-$&').toLowerCase();}

    return t;
}

console.log(changeCase("snakeCase", "snake"));
console.log(changeCase("some-lisp-name", "camel"));
console.log(changeCase("map_to_all", "kebab"));
console.log(changeCase("doHTMLRequest", "kebab"));
console.log(changeCase("invalid-inPut_bad", "kebab"));
console.log(changeCase("valid-input", "huh???"));
console.log(changeCase("", "camel"));