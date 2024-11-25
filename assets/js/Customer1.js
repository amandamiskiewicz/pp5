"use strict";
class Customer1 {
    constructor() {
        this.nazwaFirma = '';
        this.nip = '';
        this.miasto = '';
        this.ulica = '';
        this.nrDomu = '';
        this.nrMieszkania = '';
        this.uwagi = '';
        this.branza = '';
        this.aktywnyTak = true;
    }
    getAddress() {
        return `${this.ulica} ${this.nrMieszkania}, ${this.miasto}`;
    }
    getData() {
        return `${this.nazwaFirma}, ${this.nip}`;
    }
}
class Supplier1 extends Customer1 {
    constructor(nrKonta) {
        super();
        this.nrKonta = nrKonta; // Inicjalizacja właściwości nrKonta
        this.faktura = []; // Inicjalizacja faktur jako pustej tablicy
    }
}
