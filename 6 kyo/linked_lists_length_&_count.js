/*
DESCRIPTION:
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4


ПЕРЕВОД:
Связанные списки - длина и подсчет

Реализуйте функцию Length() для подсчета количества узлов в связанном списке.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Реализуйте Count() для подсчета вхождений целого числа в связном списке.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
*/

function Node(data) {
    this.data = data;
    this.next = null;
}
  
function length(head) {
    let count = 0,
        current = head;
    
    while (current !== null) {
      count++;
      current = current.next;
    }
    
    return count;
}
  
function count(head, data) {
    let count = 0,
        current = head;
    
    while (current !== null) {
      if (current.data === data) {
        count++;
      }
      
      current = current.next;
    }
    
    return count;
}