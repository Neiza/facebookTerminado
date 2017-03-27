
  window.addEventListener("load", function (){
    var buttonValidation = document.getElementsByClassName('btn')[0];
    buttonValidation.addEventListener("click", function(event){
      event.preventDefault();
         var user     = document.getElementById("user"),
             password = document.getElementById("password"),
             printErrorUser = document.getElementById('errorUser'),
             printErrorPass = document.getElementById('errorPassword');

         var expressionEmail=/\w+@+\w+\.+[a-z]/;

          (user.value==""  )  ?(document.getElementById('errorUser').innerHTML= "The field is empty"): "";
          (password.value=="")?(document.getElementById('errorPassword').innerHTML = "The field is empty"): "";
         (!expressionEmail.test(user.value)) ? printErrorUser.innerHTML= "The username or email is no valid" : "";
    })
  })
