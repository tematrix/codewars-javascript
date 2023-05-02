/*
DESCRIPTION:
John keeps a backup of his old personal phone book as a text file. On each line of the file he can 
find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), 
the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered 
with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num returns 
a string for this number : "Phone => num, Name => name, Address => adress"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."

It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"
or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"


ПЕРЕВОД:
Джон хранит резервную копию своей старой телефонной книги в виде текстового файла. 
На каждой строке файла он может найти номер телефона (в формате +X-abc-def-ghij, где X означает одну или две цифры), 
соответствующее имя, заключенное в < и >, и адрес.

К сожалению, все перемешано, элементы не всегда находятся в одном и том же порядке; части строк захламлены 
неалфавитно-цифровыми символами (за исключением номера телефона и имени).

Примеры строк телефонной книги Джона:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

"133, Green, Rd. <E Kustur> NY-56423; +1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Можете ли вы помочь Джону написать программу, которая по заданным строкам его телефонной книги и номеру 
телефона num возвращает строку в формате "Phone => num, Name => name, Address => address"?

Примеры:

s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n133, Green, Rd. <E Kustur> NY-56423; +1-541-914-3010!\n"

phone(s, "1-541-754-3010") должен вернуть "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."

Может произойти так, что для номера телефона num есть много людей, тогда вернуть: "Error => Too many people: num". 
Или может случиться так, что номер num отсутствует в телефонной книге, в этом случае вернуть: "Error => Not found: num".
*/

function phone(str, num) {
    let list = str.split(/\n/), line = '', count = 0, name = '', address = '';
    for (let e of list) {
      if (e.includes(num)) {
        line = e;
        count++;
      }
    }
  
    if (count === 0) {return `Error => Not found: ${num}`;}
    if (count > 1) {return `Error => Too many people: ${num}`;}
    
    name = line.match(/<(.+)>/)[1];
    let a = line.split(name).join('').split(num).join('');
    let b = a.replace(/_/g, ' ');
    let c = b.replace(/[^a-zA-Z0-9\s.-]/g, '').trim();
    address = c.replace(/\s{2,}/g, ' ');
    
    return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}

console.log(phone("/+1-541-754-3010 156 Alphand_St. <J Steeve>\n", "+1-541-754-3010"));
console.log(phone("133, Green, Rd. <E Kustur> NY-56423; +1-541-914-3010!\n", "+1-541-914-3010"));
console.log(phone("<Anastasia> +48-421-674-8974 Via Quirinal Roma\n", "+48-421-674-8974"));