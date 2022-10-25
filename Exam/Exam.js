function detail(){
    var funame= document.getElementById("fname").value;
    var luname= document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById('phone').value;

   

    var genderr = document.getElementsByClassName("gender");
    var genderArray ="";
    for(var i=0;i<genderr.length;i++)
    {
        if(genderr[i].checked){
            genderArray = genderr[i].value
        }
    }


    var city = document.getElementById("country").value


    if(funame==[])
    {
        alert("The first name cantnot left blank")
    }

    else if(luname==[])
     {
        alert("The last name cantnot left blank")
    }

    else if(email==[])
    {
       alert("The email cantnot left blank")
   }


   else if(phone==[])
   {
      alert("Phone cantnot left blank")
  }




    
  else{
    alert("Congratulation" +
    "\nYour infomation has been sent successfully"
    
    
    )
  }












}