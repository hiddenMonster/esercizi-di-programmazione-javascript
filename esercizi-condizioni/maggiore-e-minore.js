/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
/*******************
"Maggiore e minore"*
13/07/2018         *
By Ste             *
*/
var iNum1 = 10, iNum2 = 20, iNum3 = 30, iNum4 = 40;
var iMaggiore = 0;
var iMinore  = 0;
if(iNum1 > iNum2 && iNum1 > iNum3 && iNum1 > iNum4)
{
  iMaggiore = iNum1;
}
else if(iNum2 > iNum1 && iNum2 > iNum3 && iNum2 > iNum4)
{
  iMaggiore = iNum2;
}
else if (iNum3 > iNum1 && iNum3 > iNum2 && iNum3 > iNum4)
{
  iMaggiore = iNum3;
}
else {
  iMaggiore = iNum4;
}
//****************************************
if(iNum1 < iNum2 && iNum1 < iNum3 && iNum1 < iNum4)
{
  iMinore = iNum1;
}
else if(iNum2 < iNum1 && iNum2 < iNum3 && iNum2 < iNum4)
{
  iMinore = iNum2;
}
else if (iNum3 < iNum1 && iNum3 < iNum2 && iNum3 < iNum4)
{
  iMinore = iNum3;
}
else {
  iMinore = iNum4;
}
console.log('Il numero maggiore è ' + iMaggiore + ', il minore è ' + iMinore);
