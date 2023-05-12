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
  return "Hello!";
};

console.log(greetArtiste(nick));
console.log(greetArtiste(jon));

//Enums

enum Grade {
  U = 6,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);

type StringOrNumber = string | number;

//literal types

let username: "Daniel" | "John" | "Amy";

username = "Amy";

//functions

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(1, 5));

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");
logMsg(true);
logMsg(add(1, 4));

let subtract = function (a: number, b: number): number {
  return b - a;
};

console.log(subtract(10, 7));

type mathFunc = (x: number, y: number) => number;
// interface mathFunc {
//   (x: number, y: number): number;
// }

let multiply: mathFunc = function (x, y) {
  return x * y;
};

console.log(multiply(10, 7));

const addAll = (a: number, b: number, c: number, d: number): number => {
  return a + b + c + d;
}


//rest parameter

const total = (a: number, ...nums: number[]): number =>{
  return nums.reduce((sum, num) => sum + num) + a
}

console.clear();

const createError = (message: string): never => {
  throw new Error(message)
}
logMsg(total(45, 10, 45, 67, 90));
logMsg(createError('three'));

const infinite = ()=>{
  let i: number = 1;
  while(true){
    if(i >= 100) break
    i++
  }
}

const numberOrString = (value: number | string): string => {
  if(typeof value === 'string' ) return 'string'
  if(typeof value === 'number' ) return 'number'
  return createError('This should never happen')
}

console.log(numberOrString('45'));
