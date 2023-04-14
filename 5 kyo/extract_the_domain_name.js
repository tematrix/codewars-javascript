/*
DESCRIPTION:
Write a function that when given a URL as a string, parses out just the domain name 
and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


ПЕРЕВОД:
Напишите функцию, которая, когда ей передается URL в виде строки, выбирает 
только имя домена и возвращает его в виде строки. Например:

url = "http://github.com/carbonfive/raygun" -> имя домена = "github"
url = "http://www.zombie-bites.com" -> имя домена = "zombie-bites"
url = "https://www.cnet.com" -> имя домена = "cnet"
*/

function domainName(url){
    let a = url.split('/');
    a[0] == 'http:' || a[0] == 'https:' ? a = a[2].split('.') : a = a[0].split('.');
    return a[0] == 'www' ? a[1] : a[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));