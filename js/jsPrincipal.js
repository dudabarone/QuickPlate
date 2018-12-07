function numero(){
	document.getElementById("home").style.display = "block";
	document.getElementById("quem").style.display = "none";
	document.getElementById("condicao").style.display = "none";

}
function home(){
    document.getElementById("home").style.display = "block";
	document.getElementById("quem").style.display = "none";
	document.getElementById("condicao").style.display = "none";
}
function nos(){
    document.getElementById("home").style.display = "none";
	document.getElementById("quem").style.display = "block";
	document.getElementById("condicao").style.display = "none";
}
function condicao(){
    document.getElementById("home").style.display = "none";
	document.getElementById("quem").style.display = "none";
	document.getElementById("condicao").style.display = "block";
}
function cadastro(){
	window.location='Login.html';
}