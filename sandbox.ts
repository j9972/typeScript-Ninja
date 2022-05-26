// array
let names = ['c', 'a','r', 'R','o', 't']

names.push('thoad');


let nums = [10,20,30,40]

nums.push(25);

let mixed = ['ken',2,'chun', 3, 5];

mixed.push('ryt');
mixed.push(10);

// object
let ninja = {
    name : 'mario',
    belt : 'black',
    age: 24
}

ninja.age = 40;
ninja.name = 'gyu';
//ninja.skills = ['fighting','sleeping'] -> 없는 property라서 안됨

ninja = {
    name : 'mario',
    belt : 'black',
    age: 24,
    // skills: [] 이렇게 쓰는거 안됨 
}