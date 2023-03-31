/*
DESCRIPTION:
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"


ПЕРЕВОД:
Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей кредитной карты, 
номер телефона или ответ на ваш самый секретный вопрос. 
Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. 
Вместо этого мы маскируем это.

Ваша задача - написать функцию maxify, которая преобразует все символы, кроме последних четырех, в '#'.

Примеры
маскируют("4556364607935616") == "############5616"
маскировать( "64607935616") == "#######5616"
маскировать( "1") == "1"
маскировать( "") == ""

// "Как звали вашего первого питомца?"
маскифицировать("Скиппи") == "##иппи"
maskify("Nananananananananananananananana Бэтмен!") == "####################################человек!"
*/