/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/
/************************
"Il calendario mediocre"*
12/07/2018              *
By Ste                  *
*/
var iTipoDiMese = 31; //original input
var sGiornoDiPartenza = 'lunedì'; //original input

var sGiorno1 = 'lunedì';
var sGiorno2 = 'martedì';
var sGiorno3 = 'mercoledì';
var sGiorno4 = 'giovedì';
var sGiorno5 = 'venerdì';
var sGiorno6 = 'sabato';
var sGiorno7 = 'domenica';
var iCounter = 1;

if(iTipoDiMese >= 28 && iTipoDiMese <= 31) //febbraio bisestile
{
  var k = sGiornoDiPartenza;
  if (k == sGiorno1 || k == sGiorno2 || k == sGiorno3 || k == sGiorno4 || k == sGiorno5 || k == sGiorno6 || k == sGiorno7 )
  {
    var iLocale = 0;
    if(sGiornoDiPartenza == 'lunedì')
    {
    iLocale = 1;
  }
    else if (sGiornoDiPartenza == 'martedì')
    {
      iLocale = 2;
    }
    else if (sGiornoDiPartenza == 'mercoledì')
    {
      iLocale = 3;
    }
    else if (sGiornoDiPartenza == 'giovedì')
    {
      iLocale = 4;
    }
    else if (sGiornoDiPartenza == 'venerdì')
    {
      iLocale = 5;
    }
    else if (sGiornoDiPartenza == 'sabato')
    {
      iLocale = 6;
    }
    else if (sGiornoDiPartenza == 'domenica')
    {
      iLocale = 7;
    }
      for(i = iLocale; i < iTipoDiMese + iLocale; i++, iCounter++)
    {
      switch (i)
      {
      case 1: console.log(iCounter + ' ' + sGiorno1);break;
      case 2: console.log(iCounter + ' ' + sGiorno2);break;
      case 3: console.log(iCounter + ' ' + sGiorno3);break;
      case 4: console.log(iCounter + ' ' + sGiorno4);break;
      case 5: console.log(iCounter + ' ' + sGiorno5);break;
      case 6: console.log(iCounter + ' ' + sGiorno6);break;
      case 7: console.log(iCounter + ' ' + sGiorno7);break;
      case 8: console.log(iCounter + ' ' + sGiorno1);break;
      case 9: console.log(iCounter + ' ' + sGiorno2);break;
      case 10: console.log(iCounter + ' ' + sGiorno3);break;
      case 11: console.log(iCounter + ' ' + sGiorno4);break;
      case 12: console.log(iCounter + ' ' + sGiorno5);break;
      case 13: console.log(iCounter + ' ' + sGiorno6);break;
      case 14: console.log(iCounter + ' ' + sGiorno7);break;
      case 15: console.log(iCounter + ' ' + sGiorno1);break;
      case 16: console.log(iCounter + ' ' + sGiorno2);break;
      case 17: console.log(iCounter + ' ' + sGiorno3);break;
      case 18: console.log(iCounter + ' ' + sGiorno4);break;
      case 19: console.log(iCounter + ' ' + sGiorno5);break;
      case 20: console.log(iCounter + ' ' + sGiorno6);break;
      case 21: console.log(iCounter + ' ' + sGiorno7);break;
      case 22: console.log(iCounter + ' ' + sGiorno1);break;
      case 23: console.log(iCounter + ' ' + sGiorno2);break;
      case 24: console.log(iCounter + ' ' + sGiorno3);break;
      case 25: console.log(iCounter + ' ' + sGiorno4);break;
      case 26: console.log(iCounter + ' ' + sGiorno5);break;
      case 27: console.log(iCounter + ' ' + sGiorno6);break;
      case 28: console.log(iCounter + ' ' + sGiorno7);break;
      case 29: console.log(iCounter + ' ' + sGiorno1);break;
      case 30: console.log(iCounter + ' ' + sGiorno2);break;
      case 31: console.log(iCounter + ' ' + sGiorno3);break;
      case 32: console.log(iCounter + ' ' + sGiorno4);break;
      case 33: console.log(iCounter + ' ' + sGiorno5);break;
      case 34: console.log(iCounter + ' ' + sGiorno6);break;
      case 35: console.log(iCounter + ' ' + sGiorno7);break;
      case 36: console.log(iCounter + ' ' + sGiorno1);break;
      case 37: console.log(iCounter + ' ' + sGiorno2);break;
    }
      }
  }
  else
  {
    console.log('Inserire il giorno corretto(eg:lunedì)');
  }
}
else
{
  console.log('Inserire un mese corretto(28,29,30,31)');
}
