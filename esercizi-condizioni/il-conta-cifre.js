/*
  Il conta cifre
  Scrivi un programma che calcoli quante cifre sono contenute in un numero inserito in input (massimo 9999).
  http://www.imparareaprogrammare.it
*/
/****************
"Il conta cifre"*
11/07/2018      *
By Ste          *
*/
var iNum = -10; //original input
if(iNum >= -9999 && iNum <= 9999)
{
  if(iNum >= 0 && iNum <= 9)console.log('Il numero ha una sola cifra');
  if(iNum >= 10 && iNum <= 99)console.log('Il numero ha due cifre');
  if(iNum >= 100 && iNum <= 999)console.log('Il numero ha tre cifre');
  if(iNum >= 1000 && iNum <= 9999)console.log('Il numero ha quattro cifre');

  if(iNum < 0 && iNum >= -9)console.log('Il numero è negativo ed ha una sola cifra');
  if(iNum <= -10 && iNum >= -99)console.log('Il numero è negativo ed ha due cifre');
  if(iNum <= -100 && iNum >= -999)console.log('Il numero è negativo ed ha tre cifre');
  if(iNum <= -1000 && iNum >= -9999)console.log('Il numero è negativo ed ha quattro cifre');
}
else
{
  console.log('Il numero deve essere compreso tra -9999 e 9999');
}
