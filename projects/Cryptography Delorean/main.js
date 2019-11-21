
var i;
var j;
var string = '';
var string_apos = '';

var string2 = '';
var string2_apos = '';

var array ;
var array3 = [""];



var array2 = string2.split(''); // ["o", "i"]	




function Criptografar(){

	array=[""];
	string_apos ="";
	string = document.getElementById("txt1").value;

	array = string.split(''); // ["o", "i"]	

	for(i =0 ; i<array.length ;i++){

		var time = new Date();

		array[i] = (time.getHours()+11)+""+(((time.getHours()+11) * (array[i].charCodeAt(0))) );
		string_apos = string_apos + array[i];
		string_apos = string_apos + " ";



	}

	  document.getElementById('txt2').value = string_apos;
}




function Descriptografar(){

 document.getElementById("txt1").value = "";
 array3= [""];
 var n = 0;
 var aux = 0;


 string2 = document.getElementById("txt2").value;
 array2 = string2.split('');
 

	for(n = 0 ; n<(array2.length-1);n++){
				
			if (array2[n] == " "){
				aux ++;
				array3[aux] ="";
			}else{
				array3[aux] = array3[aux] + array2[n];
				
			}
		
	}


	for(j =0 ; j<array2.length ;j++){
		array3[j] = String.fromCharCode( array3[j].substr(2)/ array3[j].substr(0, 2) ) ;
		document.getElementById('txt1').value = document.getElementById('txt1').value + array3[j];
	}


}

