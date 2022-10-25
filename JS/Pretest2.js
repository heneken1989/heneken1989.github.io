function Detail(){
    var uname =document.getElementById("uname").value;
    var pass =document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var birth= document.getElementById('birth').value;
        
         var day= new Date(birth);
         var year= day.getFullYear();

         var checkyear= function(year){

            if( year%4==0&year%100!=0||year%400==0)
            {
                return "your birth day" + "is leap year"
            }
   
            else
            {
               return "your birth day" + " is not leap year"
            }

         }
    
         checkyear(year);

  

    if(pass!=repass)
    {
        alert("password not match")
    }
    else
    {
        alert("Name:" + uname
        + "\nPassword:" + pass
        +"\nBirthday:" + birth 
        +"\nyear" + checkyear(year)
        )
    }




    

   
}