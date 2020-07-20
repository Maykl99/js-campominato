var numeroMacchina=[];
var elemento;
var numero;

// generazione numeri random computer
for(var i=0; i<16; i++){
    elemento = numeriRandom(1,100);
    if(!numeroMacchina.includes(elemento)){
        numeroMacchina.push(elemento);
    }
}

var utenteNumeri=[];
var n=0;
do{
    utenteNumeroInserito=parseInt(prompt('Inserisci un numero casaule fra 1 e 100'));
    if()
/*     var utente = utente[utenteNumeroInserito];
    if(!utente.includes(utenteNumeroInserito)){
         utente;
        utente.push(utenteNumeroInserito)
    } */
    n++;
}while(n <= (max - 16))

var esito=trovaElemento(numeroMacchina,utenteNumeroInserito);
console.log(utente)
console.log(esito)
console.log(numeroMacchina)

// funzione genera numero random 
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

// funzione trova elemento 
function trovaElemento(array,elemento){
    var i=0;
    while(i<array.length){
        if( elemento == array[i]){
            return true;
        }
        i++
    }
    return false;
}




















/*     if(elemento === numeroMacchina.length){
        numeroMacchina.push('ciao');
    }
    if(!elemento === numeroMacchina.length){
        numeroMacchina.push(elemento);
    } */

    /* if(val){
    non fai la push
}
if(!val)
 */