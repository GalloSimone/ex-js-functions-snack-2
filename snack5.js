// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(){
    const interval= setInterval(()=>{
        console.log("ciao");
        
    },1000);

    setTimeout(()=>{
        clearInterval(interval)
    },10000)
    
}
stampaOgniSecondo();