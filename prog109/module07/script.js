 var frmvalidator = new Validator("myform");
 var  validFirstname = false;
 var firstname = document.getElementById("firstname").value;
 if (firstname==="null" || firstname==="" || firstname.length > 20) {
   errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
 } else {
   validFirstname = true;
 }
 document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname);

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
