//interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a:number): number;
}

// interface에[ 없는 속성을 넣으면 에러가 난다.]
const me : IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number) : number {
        console.log('I spend', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
    
}

greetPerson(me)

//classes
import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('mario', 'work on the mario web', 250);
const invTwo = new Invoice('luo', 'work on the luo web', 230);

let invoices: Invoice[] = []; // array
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());  
})


// 표현을 이렇게도 할 수 있음 - Form
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // form class name

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber,
        // value -> string, valueAsNumber -> number
    );
    
})