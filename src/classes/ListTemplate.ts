/*
    1. constructor안에 list container 만듬
    2. container에 'li'메소드를 렌더링
        -- accepts arguments:  invoice or payment, a heading, a position
        -- html 템플릿 만듬
        -- list의 시작과 끝네 li template 추가
*/

import { HasFormatter } from "../interface/HasFormatter";
export class ListTemplate {
    constructor(
        private container: HTMLUListElement
    ){}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        li.append(p);

        if(pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}