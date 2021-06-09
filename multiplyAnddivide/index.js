let mul = document.getElementById('mul');
let div = document.getElementById('div');
let ans = document.getElementById('ans');
let answer;
let arr;
function GetInput(){
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  arr = [num1, num2];
  return arr;
}
function Multiply(){
  GetInput()
  answer = arr[0]*arr[1];
  console.log(answer)
  ans.innerHTML = 'The answer is: ' + answer;
  
}
function Divide(){
  GetInput()
  answer = arr[0]/arr[1];
  console.log(answer)
  ans.innerHTML = 'The answer is: ' + answer;
} 

mul.addEventListener("click" , Multiply);
div.addEventListener("click" , Divide);
