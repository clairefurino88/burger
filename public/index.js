$("#button").on("click", function() {

    // Form validation
    function validateForm() {
        var isValid = true;

        //select all elements with the class form-control checks if they are empty.  If emtpy sets inValid to false.
        $('.form-control').each(function() {

            if ($(this).val() === '') {
                isValid = false;
            }

        });


        return isValid;
    }




    if (validateForm() == true) {

        var currentURL = window.location.origin;

        $("#target").submit();



    } else {
        alert("Please enter a burger!")
    }

});$("#button").on("click", function() {

    // Form validation
    function validateForm() {
        var isValid = true;

        //select all elements with the class form-control checks if they are empty.  If emtpy sets inValid to false.
        $('.form-control').each(function() {

            if ($(this).val() === '') {
                isValid = false;
            }

        });


        return isValid;
    }




    if (validateForm() == true) {

        var currentURL = window.location.origin;

        $("#target").submit();



    } else {
        alert("Please enter a burger!")
    }

});