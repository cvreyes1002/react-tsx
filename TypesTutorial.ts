// Arrays
const numbers: number[] = [1, 2, 3]

const names: string[] = ["peter", "paul", "mary"]

const names2:Array<string> = ["peter", "paul", "mary"]


// Enums (collection of named constants)
// Error: "This syntax is not allowed when 'erasableSyntaxOnly' is enabled"
enum DarkMode {
    DARK,
    LIGHT,
    SYSTEM,
}

const theme:DarkMode = DarkMode.LIGHT;

// When the erasableSyntaxOnly compiler flag is turned on
const DarkModeTS = {
    DARK: 0,
    LIGHT: 1,
    SYSTEM: 2,
} as const;

type DarkModeTS = typeof DarkModeTS[keyof typeof DarkModeTS]
const themeTS:DarkModeTS = DarkModeTS.DARK


// Interfaces
interface User {
    id: string;
    name: string;
    age: number;
    religion?: string;  // "?" means optional
}

const user: User = {
    id: "1",
    name: "John",
    age: 30
}

// Extending Interface
interface Person {
    birthday: string;
}

interface Person {
    height: number;
}

interface User2 extends Person {
    id: string;
    name: string;
    age: number;
    religion?: string;  // "?" means optional
}

const user2: User2 = {
    id: "1",
    name: "John",
    age: 30,
    birthday: "2000/01/15",
    height: 165
}


// Alias (similar to interface)
type Car = {
    brand: string;
    year: number;
}

const car:Car = {
    brand: "toyota",
    year: 2020
}

// Extending Alias
type Animal = {
    name: string;
}

type Dog = Animal & {
    age: number;
}

const myDog:Dog = {
    age: 2,
    name: "Doggy"
}



// Literal Types
type Direction = "north" | "south";

const direction: Direction = "north"

// NG
let direction2: Direction = "south"
direction2 = "east"   // NG: east is not assignable to type Direction



// Intersection
type Student = { id: number; name: string };
type Athlete = { sport: string };

type StudentAthlete = Student & Athlete;

// The object must satisfy both type requirements
const player: StudentAthlete = {
  id: 101,
  name: "Alex",
  sport: "Soccer"
};


// Type Assertion and Casting
// Recommended: 'as' syntax
const unknownValue: unknown = "Hello World";
const strLength = (unknownValue as string).length; 

// Alternative: Angle-bracket syntax (Do not use in React/JSX files or when 'erasableSyntaxOnly' is enabled.)
const strLength2 = (<string>unknownValue).length;




console.log(numbers)
console.log(names)
console.log(names2)

console.log(theme)
console.log(themeTS)
console.log(user)
console.log(user2)
console.log(myDog)
console.log(car)
console.log(direction)
console.log(direction2)
console.log(player)
console.log(strLength)
console.log(strLength2)
