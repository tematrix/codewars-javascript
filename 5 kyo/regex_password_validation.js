/*
DESCRIPTION:
You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
- only contains alphanumeric characters (note that '_' is not alphanumeric)


ПЕРЕВОД:
Вам нужно написать регулярное выражение, которое будет проверять пароль на соответствие следующим критериям:

- Длина пароля должна быть не менее шести символов.
- Пароль должен содержать строчную букву.
- Пароль должен содержать заглавную букву.
- Пароль должен содержать цифру.
- Пароль может содержать только буквенно-цифровые символы (заметьте, что символ '_' не является буквенно-цифровым).
*/

const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;

console.log(REGEXP.test('abcdSDfg123456!'));
console.log(REGEXP.test('abcdfg123456'));
console.log(REGEXP.test('abcdfgASFSfsgdsg'));
console.log(REGEXP.test('1234567890'));
console.log(REGEXP.test('ABcd1'));

console.log(REGEXP.test('ABCdef123'));