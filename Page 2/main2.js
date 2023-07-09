function clearErrors(){
    errors = document.getElementsByClassName('formerror');  
    for(let item of errors)
    {
      item.innerHTML = "";
    }

  }


 function seterror(id, error){
     element = document.getElementById(id);
     element.getElementsByClassName('formerror')[0].innerHTML = error;
 } 

 function validationForm(){
       var returnval = true;
       clearErrors();

       var name = document.forms['myForm']["fname"].value;
       if (name.length<5){
          seterror("name", "*Length of name is too short!");
          returnval = false;
       }

       if (name.length==0){
          seterror("name", "*Length of name cannot be zero!");
          returnval = false;
       }

       var email = document.forms['myForm']["femail"].value;
       if (email.length>20){
          seterror("email", "*Length of email is too short!");
          returnval = false;
       }

       var phone = document.forms['myForm']["fphone"].value;
       if (phone.length!=10){
          seterror("phone", "*Phone number should be of 10 digits!");
          returnval = false;
       }

       var wnumber = document.forms['myForm']["wnumber"].value;
       if (wnumber.length!=10){
          seterror("wnumber", "*Whatsapp number should be of 10 digits!");
          returnval = false;
       }

       var address = document.forms['myForm']["address"].value;
       if (address.length>100){
          seterror("address", "*Address length is too Sort!");
          returnval = false;
       }



       var password = document.forms['myForm']["fpass"].value;
       if (password.length<8){
          seterror("pass", "*Password should be atleast 8 character long!");
          returnval = false;
       }

       var cpassword = document.forms['myForm']["fcpass"].value;
       if (cpassword !=password){
          seterror("cpass", "*Password and confirm password should be match!");
          returnval = false;
       }

       return returnval;
  }     