let greet: Function;

// ex1 -> func signature
let gree: (a:string, b:string) => void;
// a,b -> x,y가 되어도 상관이 없다. 대신에 type은 맞아야 한다

gree = (name: string, greeting:string) => {
    console.log(`${name} say ${greeting}`);
}

// ex2
let calc : (a:number,b:number,c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo;
    } else { // else문이 없으면 에러가 날것이다
        return numOne - numTwo
    }
}

// ex3
let logDetails : (obj: {name : string, age:number}) => void;

type person = {name:string, age:number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
    
}

