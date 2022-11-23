
// definisco i form per inserire i dati che devo raccogliere
const inputDistance = document.getElementById ('inputDistance');
const inputAge = document.getElementById ('inputAge');
const button = document.getElementById ('button');


// creo una funzione per raccogliere i dati dopo aver cliccato il bottone
button.addEventListener('click', function() {
    console.log(inputDistance.value);   
    console.log(inputAge.value);

//dichiaro i valori
const distance = parseInt (inputDistance.value)
const age = parseInt (inputAge.value)
const kmPrice = 0.2762

//dichiaro la variabile del prezzo del biglietto
    let ticketPrice = (distance * kmPrice);
    console.log(ticketPrice);

// creo le variabili in base alle fasce d'età
    if (age < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 17.5 / 100);
    }   else if (age > 65) {
        ticketPrice = ticketPrice - (ticketPrice * 33.5 / 100);
    }
    
//scrivo il prezzo finale sul documento
    document.getElementById('output') .innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice.toFixed(2) + ' &euro;';
    console.log(ticketPrice);
})



