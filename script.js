function encrypt() {

function uppercase(letter){
	return letter === letter.toUpperCase();
}
function lowercase(letter){
	return letter === letter.toLowerCase();
}

let ingreso = document.getElementById("text").value;

if (ingreso.length != 0) {
	let owo = ingreso; 
for (var index = 0; index <= owo.length; index++) {
	var letraActual = owo.charAt(index);
	if (lowercase(letraActual)) {
	console.log("text: " + letraActual);
	if ( index == (owo.length -1) ){ 
		
	let encrypted_text = owo
	.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");
	let change_one = document.querySelector(".hidden-one");
		change_one.setAttribute("style","display:none");
		let change_two = document.querySelector(".hidden-two");
		change_two.setAttribute("style", "display:none");
		let change_three = document.querySelector(".resultado");
		change_three.setAttribute("style", "display:flex");
		document.getElementById("resultado").value = encrypted_text;
		document.getElementById("text").value = "";
	}
	} else {
		alert("El texto tiene letras Mayúsculas, la letra no permitida es: " + letraActual);
		document.getElementById("text").value = "";
		break;
	}
	
}

}else {
	alert("Ingrese el mensaje");
}
}

/*
	let text = document.getElementById("text").value;
	let encrypted_text = text 
	.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");

	if(text.length != 0) {
		//document.getElementById("text").value = encrypted_text;	
		let change_one = document.querySelector(".hidden-one");
		change_one.setAttribute("style","display:none");
		let change_two = document.querySelector(".hidden-two");
		change_two.setAttribute("style", "display:none");
		let change_three = document.querySelector(".resultado");
		change_three.setAttribute("style", "display:flex");
		document.getElementById("resultado").value = encrypted_text;


	} else {
		alert("Debe Ingresar algún texto");
	}*/

function decrypt() {

	let text = document.getElementById("resultado").value;
	let decrypt_text = text
		.replace(/enter/gi, "e")
		.replace(/imes/gi, "i")
		.replace(/ai/gi, "a")
		.replace(/ober/gi, "o")
		.replace(/ufat/gi, "u");
	
	if (text.length != 0) {
		document.getElementById("resultado").value = decrypt_text;
		document.getElementById("text").value = "";

	} 	
	else {
		alert("Primero debes Encriptar");
	}
	
	
}

/*const button = document.querySelector("#button-three");

const input = document.querySelector(".resultado");

const input_2 = document.querySelector(".hidden-one");
const input_3 = document.querySelector(".hidden-two");
//const validacion = document.getElementById("#resultado").value;

 button.addEventListener("click", function(){
 	input_2.focus();
 	input_3.focus();
	
	document.execCommand("selectAll");
	document.execCommand("copy");
});
*/

function copy(){
	let input_aux = document.getElementById("resultado").value;
	const input = document.getElementById("resultado");
	let button = document.getElementById("message")

	if (input_aux.length != 0) {
		input.select();
	input.setSelectionRange(0, 99999);
	document.execCommand('copy');
	button.innerHTML="Copied";
	setTimeout(()=>button.innerHTML="",1000);

}else{
	alert("Aún no has encryptado");
}
}
/*----------*/

