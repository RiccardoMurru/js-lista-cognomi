// 1. Chiedere all'utente il cognome
// 2. Inserire il cognome in un array
// 3. Stampare la lista ordinata alfabeticamente
// 4. Scrivere la posizione nella lista in cui si trova il nuovo utente



// Variabili
var users = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var surname = document.getElementById('surname');
var btnEnter = document.getElementById('btn-enter');
var btnGenerateList = document.getElementById('btn-genera-lista');
var listElement = document.getElementById('user-list');
var position = document.getElementById('position');
var newNamePosition;
var positionText = document.getElementById('position-text');


// 1-2. Chiedere cognome e inserire nell'array

btnEnter.addEventListener('click',
    function() {
        users.push(surname.value);
        newNamePosition = surname.value;
        surname.value = '';
    }
);

// 3. Stampare la lista in ordine alfabetico

btnGenerateList.addEventListener('click',
    function() {
        for (var i = 0; i < users.length; i++) {
            var item = users.sort()[i];
            listElement.innerHTML +=  '<li>' + item + '</li>';
            
        }
        
        // 4. Scrivere in che posizione si trova il nuovo utente
        positionText.className =  'visible';
        position.innerHTML = users.indexOf(newNamePosition) + 1 + '°';
    }
);
