//jQuery Events in form tags
$(function() {
    $('form span').css('font-style','italic').css('color','silver');

	// the handler for the click event of a submit button
	$("#email_form").submit(
		function(event) {
            var isValid = true;
            
            	// say 'field is required'-the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			
			// say 'field is required' - the email entry	
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			
		
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault(); 			
			}
		}
	);
});