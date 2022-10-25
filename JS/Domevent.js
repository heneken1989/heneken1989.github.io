var inputElement =
     document.querySelector('select');

inputElement.onchange= function(e){
    console.log(e.target.value);
}    

document.onkeydown= function(e)
{
    console.log(e.which)
   switch(e.which){
    case 27:
        console.log('exit');

   }
}
