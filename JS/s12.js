function showAlert(){
    alert("you have clicked alert");
}

function ShowConfirm(){
   var result = confirm("are you want to close")
   if(result){
    window.close();
   }
}


    function a(){
        var num1 = prompt("Enter the num1");
        var num2= prompt("Enter the num2");
        var sum = parseInt(num1) + parseInt(num2);
        console.log("sum is" +sum);
    
        alert("sum of"+ num1+ "and" + num2 + "is" + sum);
        

    }

