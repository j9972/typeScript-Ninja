let age : any = 25;

age = true;
age = 'hello'
age = {name: 'mario', age: 24 }

// type 바꾸고 싶으면
let mixed : any[] = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);

let ninja : {name: any, age: any}
ninja = {name: 'nasd', age : 23}
ninja = {name: 23, age : '23'}