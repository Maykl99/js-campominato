// il computer deve generare 16 numeri casuali fra 1 e 100 FATTO!
// senza duplicati, 
// in seguito l'utente deve inserire 84 numeri con 84 possibilità FATTO!
//ma senza duplicati, 
// se becca un numero presente nella lista dei 16 numeri casuali ha perso e il gioco termina // FATTO!
//
//Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati
/* In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */


var numeroMacchina=[];
var utenteNumeroInserito;

// creo un lista di elementi randomici di lunghezza 16:
for(var n=0; n<16; n++){
    numeroMacchina.push(numeriRandom(1,100));
    if(n === numeroMacchina[n]){
        console.log('uno o più numeri sono stati duplicati');
    } 
}

console.log(numeroMacchina);

// chiedo all'utente di inserire un numero per tot, volte:
var n=0;
do {
    //utenteNumeroInserito=parseInt(prompt('Inserisci un numero casaule fra 1 e 100'));
    n++;
} while (n<=2);


// confronto fra il numero passato dall'utente con il prompt e la lista presente
var esito= trovaElemento(numeroMacchina, utenteNumeroInserito);
//console.log(esito);

// manca il controllo sul valore passato nel prompt
// manca il controllo sui valori duplicati nell'array
// manca il risultato, cioè il numero di volte che l'utente ha inserito un numero consentito






// funzioni
 
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 

function trovaElemento(array,elemento){
    var i=0;
    while(i<array.length){
        if( elemento == array[i]){
            return true, 'Hai trovato un elemento del campo minato, hai perso';
        }
        i++
    }
    return false, 'Hai superato il campo minato, hai vinto';
}






/* ciao, var utente=parseInt(prompt('inserisci un numero')); // passo un valore attravero il prompt, questo valore sarà allocato alla variabile utente,
però dato che questo var utente si trova all'interno di un ciclo sarà ripetuto per un tot di volte, per memorizzare il valore di utente e confrontarlo 
posso utilizzare un'altra variabile,

var utente=parseInt(prompt('Inserisci un numero casaule fra 1 e 100')); 
var numeroUtente=utente;
if(numeroUtente === utente){
    console.log('numero già inserito');
} 

non funziona, perchè? 

*/
