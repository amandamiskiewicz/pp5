"use strict";
const customers = []; // Tablica do przechowywania klientów
// Funkcja wyświetlania formularza
function showForm() {
    document.getElementById('customer-form').style.display = 'block';
    document.getElementById('customers-list').style.display = 'none';
}
// Funkcja ukrywania formularza i wyświetlania listy klientów
function showList() {
    document.getElementById('customer-form').style.display = 'none';
    document.getElementById('customers-list').style.display = 'block';
}
// Funkcja dodawania klienta do listy i zapisywania w konsoli
function saveCustomer() {
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
        aktywny: document.querySelector('input[name="aktywny"]:checked').value
    };
    console.log(klientDane); // Wyświetlenie danych w konsoli
    customers.push(klientDane); // Dodanie klienta do listy
    renderCustomerList(); // Odświeżenie listy klientów
    document.getElementById('formularzKlient').reset(); // Resetowanie formularza
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
    customerList.innerHTML = ''; // Czyszczenie listy
    customers.forEach((klient) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${klient.nazwaFirma} - ${klient.miasto}`;
        customerList.appendChild(listItem);
    });
}
// Obsługa przycisków
document.getElementById('zapiszBtn').addEventListener('click', saveCustomer);
document.getElementById('wstawDaneBtn').addEventListener('click', insertSampleData);
document.getElementById('displayFormBtn').addEventListener('click', showForm);
document.getElementById('anulujBtn').addEventListener('click', showList);
//function save(event){
//    event.preventDef (method) 
//}
