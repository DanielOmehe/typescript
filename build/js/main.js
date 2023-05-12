"use strict";
let text = "hello world";
console.log(text);
let word = "hello there";
let age = 100;
console.log(age);
let a = 12;
let b = 6;
let c = 3;
let d = "some text";
let e = 12;
console.log(a / b);
console.log(b / c);
console.log(d);
console.log(e);
let myName;
let meaningOfLife;
let isLoading;
myName = "hello";
meaningOfLife = 12;
isLoading = false;
console.log(myName);
console.log(meaningOfLife);
console.log(isLoading);
let result;
let some;
const sum = (a, b) => {
    some = "true";
    return a + some + b;
};
let reg = /\w+/g;
console.log(sum(10, 20));
let stringArray = ["dave"];
let guitars = ["strat", "les paul", 5150];
let mixedData = ["dave", 1987, true];
stringArray[0] = "10";
stringArray.push("34");
console.log(stringArray);
guitars = stringArray;
guitars[0] = "something";
console.log(guitars);
let bands = [];
bands.push("something");
console.log(bands);
//tuple
let myTuple = ["somethings", 12, false];
mixedData = myTuple;
mixedData.push(123);
myTuple.push(123);
console.log(mixedData);
console.log(myTuple);
let myObject = {};
myObject = [];
myObject = sum;
console.log(myObject);
let jon = {
    //   name: "Jon bellion",
    active: false,
    albums: ["All time low", 80, "hello"],
};
let nick = {
    name: "Nick Jonas",
    albums: ["close"],
};
const greetArtiste = (artiste) => {
    if (artiste.name) {
        return ("Hello " + artiste.name + " i love your song " + artiste.albums.join(", "));
    }
    return "Hello!";
};
console.log(greetArtiste(nick));
console.log(greetArtiste(jon));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 6] = "U";
    Grade[Grade["D"] = 7] = "D";
    Grade[Grade["C"] = 8] = "C";
    Grade[Grade["B"] = 9] = "B";
    Grade[Grade["A"] = 10] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
//literal types
let username;
username = "Amy";
//functions
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 5));
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(true);
logMsg(add(1, 4));
let subtract = function (a, b) {
    return b - a;
};
console.log(subtract(10, 7));
// interface mathFunc {
//   (x: number, y: number): number;
// }
let multiply = function (x, y) {
    return x * y;
};
console.log(multiply(10, 7));
const addAll = (a, b, c, d) => {
    return a + b + c + d;
};
//rest parameter
const total = (a, ...nums) => {
    return nums.reduce((sum, num) => sum + num) + a;
};
console.clear();
const createError = (message) => {
    throw new Error(message);
};
logMsg(total(45, 10, 45, 67, 90));
logMsg(createError('three'));
const infinite = () => {
    let i = 1;
    while (true) {
        if (i >= 100)
            break;
        i++;
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
console.log(numberOrString('45'));
