//jQuery Events -step 25- in a form tag
$(function() {
    $('form span, input placeholder').css('font-style','italic').css('color','silver');
    //SET FOCUS TO FIRST text BOX
    $('#name').focus();

	// the handler for the click event of a submit button
	$("#email_form").submit(function(event) {
            var isValid = true;
            
            	// validate the name entry/'field is required'-
			var name = $("#name").val().trim();
			if (name == "") {
                $("#name").next().text("This field is required.");
                $("#name").css("border", "1px solid red");
                $("#name").focus();
				isValid = false;
			} else {
                $("#name").next().text("");
                $("#name").css("border", "1px solid green");
			}
			$("#name").val(name);
						
			
			// say 'field is required' - the email entry	
			var email = $("#email").val().trim();
			if (email == "") { 
                $("#email").next().text("This field is required.");
                $("#email").css("border", "1px solid red");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			
		
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault(); 			
            }
            

            // var name = document.getElementById("name").value;
            // if (name == "") {
            //     $("#txtName").css("border", "1px solid red");
            //     $("#txtName").focus();
            // }
	});
});