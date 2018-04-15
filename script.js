// Zadanie pierwsze - rozwiązanie:

const hello = 'Hello';
const world = 'World';

console.log(`Zadanie 1: ${hello} ${world}`);

// Zadanie drugie - rozwiązanie:

const multiply = (a=1, b=1) => a * b;

console.log(`Zadanie 2: ${multiply(a,b)}`);
console.log(`Zadanie 2: ${multiply(2,5)}`);
console.log(`Zadanie 2: ${multiply(6,6)}`);
console.log(`Zadanie 2: ${multiply(5)}`);

// Zadanie trzecie - rozwiązanie:

const average = (...args) => args.reduce((x, y) => x + y) / args.length;

console.log(`Zadanie 3: ${average(1)}`);
console.log(`Zadanie 3: ${average(1, 3)}`);
console.log(`Zadanie 3: ${average(1, 3, 6, 6)}`);

// Zadanie czwarte - rozwiązanie:

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const [...rest] = grades;

const gradesAverage = average(...rest);
console.log('Zadanie 4:', Math.round(gradesAverage * 100) / 100);

// Zadanie piąte - rozwiązanie:

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = data;

console.log(firstname, lastname);