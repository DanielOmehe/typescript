"use strict";
class Author {
    constructor(name, book, age, lang = 'English') {
        this.name = name;
        this.book = book;
        this.age = age;
        this.lang = lang;
        this.secondLang = 'hello';
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Jordan = new Author('Jordan Peterson', '12 Rules for life', 63, 'English');
console.log(Jordan.secondLang);
console.log(Jordan.getAge());
class NewAuthor extends Author {
    constructor(publisher, name, book, age) {
        super(name, book, age);
        this.publisher = publisher;
    }
    getLang() {
        return `I speak ${this.lang}`;
    }
}
const Dale = new NewAuthor('New York times', 'Dale Carnergie', 'How', 90);
console.log(Dale.getLang());
class Musician {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }
    play(action) {
        return `${this.artist} ${action} ${this.song}`;
    }
}
const Justin = new Musician('Jon Bellion', 'Irobot');
console.log(Justin.play('sang'));
//////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Benny = new Peeps('Benny');
const Stuart = new Peeps('Stuart');
const Cole = new Peeps('Cole');
const Fred = new Peeps('Fred');
console.log(Peeps.count);
console.log(Benny.id, Benny.name);
console.log(Stuart.id, Stuart.name);
console.log(Cole.id, Cole.name);
console.log(Fred.id, Fred.name);
console.log(Peeps.count);
//////////////////////////////////////////////////
class Players {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Invalid data: Params is not an array of strings');
    }
}
const Liverpool = new Players();
Liverpool.data = ['Van dyke', 'Sadio Mane'];
Liverpool.data = ['Soemthng', 'hello'];
console.log(Liverpool.data);
