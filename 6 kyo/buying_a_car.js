/*
DESCRIPTION:
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one 
decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent 
at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, 
and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
Detail of the above example:
end month 1: percent_loss 1.5 available -4910.0
end month 2: percent_loss 2.0 available -3791.7999...
end month 3: percent_loss 2.0 available -2675.964
end month 4: percent_loss 2.5 available -1534.06489...
end month 5: percent_loss 2.5 available -395.71327...
end month 6: percent_loss 3.0 available 766.158120825...
return [6, 766] or (6, 766)
where 6 is the number of months at the end of which he can buy the new car and 766 
is the nearest integer to 766.158... (rounding 766.158 gives 766).

Note:

Selling, buying and saving are normally done at end of month. Calculations are processed 
at the end of each considered month but if, by chance from the start, the value of the old 
car is bigger than the value of the new one or equal there is no saving to be made, no need 
to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]


ПЕРЕВОД:
Давайте начнем с примера:

У человека есть довольно старый автомобиль стоимостью $2000. Он увидел подержанный автомобиль стоимостью $8000. 
Он хочет оставить свой старый автомобиль до тех пор, пока не сможет купить подержанный.

Он думает, что сможет сэкономить $1000 каждый месяц, но цены на его старый автомобиль и на новый автомобиль 
снижаются на 1,5 процента в месяц. Кроме того, этот процент потерь увеличивается на 0,5 процента 
в конце каждых двух месяцев. Нашему человеку трудно сделать все эти расчеты.

Можете ли вы ему помочь?

Сколько месяцев ему понадобится, чтобы накопить достаточно денег, чтобы купить машину, которую он хочет, 
и сколько денег у него останется?

Параметры и возврат функции:

параметр (положительный int или float, гарантированный) start_price_old (Старая цена автомобиля)
параметр (положительное значение int или float, гарантировано) start_price_new (цена нового автомобиля)
параметр (положительное значение int или float, гарантировано) экономия_на_месяц 
параметр (положительное число или число с плавающей точкой, гарантировано) процент_потерь_за_месяц

nbMonths(2000, 8000, 1000, 1.5) должно возвращать [6, 766] или (6, 766)
Детализация приведенного выше примера:
конец месяца 1: percent_loss 1.5 доступно -4910.0
конец месяца 2: percent_loss 2.0 доступно -3791.7999...
конец месяца 3: процент_убытка 2.0 доступен -2675.964
конец месяца 4: percent_loss 2.5 доступно -1534.06489...
конец месяца 5: percent_loss 2.5 доступно -395.71327...
конец месяца 6: percent_loss 3.0 доступно 766.158120825...
return [6, 766] or (6, 766)
где 6 - это количество месяцев, в конце которых он сможет купить новый автомобиль, а 766 
ближайшее целое число к 766.158... (округление 766.158 дает 766).

Примечание:

Продажа, покупка и накопление обычно производятся в конце месяца. Расчеты обрабатываются 
в конце каждого рассматриваемого месяца, но если случайно с самого начала стоимость старого 
автомобиля больше, чем стоимость нового, или равна, то экономить не нужно, не нужно 
ждать, поэтому он может в начале месяца купить новый автомобиль:

nbMonths(12000, 8000, 1000, 1.5) должно вернуть [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) должно вернуть [0, 0]
*/

function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    let months = 0,
        savings = 0,
        priceOld = startPriceOld,
        priceNew = startPriceNew,
        percentLoss = percentLossByMonth / 100;
  
    while (savings + priceOld < priceNew) {
        months++;
      
        if (months % 2 === 0) {
            percentLoss += 0.005;
        }
      
        priceOld -= priceOld * percentLoss;
        priceNew -= priceNew * percentLoss;
        savings += savingPerMonth;
    }
  
    return [months, Math.round(savings + priceOld - priceNew)];
}