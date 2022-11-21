// Descrizione:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

const chilometri=  prompt('Ciao! Quanti chilometri vuoi percorrere?');
if ((chilometri >0)){
    const anni= parseInt(prompt('Inserisci la tua età?'));
    let prezzo = 0.21 * chilometri;
    
    if ((anni>0)){
        if (anni < 18) {
            let scontoVenti = prezzo *20 / 100;
            document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: '+scontoVenti.toFixed(2) + '&euro;';
        } else if (anni > 65) {
            let scontoQuaranta = prezzo *40 / 100;
            document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: ' +scontoQuaranta.toFixed(2) + '&euro;';
        } else{
            document.getElementById('prezzo').innerHTML = 'Il costo del biglietto è: ' +prezzo.toFixed(2) + '&euro;';
        }
    } else{
        console.error(' Attenzione! Devi inseire un numero per il calcolo del prezzo');
        document.getElementById('prezzo').innerHTML = 'Attenzione! Devi inseire un chilometraggio ed un\'età espressi in cifre per il calcolo del prezzo';
    }  
} else{
        console.error(' Attenzione! Devi inseire un numero per il calcolo del prezzo');
        document.getElementById('prezzo').innerHTML = 'Attenzione! Devi inseire un chilometraggio ed un\'età espressi in cifre per il calcolo del prezzo';
    }    




