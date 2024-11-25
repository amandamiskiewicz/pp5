// Typy dla klienta
interface Klient {
    nazwaFirma: string;
    nip: string;
    miasto: string;
    ulica: string;
    nrDomu: string;
    nrMieszkania: string;
    kodPocztowy: string;
    uwagi: string;
    branza: string;
    aktywny: string;
}

// Tablica do przechowywania klientów
const customers: Klient[] = [];

// Funkcja wyświetlania formularza
function showForm(): void {
    const form = document.getElementById('customer-form');
    const list = document.getElementById('customers-list');

    if (form && list) {
        form.style.display = 'block';
        list.style.display = 'none';
    }
}

// Funkcja ukrywania formularza i wyświetlania listy klientów
function showList(): void {
    const form = document.getElementById('customer-form');
    const list = document.getElementById('customers-list');

    if (form && list) {
        form.style.display = 'none';
        list.style.display = 'block';
    }
}

// Funkcja dodawania klienta do listy i zapisywania w konsoli
function saveCustomer(): void {
    const form = document.getElementById('formularzKlient') as HTMLFormElement;

    const klientDane: Klient = {
        nazwaFirma: (document.getElementById('nazwaFirma') as HTMLInputElement).value,
        nip: (document.getElementById('nip') as HTMLInputElement).value,
        miasto: (document.getElementById('miasto') as HTMLInputElement).value,
        ulica: (document.getElementById('ulica') as HTMLInputElement).value,
        nrDomu: (document.getElementById('nrDomu') as HTMLInputElement).value,
        nrMieszkania: (document.getElementById('nrMieszkania') as HTMLInputElement).value,
        kodPocztowy: (document.getElementById('kodPocztowy') as HTMLInputElement).value,
        uwagi: (document.getElementById('uwagi') as HTMLInputElement).value,
        branza: (document.getElementById('branza') as HTMLInputElement).value,
        aktywny: (document.querySelector('input[name="aktywny"]:checked') as HTMLInputElement).value,
    };

    console.log(klientDane); // Wyświetlenie danych w konsoli
    customers.push(klientDane); // Dodanie klienta do listy

    renderCustomerList(); // Odświeżenie listy klientów
    form.reset(); // Resetowanie formularza
    showList(); // Przejście do listy klientów
}

// Funkcja wstawiająca przykładowe dane do formularza
function insertSampleData(): void {
    (document.getElementById('nazwaFirma') as HTMLInputElement).value = 'Przykładowa Firma';
    (document.getElementById('nip') as HTMLInputElement).value = '1234567890';
    (document.getElementById('miasto') as HTMLInputElement).value = 'Warszawa';
    (document.getElementById('ulica') as HTMLInputElement).value = 'Główna';
    (document.getElementById('nrDomu') as HTMLInputElement).value = '12';
    (document.getElementById('nrMieszkania') as HTMLInputElement).value = '34';
    (document.getElementById('kodPocztowy') as HTMLInputElement).value = '00-123';
    (document.getElementById('uwagi') as HTMLInputElement).value = 'Brak uwag';
    (document.getElementById('branza') as HTMLInputElement).value = 'IT';
    (document.getElementById('aktywnyTak') as HTMLInputElement).checked = true;
}

// Funkcja generująca listę klientów w widoku
function renderCustomerList(): void {
    const customerList = document.getElementById('customerList');
    if (customerList) {
        customerList.innerHTML = ''; // Czyszczenie listy
        customers.forEach((klient) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${klient.nazwaFirma} - ${klient.miasto}`;
            customerList.appendChild(listItem);
        });
    }
}

// Obsługa przycisków
document.getElementById('zapiszBtn')?.addEventListener('click', saveCustomer);
document.getElementById('wstawDaneBtn')?.addEventListener('click', insertSampleData);
document.getElementById('displayFormBtn')?.addEventListener('click', showForm);
document.getElementById('anulujBtn')?.addEventListener('click', showList);
