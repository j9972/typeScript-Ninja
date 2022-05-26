let greet : Function;

greet = () => {
    console.log('greet');    
}

// ?는 option mark이므로 c 에 대한 값이 없어도 된다 -> 없으면 undefined
// void를 써주면, undefined되면 전달이 되지 않게끔 해준다
const add = (a:number, b:number, c?:number|string): void => {
    console.log(a+b);
    console.log(c);
    
}

// ?는 없으면 default 값 주기 
const put = (a:number, b:number, c:number|string = 10) => {
    console.log(a+b);
}

add(5,10)

const minus = (a:number, b:number) => {
    return a-b;
}
let result = minus(10,7);
// result = '' 이렇게 변경이 불가능, return으로 끝내 버렸기 때문