  var estado = document.getElementById("actualStatus");
  var postButton = document.getElementById("post");
  var option = document.getElementsByTagName("option");
  var tipoFriend = document.getElementsByTagName("option")[0];
  var tipoPublic = document.getElementsByTagName("option")[1];
  var allFriends = [];
  var allPublic  = [];

  var deleteButton = document.getElementById("borrar");



  postButton.disabled =true;

  var postear = function (e){
    var codigoTecla = e.keyCode;
    if(codigoTecla!=32 && codigoTecla!=13 ){
      postButton.disabled = false;
    }
    else{
      postButton.disabled = true;
    }
  }

  estado.onkeypress = postear;
/* if (estado.onkeypress.length<1){
      postButton.disabled=true;
      estado.addEventListener("keypress", function(){
      postButton.disabled=false;
    });
  }*/


/*  status.addEventListener("keypress",function(){
  postButton.disabled=false;})*/
  var typeOfcomment = document.getElementsByTagName("option");

  window.addEventListener("load", function(){

  postButton.addEventListener("click", function(event){
    event.preventDefault();
    //  var status = document.getElementById('actualStatus');
    /*  printStatus.innerHTML+=status.value+"<br>";
      status.value="";*/
  function createPost(){
    var post = document.createElement("div");
    var texto= document.createElement("p");
    var buttonsContainer = document.createElement("div");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");

    texto.innerHTML=estado.value;
    post.appendChild(texto);
    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);
    divStatus.appendChild(post);
    divStatus.appendChild(buttonsContainer);
    deleteButton.Id="borrar";
    post.Id = "placeToPrint";
    deleteButton.innerHTML="Delete";
    editButton.innerHTML="Edit";

    function CreateObjeto (status){
        this.status = status;
    }

    var js = new CreateObjeto(estado.value);

         if (tipoFriend.selected){
            allFriends.push(estado.value);
            }
            else if (tipoPublic.selected){

            allPublic.push(estado.value)
         }


    estado.value="";

    postButton.disabled = true;

    var postear = function (e){
      var codigoTecla = e.keyCode;
      if(codigoTecla!=32 && codigoTecla!=13){
        postButton.disabled = false;
      }
      else{
        postButton.disabled = true;
      }
    }

    estado.onkeypress = postear;



  }
  createPost();



  });




})

  /* var deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function(event){
      event.preventDefault();
    function delete(){
      alert("seeeee")
    }
  })*/




//  status.value !=="" ? postButton.disabled=false :"";
 //status.value="";

//postButton.disabled=false &&  printStatus.innerHTML+=(status.value+"<br>")

/*}

function Status(){

  var allStatus += [status: status.value, privacy: document.getElementById('id')]
}*/
