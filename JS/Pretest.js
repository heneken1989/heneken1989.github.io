function Memberinfo(){
    var uname = document.getElementById("username").value;
    var birth = document.getElementById('birthday').value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById('phone').value;

    console.log(birth)
    
    var gender = document.getElementsByClassName("gender");
    var genderArray ="";
    for(var i=0;i<gender.length;i++)
    {
        if(gender[i].checked){
            genderArray=gender[i].value
        }
    }

    var comment = document.getElementById("comment").value
    var hob = document.getElementsByClassName("hob");
    var hobArr="";
    for(var i=0;i<hob.length;i++)
    {
        if(hob[i].checked){
            hobArr= hobArr + " "+hob[i].value
        }
    }

    var city = document.getElementById("city").value

    // tinh tuoi
    var birthh = new Date(birth);
    var today = new Date()
    var age =  Math.floor((today-birthh)/(24*60*60*1000*365.2));

    if(address==[]|| uname==[] || phone==[] ||birth==[] || email==[] ||genderArray==[] ||city==[])
    {
     alert("khong duoc de trong")
    }

     else{

        if(age<17)
        {
         alert("age must >17")
        }

        else{
            alert("Member infomation :"+ "\n-------------------" +"\nName:" +uname+ "\nBirth:" + birth+ "\nEmail:" + email + "\nAdress:" + address + "\nGender: " +  genderArray + "\nCity:" + city + "\n Hobbies:" + hobArr +"\nAge:" + age +"\nComment: "+ comment)
        }
        
        }





    
     


  
   
     



    // var birthh = new Date(birthday);
    // console.log(birthh)
    // var today = new Date();
    // var age =  Math.floor((today-birthh)/(24*60*60*1000*365.2));
    // console.log(age)




    // for(var i=0;i<gender[i].checked;i++)
    {
        // genderArray.push(gender[i].value);
        // console.log(genderArray[i]);
    }

    // var hob = document.getElementsByClassName('hob');
    // var hobArr= [];
    // for(var i =0; i<hob[i].checked; i++)
    {
        // hobArr.push(hob[i].value)
    }




    // alert("Name is "+uname+"\nEmail is "+email+"\nGender is "+ genderArray + "\nHobbies is"+hobArr + "\nPhone is"+ phone + );


}