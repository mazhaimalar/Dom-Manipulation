function randomNumber(){
  let max = 10;
  let min = 1;
  ranNum = Math.floor(Math.random()* (max-min) + min );
  console.log(ranNum)
  return ranNum;
}
 function val(){
let guessVal = guess.value;
   console.log(guessVal)
   randomNumber();
   if(guessVal == ranNum ){
ans.innerHTML = 'right';}
   else{
    ans.innerHTML = 'wrong';
   }
}
let ranNum;
let ans = document.getElementById("ans");
let guess = document.getElementById("guess");
guess.addEventListener("change" , val);