'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Zadanie pierwsze - rozwiązanie:

var hello = 'Hello';
var world = 'World';

console.log('Zadanie 1: ' + hello + ' ' + world);

// Zadanie drugie - rozwiązanie:

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log('Zadanie 2: ' + a * b);
};

multiply();
multiply(2, 5);
multiply(6, 6);
multiply(5);

// Zadanie trzecie - rozwiązanie:

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (x, y) {
    return x + y;
  }) / args.length;
};

console.log('Zadanie 3: ' + average(1));
console.log('Zadanie 3: ' + average(1, 3));
console.log('Zadanie 3: ' + average(1, 3, 6, 6));

// Zadanie czwarte - rozwiązanie:

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var rest = grades.slice(0);


var gradesAverage = average.apply(undefined, _toConsumableArray(rest));
console.log('Zadanie 4:', Math.round(gradesAverage * 100) / 100);

// Zadanie piąte - rozwiązanie:

var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = data[2],
    lastname = data[4];


console.log(firstname, lastname);
