/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/
/********************
"Rincorri la decina"*
13/07/2018          *
By Ste              *
*/

//**********************************
// con il ciclo for
for(var i = 1; i < 31; i++)
{
  if (i % 10 == 1) {
    console.log('\n');
  }
  console.log(i);
}

//**********************************
// con il do while *****************
var i = 1;
do {
  if (i % 10 == 1) {
    console.log('\n');
  }
  console.log(i);
  i++;
} while (i < 31);
