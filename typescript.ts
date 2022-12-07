// basic ts

//Primitive
let age: number;
age=24;

let userName: string;
userName = 'dummyuser';

let isDraft: boolean;
isDraft=true;
//

//Complex

//array of strings
let hobbies: string[];

//different objects

let profile: {
    name: string;
    age: number;
    isEmployee: boolean;
}

profile = {
    name: 'dummyuser',
    age: 20,
    isEmployee: false
}
///

//nested array of people objects

let people: {
    age: number;
    isPeople: boolean;
}[];

people = [
    {age: 3, isPeople: true},
    {age: 20, isPeople: false}
]

//type inference
//important: only use types when its important to make code less redundunt
//below you dont need to use type

let course = 'A complete guide on typescript';


// union types. having more than one type

let second_course: string | number = 'A complete guide on javascript';
second_course=24;

let username: string | string[];
//above lets create string of array or single string

//type aliase
type Person = {
    name: string;
    age: number;
}

let person: Person;

//or like this

let persons: Person[];


//function and its types
function add(a: number, b: number): number{
    return a+b;
}

// : number infront of function indicated return type should be number

//if you dont want to return anything then following function can be used

function printOutput(value: any) {
    console.log(value);
}
// above will return only void ( undefined / null ) but in function means no return value

//Generics

function insertAtBeginning<T>(array: T[], value: T){ //T is being used to compare both types of array and value and then return it
    const newArray=[value, ...array];
    return newArray;
}

const demoArray=[1, 2, 3]

const updatedArray=insertAtBeginning(demoArray, -1) //output [-1, 1, 2, 3]

// classes & typescript

//defining objects separately
class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]){  
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.courses=courses;
    }

    enroll(courseName: string){
        return this.courses.push(courseName) //pushes courses names of a student
    }

    listCourses(){
        return this.courses.slice() //lists list of student courses
    }
}

const student = new Student('Abdullah', 'Roshan', 27, ['Django', 'Javascript'])
student.enroll('Python')

student.listCourses(); //=> ['Django', 'Javascript', 'Python']


//defining objects in constructor
class Student1 {
    

    constructor(public firstName: string, public lastName: string, public age: number, private courses: string[]){}

    enroll(courseName: string){
        return this.courses.push(courseName) //pushes courses names of a student
    }

    listCourses(){
        return this.courses.slice() //lists list of student courses
    }
}

const student1 = new Student1('Abdullah', 'Roshan', 27, ['Django', 'Javascript'])
student1.enroll('Python')

student1.listCourses(); //=> ['Django', 'Javascript', 'Python']


// Interface /// Use interface over type

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

//below implementing on constant

let max: Human;

max = {
    firstName: 'Abdullah',
    age: 27,
    greet(){
        console.log('Greetings')
    }
}

//below implementing on class

class Instructor implements Human {
    firstName: 'Abdullah';
    age: number;
    greet(){
        console.log('Hello')
    }
}

////
