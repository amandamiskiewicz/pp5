class Customer1 {
    nazwaFirma: string = '';
    nip: string = '';
    miasto: string = '';
    ulica: string = '';
    nrDomu: string = '';
    nrMieszkania: string = '';
    uwagi: string = '';
    branza: string = '';
    aktywnyTak: boolean = true;

    getAddress(): string {
        return `${this.ulica} ${this.nrMieszkania}, ${this.miasto}`;
    }

    getData(): string {
        return `${this.nazwaFirma}, ${this.nip}`;
    }
}

class Supplier1 extends Customer1 {
    nrKonta: string;
    faktura: any[];

    constructor(nrKonta: string) {
        super();
        this.nrKonta = nrKonta; // Inicjalizacja właściwości nrKonta
        this.faktura = [];      // Inicjalizacja faktur jako pustej tablicy
    }
}
