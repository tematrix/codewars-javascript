/*
DESCRIPTION:
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' 
(in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.


ПЕРЕВОД:
Создайте объект Vector, который поддерживает сложение, вычитание, точечные произведения и нормы. Например:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b); // должен вернуться новый Vector([4, 6, 8])
a.subtract(b); // должен вернуть новый вектор([-2, -2, -2])
a.dot(b); // должно вернуться 1*3 + 2*4 + 3*5 = 26
a.norm(); // должно вернуться sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c); // выдает ошибку
Если вы пытаетесь сложить, вычесть или поставить точку над двумя векторами с разной длиной, вы должны выдать ошибку!

Также предоставляем:

метод toString, чтобы, используя векторы из примера выше, a.toString() === '(1,2,3)' 
(в Python это метод __str__, так что str(a) == '(1,2,3)')
метод equals для проверки равенства двух векторов, имеющих одинаковые компоненты.
Примечание: в тестовых примерах будет использоваться метод equals, предоставленный пользователем.
*/

class Vector {
    constructor(components) {
      this.components = components;
    }
    
    get length() {
      return this.components.length;
    }
    
    add(vector) {
      if (this.length !== vector.length) {
        throw new Error('Error');
      }
      
      const result = this.components.map((c, i) => c + vector.components[i]);
      
      return new Vector(result);
    }
    
    subtract(vector) {
      if (this.length !== vector.length) {
        throw new Error('Error');
      }
      
      const result = this.components.map((c, i) => c - vector.components[i]);
      
      return new Vector(result);
    }
    
    dot(vector) {
      if (this.length !== vector.length) {
        throw new Error('Error');
      }
      
      return this.components.reduce((s, c, i) => s + c * vector.components[i], 0);
    }
    
    norm() {
      const sumOfSquares = this.components.reduce((s, c) => s + c ** 2, 0);
      
      return Math.sqrt(sumOfSquares);
    }
    
    toString() {
      return `(${this.components.join(',')})`;
    }
    
    equals(vector) {
      if (this.length !== vector.length) {
        return false;
      }
      
      return this.components.every((c, i) => c === vector.components[i]);
    }
}