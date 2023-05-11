let text: string = "hello world";

console.log(text);

let word = "hello there";

let age: number = 100;

console.log(age);

let a: number = 12;
let b: number = 6;
let c: number = 3;
let d: string = "some text";
let e: number = 12;

console.log(a / b);
console.log(b / c);
console.log(d);
console.log(e);

let myName: string;
let meaningOfLife: number;
let isLoading: boolean;

myName = "hello";
meaningOfLife = 12;
isLoading = false;

console.log(myName);
console.log(meaningOfLife);
console.log(isLoading);

let result: any;
let some: string | number;

const sum = (a: number, b: number) => {
  some = "true";
  return a + some + b;
};

let reg: RegExp = /\w+/g;

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

let bands: string[] = [];

bands.push("something");
console.log(bands);

//tuple
let myTuple: [string, number, boolean] = ["somethings", 12, false];

mixedData = myTuple;
mixedData.push(123);
myTuple.push(123);

console.log(mixedData);
console.log(myTuple);

let myObject: object = {};

myObject = [];

myObject = sum;

console.log(myObject);

interface Artiste {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
}

let jon: Artiste = {
//   name: "Jon bellion",
  active: false,
  albums: ["All time low", 80, "hello"],
};

let nick: Artiste = {
  name: "Nick Jonas",
  albums: ["close"],
};

const greetArtiste = (artiste: Artiste) => {
  if (artiste.name) {
    return (
      "Hello " + artiste.name + " i love your song " + artiste.albums.join(", ")
    );
  }
  return "Hello!"
};

console.log(greetArtiste(nick));
console.log(greetArtiste(jon));

//Enums

enum Grade{
    U = 3,
    D,
    C,
    B,
    A
}

console.log(Grade.A);

