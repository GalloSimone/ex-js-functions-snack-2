// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(a,b,operazione) {return operazione(a,b)}

const somma =(a,b)=>a+b
const sottrazione =(a,b)=>a-b
const moltiplicazione =(a,b)=>a*b

console.log(eseguiOperazione(4,2,moltiplicazione));




