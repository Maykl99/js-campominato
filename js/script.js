// il computer deve generare 16 numeri casuali fra 1 e 100 senza duplicati, 
// in seguito l'utente deve inserire 84 numeri con 84 possibilità ma senza duplicati, 
// se becca un numero presente nella lista dei 16 numeri casuali ha perso e il gioco termina
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

for(var n=0; n<16; n++){
    if(n == numeroMacchina[n]){
        alert('un numero è stato duplicato');
    }
    numeroMacchina.push(numeriRandom(1,100)); 
}
//console.log(numeroMacchina); // stampa un array di 16 numeri casuali

var n=0; // l'utente dovrà inserire un tot volte un numero casuale finchè non finirà le sue possibilità
do {
    utenteNumeroInserito=parseInt(prompt('Inserisci un numero casaule fra 1 e 100')); // l'utente inserise un numero da 1 a 100
    n++;
} while (n<=4);


var esito= trovaElemento(numeroMacchina, utenteNumeroInserito);
console.log(esito);
















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
