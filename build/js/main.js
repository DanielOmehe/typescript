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
    Grade[Grade["U"] = 3] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
