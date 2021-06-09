
let PresentYear;
let today = new Date();
//console.log(today)
let Leap ;

function leapOrNot(year){
  console.log(year);
  let notLeap = [31 , 28 , 31 , 30 ,31 ,30 , 31 , 31 , 30 ,31, 30 , 31 ];
  Leap = [31 , 29 , 31 , 30 ,31 ,30 , 31 , 31 , 30 ,31, 30 , 31 ];
  if(year % 400 ===0){
      PresentYear = Leap;
        console.log("jjj")

     return PresentYear;
  }
  else if(year % 100 === 0){
     PresentYear = notLeap;
        console.log("kkk")

         return PresentYear;

  }
  else if(year%4 === 0){
    PresentYear = Leap;
    console.log("lll")
    console.log(PresentYear);
         return PresentYear;

  }
  else{
    PresentYear = notLeap;
    //console.log("corrrect");
    //console.log(PresentYear);
    return PresentYear;

  }
  
}

function RemainingDays(){
  
        console.log("enterdddd")

  let i;
  let Day = today.getDate();
  //console.log(today);
  //console.log(Day);
  let month = today.getMonth();
  let num =(PresentYear[month] - Day);
  //console.log(num)
  //console.log(PresentYear);
  if (month == 11 && Day > 25){
          console.log('enterd');

   let dec = 31 - Day ;
        console.log(PresentYear[1])

    if(PresentYear[1] === Leap[1]){
   Days =dec + 351 ;
   console.log(Days);
   return Days;
    }
    else{
    Days = dec + 350 ;
    return Days;
      
    }
  }
  else{
      console.log('enterddddd');

    NotADecember()
    console.log(Days);
    return Days

    }
  function NotADecember(){
      console.log('enterd');

     Days = num ;
     //console.log(Days);
    for( month+1 ; month < 11; month++  ){
      //console.log(Days);
      //console.log(`${Days} +${PresentYear[month+1]}`);

    Days = Days + PresentYear[month+1] ;
      //console.log(month)
      console.log(`${Days} +${PresentYear[month]}`);
    
  }
    
  }
}
  

let year = today.getFullYear();
console.log(year);
let Days;
let christmas = new Date(year , 11 ,25);
leapOrNot(year)
RemainingDays();
