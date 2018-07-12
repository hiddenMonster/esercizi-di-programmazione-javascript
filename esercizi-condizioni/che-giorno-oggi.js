/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/
/*****************
"Che giorno oggi"*
12/07/2018       *
By Ste           *
*/
var iInput = 5; // original input
var i1 = 1, i2 = 2, i3 = 3, i4 = 4, i5 = 5, i6 = 6, i7 = 7; // monday-->sunday
if(iInput >= 1 && iInput <= 7)
{
  switch(iInput)
  {
    case 1: console.log('1 => lunedì');break;
    case 2: console.log('2 => martedì');break;
    case 3: console.log('3 => mercoledì');break;
    case 4: console.log('4 => giovedì');break;
    case 5: console.log('5 => venerdì');break;
    case 6: console.log('6 => sabato');break;
    case 7: console.log('7 => domenica');break;
  }
}
else
{
  console.log('Il numero inserito deve essere compreso tra 1 e 7');
}
