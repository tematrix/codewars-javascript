/*
DESCRIPTION:
For this exercise you will be strengthening your page-fu mastery. 
You will complete the PaginationHelper class, which is a utility class 
helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating 
how many items will be allowed per each page. The types of values contained 
within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1


ПЕРЕВОД:
Для данного упражнения вам нужно будет отточить свои навыки работы с пагинацией. 
Вам предстоит завершить класс PaginationHelper, который представляет собой утилиту 
для получения информации о пагинации, связанной с массивом.

Класс предназначен для работы с массивом значений и целым числом, указывающим, 
сколько элементов будет разрешено на каждой странице. Типы значений, содержащихся 
в коллекции/массиве, не имеют значения.

Ниже приведены некоторые примеры того, как используется этот класс:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // должно быть равно 2
helper.itemCount(); // должно быть равно 6
helper.pageItemCount(0); // должно быть равно 4
helper.pageItemCount(1); // последняя страница - должно быть равно 2
helper.pageItemCount(2); // должно быть равно -1, так как страница недопустима

// метод pageIndex принимает индекс элемента и возвращает страницу, на которой он находится
helper.pageIndex(5); // должно быть равно 1 (индекс начинается с нуля)
helper.pageIndex(2); // должно быть равно 0
helper.pageIndex(20); // должно быть равно -1
helper.pageIndex(-10); // должно быть равно -1
*/

class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.c = collection;
        this.i = itemsPerPage;
    }
    pagination() {
        let p = [], a = [...this.c];
        while (a.length >= 1) {
            p.push(a.splice(0, this.i));
        }
        return p;
    }
    itemCount() {
        return this.c.length;
    }
    pageCount() {
        return this.pagination().length;
    }
    pageItemCount(e) {
        return this.pagination()[e] ? this.pagination()[e].length : -1;
    }
    pageIndex(e) {
        return e < this.c.length && e >= 0 ? Math.floor(e/this.i) : -1;
    }
}

let help = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10);

console.log(help.pagination());
console.log(help.pageCount());
console.log(help.itemCount());
console.log(help.pageItemCount(1));
console.log(help.pageIndex(5));