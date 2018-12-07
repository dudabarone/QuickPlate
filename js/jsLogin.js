function numero(){
	document.getElementById("login").style.display = "block";
	document.getElementById("cadastro1").style.display = "none";
	document.getElementById("conf").style.display = "none";
	document.getElementById("senha").style.display = "none";
	document.getElementById("sms").style.display = "none";
	
}

function cad(){	
	document.getElementById("login").style.display = "none";
	document.getElementById("cadastro1").style.display = "block";
	document.getElementById("senha").style.display = "none";
	document.getElementById("sms").style.display = "none";
	document.getElementById("conf").style.display = "none";
}

function conta(){	
	document.getElementById("login").style.display = "block";
	document.getElementById("cadastro1").style.display = "none";
	document.getElementById("senha").style.display = "none";
	document.getElementById("conf").style.display = "none";
}

function alterar(){
	document.getElementById("login").style.display = "none";
	document.getElementById("cadastro1").style.display = "none";
	document.getElementById("senha").style.display = "block";
	document.getElementById("conf").style.display = "none";
}

function confirmacao(){
	document.getElementById("login").style.display = "none";
	document.getElementById("cadastro1").style.display = "none";
	document.getElementById("senha").style.display = "none";
	document.getElementById("conf").style.display = "block";
}



function login(){

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
  
	  alert("Usuário ou senha incorretas!");
  
	  // ...
	});
  }
  
  function logout(){
	firebase.auth().signOut();
  }
  