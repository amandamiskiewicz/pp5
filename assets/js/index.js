"use strict";
var _a, _b, _c, _d;
// Tablica do przechowywania klientów
const customers = [];
// Funkcja wyświetlania formularza
function showForm() {
    const form = document.getElementById('customer-form');
    const list = document.getElementById('customers-list');
    if (form && list) {
        form.style.display = 'block';
        list.style.display = 'none';
    }
}
// Funkcja ukrywania formularza i wyświetlania listy klientów
function showList() {
    const form = document.getElementById('customer-form');
    const list = document.getElementById('customers-list');
    if (form && list) {
        form.style.display = 'none';
        list.style.display = 'block';
    }
}
// Funkcja dodawania klienta do listy i zapisywania w konsoli
function saveCustomer() {
    const form = document.getElementById('formularzKlient');
    const klientDane = {
        nazwaFirma: document.getElementById('nazwaFirma').value,
        nip: document.getElementById('nip').value,
        miasto: document.getElementById('miasto').value,
        ulica: document.getElementById('ulica').value,
        nrDomu: document.getElementById('nrDomu').value,
        nrMieszkania: document.getElementById('nrMieszkania').value,
        kodPocztowy: document.getElementById('kodPocztowy').value,
        uwagi: document.getElementById('uwagi').value,
        branza: document.getElementById('branza').value,
        aktywny: document.querySelector('input[name="aktywny"]:checked').value,
    };
    console.log(klientDane); // Wyświetlenie danych w konsoli
    customers.push(klientDane); // Dodanie klienta do listy
    renderCustomerList(); // Odświeżenie listy klientów
    form.reset(); // Resetowanie formularza
    showList(); // Przejście do listy klientów
}
// Funkcja wstawiająca przykładowe dane do formularza
function insertSampleData() {
    document.getElementById('nazwaFirma').value = 'Przykładowa Firma';
    document.getElementById('nip').value = '1234567890';
    document.getElementById('miasto').value = 'Warszawa';
    document.getElementById('ulica').value = 'Główna';
    document.getElementById('nrDomu').value = '12';
    document.getElementById('nrMieszkania').value = '34';
    document.getElementById('kodPocztowy').value = '00-123';
    document.getElementById('uwagi').value = 'Brak uwag';
    document.getElementById('branza').value = 'IT';
    document.getElementById('aktywnyTak').checked = true;
}
// Funkcja generująca listę klientów w widoku
function renderCustomerList() {
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
(_a = document.getElementById('zapiszBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveCustomer);
(_b = document.getElementById('wstawDaneBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', insertSampleData);
(_c = document.getElementById('displayFormBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', showForm);
(_d = document.getElementById('anulujBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', showList);
