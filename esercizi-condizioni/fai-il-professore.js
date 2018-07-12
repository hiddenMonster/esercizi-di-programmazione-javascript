/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
/*******************
"Fai il professore"*
11/07/2018         *
By Ste             *
*/
var iVoto = 18; //original input
if(iVoto >= 0 && iVoto <= 30)
{
  if(iVoto < 18)console.log('insufficiente');
  else if(iVoto > 17 && iVoto < 21)console.log('sufficiente');
  else if(iVoto > 20 && iVoto < 24)console.log('buono');
  else if(iVoto > 23 && iVoto < 27)console.log('distinto');
  else if(iVoto > 26 && iVoto <= 29)console.log('ottimo');
  else console.log('eccellente');
}
else
{
  console.log('Il voto deve essere compreso tra 0 e 30');
}

//**************************************************************
/********************
"Fai il professore2"*
11/07/2018          *
By Ste              *
*/
var iVoto = -1; //original input
if(iVoto >= 0 && iVoto <= 30)
{
  switch(iVoto)
  {
    case 18:
    case 19:
    case 20: console.log('sufficiente');break;
    case 21:
    case 22:
    case 23: console.log('buono');break;
    case 24:
    case 25:
    case 26: console.log('distinto');break;
    case 27:
    case 28:
    case 29: console.log('ottimo');break;
    case 30: console.log('eccellente');break;
    default: console.log('insufficiente');
  }
}
else
{
  console.log('Il voto deve essere compreso tra 0 e 30');
}
