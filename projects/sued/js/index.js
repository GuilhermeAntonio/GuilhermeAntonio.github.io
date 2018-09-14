var txtBox =  document.getElementById("message").innerHTML;
var pergunta = "";
var resposta = "";
var flagResp = false;
var elogio = new Array("S","u","e","d"," ","k","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u");
var contador = 0;

function elogiar(){
    pergunta += elogio[contador];
    contador = contador + 1;
}




function teste(msg){
  alert(resposta);
  resposta ="";
}

function getfocus() {
    document.getElementById("message").focus();
}


function verificaTecla(e, message)
{
  
  if (e.keyCode) // testa se é IE
    var tecla = e.keyCode; // variavel tecla é igualada ao valor da tecla pressionada no IE
  else if (e.which) // testa se é FF
    var tecla = e.which; // variavel tecla é igualada ao valor da tecla pressionada no FF

  if(flagResp){

   
     elogiar();
    resposta += String.fromCharCode(tecla);

    
    message.blur();
      document.getElementById("message").focus();
  }

  
  
  if(tecla == 59){
    flagResp = !flagResp;
    message.value = pergunta;
  }else if(!flagResp){
  
    //pergunta = message.value + String.fromCharCode(tecla);
  }

}



function solta(message){
     if(flagResp){
        
    message.value = pergunta;



  }


  function getfocus() {
    document.getElementById("message").focus();
}

}

//document.getElementById('message').value = message + "SAD"




