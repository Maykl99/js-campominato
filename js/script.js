 //Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati Fatto
/* In seguito deve chiedere all'utente (100 - 16) 84 volte di inserire un numero alla volta, sempre compreso tra 1 e 100. 
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */


// inizializzazione variabili globali
var ListaComputer=[];
var ListaUtente=[];
var lunghezza=16;
var max;
var min=1;
var possibilita= max - ListaComputer.length;
var numeroUtente;
var trovato=false;

do { // livello di difficoltà
    var scelteLivelloDifficolta=parseInt(prompt('Inserisci il numero di difficoltà: 0,1,2'));
} while (scelteLivelloDifficolta !=0 && scelteLivelloDifficolta !=1 &&  scelteLivelloDifficolta !=2);

// opzione livello di difficoltà
switch (scelteLivelloDifficolta) {
    case 0:
        max=100;
        break;
    case 1:
        max=80;
        break;
    case 2:
        max=50;
        break;
}

// aggiunta valori nell'array computer 
while(ListaComputer.length < lunghezza){
    var numero=NumeroRandom(min,max);
    if(!ListaComputer.includes(numero)){
        ListaComputer.push(numero);
    }
}


// aggiunta valori nell'array utente, controlli valori passati ed esito del programma
while(ListaUtente.length < 4 && trovato==false){
    numeroUtente=parseInt(prompt('Inserisci un numero casuale fra ' + min + ' e ' + max ));
    while(numeroUtente >= min && numeroUtente >= max){
        numeroUtente=parseInt(prompt('Attenzione il numero inserito è fuori dall\'intervallo di numeri consentiti'))
    }

    if(isNaN(numeroUtente)){
        alert('Inserisci solo valori numerici');
    }else{
        if(ListaComputer.includes(numeroUtente)){
            trovato=true;
            alert('hai perso con ' + (ListaUtente.length+1) + ' tentativi')
        }else if(!ListaUtente.includes(numeroUtente)){
            ListaUtente.push(numeroUtente);
        }else if(isNaN(numeroUtente)){
            alert('Inserisci solo valori numerici');
        }else{
            alert('attenzione non vale numero già presente');
        }
    }


}

// risultato
if(trovato){
    alert('Hai perso con punteggio ' + ListaUtente.length)
}else{
    alert('Hai vinto');
}

//stampa su console array computer, array macchina e valore passato con il prompt
console.log(numeroUtente);
console.log(ListaComputer);
console.log(ListaUtente);


// funzione genera numero randomico
function NumeroRandom(min,max){
    var random=Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}