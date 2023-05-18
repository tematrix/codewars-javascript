/*
DESCRIPTION:
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts 
any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2


ПЕРЕВОД:
На объектах в Coffeescript не существует концепции приватных свойств, но может быть, это возможно?

Реализуйте функцию createSecretHolder(secret), которая принимает любое значение 
в качестве секрета и возвращает объект, у которого есть только два метода:

getSecret(), который возвращает секретное значение
setSecret(), который устанавливает секретное значение
obj = createSecretHolder(5)
obj.getSecret() # вернет 5
obj.setSecret(2)
obj.getSecret() # вернет 2
*/