var numeroMacchina=[];
var elemento;
var numero;
for(var i=0; i<16; i++){
    elemento = numeriRandom(1,10);
    numeroMacchina.push(elemento);
}

numero=trovaElemento(numeroMacchina,elemento);
console.log(numero);
console.log(numeroMacchina);


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