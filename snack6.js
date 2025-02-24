// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function contatore(time){
let counter=0;
const interval =setInterval(() => {
    counter++;
    console.log(counter);
}, 1000);
setTimeout(()=>{
         clearInterval(interval)
 },11000)
}
contatore(11000)