/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/
/*****************
"La calcolatrice"*
12/07/2018       *
By Ste           *
*/
var iNum1 = 20, iNum2 = 3; //original input
var sOperazione = 'somma'; //original input
var iRisultato;

if(iNum1 != 0 && iNum2 != 0)
{
  switch(sOperazione)
  {
    case 'somma': iRisultato = iNum1 + iNum2;break;
    case 'sottrazione': iRisultato = iNum1 - iNum2;break;
    case 'moltiplicazione': iRisultato = iNum1 * iNum2;break;
    case 'divisione': iRisultato = iNum1 / iNum2;break;
    case 'modulo': iRisultato = iNum1 % iNum2;break;
    case '^': iRisultato = Math.pow(iNum1 , iNum2);break;
    case 'm': iRisultato = (iNum1 + iNum2) / 2;break;
    default: iRisultato = 0; console.log('Immettere l\'operazione corretta');
  }
  console.log('Il risultato dell\'operazione ' + sOperazione + ' tra i numeri è: ' + iRisultato);
}
else
{
  console.log('Il numero zero non è ammesso');
}
