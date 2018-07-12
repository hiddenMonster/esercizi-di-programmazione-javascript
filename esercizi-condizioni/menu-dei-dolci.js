/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
/****************
"Menu dei dolci"*
12/07/2018      *
By Ste          *
*/
var iScelta = 1; //original input
console.log('MENU:\n1. Tiramisù\n2. Torta della nonna\n3. Cheesecake alla nutella\n4. Macedonia');
if(iScelta >= 1 && iScelta <= 4)
{
  switch (iScelta) {
    case 1: console.log('Hai scelto il Tiramisù');break;
    case 2: console.log('Hai scelto la Torta della nonna');break;
    case 3: console.log('Hai scelto la Cheesecake alla nutella');break;
    case 4: console.log('Hai scelto la Macedonia');break;
  }
}
else
{
  console.log('Dolce non disponibile');
}
