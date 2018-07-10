/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, 
  poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/


// ho usato solo operatori aritmetici(modulo, divisione e sottrazione) e la concatenazione tra numeri e stringhe
// funziona con qualsiasi cifra in secondi inserita in input
/****************
"Conta il tempo"*
10/07/2018      *
By Ste          *
*/
var iInputTime = 12560; // original input time in seconds
var iSeconds = iInputTime % 60;
var iRealTime = iInputTime - iSeconds;
var iMinutes = (iRealTime % 3600) / 60;
iRealTime = iRealTime - (iRealTime % 3600);
var iHours = (iRealTime / 3600);
console.log(iHours + ' ore, ' + iMinutes + ' minuti, ' + iSeconds + ' secondi');
