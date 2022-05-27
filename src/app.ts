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

// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR ,PERSON}
// 순서들이 number로 0부터 시작해서 값이 생성되어서 number type 가능
interface Resource<T> { // data 부분은 generics
  uid: number;
  resourceType:number;
  // data 부분은 string, number 등 다양한게 올 수 있으니까 -> generic
  data: T;
}

const docOne : Resource <object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: {name: 'shaun'}
}

const docTwo : Resource <object> = {
  uid: 11,
  resourceType: ResourceType.PERSON,
  data: {title: 'wind'}
}