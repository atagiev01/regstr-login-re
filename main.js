/// indexD
function show(){
  let input =document.getElementById('inputs');
  let icon =document.getElementById('icons');

   if(input.type=='password') {
      input.type='text';
      icon.src="../img/hide.png"
   }else{
     input.type='password';
     icon.src="../img/show.png"

   } 
 };


 
 ///login index.
 function shows(){
  let input =document.getElementById('input');
  let icon =document.getElementById('icon');

   if(input.type=='password') {
      input.type='text';
      icon.src="./img/hide.png"
   }else{
     input.type='password';
     icon.src="./img/show.png"

   } 
 }


///`
 function showi(){
  let input =document.getElementById('inputi');
  let icon =document.getElementById('iconi');

   if(input.type=='password') {
      input.type='text';
      icon.src="../img/hide.png"
   }else{
     input.type='password';
     icon.src="../img/show.png"

   } 
 }