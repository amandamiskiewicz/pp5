import { Invoice } from "./invoice";
import { Customer } from "./customer";

export class Supplier extends Customer {
    nrKonta: string;
    faktura: Invoice[];

    constructor(nrKonta: string) {
        super();
        this.nrKonta = nrKonta; 
        this.faktura = [];    
    }
}