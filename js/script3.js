
var listaNumeri=[];


// genera numeri random lunghezza 16 elementi
while(listaNumeri.length < 16){
    
    var numero = numeriRandom(1,100);
    if(!trovaElemento(listaNumeri,numero)){
        listaNumeri.push(numero);
    }
}

console.log(listaNumeri) // stampa i numeri



var listaNumeriUtente=[];

for(var i =0; i<= 5; i++){
    var elementoLista=parseInt(prompt('Inserisci un numero'));
    if(elementoLista < 1 || elementoLista > 100){
        alert('numero inserito non supportato');
        listaNumeriUtente;
    }else if(isNaN(elementoLista)){
        alert('valore stringa non supportato');
        listaNumeriUtente;
    }else if(trovaElemento(listaNumeri,listaNumeriUtente)){
        console.log('hai perso con ' + listaNumeriUtente.length + ' tentativi');
    }
    else if(listaNumeriUtente.length == 5){
        console.log('hai vinto con ' + listaNumeriUtente.length + ' tentativi');
    }
    else{
        listaNumeriUtente.push(elementoLista);
    }

    
}

console.log(listaNumeriUtente)

// funzione trova elemento in una lista 
function trovaElemento(array,elemento){
    var i=0;
    trovato= false;
    while(i<array.length && trovato == false){
        if( elemento == array[i]){
            trovato = true;
        }
        i++
    }
    return trovato;
}

// funzione genera numero random 
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 
