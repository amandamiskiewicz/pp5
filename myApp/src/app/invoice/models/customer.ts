export class Customer {
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