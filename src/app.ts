import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter; -> 일반 변수
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value, 'end');
});


// Generics


const addUID = <T extends {name: string}>(obj:T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'jung', age:24});
// let docTwo = addUID('hello');
console.log(docOne.name);


// with interface
interface Resource<T> { // data 부분은 generics
  uid: number;
  resourceName:string;
  // data 부분은 string, number 등 다양한게 올 수 있으니까 -> generic
  data: T;
}

const docThree : Resource <string> = {
  uid: 1,
  resourceName: 'Person',
  data: 'shaun'
}

const docThree_2 : Resource <object> = {
  uid: 1,
  resourceName: 'Person',
  data: {name: 'shaun'}
}

const docFour : Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['breed', 'millk']
}