  var estado = document.getElementById("actualStatus");
  var postButton = document.getElementById("post");

  if (estado.value.length<1){
    postButton.disabled=true;
    estado.addEventListener("keypress", function(){
    postButton.disabled=false;;
    });
  }


  var typeOfcomment = document.getElementsByTagName("option");


/*  status.addEventListener("keypress",function(){
  postButton.disabled=false;})*/
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
    estado.value="";

    var expSpace = /\s/;

    if (estado.value.length<1 ){
      postButton.disabled=true;
    }
    

    post.appendChild(texto);
    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);
    divStatus.appendChild(post);
    divStatus.appendChild(buttonsContainer);
    deleteButton.Id="borrar"
    post.Id = "placeToPrint"
    deleteButton.innerHTML="Delete";
    editButton.innerHTML="Edit";




    function createObjeto (){
        this.status = estado.value;
        this.type   = typeOfcomment[0].value;
    }
        var allFriends = [];
        var allPublic  = [];
        if (document.getElementsByTagName("option")[0]){
        var comment = new createObjeto();
        allFriends.push(comment);
        }
    /*    else if (document.getElementsByTagName("option")[1]){
        var comment = new createObjeto(document.getElementById('actualStatus').value, document.getElementsByTagName("option")[1].value);
        allFriends.push(comment);

      }*/
  }
  createPost();

/*  var deleteButton = document.getElementById("borrar");
  deleteButton.addEventListener("click", function(event){
    event.preventDefault();
    function j (){
      var borrar = document.getElementById("placeToPrint").value;
      borrar="";
    }*/
  })





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
