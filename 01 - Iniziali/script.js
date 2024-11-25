/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const getIniziali = (nomi) => {

    const iniziali = [];
    for(let i = 0; i < nomi.length; i++){
        iniziali.push(nomi[i][0])
    }
    return iniziali
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]