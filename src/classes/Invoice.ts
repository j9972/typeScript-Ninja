import {HasFormatter} from '../interface/HasFormatter.js'

export class Invoice implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    // format 없으면 에러남
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}