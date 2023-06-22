/*
DESCRIPTION:
Mr. Scrooge has a sum of money 'P' that he wants to invest. 
Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept 
in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30

Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole 
in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. 
However it is best to take into consideration that if Desired Principal 'D' is equal 
to Principal 'P' this should return 0 Years.


ПЕРЕВОД:
У г-на Скруджа есть сумма денег "P", которую он хочет инвестировать. 
Перед этим он хочет узнать, сколько лет "Y" эта сумма "P" должна храниться в банке, 
чтобы стать желаемой суммой денег "D".

Сумма хранится в течение "Y" лет в банке, где ежегодно выплачиваются проценты "I". 
После уплаты налогов "Т" за год новая сумма вновь инвестируется.

Примечание к налогу: налогом облагается не инвестированная основная сумма, а только начисленные за год проценты.

Пример:

  Пусть P - основная сумма = 1000.00      
  Пусть I - процентная ставка = 0,05      
  Пусть T - налоговая ставка = 0,18      
  Пусть D - желаемая сумма = 1100.00

После 1-го года -->
  P = 1041.00
После 2-го года -->
  P = 1083.86
После 3-го года -->
  P = 1128.30

Таким образом, мистеру Скруджу придется ждать 3 года, пока первоначальный 
основной долг не превратится в желаемую сумму.

Ваша задача - выполнить предложенный метод и вернуть количество лет 'Y' в целом 
для того, чтобы мистер Скрудж получил желаемую сумму.

Допущение: Предположим, что желаемая сумма 'D' всегда больше, чем начальная сумма. 
Однако лучше принять во внимание, что если желаемый основной капитал 'D' равен 
принципу 'P', это должно вернуть 0 лет.
*/