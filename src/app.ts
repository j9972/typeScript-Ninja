const anchor = document.querySelector('a');

// console.log(anchor.href); -> 이러면 에러
// 에러 해결 방법 1
if(anchor) {
    console.log(anchor.href);
}

// 에러 해결 방법 2
const anchor2 = document.querySelector('a')!;
console.log(anchor2.href);


// 표현을 이렇게도 할 수 있음 - Form
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // form class name

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber,
        // value -> string, valueAsNumber -> number
    );
    
})