/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = (stringa) =>  {

    let counter = 0;

    const vocali = ['a','e','i','o','u'];

    for(let i = 0; i < stringa.length; i++) {
        console.log(stringa[i]);
        
        if(vocali.includes(stringa[i].toLowerCase())) counter++;
    }
    
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)