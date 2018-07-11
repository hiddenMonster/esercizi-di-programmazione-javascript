/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var monday = 20, tuesday = 18, wednasday = 17, thursday = 15, friday = 25, saturday = 32; sunday = 28; //original degrees input
var iHottest;
var iColdest;
if(monday > tuesday & monday > wednasday & monday > thursday & monday > friday & monday > saturday & monday > sunday){
  iHottest = 'monday con ' + monday + ' gradi';
  }else if(tuesday > monday & tuesday > wednasday & tuesday > thursday & tuesday > friday & tuesday > saturday & tuesday > sunday){
    iHottest = 'tuesday con ' + tuesday + ' gradi';
    }else if(wednasday > monday & wednasday > tuesday & wednasday > thursday & wednasday > friday & wednasday > saturday & wednasday > sunday){
      iHottest = 'wednasday con ' + wednasday + ' gradi';
      }else if(thursday > monday & thursday > tuesday & thursday > wednasday & thursday > friday & thursday > saturday & thursday > sunday){
        iHottest = 'thursday con ' + thursday + ' gradi';
        }else if(friday > monday & friday > tuesday & friday > wednasday & friday > thursday & friday > saturday & friday > sunday){
          iHottest = 'friday con ' + friday + ' gradi';
          }else if(saturday > monday & saturday > tuesday & saturday > wednasday & saturday > thursday & saturday > friday & saturday > sunday){
            iHottest = 'saturday con ' + saturday + ' gradi';
            }else if(sunday > monday & sunday > tuesday & sunday > wednasday & sunday > thursday & sunday > friday & sunday > saturday){
              iHottest = 'sunday con ' + sunday + ' gradi';
}
if(monday < tuesday & monday < wednasday & monday < thursday & monday < friday & monday < saturday & monday < sunday){
  iColdest = 'monday con ' + monday + ' gradi';
}else if(tuesday < monday & tuesday < wednasday & tuesday < thursday & tuesday < friday & tuesday < saturday & tuesday < sunday){
    iColdest = 'tuesday con ' + tuesday + ' gradi';
  }else if(wednasday < monday & wednasday < tuesday & wednasday < thursday & wednasday < friday & wednasday < saturday & wednasday < sunday){
      iColdest = 'wednasday con ' + wednasday + ' gradi';
    }else if(thursday < monday & thursday < tuesday & thursday < wednasday & thursday < friday & thursday < saturday & thursday < sunday){
        iColdest = 'thursday con ' + thursday + ' gradi';
      }else if(friday < monday & friday < tuesday & friday < wednasday & friday < thursday & friday < saturday & friday < sunday){
          iColdest = 'friday con ' + friday + ' gradi';
        }else if(saturday < monday & saturday < tuesday & saturday < wednasday & saturday < thursday & saturday < friday & saturday < sunday){
            iColdest = 'saturday con ' + saturday + ' gradi';
          }else if(sunday < monday & sunday < tuesday & sunday < wednasday & sunday < thursday & sunday < friday & sunday < saturday){
              iColdest = 'sunday con ' + sunday + ' gradi';
}
console.log('Il giorno della settimana più caldo è stato ' + iHottest + ' mentre il più freddo è stato ' + iColdest);
