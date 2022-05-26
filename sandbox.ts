//explicit types -> 타입을 정했기때문에 다른 타입은 무시된다.
let character : string;
let age : number;
let check : boolean;

// array
let ninjas: string[]; // empty array에 push는 error
// let ninjas: string[] = [];  이렇게 하면 위의 에러 해결

// ninjas.push('shau') 가능

ninjas = ['yo', 'si']

// union types
// ex - array
let mixed : (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);

// ex - normal var
let uid : string|number|boolean;
uid = '123';
uid = 123;
uid = false;

// objects -> 2가지 ways
let ninjaOne : object;
ninjaOne = { name: 'yoshi', age: 24};

// 다른 방법이지만, new property를 넣으면 에러남
let ninjaTwo : {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'mario', age: 23, beltColor: 'black'}