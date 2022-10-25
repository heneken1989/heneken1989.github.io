function detail(){
   var uname= document.getElementById("uname").value;
   var email= document.getElementById("email").value;
   var hear = document.getElementById("hear").value;
   var comment=document.getElementById("comment").value

  var visit = document.getElementsByClassName("visit");
  var visitArray ="";
  for(var i=0;i<visit.length;i++)

   {
    if(visit[i].checked)
    {
        visitArray= visit[i].value
    }
   }

      if(email==[] || visitArray==[] || uname==[])
      {
        alert("Eror ,plz inout full info needed")
      }
      
      else
      {
        alert("Thanks you!!!!!" + "\n-------------------------------------------------" +"\n Name:" + uname

        + "\nEmail:" + email
        + "\nHow did you hear about us: " + hear
        + "\nWould you visit us again?:"  + visitArray
        + "\nComment:" + comment
        );

      }

}

