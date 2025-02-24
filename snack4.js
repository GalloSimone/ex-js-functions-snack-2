// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time){
    function timeOut(){
        setTimeout(()=>{
            console.log("tempo finito");
            
        }, time);
    }
    return timeOut;
}
const timer=creaTimer(1000)
timer();
