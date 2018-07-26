/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/
var iNum = 7;
var myArray = new Array(iNum);
for (var i = 0; i < myArray.length; i++) {
  myArray[i] = Math.floor(Math.random()*100);
}
console.log(myArray + '\nOra lo invertiamo...\n');
console.log(myArray.reverse());
