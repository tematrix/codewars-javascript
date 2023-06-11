/*
DESCRIPTION:
A child is playing with a ball on the nth floor of a tall building. 
The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), 
to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window 
(including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball 
is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 
(Condition 2) not fulfilled).


ПЕРЕВОД:
Ребенок играет с мячом на n-ом этаже высокого здания. 
Высота этого этажа над уровнем земли, h, известна.

Он бросает мяч из окна. Мяч отскакивает (например), 
на две трети своей высоты (отскок 0,66).

Его мать выглядывает из окна, расположенного на высоте 1,5 м от земли.

Сколько раз мать увидит, как мяч пролетит перед ее окном. 
(в том числе во время падения и отскока)?

Для корректного эксперимента должны быть выполнены три условия:
плавающий параметр "h" в метрах должен быть больше 0
плавающий параметр "отскок" должен быть больше 0 и меньше 1
Поплавковый параметр "окно" должен быть меньше h.
Если все три вышеуказанных условия выполнены, возвращается целое положительное число, 
в противном случае возвращается -1.

Примечание:
Мяч может быть виден только в том случае, если высота отскочившего мяча 
строго больше, чем параметр "окно".

Примеры:
- h = 3, bounce = 0.66, window = 1.5, результат - 3
- h = 3, отскок = 1, окно = 1,5, результат -1 
(Условие 2) не выполняется).
*/