function showinfo(){
    var uname=document.getElementById("username").value;
    var pass = document.getElementsByClassName("password")[0];
    var repass = document.getElementsByClassName("password")[1];
    var email = document.getElementById("email").value;
    var birth = document.getElementById('birthday').value;



    var gender = document.getElementsByTagName('gender')   // tra ve array co 2 phan tu
    var genderArray= [];
    for( var i=0;i< gender[i].checked;i++)
    {
        genderArray.push(gender[i].value);
    }

    var hob = document.getElementsByClassName('hob');

    var hobArr = [];
    for( var i=0;i< hob[i].checked;i++)
    {
        hobArr.push(hob[i].value);
    }




    alert("Name is "+uname+"\nPassword is "+pass+"\nRepassword is "+repass+"\nEmail is "+email+"\nGender is "+ genderArray);

    document.getElementById("info").innerHTML = "Name:" +uname +
                                                " <br> Pass: "+ pass+
                                                " <br> RePass: "+ repass+
                                                " <br> Email: "+ email+
                                                " <br> Birthday: "+ birth+
                                                " <br> Gender: "+ GenderArray+
                                                " <br> Hob: "+ hobArr;

     return false;                 
}




var hobbies = document.getElementsByClassName("hobbies")
    var hobbiesArray = []
    for (var i = 0; i < hobbies.length; i++){
        if(hobbies[i].checked){
            hobbiesArray.push(hobbies[i].value);
        }     
    }