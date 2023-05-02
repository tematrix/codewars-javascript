/*
DESCRIPTION:
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for all the customers to check out!

Input
customers: an array of positive integers representing the queue. Each integer represents a customer, 
and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

Output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12


ПЕРЕВОД:
В супермаркете есть очередь перед самообслуживанием касс. 
Ваша задача - написать функцию для расчета общего времени, необходимого для того, чтобы все клиенты расплатились!

Входные данные
customers: массив положительных целых чисел, представляющий очередь. 
Каждое целое число представляет клиента, и его значение - это количество времени, необходимое для расчета.
n: положительное целое число, количество касс.

Выходные данные
Функция должна возвращать целое число - общее необходимое время.

Важно
Пожалуйста, ознакомьтесь с примерами и уточнениями ниже, чтобы убедиться, что вы правильно понимаете задачу :)

Примеры
queueTime([5,3,4], 1)
// должно вернуть 12
// потому что когда есть 1 касса, общее время равно просто сумме времени каждого клиента

queueTime([10,2,3,3], 2)
// должно вернуть 10
// потому что здесь n=2 и второй, третий и четвертый человеки в очереди
// заканчивают раньше, чем первый человек закончит.

queueTime([2,3,10], 2)
// должно вернуть 12
*/