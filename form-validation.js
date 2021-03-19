$().ready(function () {
  $(".signupForm").validate({
    rules: {
      firstName: {
        required: true, //You must enter a first name
        minlength: 2, //First name must be atleast 2 characters long
        maxlength: 20, //First name can only be 20 characters long
      },
      lastName: {
        required: true,
        minlength: 2,
        maxlength: 25,
      },
      age: {
        required: true,
        digits: true, //Age can only be digits
        range: [18, 110], //The age must be in the range between 18 and 110
      },
      email: {
        required: true,
        email: true, //The email must be a valid email
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 20,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password", //The confirmPassword must be equal to password
      },
      acceptTerms: "required",
      letterChoice: {
        required: "#yes:checked", //Required if the radio button "yes" is checked
        minlength: 2, //Atleast 2 of the choices must be checked
      },
    },
    messages: {
      firstName: {
        required: "Please enter your first name",
        minlength: "First name must be atleast 2 characters long",
        maxlength: "First name can only be 20 characters long",
      },
      lastName: {
        required: "Please enter your last name",
        minlength: "Last name must be atleast 2 characters long",
        maxlength: "Last name can only be 25 characters long",
      },
      age: {
        required: "Please enter your age",
        digits: "Age can only contain digits",
      },
      password: {
        required: "Please enter a password",
        minlength: "Password must be atleast 6 characters long",
        maxlength: "Password can only be 20 characters long",
      },
      confirmPassword: {
        required: "Please enter your password again",
        equalTo: "You must enter the same password as above",
      },
      acceptTerms: {
        required: "You must accept the terms",
      },
      letterChoice: {
        required: "Please choose options for the newsletter",
        minlength: "Please select atleast 2 choices",
      },
    },
  });

  //Called when the radio buttons "wantNewsletter" changes value.
  $("input[type=radio][name=wantNewsletter]").change(function () {
    if (this.value == "no") {
      $("#letterChoices").css("display", "none");
      //If the value is "no", then hide the fieldset "letterChoices"
    } else {
      $("#letterChoices").css("display", "block");
      //If the value is NOT "no", then show the fieldset "letterChoices"
    }
  });

  //When we press the submit button and the form is valid we send an alert.
  $("#signupSubmit").on("click", function () {
    if ($(".signupForm").valid()) {
      alert("Success");
    }
  });

  $(".contactForm").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 20,
      },
      lastName: {
        required: true,
        minlength: 2,
        maxlength: 25,
      },
      email: {
        required: "#wantAnswer:checked",
        email: true,
      },
      message: {
        required: true,
        minlength: 20,
        maxlength: 500,
      },
    },
    messages: {
      firstName: {
        required: "Please enter your first name",
        minlength: "First name must be atleast 2 characters long",
        maxlength: "First name can only be 20 characters long",
      },
      lastName: {
        required: "Please enter your last name",
        minlength: "Last name must be atleast 2 characters long",
        maxlength: "Last name can only be 20 characters long",
      },
      email: {
        required: "Please enter your email address so you can get an answer",
        email: "Please enter a valid email address",
      },
      message: {
        required: "Please enter your message",
        minlength: "Your answer has to be atleast 20 characters long",
        maxlength: "Your answer can be no longer than 500 characters long",
      },
    },
  });

  $("#wantAnswer").on("click", function () {
    if (this.checked) {
      $("#email").css("display", "inline-block");
    } else {
      $("#email").css("display", "none");
    }
  });

  $("#contactSubmit").on("click", function () {
    if ($(".contactForm").valid()) {
      alert("Success");
    }
  });
});
