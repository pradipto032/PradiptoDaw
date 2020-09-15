/*Check First Name Validation*/
function checkfname(){
	var field = document.getElementById("fname").value;
	var r = /^[A-Za-z]{2,}$/;
	if(r.test(field)){
		document.getElementById("message1").style.color = "#FFFFE0";
		document.getElementById("message1").innerHTML = "Valid";
	}
	else{
		document.getElementById("message1").style.color = "#FFFFE0";
		document.getElementById("message1").innerHTML = "Please Enter Your Name";
	}
}

/*Check Address validation */
function checkadd(){
	var a = document.getElementById("Subject").value;
	if(a == ""){
		document.getElementById("message4").style.color = "#000000";
		document.getElementById("message4").innerHTML = "Enter Address";
	}
	else{
		document.getElementById("message4").style.color = "#000000";
		document.getElementById("message4").innerHTML = "Valid";
	}
}


/*Check Mail Validation*/
function checkmail(){
	var m = document.getElementById("mail").value;
	var r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(r.test(m))
	{	document.getElementById("message5").style.color = "#FFFFE0";
		document.getElementById("message5").innerHTML = "Valid";
	}
	else{
		document.getElementById("message5").style.color = "#FFFFE0";
		document.getElementById("message5").innerHTML = "Please Enter Mail Correctly";
	}
}
