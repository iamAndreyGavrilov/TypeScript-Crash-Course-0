// Basic Types
let id:number   = 5;
let company:string = 'String Media';
let isPublished:boolean = true;
let x:any = 1;
 x = 'World';
let age:number;
age = 32;

let ids:number[] = [1,2,3,4,5];
let arr:any[] = [1,true,'Hello'];

// Tuple
let person: [number,string,boolean] = [1,'Brad',true];
// Tuple Array
let employee: [number,string][];
employee = [
    [1,'Brad'],
    [2,'John'],
    [3,'Jill'],
];

// Union
let pinCode: string | number = '22'

// Enum
enum Direction1 {
    Up= 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

enum Direction2 {
    Up= 'Up',
    Down= 'Down',
    Left= 'Left',
    Right= 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion - это когда мы уверены в типе переменной
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x:number,y:number): number {
    return x + y;
}
addNum(1,2)

// Void - это когда функция ничего не возвращает
function log(message: string | number): void {
    console.log(message)
}

// Interfaces - используется для объектов
interface UserInterface {
    readonly id: number, // только для чтения
    name: string,
    age?: number  // необязательный параметр
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Interface with functions
interface MathFunc {
    (x:number,y:number): number
}
const add: MathFunc = (x:number,y:number): number => x + y;
const sub: MathFunc = (x:number,y:number): number => x - y;


// interface with classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`
    }
}

