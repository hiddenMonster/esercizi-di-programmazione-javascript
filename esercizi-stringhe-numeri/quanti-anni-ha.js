/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
/****************
"Quanti anni ha"*
11/07/2018      *
By Ste          *
*/
var iBornDate = 1967;  // original Input
var iYear = 2018;
var iAge = iYear - iBornDate;
var iYearsToCentury = 100 - iAge;
console.log('Età: ' + iAge + ', ' + 'mancano ' + iYearsToCentury + ' anni per arrivare a 100!');
