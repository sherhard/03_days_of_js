function myDrive(){
    let input_01=document.getElementById('input_01').value;
 
   if(input_01>=18){
    document.getElementById('price').innerHTML='Вам можно водить машину !';
    document.getElementById('price').style.color='green';
   } else if(input_01<18){
    document.getElementById('price').innerHTML=`Вам нельзя водить машину сейчас , но  можно через ${input_01-18} лет` ;
    document.getElementById('price').style.color='red';

   }

    }