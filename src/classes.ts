class Author {
    secondLang!: string
  constructor(public readonly name: string, public book: string, private age: number, protected lang: string = 'English') {
    this.secondLang = 'hello'
  }

  public getAge(){
    return `Hello, I'm ${this.age}`
  }
}

const Jordan = new Author('Jordan Peterson', '12 Rules for life', 63, 'English')

console.log(Jordan.secondLang);
console.log(Jordan.getAge());

class NewAuthor extends Author{
    constructor(
        public publisher: string,
        name: string,
        book: string,
        age: number,
    ){
        super(name, book, age)
    }

    public getLang(){
        return `I speak ${this.lang}`
    }
}

const Dale = new NewAuthor('New York times','Dale Carnergie', 'How', 90)

console.log(Dale.getLang());

///////////////////////////////////////////////////

interface Singer {
    artist: string,
    song: string,
    play(action: string): string
}

class Musician implements Singer {
    artist: string
    song: string;

    constructor(artist: string, song: string){
        this.artist = artist
        this.song = song
    }

    play(action: string){
        return `${this.artist} ${action} ${this.song}`
    }
}

const Justin = new Musician('Jon Bellion', 'Irobot')

console.log(Justin.play('sang'));

//////////////////////////////////////////////////
class Peeps{
    static count: number = 0

    static getCount(): number{
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.id = ++Peeps.count
    }
}

const Benny = new Peeps('Benny')
const Stuart = new Peeps('Stuart')
const Cole= new Peeps('Cole')
const Fred = new Peeps('Fred')

console.log(Peeps.count)
console.log(Benny.id, Benny.name);
console.log(Stuart.id, Stuart.name);
console.log(Cole.id, Cole.name);
console.log(Fred.id, Fred.name);
console.log(Peeps.count);

//////////////////////////////////////////////////

class Players {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
        }else throw new Error('Invalid data: Params is not an array of strings')
    }
}

const Liverpool = new Players();
Liverpool.data = ['Van dyke', 'Sadio Mane']
Liverpool.data = ['Soemthng', 'hello']
console.log(Liverpool.data);
