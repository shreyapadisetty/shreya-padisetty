 var frmvalidator = new Validator("myform");
 var validFirstname = false;
 var firstname = document.getElementById("firstname").value;
 if (firstname==="null" || firstname==="" || firstname.length > 20) {
   errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
 } else {
   validFirstname = true;
 }
 document.getElementById("errorMessages").innerHTML = errorMessages;

 var validLastname=false;
 var validLastname = document.getElementById("lastname").value;
 if (lastname==="null" || lastname==="" || lastname.length > 50) {
   errorMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
 } else {
   validLastname = true;
 }
 document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname && validLastname);

var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
} else {
    return true; 
}

var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
	errorMessages = "<p>Invalid phone number </p>";
else
  return true; 

function validateForm() {
	
}







 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=20");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");
