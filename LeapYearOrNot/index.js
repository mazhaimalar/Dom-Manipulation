function fun(){
   let val = document.getElementById('year').value;
   let ans = document.getElementById("ans");
   if (val%4 === 0 && val%100 !== 0 || val % 400 === 0){
     console.log("leap year")
     ans.innerHTML = 'leap year'
   }
   else{
     console.log("not a leap yaer")
     ans.innerHTML = 'not a leap year'
   }
 }
 let ele;
 ele = document.getElementById("year");
 //console.log(ele);
 // use only ids with getElementById and use tags with querySelector
 ele.addEventListener("change" , fun )