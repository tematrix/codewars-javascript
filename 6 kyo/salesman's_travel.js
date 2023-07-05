/*
DESCRIPTION:
A traveling salesman has to visit clients. He got each client's 
address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed 
by a white space and five digits. The list of clients to visit was given as 
a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville 
OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all 
clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road 
St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"

Note for Elixir:
In Elixir the empty addresses' input is an empty list, not an empty string.

Note:
You can see a few addresses and zipcodes in the test cases.


ПЕРЕВОД:
Странствующий торговец должен посещать клиентов. Он получил от каждого клиента 
адрес, например, "432 Main Long Road St. Louisville OH 43071" в виде списка.

Основной формат почтового индекса обычно состоит из двух заглавных букв, за которыми следует 
пробела и пяти цифр. Список клиентов, которых необходимо посетить, был представлен в виде 
строка всех адресов, каждый из которых отделен от других запятой, например:

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville 
OH 43071,786 High Street Pollocksville NY 56432".

Для облегчения путешествия он хочет сгруппировать список по почтовому индексу.

Задача
Функция travel будет принимать два параметра r (список адресов всех 
клиентов в виде строки) и почтовый индекс и возвращает строку в следующем формате:

zipcode:улица и город,улица и город,.../номер дома,номер дома,...

Номера улиц должны быть в том же порядке, что и улицы, к которым они относятся.

Если заданный почтовый индекс не существует в списке адресов клиентов, возвращается "zipcode:/".

Примеры
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road 
St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/".

Примечание для Elixir:
В Elixir входные данные пустых адресов - это пустой список, а не пустая строка.

Примечание:
Вы можете увидеть несколько адресов и почтовых индексов в тестовых примерах.
*/

function travel(r, zipcode) {
    let regex = new RegExp('(\\d+)\\s+([a-zA-Z\\.\\s]+)\\s+' + zipcode + '$'),
        addresses = r.split(','),
        result = {};
    
    addresses.forEach(function(address) {
      let match = address.match(regex);
      
      if (match) {
        let street = match[2],
            number = match[1];
        
        if (!result[zipcode]) {
          result[zipcode] = {
            streets: [],
            numbers: []
          };
        }
        
        result[zipcode].streets.push(street);
        result[zipcode].numbers.push(number);
      }
    });
    
    if (!result[zipcode]) {
      return zipcode + ':/';
    }
    
    let streets = result[zipcode].streets.join(','),
        numbers = result[zipcode].numbers.join(',');
    
    return zipcode + ':' + streets + '/' + numbers;
}