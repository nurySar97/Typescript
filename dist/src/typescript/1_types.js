// Boolean
var isFetching = true;
var isLoading = false;
// Number
var integer = 43;
var float = 12.2;
var num = 3e12;
// String
var message = 'Hello Typescript!';
// Array
var numberArray = [1, 2, 3, 4];
var numberObject = [{ name: 'Fido' }];
var stringArray = ['TS'];
// Tupple
var contact = ['Hello', 1];
// Any
var variable = 42;
variable = 'String';
variable = {};
variable = [];
// function
function sayMyName(name) {
    console.log(name);
}
sayMyName('Heisenberg');
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(123, 322);
console.log(result);
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 123;
var id2 = '123';
export var types = 'Types!';
