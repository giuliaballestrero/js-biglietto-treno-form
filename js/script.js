
// definisco i form per inserire i dati che devo raccogliere
const inputDistance = document.getElementById ('inputDistance');
const inputAge = document.getElementById ('inputAge');
const button = document.getElementById ('button');


// creo una funzione per raccogliere i dati dopo aver cliccato il bottone
button.addEventListener('click', function() {
    console.log(inputDistance.value);   
    console.log(inputAge.value);

//dichiaro il prezzo per km
    let ticketPrice = (inputDistance.value * 0.2762);
    console.log(ticketPrice);

// creo le variabili in base alle fasce d'età
    if (inputAge.value < 18)
    ticketPrice = ticketPrice - (ticketPrice * 17.5 / 100);

    else if (inputAge.value > 65)
    ticketPrice = ticketPrice - (ticketPrice * 33.5 / 100);

//scrivo il prezzo finale sul documento
    document.getElementById('output') .innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice.toFixed(2) + ' &euro;';
    console.log(ticketPrice);
})



