/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
/****************
"Chi la azzecca"*
12/07/2018      *
By Ste          *
*/
var iInputUser1 = 67; // original input user 1
var iInputUser2 = 73; // original input user 2
var iMagicNumber = Math.ceil(Math.random()*100);
console.log('Il numero magico è: ' + iMagicNumber);
var sNearest;
var iDifferenceUser1;
var iDifferenceUser2;
if(iMagicNumber > iInputUser1)
{
  iDifferenceUser1 = iMagicNumber - iInputUser1;
}
else
{
  iDifferenceUser1 = iInputUser1 - iMagicNumber;
}
if(iMagicNumber > iInputUser2)
{
  iDifferenceUser2 = iMagicNumber - iInputUser2;
}
else
{
  iDifferenceUser2 = iInputUser2 - iMagicNumber;
}
if(iDifferenceUser1 < iDifferenceUser2)
{
  sNearest = 'User1';
}
else if(iDifferenceUser1 > iDifferenceUser2)
{
  sNearest = 'User2';
}
else if (iInputUser1 == iInputUser2)
{
  sNearest = 'entrambi';
  console.log('entrambi gli utenti hanno scelto lo stesso numero');
}
else
{
  sNearest = 'Entrambi gli utenti si sono avvicinati senza differenze.'
}
if(iMagicNumber == iInputUser1)
{
  console.log('User1 ha indovinato il numero ' + iMagicNumber);
}
else if (iMagicNumber == iInputUser2)
{
  console.log('User2 ha indovinato il numero ' + iMagicNumber);
}
else if (iMagicNumber == iInputUser1 && iMagicNumber == iInputUser2)
{
  console.log('Entrambi gli utenti hanno indovinato il numero ' + iMagicNumber);
}
else
{
  console.log('L\'utente che più si è avvicinato è: ' + sNearest);
}
