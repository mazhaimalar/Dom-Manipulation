/*moral of the story:
STRINGS ARE OBJECTS IN JS . THEY ARE NOT I REPEAT NOT ARRAYS WHERE WE CAN ACCES INDIVIDUAL CHARACTERS OF THE STRING LIKE TEXT[6] 0R TEXT[0]
 
*/



let element = document.getElementById('target');

function animate_string(element) 
{

  var textNode = element.childNodes[0]; 
  // assuming no other children
  /* A SINGLE STRING IS A SINGLE STRING OBJECT .rEMEMBER EACH AND AVERY CHARACTER OF A STRING DOES NOT MAKE A OBJECT*/
    var text = textNode.data;

  var i;
  console.log(typeof(i));
  for(i = 0 ; i < text.length ; i++ ){
console.log(text[i].nodeValue)/* WE WILL GET UNDEFINED FOR THIS PIECE OF CODE BECAUSE OBVIOUSLY THERE IS NO ARRAY CALLED TEXT.ONLY AN OBJECT CALLED TEXT EXISTS  */
}
setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
 animate_string(element) ;

