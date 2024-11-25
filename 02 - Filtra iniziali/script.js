/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const inizialiFiltrate = (nomi, lettera) => {
    const nomiFiltrati = [];

    for(let i = 0; i < nomi.length; i++){
        const iniziale = nomi[i][0];
        if(iniziale === lettera){
            nomiFiltrati.push(nomi[i])
        }
    } 
    return nomiFiltrati;
}   

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiFiltrate(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]