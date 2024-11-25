function Customer(){
    this.nazwaFirma = function(){
        return '';
    }
    this.nip = function(){
        return '';
    }
    this.miasto = function(){
        return '';
    }
    this.ulica = function(){
        return '';
    }
    this.nrDomu = function(){
        return '';
    }
    this.nrMieszkania = function(){
        return '';
    }
    this.uwagi = function(){
        return '';
    }
    this.branza = function(){
        return '';
    }
    this.aktywnyTak = function(){
        return true;
    }
}



function Supplier(nrKonta){
    this.nrKonta = function(){
        return '';
    }
    this.faktura = function(){
        return [];
    }
}
Supplier.prototype = new Customer();


//document.getElementById('nazwaFirma').value = 'Przykładowa Firma';
//document.getElementById('nip').value = '1234567890';
//document.getElementById('miasto').value = 'Warszawa';
//document.getElementById('ulica').value = 'Główna';
//document.getElementById('nrDomu').value = '12';
//document.getElementById('nrMieszkania').value = '34';
//document.getElementById('kodPocztowy').value = '00-123';
//document.getElementById('uwagi').value = 'Brak uwag';
//document.getElementById('branza').value = 'IT';
//document.getElementById('aktywnyTak').checked = true;

