//jQuery Events
$(function() {
    $('form span').css('font-style','italic').css('color','silver');


	// the handler for the click event of a submit button
	$("#email_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email_1").val().trim();
			if (email == "") { 
				$("#email_1").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email_1").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email_1").next().text("");
			}
			$("#email_1").val(email);

			
			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if (firstName == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#first_name").next().text("");
			}
			$("#first_name").val(firstName);
			
						
			// validate the check boxes
			var checkedOptions = [];
			checkedOptions = $(":checkbox:checked");
			if (checkedOptions.length == 0) {
				$("#net").next().text("Select at least one.");
				isValid = false;
			} else {
				$("#net").next().text("");
			}
						
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault(); 			
			}
		}
	);
});